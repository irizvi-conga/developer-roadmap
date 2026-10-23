# Trade-offs of Serverless

Serverless reduces operational overhead but introduces its own constraints. Cold starts add latency on the first invocation after a period of inactivity, which matters for latency-sensitive applications. Execution time limits (15 minutes on Lambda) rule out long-running processes. Local testing and debugging are harder than with traditional servers. Deep integration with provider-specific event sources and APIs creates significant vendor lock-in. Serverless works best for event-driven, short-lived, and variable-traffic workloads.

Visit the following resources to learn more:

- [@article@Serverless doesn’t mean free: Tradeoffs every engineering team should know](https://proxify.io/articles/serverless-doesnt-mean-free-engineering-tradeoffs)
- [@article@Why serverless? Advantages and disadvantages of serverless computing explained](https://dev.to/florianlenz/why-serverless-advantages-and-disadvantages-of-serverless-computing-explained-2m1m)