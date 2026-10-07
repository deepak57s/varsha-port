import React, { useRef, useEffect, useState } from 'react';
import './GooeyNav.css';

export interface GooeyNavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  activeIndex?: number;
  onItemClick?: (index: number, item: GooeyNavItem) => void;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 12,
  particleDistances = [70, 10],
  particleR = 90,
  timeVariance = 250,
  colors = [1, 2, 3, 1, 2, 3],
  initialActiveIndex = 0,
  activeIndex: controlledActiveIndex,
  onItemClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(controlledActiveIndex ?? initialActiveIndex);

  // Sync with controlled index if provided
  useEffect(() => {
    if (controlledActiveIndex !== undefined && controlledActiveIndex !== activeIndex) {
      setActiveIndex(controlledActiveIndex);
      if (navRef.current) {
        const targetLi = navRef.current.querySelectorAll('li')[controlledActiveIndex];
        if (targetLi) {
          updatePillPosition(targetLi);
        }
      }
    }
  }, [controlledActiveIndex]);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (container: HTMLElement, originPos: { x: number; y: number; width: number; height: number }) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    container.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('gooey-particle');

        // Center the particle burst at the pill center
        const centerX = originPos.x + originPos.width / 2;
        const centerY = originPos.y + originPos.height / 2;

        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, #efeee9)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('gooey-point');
        particle.appendChild(point);
        container.appendChild(particle);

        setTimeout(() => {
          try {
            container.removeChild(particle);
          } catch {
            // safely ignored
          }
        }, t);
      }, 20);
    }
  };

  const updatePillPosition = (element: HTMLElement) => {
    if (!containerRef.current || !pillRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    pillRef.current.style.transform = `translate3d(${pos.x - containerRect.x}px, ${pos.y - containerRect.y}px, 0)`;
    pillRef.current.style.width = `${pos.width}px`;
    pillRef.current.style.height = `${pos.height}px`;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    if (onItemClick) {
      onItemClick(index, items[index]);
    }

    const liEl = e.currentTarget.parentElement;
    if (!liEl || activeIndex === index) return;

    setActiveIndex(index);
    updatePillPosition(liEl);

    if (particlesRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const pos = liEl.getBoundingClientRect();
      const origin = {
        x: pos.x - containerRect.x,
        y: pos.y - containerRect.y,
        width: pos.width,
        height: pos.height,
      };

      // Clear existing particles
      particlesRef.current.innerHTML = '';
      makeParticles(particlesRef.current, origin);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, index);
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updatePillPosition(activeLi);
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updatePillPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      {/* Sliding Active Pill */}
      <span className="gooey-pill" ref={pillRef} aria-hidden="true" />

      {/* Particle Canvas Layer */}
      <div className="gooey-particles-layer" ref={particlesRef} aria-hidden="true" />

      {/* Navigation List */}
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a
                href={item.href}
                onClick={e => handleClick(e, index)}
                onKeyDown={e => handleKeyDown(e, index)}
              >
                {item.icon && <span className="icon-wrapper">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;
