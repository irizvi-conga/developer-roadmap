# Quantization-Aware Training

Quantization-aware training computes scale factors and optimizes model weights jointly during training so the final model is already calibrated for the target low-precision format. This produces better quality at low precision than post-training quantization but requires retraining the model from scratch or from a checkpoint. Some labs release models trained this way, such as GPT-OSS in MXFP4.

Visit the following resources to learn more:

- [@article@What is quantization aware training?](https://www.ibm.com/think/topics/quantization-aware-training)
- [@article@How Quantization Aware Training Enables Low-Precision Accuracy Recovery](https://developer.nvidia.com/blog/how-quantization-aware-training-enables-low-precision-accuracy-recovery/)
- [@video@Quantization Aware Training (QAT) With a Custom DataLoader](https://www.youtube.com/watch?v=s3tqqBaRuHE)