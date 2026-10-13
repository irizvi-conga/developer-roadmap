# Scale to Zero

Scale to zero allows the system to run zero replicas during periods of no traffic and spin up on demand. It requires fast cold starts and robust queuing to hold incoming requests while a replica starts. Scale to zero is well-suited for development environments and periodically accessed workloads, but not for latency-sensitive production applications with unpredictable light traffic.

Visit the following resources to learn more:

- [@article@Should LLM Serving Scale to Zero for Cost](https://www.onesourcecloud.net/cms/should-llm-serving-scale-to-zero-cost.html)
- [@article@Runpod Secrets: Scaling LLM Inference to Zero Cost During Downtime](https://www.runpod.io/articles/guides/runpod-secrets-scale-llm-inference-zero-cost)
- [@article@Zero Redundancy Optimizer (ZeRO): Scaling LLM Training Without Breaking the Bank](https://medium.com/@adilmaqsood501/zero-redundancy-optimizer-zero-scaling-llm-training-without-breaking-the-bank-ba045b6a805e)