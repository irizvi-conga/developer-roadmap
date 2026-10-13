# Cold Starts

A cold start is the time from zero replicas to serving the first request, including GPU provisioning, container image loading, model weight loading, and inference engine startup or compilation. Reducing cold start time is essential for autoscaling systems to scale down confidently and scale up responsively. Key techniques include quantized weights, local weight caching near the GPU instances, and caching compiled inference engines to disk.

Visit the following resources to learn more:

- [@article@Autoscaling endpoints for LLM inference](https://www.together.ai/blog/autoscaling-endpoints-for-llm-inference)
- [@article@Autoscaling for LLM Inference Serving and Cold Starts](https://www.onesourcecloud.net/cms/autoscaling-llm-inference-serving-cold-starts.html)
- [@article@GPU Cold Start on Serverless LLM Inference: 4 Fixes That Actually Work (2026)](https://www.spheron.network/blog/gpu-cold-start-llm-inference-2026/)