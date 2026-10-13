# Tensor Parallelism

Tensor Parallelism splits each layer's weight matrices across multiple GPUs and distributes the matmul computation. Each GPU handles a shard of each layer and the results are combined via an all-reduce operation before the next layer. It reduces per-user latency by sharing both VRAM and compute across GPUs, but requires fast NVLink interconnects and is not well-suited for multi-node deployments.

Visit the following resources to learn more:

- [@opensource@NVIDIA/Megatron-LM](https://github.com/NVIDIA/Megatron-LM)
- [@article@Tensor Parallelism](https://huggingface.co/docs/text-generation-inference/en/conceptual/tensor_parallelism)
- [@article@Demystifying Tensor Parallelism](https://robotchinwag.com/posts/demystifying-tensor-parallelism/)
- [@article@What Is Tensor Parallelism and How to Apply It](https://www.newline.co/@Dipen/what-is-tensor-parallelism-and-how-to-apply-it--b4633fa4)