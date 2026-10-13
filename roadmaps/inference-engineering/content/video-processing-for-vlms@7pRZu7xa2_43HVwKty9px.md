# Video Processing for VLMs

One second of video contains 24 frames, each requiring roughly 1,000 tokens to represent at full resolution. This makes video inputs extremely long-context workloads. Frame rate reduction and downsampling are practically mandatory for running video through a VLM in a single request. Prefix caching and chunked prefill become critical for managing the resulting multi-thousand-token sequences.

Visit the following resources to learn more:

- [@opensource@Awesome LLMs for Video Understanding](https://github.com/yunlong10/Awesome-LLMs-for-Video-Understanding)
- [@article@Vision Language Model Prompt Engineering Guide for Image and Video Understanding](https://developer.nvidia.com/blog/vision-language-model-prompt-engineering-guide-for-image-and-video-understanding/)
- [@article@Exploring the Limits of VLMs: A Dataset for Evaluating Text-to-Video Generation](https://dl.acm.org/doi/full/10.1145/3702250.3702298)
- [@article@Vision Language Models](https://www.baseten.co/inference-engineering/book/06-modalities/vision-language-models/)
- [@video@Vision Transformer](https://www.youtube.com/watch?v=vJF3TBI8esQ)