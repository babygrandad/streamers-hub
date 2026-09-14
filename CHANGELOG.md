# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2026-09-14 - SH-01

### Removed
- Claude Code GitHub Action workflows (`claude.yml`, `claude-code-review.yml`) in favor of GitHub Copilot PR review

## [0.1.1] - 2026-09-14 - SH-01

### Added
- Bootstrap and `react-bootstrap` for UI components
- Prisma ORM dependency and initial configuration
- `CODEOWNERS` file designating `@babygrandad` as owner
- Branch protection rules on `main` and `development` (PR required for non-admins, force-push and branch deletion blocked)

## [0.1.0] - 2026-09-13

### Added
- Initial Next.js scaffold (App Router, TypeScript, ESLint, `src/` directory)
- Project instructions (`CLAUDE.md`, `AGENTS.md`)
- GitHub Actions workflows for Claude Code review
