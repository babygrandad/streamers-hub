./Guides/@AGENTS.md

# Prisma Info
./Guides/@Prisma-Guide.md
Check if the prisma skill is installed for Claude Code (`.claude/skills/`). If not, install it scoped to this agent only:

```
npx skills add prisma/skills --agent claude-code -y
```

Do not install for other agents (Cursor, Devin, etc.) unless the developer actually uses them.

## AI agent skills are local-machine only, not tracked in git

Skill files (`.claude/skills/`, `.cursor/skills/`, etc.) and `skills-lock.json` are downloaded/synced by tool CLIs (`npx skills add`, `prisma skills sync`) on each fresh install — they are gitignored and must not be committed. This applies to Prisma's skills and to any other tool with the same kind of agent-skill mechanism: install scoped to the agent(s) actually in use, and let `.gitignore` keep them out of version control.

# Project Instructions

## Commit ownership (hard rule)

The developer must perform `git commit` themselves. AI assistants (including Claude) may stage changes (`git add`), write commit messages for the developer to use, and perform any other git operations — but must not run `git commit` on the developer's behalf.

**Exception:** AI assistants may commit directly when actively assisting with:
- Resolving merge conflicts
- Cherry-picks
- Untangling a commit mess or other git history issue

Outside of that exception, always stop after staging and hand the commit back to the developer.

## Before pushing (checklist)

Before any `git push`, confirm:

- [ ] `package.json` `version` has been bumped to reflect the change(s) being pushed
- [ ] `CHANGELOG.md` has a matching entry: `## [<version>] - <date> - SH-xx`, using the branch's ticket number
- [ ] The version number in `package.json` and the version heading in `CHANGELOG.md` match exactly

If any of these are missing, stop and address them (per the commit ownership rule above — stage the fix, hand the commit back to the developer) before pushing.
