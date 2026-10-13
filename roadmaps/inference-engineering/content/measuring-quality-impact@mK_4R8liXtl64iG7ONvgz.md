# Measuring Quality Impact

After quantizing a model, quality must be validated against the original. Three methods are used: perplexity scoring (lower is better, with minimal increase after quantization), standard intelligence benchmarks like MMLU or SWE-bench, and product-specific evals tailored to the actual use case. All three should show differences indistinguishable from noise before a quantized model is deployed.

Visit the following resources to learn more:

- [@article@Perplexity for LLM Evaluation](https://www.comet.com/site/blog/perplexity-for-llm-evaluation/)
- [@article@AI Benchmarks Explained: MMLU, ARC-AGI, and SWE-bench](https://lumichats.com/blog/ai-benchmarks-explained-mmlu-arc-agi-swe-bench-2026)
- [@video@What is perplexity?](https://www.youtube.com/watch?v=NURcDHhYe98&t=10s)
- [@video@What do AI Benchmarks Actually Mean?! A Fast Breakdown (MMLU, SWE-bench, & More Explained)](https://www.youtube.com/watch?v=fSWg4HAJjBo)