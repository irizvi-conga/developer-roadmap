# Multi-Node Inference

Multi-node inference spreads a model across more than eight GPUs using InfiniBand for inter-node communication. It is necessary for the largest models where a single node lacks sufficient VRAM for weights and KV cache. InfiniBand bandwidth is an order of magnitude lower than NVLink, so parallelism strategies must minimize cross-node communication. For MoE models, Expert Parallelism is preferred over Tensor Parallelism between nodes.

Visit the following resources to learn more:

- [@article@How multi-node inference works for massive LLMs like DeepSeek-R1](https://www.baseten.co/blog/how-multi-node-inference-works-llms-deepseek-r1/#from-single-node-to-multi-node-infrastructure)
- [@video@AI Models Are Huge, but Your GPUs Aren’t: Mastering Multi-Node Distributed Inference](https://www.youtube.com/watch?v=MQR8jyTR5QE&xstg=CAMSEBUJ_b-oH-PhF0yjBgb_zzE%3D)