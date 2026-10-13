# Voice Activity Detection (VAD)

VAD is a lightweight model that monitors an audio stream or file and identifies segments containing speech, filtering out silence. It is a required preprocessing component in both real-time ASR pipelines and long-file transcription pipelines, splitting audio into discrete chunks at natural speech boundaries rather than fixed time intervals. VAD runs on dedicated hardware to avoid competing with the ASR model for GPU resources.

Visit the following resources to learn more:

- [@article@Voice Activity Detection (VAD): The Complete 2026 Guide to Speech Detection](https://picovoice.ai/blog/complete-guide-voice-activity-detection-vad/)
- [@article@What is voice activity detection (VAD)?](https://soniox.com/wiki/voice-activity-detection)
- [@video@Voice Activity Detection | The key to realtime voice chat](https://www.youtube.com/watch?v=HUbYXGeR8_c)