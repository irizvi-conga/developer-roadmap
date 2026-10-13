# Geo-Aware Load Balancing

A global load balancer routes requests to the GPU cluster geographically closest to the requesting user. Network latency accumulates at roughly 5 milliseconds per time zone traversed, so routing a request from Singapore to San Francisco adds 50 to 100 milliseconds of unnecessary overhead. Geo-aware routing ensures that spare capacity in a distant region is used only when nearby capacity is exhausted.

Visit the following resources to learn more:

- [@article@How Geographic Load Balancing Improves Performance](https://www.serverion.com/uncategorized/how-geographic-load-balancing-improves-performance/)
- [@article@Geo-aware load balancing](https://www.baseten.co/resources/guide/the-baseten-inference-stack/#geo-aware-load-balancing)