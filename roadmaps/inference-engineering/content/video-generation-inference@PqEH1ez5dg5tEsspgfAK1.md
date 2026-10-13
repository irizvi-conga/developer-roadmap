# Video Generation Inference

Video generation models run on full nodes of eight GPUs with a batch size of one because the latent space is too large to batch effectively. Attention over the three-dimensional video latent space consumes 70 to 80 percent of compute time and is the primary optimization target. Attention caching techniques that reuse outputs from previous timesteps or transformer layers can improve speed by 30 to 40 percent.

Visit the following resources to learn more:

- [@opensource@Cache-DiT](https://github.com/vipshop/cache-dit)
- [@opensource@TeaCache: Timestep Embedding Tells: It's Time to Cache for Video Diffusion Model](https://github.com/ali-vilab/TeaCache)
- [@article@Video Generation Models](https://www.baseten.co/inference-engineering/book/06-modalities/video-generation-models/)
- [@article@Video generation - HuggingFace](https://huggingface.co/docs/diffusers/en/using-diffusers/text-img2vid)
- [@video@How do AI video generation models work?](https://www.youtube.com/watch?v=Y5zHHoLrvAE)