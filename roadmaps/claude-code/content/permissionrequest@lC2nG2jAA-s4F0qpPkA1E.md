# PermissionRequest

`PermissionRequest` is a hook event that fires when Claude Code is about to ask you for permission to use a tool. Unlike `PreToolUse`, which runs before every tool call, it only runs when a prompt would appear. A hook receives the tool name and input, and it can allow or deny the request by returning a decision. An allow can also change the tool input, but deny and ask rules still apply, so an allow never overrides a matching deny rule. The matcher is the tool name.

Visit the following resources to learn more:

- [@official@Hooks reference](https://code.claude.com/docs/en/hooks#permissionrequest)