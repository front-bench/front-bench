---
name: commit-message
description: 'Write git commit messages in English using Conventional Commits. Use when creating, suggesting, reviewing, rewriting, or translating commit messages, commit titles, or commit bodies for this repository.'
user-invocable: true
---

# Commit Message

Use this skill whenever the task involves creating, suggesting, reviewing, revising, or translating git commit messages.

## Requirements

- Always write commit messages in English.
- Use the Conventional Commits format when suggesting or writing commit titles.
- Do not use Chinese or mixed-language commit messages unless the user explicitly asks for that.

## Format

Use this structure for the commit title:

type(scope): short summary

Recommended common types:

- feat
- fix
- docs
- refactor
- test
- chore
- perf
- build
- ci

## Procedure

1. Identify the primary change and choose the most accurate Conventional Commits type.
2. Add a scope when it improves clarity.
3. Write a short English summary for the title.
4. If a commit body is needed, write the body in English as well.
5. If the user provides a non-English draft, translate it to English before suggesting the final message.

## Examples

- feat(match): add compact formatting for npm weekly downloads
- fix(router): handle missing group key in match page
- docs(readme): clarify benchmark data sources
- refactor(data): simplify candidate grouping logic
