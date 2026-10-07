---
trigger: model_decision
description: Consult the Graphify knowledge graph before answering codebase architecture or dependency questions.
---

# Graphify Agent Rules

When answering questions about the architecture, module relationships, or dependencies in this codebase:

1. Use `graphify query "<question>"` to consult the deterministic AST knowledge graph before reading raw files or doing extensive multi-file greps.
2. For understanding call graphs and blast radiuses before modifying code, check with `graphify path` or `graphify explain`.
3. Keep diffs minimal and avoid adding redundant helpers if existing ones are documented in the graph.
