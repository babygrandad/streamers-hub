# GitHub (/docs/compute/github)

> For the complete Prisma documentation index, see [llms.txt](https://www.prisma.io/docs/llms.txt). A markdown version of any docs page is available by appending `.md` to its URL.

Connect a GitHub repository to a project to authenticate your Actions deploys and keep platform branches in sync with your Git branches.

Location: Compute > GitHub

Connecting a GitHub repository wires a project to your repo. Deploys run in your own GitHub Actions, through [prisma/cloud-deploy-action](https://github.com/prisma/cloud-deploy-action); the connection provides two things around them:

* **Credentials.** Workflow runs in the connected repository exchange their GitHub OIDC token for a short-lived Prisma workspace token, so the deploy workflow needs no secrets.
* **Branch lifecycle.** Branch events keep the matching platform branches in sync, including tearing a preview down when its Git branch is deleted.

For the full setup, from connection to a live preview per branch, follow [Deploy on push](https://www.prisma.io/docs/compute/deploy-on-push).

## How it works [#how-it-works]

The connection has two levels:

<ConceptAnimation name="github-connection" />

The workspace owns the GitHub App installation; each project points at a single repository. Once connected, Prisma verifies the repository identity behind each credential exchange and listens for the repo's branch events.

## Connect a repo [#connect-a-repo]

You can connect through the [Console](https://pris.ly/pdp) or from the CLI. The Console also opens a pull request that adds the deploy workflow to the repository. The CLI sets up the connection only, and you [add the workflow yourself](https://www.prisma.io/docs/compute/deploy-on-push#4-add-the-deploy-workflow).

From a linked project directory, connect your Git origin:

  

#### bun

```bash
bunx prisma@latest git connect
```

#### pnpm

```bash
pnpm dlx prisma@latest git connect
```

#### yarn

```bash
yarn dlx prisma@latest git connect
```

#### npm

```bash
npx prisma@latest git connect
```

To name the repository explicitly:

  

#### bun

```bash
bunx prisma@latest git connect https://github.com/acme/shop
```

#### pnpm

```bash
pnpm dlx prisma@latest git connect https://github.com/acme/shop
```

#### yarn

```bash
yarn dlx prisma@latest git connect https://github.com/acme/shop
```

#### npm

```bash
npx prisma@latest git connect https://github.com/acme/shop
```

If the GitHub App isn't installed yet, the CLI opens the browser to finish the install. The command needs an interactive terminal: it waits for the install to complete, and `--no-interactive` fails with `CLI.INTERACTION_REQUIRED`. For headless setups, connect through the Console instead.

Disconnect when you're done:

  

#### bun

```bash
bunx prisma@latest git disconnect
```

#### pnpm

```bash
pnpm dlx prisma@latest git disconnect
```

#### yarn

```bash
yarn dlx prisma@latest git disconnect
```

#### npm

```bash
npx prisma@latest git disconnect
```

Disconnecting stops the credential exchange and the branch automation. It doesn't delete the project or tear down existing branches.

## What the connection does [#what-the-connection-does]

Once a project is connected:

* **Actions runs can authenticate.** A workflow job with `id-token: write` gets a workspace token through the OIDC exchange. The token is valid for 30 minutes and is only issued for the connected repository; unconnected repositories and forks are refused, and the deploy action then skips with a green run.
* **Branch created** → creates the matching platform branch.
* **Branch deleted** → tears down the matching platform branch and its resources. Your production and default branches are exempt from this cleanup.

Pushes are not handled by the platform. Your repository's own workflow deploys them, so a connected repo without a deploy workflow deploys nothing. Connecting also doesn't create branches retroactively: it aligns your default branch with the repo's default branch and wires up automation for future events.

## What's not supported [#whats-not-supported]

GitHub is the only supported provider; others return `REPO_PROVIDER_UNSUPPORTED`. Pull-request comments and preview comments aren't currently supported.

## Next steps [#next-steps]

* [Deploy on push](https://www.prisma.io/docs/compute/deploy-on-push): the full walkthrough, from connection to per-branch previews.
* [Branching](https://www.prisma.io/docs/compute/branching): how platform branches map to Git.
* [Environment variables](https://www.prisma.io/docs/compute/environment-variables): per-branch config for previews.

## Related pages

- [`Alchemy`](https://www.prisma.io/docs/compute/alchemy): Provision Prisma Postgres and deploy applications to Prisma Compute in one TypeScript stack.
- [`Branching`](https://www.prisma.io/docs/compute/branching): Branches are isolated environments that map to your Git branches, so preview work never touches production.
- [`Deploy Button`](https://www.prisma.io/docs/compute/deploy-button): Add a Deploy with Prisma button that copies a public Composer repository and starts a Composer-managed deployment.
- [`Deploy on push`](https://www.prisma.io/docs/compute/deploy-on-push): Graduate a Composer app from manual deploys to a Git workflow, with production deploys on push and an isolated preview environment per branch.
- [`Deployments`](https://www.prisma.io/docs/compute/deployments): How deploys create service versions on Prisma Compute, and how to inspect, promote, roll back, start, and stop them.