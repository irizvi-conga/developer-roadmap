# Model Parallelism

When a model is too large to fit on a single GPU, or when serving latency requires more compute than one device can provide, model parallelism distributes the workload across multiple GPUs or nodes. This group covers the three parallelism strategies and their trade-offs in terms of communication overhead, latency, and hardware requirements.

Visit the following resources to learn more:

- [@article@Model Parallelism](https://huggingface.co/docs/transformers/v4.13.0/en/parallelism)
- [@video@LLM Model Parallelism](https://www.youtube.com/watch?v=DryXbg48bLc)
- [@video@How LLMs use multiple GPUs](https://www.youtube.com/watch?v=4i76hmmnJEo)