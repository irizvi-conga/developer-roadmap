# NVIDIA Dynamo

Dynamo supports conditional disaggregation, where requests are first sent to the decode engine and only routed to a prefill engine when the input is long or not already cached. The ratio of prefill to decode engines is configurable at runtime and can shift as traffic patterns change. This dynamic allocation prevents the prefill queue from becoming a bottleneck and avoids wasting decode engine resources on prefill-heavy traffic.

Visit the following resources to learn more:

- [@official@NVIDIA Dynamo Documentation](https://docs.nvidia.com/dynamo/latest/index.html)
- [@official@Disaggregated Serving](https://docs.nvidia.com/dynamo/kubernetes/disaggregated-serving/overview)
- [@article@NVIDIA Dynamo 1.0: Disaggregated LLM Inference Deployment Guide (2026)](https://www.spheron.network/blog/nvidia-dynamo-disaggregated-inference-guide/)
- [@video@NVIDIA Dynamo in 5 Minutes: What Is It and Why Now?](https://www.youtube.com/watch?v=mXYFcz27eDw&t=7s)