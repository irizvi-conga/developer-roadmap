# Auto Mode

Auto mode lets Claude Code run without per-action permission prompts by having a separate classifier model review each action before it runs. The classifier blocks actions that go beyond your request, target unrecognized infrastructure, or appear driven by hostile content Claude read, and explicit ask rules still force a prompt. It is the default starting mode in interactive sessions on recent versions, and `claude -p` uses it only with `--permission-mode auto`. It reduces prompts but does not guarantee safety.

Visit the following resources to learn more:

- [@official@Permission modes: auto mode](https://code.claude.com/docs/en/permission-modes#auto-mode)
- [@official@Configure auto mode](https://code.claude.com/docs/en/auto-mode-config)