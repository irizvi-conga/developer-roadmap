# Image Generation Inference

Production image generation inference uses SGLang Diffusion, TensorRT, or hand-optimized PyTorch. The most important optimization target is the attention kernel, where FlashAttention 3 or 4 outperforms the default on Hopper and Blackwell respectively. GEMM kernels for linear layers can be quantized to FP8 safely. Torch compilation with manual kernel plugins caches the compiled engine to avoid multi-minute recompilation on every cold start.

Visit the following resources to learn more:

- [@opensource@Image Generation Inference Mechanics](https://github.com/comfyanonymous/ComfyUI)
- [@article@What Is Inference in Generative AI: How It Differs From Traditional Model Inference](https://www.gmicloud.ai/en/blog/what-is-inference-in-generative-ai)
- [@video@Diffusion Models for AI Image Generation](https://www.youtube.com/watch?v=x2GRE-RzmD8)
- [@video@Why Does Diffusion Work Better than Auto-Regression?](https://www.youtube.com/watch?v=zc5NTeJbk-k)