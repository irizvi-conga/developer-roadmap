# ModelOpt

ModelOpt is NVIDIA's toolkit for post-training quantization, supporting FP8, INT8, FP4, MXFP8, MXFP4, and NVFP4 output formats. It integrates with PyTorch and exports quantized models directly to TensorRT-LLM, vLLM, and SGLang. Calibration runs a small set of representative inputs through the model to compute per-layer scale factors that minimize the gap between quantized and original outputs.

Visit the following resources to learn more:

- [@official@Optimize Models with NVIDIA Model Optimizer](https://www.jetson-ai-lab.com/tutorials/modelopt-on-jetson/)
- [@official@Model Quantization: Post-Training Quantization Using NVIDIA Model Optimizer](https://developer.nvidia.com/blog/model-quantization-post-training-quantization-using-nvidia-model-optimizer/)
- [@opensource@Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)
- [@article@NVIDIA ModelOpt](https://huggingface.co/docs/diffusers/en/quantization/modelopt)