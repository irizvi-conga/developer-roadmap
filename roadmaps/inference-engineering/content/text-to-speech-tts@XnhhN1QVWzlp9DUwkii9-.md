# Text-to-Speech (TTS)

Modern TTS models like Orpheus TTS are fine-tuned LLMs with an expanded vocabulary that includes audio tokens. They generate audio token sequences decoded to waveforms by a small audio decoder. The key performance metrics are time to first byte of audio (TTFB) and the number of concurrent real-time streams a single GPU replica can sustain, rather than raw token throughput.

Visit the following resources to learn more:

- [@article@What is text to speech?](https://www.ibm.com/think/topics/text-to-speech)
- [@article@Text-to-Speech](https://huggingface.co/tasks/text-to-speech)
- [@article@TTS Models](https://www.baseten.co/inference-engineering/book/06-modalities/tts-models/)
- [@video@Create your own voices with Gemini 3.8 text-to-speech](https://www.youtube.com/watch?v=FL6mI_Br-mc)