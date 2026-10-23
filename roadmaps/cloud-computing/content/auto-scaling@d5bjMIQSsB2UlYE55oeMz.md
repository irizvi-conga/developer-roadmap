# Auto Scaling

Auto scaling automatically adjusts the number of running instances based on demand. A scaling policy monitors a metric (CPU utilization, request rate, queue depth) and triggers the addition or removal of instances to match load. Auto scaling groups in AWS, managed instance groups in GCP, and scale sets in Azure implement this pattern. It is the primary mechanism for achieving elasticity in cloud architectures and directly reduces costs by terminating unused capacity during low-traffic periods.

Visit the following resources to learn more:

- [@article@What Is Cloud Infrastructure Autoscaling?](https://www.pulumi.com/what-is/what-is-cloud-infrastructure-autoscaling/)
- [@article@What is auto scaling?](https://www.ibm.com/think/topics/autoscaling)
- [@video@Most Important Cloud Concepts - Episode 3 - Autoscaling](https://www.youtube.com/watch?v=p_ae4BFESj4)