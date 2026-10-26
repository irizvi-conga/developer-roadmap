# Dynamic Workflows

A dynamic workflow is a JavaScript script that orchestrates many subagents at once. Claude writes the script for the task you describe, and a runtime executes it in the background while your session stays responsive. The script holds the loops, branching and intermediate results, so Claude's context only receives the final answer. This suits codebase-wide audits, large migrations and cross-checked research, with up to 16 concurrent agents by default. You ask for one in your prompt or with the `ultracode` keyword, watch it with `/workflows`, and can save a good run as a reusable command.

Visit the following resources to learn more:

- [@official@Orchestrate subagents at scale with dynamic workflows](https://code.claude.com/docs/en/workflows)
- [@official@Run agents in parallel](https://code.claude.com/docs/en/agents)