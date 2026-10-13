# Speculative Decoding

Speculative decoding takes advantage of spare compute during memory-bound decode by generating multiple draft tokens and validating them in a single forward pass. If the target model accepts N draft tokens, the forward pass produces N+1 tokens instead of one. The performance gain depends on draft token cost, draft sequence length, and acceptance rate, which decreases at higher temperatures and larger batch sizes.

Visit the following resources to learn more:

- [@article@An Introduction to Speculative Decoding for Reducing Latency in AI Inference](https://developer.nvidia.com/blog/an-introduction-to-speculative-decoding-for-reducing-latency-in-ai-inference/)
- [@article@Speculative Decoding - vLLM](https://docs.vllm.ai/en/latest/features/speculative_decoding/)
- [@article@Fast Inference from Transformers via Speculative Decoding](https://arxiv.org/abs/2211.17192)
- [@video@Faster LLMs: Accelerate Inference with Speculative Decoding](https://www.youtube.com/watch?v=VkWlLSTdHs8)
- [@video@Speculative Decoding: When Two LLMs are Faster than One](https://www.youtube.com/watch?v=S-8yr_RibJ4)