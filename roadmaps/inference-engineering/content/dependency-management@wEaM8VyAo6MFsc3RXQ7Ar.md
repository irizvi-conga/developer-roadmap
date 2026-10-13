# Dependency Management

Inference dependency chains are long and fragile due to the tight coupling between CUDA versions, framework versions, and hardware architectures. Pinning exact versions of every dependency prevents unexpected breakage when upstream packages release updates. Containers for newly released models often initially depend on pre-release software builds and need to be rebuilt on stable releases within days of the model launch.

Visit the following resources to learn more:

- [@official@Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [@article@Dependency Management](https://www.baseten.co/inference-engineering/book/07-production/containerization/#dependency-management)
- [@article@Production in Inference Engineering](https://inferenceengineering.tech/chapters/production/)