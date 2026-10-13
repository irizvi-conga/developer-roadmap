# Request Queueing

A request queue holds incoming traffic when all active replicas are at capacity while autoscaling brings new replicas online. A first-in, first-out queue is the standard implementation; priority queues can give paid users better position. Queues must be visible to newly started replicas so that requests are not held waiting for existing replicas when new capacity becomes available.

Visit the following resources to learn more:

- [@article@Efficient Request Queueing – Optimizing LLM Performance](https://huggingface.co/blog/tngtech/llm-performance-request-queueing)
- [@article@LLM Request Queuing](https://gigagpu.com/llm-request-queuing-concurrent-users/)
- [@video@Why Do AI Requests Queue? | Inside vLLM](https://www.youtube.com/watch?v=MmRalL3oHMM)