# Stateless Functions

Stateless functions are small, single-purpose code segments that process data and return a result without saving any information or "state" from previous executions. Each time the function runs, it treats the request as a completely new event, independent of any prior interactions. Because these functions do not rely on stored data on the local server, they can be easily scaled across multiple instances, allowing cloud platforms to instantly spin up or shut down resources based on real-time demand.

Visit the following resources to learn more:

- [@article@Stateful vs. stateless applications](https://www.redhat.com/en/topics/cloud-native-apps/stateful-vs-stateless)
- [@video@Stateful vs Stateless Architectures Explained](https://www.youtube.com/watch?v=20tpk8A_xa0&t=54s)