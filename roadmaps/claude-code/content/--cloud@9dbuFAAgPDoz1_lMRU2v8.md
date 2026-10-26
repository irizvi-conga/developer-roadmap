# claude --cloud "task"

`claude --cloud "task"` starts a new cloud session for the repository in your current directory, and the task runs on Anthropic infrastructure while you keep working locally. The cloud VM clones your GitHub remote at your current branch, so push local commits first. Each command creates its own session, so you can start several tasks that run in parallel. Combined with `-p` and a session ID, the same flag queues a follow-up message into an existing cloud session and exits. The older `--remote` spelling still works as an alias.

Visit the following resources to learn more:

- [@official@Use Claude Code in the cloud](https://code.claude.com/docs/en/claude-code-on-the-web)
- [@official@CLI reference](https://code.claude.com/docs/en/cli-reference)