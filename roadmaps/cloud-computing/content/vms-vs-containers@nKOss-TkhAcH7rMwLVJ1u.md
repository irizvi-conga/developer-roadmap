# VMs vs Containers

Virtual machines virtualize hardware, giving each VM its own OS kernel, which provides strong isolation but comes with significant overhead in memory and startup time. Containers share the host OS kernel and isolate processes using Linux namespaces and cgroups, making them faster to start and more resource-efficient. VMs are preferred when strong isolation or a different OS is required; containers are preferred for running many small, stateless workloads efficiently on shared infrastructure.

Visit the following resources to learn more:

- [@article@Containers vs. VMs: Why not both?](https://www.redhat.com/en/topics/containers/containers-vs-vms)
- [@article@Containers vs. virtual machines](https://www.atlassian.com/microservices/cloud-computing/containers-vs-vms)
- [@video@Containers vs VMs: What's the difference?](https://www.youtube.com/watch?v=cjXI-yxqGTI)
- [@video@Virtual Machines vs Containers](https://www.youtube.com/watch?v=eyNBf1sqdBQ&pp=ygUcdmlydHVhbCBtYWNoaW5lIHZzIGNvbnRhaW5lcg%3D%3D)