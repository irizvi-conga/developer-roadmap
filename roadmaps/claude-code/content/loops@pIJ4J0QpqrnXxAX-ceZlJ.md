# Loops

`/loop` reruns a prompt on a repeating interval inside an open session, which is useful for polling a deployment or watching a pull request. With an interval and a prompt it runs on a fixed schedule, with only a prompt Claude chooses the interval each time, and with neither it runs a built-in maintenance prompt or your own `loop.md` file. Loops are session-scoped, stop when the session closes, and recurring ones expire after seven days. To keep Claude working until a condition is met instead of on a timer, use `/goal`.

Visit the following resources to learn more:

- [@official@Run a prompt repeatedly with /loop](https://code.claude.com/docs/en/scheduled-tasks#run-a-prompt-repeatedly-with-/loop)
- [@official@Keep Claude working toward a goal](https://code.claude.com/docs/en/goal)
- [@article@What Is the Claude Code /loop Command?](https://www.mindstudio.ai/blog/what-is-claude-code-loop-command-recurring-tasks)
- [@video@Stop Prompting Claude. Start Loop Engineering.](https://www.youtube.com/watch?v=YAS4ojuhbW4)
- [@video@Claude Code Loops in 7 Minutes](https://www.youtube.com/watch?v=pWZh37iRnDA)