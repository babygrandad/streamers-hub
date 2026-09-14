# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2026-09-14 - SH-04

### Added
- `GET /api/streams` health-check endpoint — returns `{ status, service, timestamp }`
- `src/interface/` directory, following the same per-domain-subfolder convention as `views/`, `logic/`, `models/`, `components/`. Holds service contracts (e.g. `interface/streams/StreamService.ts`) that `logic/` implements
- `logic/streams/streamService.ts` implementing `StreamService`, replacing the earlier standalone `health.ts`

## [0.4.0] - 2026-09-14 - SH-03

### Added
- Prisma Platform project `streamers-hub` created and linked to this directory
- GitHub repo connected to the Prisma project for branch/deploy automation
- Hosted Prisma Postgres database (`streamers-hub-dev`) provisioned on the `development` branch; `main`/production database deferred to a later ticket
- Prisma 8 data contract (`src/prisma/contract.prisma`) with placeholder `User`/`Post` models, applied to the live database and verified end-to-end (create + read round trip)
- Prisma agent skills scoped to Claude Code only (`--agent claude-code`), gitignored as local-machine artifacts rather than tracked in git
- `CLAUDE.md`: Prisma skill install instructions, local-only skills policy (generalized to any tool with a similar mechanism), and a "before pushing" checklist (version bump + matching CHANGELOG entry)

### Fixed
- `.env.example` was unintentionally excluded by the `.env*` gitignore pattern; added `!.env.example` exception so it's tracked

## [0.3.0] - 2026-09-14 - SH-01

### Changed
- Re-upgraded `prisma` from `7.10.0` back to `8.0.0-rc.15`. The hosted Prisma Postgres instance requires the 8.x platform CLI, so this reverts the prior downgrade. Reintroduces the 9 vulnerabilities previously cleared (`hono`, `lodash`, `valibot`, `@hono/node-server` advisories in the RC's platform tooling) — accepted as a tradeoff to use hosted Prisma Postgres. `@prisma/client` stays on `^7.10.0` (it has no published 8.0.0 release; the platform CLI is designed to pair with the 7.x ORM client).

## [0.2.0] - 2026-09-14 - SH-01

### Changed
- Downgraded `prisma` from `8.0.0-rc.15` to `7.10.0` to resolve security vulnerabilities. The 8.0 RC pulled in a "Developer Platform" tooling tree (`@prisma/dev`, `@prisma/composer-cli`, etc.) with 13 npm audit findings (8 high, 5 moderate); downgrading clears 9 of them. 4 high-severity issues remain in devDependencies (`mysql2`, `deepmerge-ts` via `@prisma/config`) — not exercised since we're targeting SQLite; resolving them would require a further downgrade to `prisma@6.19.3`.

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
