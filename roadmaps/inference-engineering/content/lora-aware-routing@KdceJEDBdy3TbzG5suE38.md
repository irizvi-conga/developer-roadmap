# LoRA-Aware Routing

LoRA fine-tune weights are small adapter layers loaded on top of a base model to specialize its behavior for a specific task or customer. A deployment serving many LoRA variants for the same base model must route each request to a replica that already has the required LoRA loaded in GPU memory. Routing without this awareness forces constant LoRA swapping, adding latency and reducing throughput on each affected replica.

Visit the following resources to learn more:

- [@article@Unsupervised LoRA Routing](https://www.emergentmind.com/topics/unsupervised-lora-routing)
- [@article@Intelligent LoRA Routing](https://vllm-sr.ai/docs/v0.1/tutorials/intelligent-route/lora-routing/)
- [@video@What is Low-Rank Adaptation (LoRA)](https://www.youtube.com/watch?v=DhRoTONcyZE)