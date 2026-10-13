# Pipeline Parallelism

Pipeline Parallelism splits an LLM's layers into sequential stages and assigns each stage to a different GPU or node. Unlike Tensor Parallelism, each GPU holds complete layers rather than layer fragments. It introduces pipeline bubbles where GPUs wait for preceding stages, reducing efficiency. It is used for multi-node inference with dense models, typically combined with Tensor Parallelism within each node.

Visit the following resources to learn more:

- [@opensource@NVIDIA/Megatron-LM](https://github.com/NVIDIA/Megatron-LM)
- [@article@LLM Training — Fundamentals of Pipeline Parallelism](https://medium.com/byte-sized-ai/pipeline-parallelism-explained-in-2-mins-6bdf1ab29053)
- [@article@Pipeline Parallelism](https://docs.pytorch.org/docs/2.14/distributed.pipelining.html)
- [@article@What Is Pipeline Parallelism and How to Use It](https://www.newline.co/@Dipen/what-is-pipeline-parallelism-and-how-to-use-it--8db3dd11)