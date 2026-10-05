# Kernel Selection and Fusion

A CUDA kernel is a function that runs in parallel across thousands of GPU threads simultaneously. Kernel selection is choosing the best existing kernel for a specific operation; kernel fusion combines sequential kernels into one to eliminate unnecessary reads and writes to VRAM between operations. Libraries like cuBLAS, CUTLASS, CuTe, and FlashInfer provide pre-built kernels for common inference operations, and most inference engines perform kernel selection automatically.

Visit the following resources to learn more:

- [@article@What Is a CUDA Kernel? A Visual Explainer](https://llm-stats.com/blog/research/what-is-a-cuda-kernel)
- [@article@From Zero to GPU: A Guide to Building and Scaling Production-Ready CUDA Kernels](https://huggingface.co/blog/kernel-builder)
- [@video@How to profile CUDA kernels in PyTorch](https://www.youtube.com/watch?v=LuhJEEJQgUM)
- [@video@Master Cuda Programming: Zero to Hero](https://www.youtube.com/playlist?list=PLVVBQldz3m5v1VDhlCyB1DhPfjREsJWmf)