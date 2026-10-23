# Microservices Communication

Services in a microservices architecture communicate either synchronously or asynchronously. Synchronous communication uses HTTP/REST or gRPC: the caller waits for a response before continuing. Asynchronous communication uses message queues (SQS, RabbitMQ) or event streams (Kafka, Pub/Sub): the caller publishes a message and continues without waiting. Asynchronous patterns improve resilience and decouple services from each other's availability, but make tracing and debugging more complex.

Visit the following resources to learn more:

- [@article@Communication between microservices](https://www.izertis.com/en/w/blog/communication-between-microservices-strategies)
- [@article@Communication in a microservice architecture](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture)
- [@video@All Microservices Communication Styles in 6 minutes](https://www.youtube.com/watch?v=IFkDbsgn8yg)