# KV Cache Storage

KV caches can be stored in GPU VRAM (fastest, tens to hundreds of gigabytes), CPU RAM (slower, hundreds of gigabytes to terabytes), local SSD, or networked SSD. Moving less frequently accessed KV blocks to slower storage frees VRAM for active requests. NVIDIA Dynamo's KV Block Manager provides APIs for managing KV blocks across these storage tiers transparently.

Visit the following resources to learn more:

- [@opensource@LMCache](https://github.com/LMCache/LMCache)
- [@article@KV Cache Storage Is the New AI Inference Bottleneck](https://xinnor.io/blog/kv-cache-storage-is-the-new-ai-inference-bottleneck-how-lustre-ro-pcc-and-xiraid-make-shared-storage-competitive-with-local-nvme-for-long-context-llm-serving/)
- [@article@Stop Calling It KV Cache: It’s Something Much Bigger](https://blog.lmcache.ai/en/2026/04/28/stop-calling-it-kv-cache-its-something-much-bigger/)
- [@article@CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion](https://arxiv.org/abs/2405.16444)