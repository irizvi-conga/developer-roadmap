# Spot & Reserved Instances

Spot instances (AWS) and their equivalents on other providers (preemptible VMs on GCP, spot VMs on Azure) use spare provider capacity at discounts of up to 90% compared to on-demand pricing, but can be reclaimed with short notice when the provider needs the capacity back. Reserved instances commit to a one or three year term in exchange for a significant discount on on-demand rates. Both pricing models require architectural trade-offs: spot instances demand fault-tolerant, interruptible workloads, while reserved instances require accurate capacity planning.

Visit the following resources to learn more:

- [@article@What’s the Difference Between On-Demand Instances and Reserved Instances?](https://aws.amazon.com/compare/the-difference-between-on-demand-instances-and-reserved-instances/)
- [@article@Reserved Instances vs. Spot Instances: Maximize Your Savings Today](https://www.alphaus.cloud/en/blog/reserved-instances-vs-spot-instances-maximize-your-savings-today)
- [@article@Spot Instances vs. Reserved Instances: Key Differences](https://www.prosperops.com/blog/spot-instances-vs-reserved-instances/)