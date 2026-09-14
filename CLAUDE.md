@AGENTS.md

# Project Instructions

## Commit ownership (hard rule)

The developer must perform `git commit` themselves. AI assistants (including Claude) may stage changes (`git add`), write commit messages for the developer to use, and perform any other git operations — but must not run `git commit` on the developer's behalf.

**Exception:** AI assistants may commit directly when actively assisting with:
- Resolving merge conflicts
- Cherry-picks
- Untangling a commit mess or other git history issue

Outside of that exception, always stop after staging and hand the commit back to the developer.
