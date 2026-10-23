# Load Balancers

A load balancer distributes incoming traffic across multiple backend instances to prevent any single server from becoming a bottleneck. Layer 4 load balancers operate at the TCP/UDP level and route traffic based on IP and port. Layer 7 load balancers understand HTTP and can route based on URL path, hostname, or request headers, and handle SSL termination and sticky sessions. Cloud providers offer managed load balancers (ALB, NLB on AWS; Cloud Load Balancing on GCP; Azure Load Balancer) that scale automatically and integrate with auto scaling groups.

Visit the following resources to learn more:

- [@article@What is cloud load balancing? | LBaaS](https://www.cloudflare.com/learning/performance/cloud-load-balancing-lbaas/)
- [@article@API gateway vs. Load balancer: Do you need one or both?](https://roadmap.sh/network-engineer/api-gateway-vs-load-balancer)
- [@article@What is Cloud Load Balancing?](https://www.youtube.com/watch?v=h8EqM6Xt3MA)
- [@video@What is a Load Balancer?](https://www.youtube.com/watch?v=sCR3SAVdyCc&t=10s)