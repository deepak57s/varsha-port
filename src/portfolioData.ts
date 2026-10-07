import { ExperienceItem, EducationItem, SkillCategory, ProjectItem, CertificateItem } from './types';

export const personalInfo = {
  name: 'Donkada Varsha',
  brand: 'Varsha',
  title: 'Data Analyst & AI-ML Enthusiast',
  tagline: 'Bridging Data Analytics, AI Engineering, and Intuitive UI/UX Design',
  location: 'Visakhapatnam, Andhra Pradesh',
  phone: '+91 7799681115',
  email: 'varsha.varsha1115@gmail.com',
  github: 'https://github.com/Varshadonkada',
  linkedin: 'https://www.linkedin.com/in/varshadonkada1115',
  year: '2026',
  objective:
    'Motivated and adaptable Computer Science graduate with strong technical foundations in data analytics, AI-ML algorithms, and human-centered digital interfaces. Eager to create measurable impact in data-driven engineering and software innovation.',
  stats: [
    { label: 'Degree Track', value: 'B.Tech AI-ML', sub: 'Raghu Inst. of Tech' },
    { label: 'Core CGPA', value: '7.45', sub: 'Undergraduate' },
    { label: 'Secondary CGPA', value: '9.8', sub: 'Sri Chaitanya' },
    { label: 'Production Projects', value: '3+', sub: 'AI, Web & 5G' },
  ],
  footerLeft: [
    'Data Analyst & AI-ML',
    'Tao Digital Solutions',
    'Visakhapatnam, AP',
  ],
  footerRight: [
    'Portfolio of',
    'Donkada Varsha',
  ],
  bgImage:
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85',
  portraitImage: '/varsha.png',
};

export const experiences: ExperienceItem[] = [
  {
    id: 'tao-digital',
    role: 'Data Analyst',
    company: 'Tao Digital Solutions',
    location: 'Visakhapatnam',
    period: '05/2026 – Present',
    type: 'Full-time / Professional Experience',
    summary:
      'Driving data-informed decision architectures through automated data pipelines, custom statistical modeling, and executive KPI dashboards.',
    highlights: [
      'Collect, clean, preprocess, and model complex multi-source datasets using Python (Pandas, NumPy) and optimized SQL queries to support strategic business decisions.',
      'Build dynamic, interactive business intelligence dashboards and executive reports in Power BI and Microsoft Excel to monitor core operating metrics and surface critical trend shifts.',
      'Partner collaboratively with cross-functional product and engineering teams to translate analytical findings into clear, quantifiable business recommendations.',
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Excel', 'Data Modeling', 'Business Intelligence'],
  },
];

export const educations: EducationItem[] = [
  {
    id: 'rit-btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering (AI-ML)',
    institution: 'Raghu Institute of Technology',
    location: 'Visakhapatnam',
    period: '11/2022 – 04/2026',
    score: '7.45',
    scoreType: 'CGPA',
    highlights: [
      'Specialized coursework in Artificial Intelligence, Machine Learning, Data Analytics, Database Management Systems, and Cloud Architectures.',
      'Hands-on research and prototyping in Retrieval-Augmented Generation (RAG) and Next-generation 5G wireless networks.',
    ],
  },
  {
    id: 'sri-chaitanya',
    degree: 'Board of Secondary Education',
    field: 'Secondary School Certificate (SSC)',
    institution: 'Sri Chaitanya Techno School',
    location: 'Visakhapatnam',
    period: '06/2019 – 03/2020',
    score: '9.8',
    scoreType: 'CGPA',
    highlights: [
      'Graduated with distinction (9.8/10.0 CGPA), demonstrating consistent academic excellence and strong analytical foundation.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'UI/UX & Product Design',
    iconName: 'palette',
    description: 'Human-centered interfaces, user journey mapping, and tactile visual systems.',
    skills: [
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Information Architecture',
      'Responsive Design',
      'Visual Design',
      'Usability Testing',
      'Canva',
    ],
  },
  {
    title: 'Data Analytics & Intelligence',
    iconName: 'database',
    description: 'Transforming raw unstructured data into actionable strategic insights.',
    skills: [
      'Python (Pandas, NumPy)',
      'SQL Queries & Joins',
      'Power BI Dashboards',
      'Microsoft Excel Advanced',
      'Data Cleaning & Preprocessing',
      'Statistical Analysis',
      'KPI Metrics Tracking',
    ],
  },
  {
    title: 'Web & Frontend Development',
    iconName: 'code',
    description: 'Modern, high-performance web applications built with current web standards.',
    skills: [
      'HTML5 & Modern CSS3',
      'JavaScript & TypeScript',
      'React & Next.js',
      'Tailwind CSS',
      'Responsive Layouts',
      'REST APIs & Component Architecture',
    ],
  },
  {
    title: 'AI, Systems & Infrastructure',
    iconName: 'cpu',
    description: 'Applied intelligent models and cutting-edge telecom network slicing.',
    skills: [
      'Google Gemini API',
      'RAG (Retrieval-Augmented Gen)',
      'Supabase (Auth, DB, Storage)',
      'OpenAirInterface (OAI 5G)',
      '5G RAN & Network Slicing',
      'Netlify Cloud Hosting',
    ],
  },
  {
    title: 'Programming & Foundations',
    iconName: 'terminal',
    description: 'Algorithmic problem-solving and software productivity tooling.',
    skills: [
      'Python',
      'C Programming',
      'SQL',
      'Microsoft Word & PowerPoint',
      'Git Version Control',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'ai-lms',
    title: 'AI Driven Learning Management System',
    category: 'ai-fullstack',
    categoryLabel: 'Full-Stack & Generative AI',
    period: '11/2025 – 04/2026',
    location: 'Visakhapatnam',
    subtitle: 'Full-stack course management platform with an integrated Google Gemini RAG assistant.',
    description:
      'Engineered a modern, responsive LMS equipped with an intelligent study companion. Leveraged Supabase for secure authentication, relational schema management, role-based access control, and course document hosting. Connected Google Gemini through a Retrieval-Augmented Generation (RAG) pipeline to provide context-aware, instantaneous explanations directly from uploaded curriculum files.',
    features: [
      'End-to-end full-stack architecture built on Next.js with server and client components.',
      'Supabase integration managing user authentication, row-level security, and relational course database.',
      'Google Gemini RAG chatbot indexing course materials for factual, student-focused query answering.',
      'Role-based permissions separating instructor curriculum uploads and student learning spaces.',
    ],
    tags: ['Next.js', 'Supabase', 'Google Gemini', 'RAG Pipeline', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Varshadonkada',
    featured: true,
  },
  {
    id: 'kaloreez',
    title: 'Kaloreez – Eatery Web Application',
    category: 'web-app',
    categoryLabel: 'Modern Web Application',
    period: '05/2026 – 06/2026',
    location: 'Visakhapatnam',
    subtitle: 'High-performance interactive web application with transparent nutritional gastronomy design.',
    description:
      'Designed, developed, and deployed Kaloreez, a tailored web application for a health-focused eatery. Features interactive digital menus, transparent nutritional metric displays, signature kitchen dishes, and ambient location insights. Hosted and optimized on Netlify with swift asset delivery and seamless mobile responsiveness.',
    features: [
      'Interactive digital culinary menu with dietary and nutritional breakdown filters.',
      'Editorial, typography-driven UI highlighting transparent kitchen standards and location details.',
      'Strict asset optimization and modern CSS architecture achieving top Core Web Vitals scores.',
      'Continuous deployment via Netlify for fast global edge CDN distribution.',
    ],
    tags: ['React', 'JavaScript', 'HTML5', 'Modern CSS', 'Netlify', 'UI/UX Design'],
    demoUrl: 'https://kaloreez1.netlify.app/#',
    githubUrl: 'https://github.com/Varshadonkada',
    featured: true,
  },
  {
    id: 'network-slicing-5g',
    title: 'Network Slicing in 5G (Research Internship)',
    category: 'research',
    categoryLabel: 'Telecommunications & Systems Research',
    period: '06/2025 – 07/2025',
    location: 'IIT Jodhpur (IOS MCN Lab), Jodhpur',
    subtitle: 'Hands-on 5G Radio Access Network (RAN) deployment and slice isolation testing.',
    description:
      'Conducted specialized telecom research at the prestigious IIT Jodhpur IOS MCN Lab. Deployed 5G RAN and implemented network slicing using OpenAirInterface (OAI). Configured end-to-end slice profiles to validate independent throughput, latency guarantees, and resource isolation across divergent cellular traffic requirements including eMBB, URLLC, and mMTC.',
    features: [
      'Deployed open-source 5G Radio Access Network (RAN) components utilizing OpenAirInterface (OAI).',
      'Configured network slice instances to test quality-of-service (QoS) differentiation.',
      'Evaluated resource isolation and latency dynamics across simulated eMBB and URLLC service flows.',
      'Collaborated within an advanced wireless research lab alongside PhD scholars and research mentors.',
    ],
    tags: ['5G RAN', 'OpenAirInterface', 'Network Slicing', 'eMBB / URLLC', 'Telecom Systems', 'Linux'],
    githubUrl: 'https://github.com/Varshadonkada',
    featured: true,
  },
];

export const certifications: CertificateItem[] = [
  {
    id: 'nptel-c',
    title: 'NPTEL in Problem Solving through C',
    issuer: 'NPTEL / IIT Ministry of Education',
    description:
      'Demonstrated rigorous computational thinking, memory allocation mastery, pointer manipulation, and algorithmic efficiency in C.',
  },
  {
    id: 'ai-and-beyond',
    title: 'AI and Beyond',
    issuer: 'Industry Recognized AI Certification',
    description:
      'Comprehensive study covering fundamentals of artificial neural architectures, machine learning heuristics, and emerging AI paradigms.',
  },
  {
    id: 'face-emotion-jntu',
    title: 'Face Emotion Recognition Workshop',
    issuer: 'JNTU College of Engineering',
    description:
      'Hands-on computer vision workshop covering facial landmark detection, feature vector extraction, and emotion classification models.',
  },
];
