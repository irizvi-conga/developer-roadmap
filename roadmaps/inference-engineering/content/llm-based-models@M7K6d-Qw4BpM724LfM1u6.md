# LLM-based Models

LLM-based embedding models use a decoder-only transformer backbone, typically between one and eight billion parameters, to produce higher-quality semantic representations than BERT-style models. They apply a pooling operation to the final layer hidden states and are trained with contrastive objectives on large-scale retrieval datasets. The quality advantage is most pronounced on complex or cross-lingual retrieval tasks; the cost is higher compute per embedding and the need for GPU inference rather than CPU.

Visit the following resources to learn more:

- [@article@LLM Embeddings Explained: A Visual and Intuitive Guide](https://huggingface.co/spaces/hesamation/primer-llm-embedding?section=what_are_embeddings?)
- [@article@LLMs are Also Effective Embedding Models: An In-depth Overview](https://arxiv.org/abs/2412.12591)
- [@article@Understanding Embedding Models in the Context of Large Language Models](https://medium.com/about-ai/understanding-embedding-models-in-the-context-of-large-language-models-02da706ee9b3)