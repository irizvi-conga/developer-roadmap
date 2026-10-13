# Automatic Speech Recognition (ASR)

ASR models like Whisper take audio input and produce text transcripts. Whisper is an encoder-decoder model where the decoder, an autoregressive transformer, dominates inference time. TensorRT-LLM with in-flight batching for the decoder delivers the best performance. For real-time transcription, streaming via WebSockets with VAD-segmented chunks achieves round-trip targets of around 200 milliseconds per chunk on optimized deployments.

Visit the following resources to learn more:

- [@official@OpenAI Whisper Models on Hugging Face](https://huggingface.co/openai)
- [@article@What is automatic speech recognition (ASR)?](https://www.ionos.com/digitalguide/websites/web-development/automatic-speech-recognition/)
- [@article@What is Automatic Speech Recognition? A Comprehensive Overview of ASR Technology](https://www.assemblyai.com/blog/what-is-asr)
- [@video@How streaming ASR inference differs from LLM serving](https://www.youtube.com/watch?v=8HJWwD5Uacc)
- [@video@Automatic Speech Recognition - An Overview](https://www.youtube.com/watch?v=q67z7PTGRi8)