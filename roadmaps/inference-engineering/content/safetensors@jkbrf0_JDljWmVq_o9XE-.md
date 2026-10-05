# Safetensors

Safetensors is the standard format for storing and distributing open model weights. It uses memory mapping for fast, zero-copy loading and prevents execution of arbitrary code during deserialization, making it safer than earlier pickle-based formats. All major inference engines load safetensors natively, and most open models on Hugging Face publish weights in this format.

Visit the following resources to learn more:

- [@official@Safetensors](https://huggingface.co/docs/safetensors/index)
- [@opensource@safetensors](https://github.com/safetensors/safetensors)
- [@article@SafeTensors: Efficient Serialization Format for Deep Learning](https://medium.com/@nishthakukreti.01/safetensors-efficient-serialization-format-for-deep-learning-57364317be43)
- [@video@Hugging Face SafeTensors LLMs in Ollama](https://www.youtube.com/watch?v=DSLwboFJJK4&t=2s)