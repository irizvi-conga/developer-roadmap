# Caching

Caching reuses previously computed KV values to avoid redundant prefill computation across requests that share common context. It is one of the most impactful techniques for reducing TTFT in workloads with long system prompts or multi-turn conversations. This group covers the approaches, storage tiers, routing implications, and long-context strategies that make caching effective at scale.

Visit the following resources to learn more:

- [@article@KV Caching Explained: Optimizing Transformer Inference Efficiency](https://huggingface.co/blog/not-lain/kv-caching)
- [@article@KV Caching in LLMs: A Guide for Developers](https://machinelearningmastery.com/kv-caching-in-llms-a-guide-for-developers/)
- [@video@KV Cache: The Trick That Makes LLMs Faster](https://www.youtube.com/watch?v=gpp57x_z_Jg)
- [@video@The KV Cache: Memory Usage in Transformers](https://www.youtube.com/watch?v=80bIUggRJf4&t=247s)