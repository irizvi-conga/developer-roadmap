# Independent Component Scaling

Multi-model pipelines, like a voice agent that runs VAD, ASR, an LLM, and TTS in sequence, have components with different hardware requirements and traffic patterns. Each component should autoscale independently based on its own load. Running all components within the same Kubernetes cluster minimizes inter-component network latency, which can otherwise consume a significant fraction of a tight latency budget.

Visit the following resources to learn more:

- [@official@Autoscaling Workloads](https://kubernetes.io/docs/concepts/workloads/autoscaling/)
- [@article@Autoscaling endpoints for LLM inference](https://www.together.ai/blog/autoscaling-endpoints-for-llm-inference)
- [@article@Intro to Kubernetes Autoscaling and Best Practices for Implementations](https://www.cloudbolt.io/kubernetes-autoscaling/)