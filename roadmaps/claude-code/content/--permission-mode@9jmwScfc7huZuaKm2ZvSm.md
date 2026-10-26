# claude --permission-mode

`--permission-mode` starts a session in a specific permission mode. It accepts `default` (also written `manual`), `acceptEdits`, `plan`, `auto`, `dontAsk` and `bypassPermissions`. The flag takes precedence over `permissions.defaultMode` in a settings file, which in turn takes precedence over the built-in default. It is most useful in scripted runs, for example `claude -p "..." --permission-mode auto` or `--permission-mode acceptEdits` for a lint-fix job.

Visit the following resources to learn more:

- [@official@Choose a permission mode](https://code.claude.com/docs/en/permission-modes)