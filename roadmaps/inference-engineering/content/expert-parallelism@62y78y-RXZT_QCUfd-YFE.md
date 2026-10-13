# Expert Parallelism

Expert Parallelism distributes MoE experts across GPUs so each GPU hosts multiple complete experts. Tokens are routed to the GPU holding their activated experts, and each expert runs independently within a single GPU without splitting across multiple. EP has lower inter-GPU communication overhead than Tensor Parallelism and scales well to multi-node deployments via InfiniBand.

Visit the following resources to learn more:

- [@article@Expert parallelism](https://huggingface.co/docs/transformers/en/expert_parallelism)
- [@article@Expert Parallelism: Scaling Mixture-of-Experts Models](https://www.digitalocean.com/community/tutorials/expert-parallelism-in-deep-learning)
- [@article@Expert Parallelism: Distributing Experts Across Devices](https://apxml.com/courses/mixture-of-experts/chapter-4-scaling-moe-distributed-training/expert-parallelism-moe)