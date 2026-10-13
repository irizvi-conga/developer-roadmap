# Post-Training Quantization

Post-training quantization converts finished model weights to lower precision after training is complete, using a small calibration dataset to compute per-layer scale factors that minimize the gap between quantized and original outputs. It is the standard approach for most deployments since it requires no retraining and can be applied to any existing model. The leading tool is NVIDIA ModelOpt, which exports quantized models in formats compatible with all major inference engines.

Visit the following resources to learn more:

- [@opensource@AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration](https://github.com/mit-han-lab/llm-awq)
- [@opensource@bitsandbytes](https://github.com/TimDettmers/bitsandbytes)
- [@opensource@SmoothQuant](https://github.com/mit-han-lab/smoothquant)
- [@article@Optimizing LLMs for Performance and Accuracy with Post-Training Quantization](https://developer.nvidia.com/blog/optimizing-llms-for-performance-and-accuracy-with-post-training-quantization/)
- [@article@Post-training quantization](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/post_training_quantization)
- [@article@Reverse-engineering GGUF | Post-Training Quantization](https://www.youtube.com/watch?v=vW30o4U9BFE)