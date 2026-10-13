# Routing and Load Balancing

Routers make request-level decisions about which replica to send a request to, considering factors like KV cache prefix match and LoRA availability. Load balancers make system-level decisions to distribute traffic evenly across replicas. In systems with prefix caching, naive round-robin load balancing misses cache opportunities; intelligent routing increases cache hit rates and reduces TTFT.

Visit the following resources to learn more:

- [@article@LLM Inference Serving: Architecture, Routing & Auto-Scaling](https://mbrenndoerfer.com/writing/llm-inference-serving-architecture-scaling-optimization)
- [@article@LLM Model Routing: Route Queries to the Right Model Automatically](https://neuraltrust.ai/blog/llm-model-routing)
- [@article@LLM Load Balancing: Concepts, Strategies & Best Practices](https://www.truefoundry.com/blog/llm-load-balancing)
- [@video@Auto Routing Fully Explained](https://www.youtube.com/watch?v=2M47nZbyhac)