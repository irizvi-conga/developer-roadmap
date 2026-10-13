# Streaming TTS

Real-time TTS streams audio continuously over WebSockets rather than returning a complete file after generation finishes. The audio decoder converts token streams to waveforms as they are generated, implemented in compiled PyTorch with dynamic batching. After tuning the inference engine and decoder, the primary performance lever is how many concurrent real-time streams a single GPU replica can sustain.

Visit the following resources to learn more:

- [@article@Streaming TTS](https://soniox.com/wiki/streaming-tts)
- [@article@Streaming Text-to-Speech](https://www.emergentmind.com/topics/streaming-text-to-speech-tts)
- [@video@Streaming Speech to Text Models - Kyutai vs Whisper](https://www.youtube.com/watch?v=TTx6M4CCbXk)