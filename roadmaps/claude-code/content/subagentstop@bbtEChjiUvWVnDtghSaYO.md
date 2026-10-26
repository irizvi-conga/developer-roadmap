# SubagentStop

`SubagentStop` is a hook event that fires when a subagent finishes responding. The matcher filters by agent type, and a hook with no matcher runs for every subagent. The input includes the agent ID, the agent type, the path to the subagent's own transcript and its last message. A hook can return `decision: "block"` with a reason to keep the subagent running, and the reason becomes the subagent's next instruction.

Visit the following resources to learn more:

- [@official@Hook Reference](https://code.claude.com/docs/en/hooks#subagentstop)