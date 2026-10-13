# Embedding Model Inference

TensorRT-LLM with its optimized XQA attention kernel offers the best performance for embedding models with LLM backbones. FP8 quantization of weights provides performance gains with minimal quality loss, verified by checking cosine similarity between quantized and original output vectors. Embedding models are small enough that horizontal scaling across individual GPU replicas is more effective than multi-GPU parallelism.

Visit the following resources to learn more:

- [@article@High-performance embedding model inference](https://www.baseten.co/resources/guide/high-performance-embedding-model-inference/#high-performance-embedding-model-inference-how-to-scale-semantic-search-rag-and-agents)
- [@article@What Actually Makes Embedding Model Inference Fast?](https://filipmakraduli.substack.com/p/what-actually-makes-embedding-model)
- [@article@Text Embeddings Inference - HuggingFace](https://huggingface.co/docs/text-embeddings-inference/en/index)