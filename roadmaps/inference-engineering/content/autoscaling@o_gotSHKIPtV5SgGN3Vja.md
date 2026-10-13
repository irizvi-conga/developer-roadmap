# Autoscaling

Autoscaling dynamically adjusts the number of active model replicas to match incoming traffic, maintaining latency SLAs while minimizing idle GPU spend. Kubernetes is the standard orchestration layer, scaling replicas within a cluster based on traffic signals and utilization metrics. Key configuration parameters are min replicas, max replicas, the autoscaling window, the scale-down delay, and the concurrency target per replica.

Visit the following resources to learn more:

- [@article@Autoscaling endpoints for LLM inference](https://www.together.ai/blog/autoscaling-endpoints-for-llm-inference)
- [@article@Autoscaling Inference Endpoints](https://apxml.com/courses/mlops-for-large-models-llmops/chapter-4-llm-deployment-serving-optimization/autoscaling-inference-endpoints)
- [@article@Best practices for autoscaling large language model (LLM) inference workloads](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/machine-learning/inference/autoscaling)
- [@video@Autoscaling your AI agent under load](https://www.youtube.com/watch?v=ESIL0Rzl5VQ&t=91s)