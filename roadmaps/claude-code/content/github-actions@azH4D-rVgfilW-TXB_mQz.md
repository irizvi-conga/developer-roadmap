# GitHub Actions

Claude Code GitHub Actions runs Claude Code inside your repository's workflows through the `claude-code-action` action. Mention `@claude` in an issue or pull request comment and Claude analyzes code, implements changes and pushes commits. Giving the action a `prompt` input runs it automatically on any GitHub event, such as a schedule or a new pull request. The fastest setup is `/install-github-app`, which installs the GitHub App, stores your API key or OAuth token as a repository secret and opens a pull request with the workflow file.

Visit the following resources to learn more:

- [@official@Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions)
- [@official@Use GitHub Actions with cloud providers](https://code.claude.com/docs/en/github-actions-cloud-providers)
- [@opensource@claude-code-action](https://github.com/anthropics/claude-code-action)