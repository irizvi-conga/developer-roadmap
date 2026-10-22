# Subnets & Routing
 
A VPC is divided into subnets, each assigned a CIDR block and typically tied to a specific availability zone. Public subnets have a route to an internet gateway, making resources in them reachable from the internet. Private subnets have no direct internet route and are used for databases, internal services, and anything that should not be publicly accessible. Routing tables define how traffic moves between subnets, to the internet, or to connected on-premises networks.

Visit the following resources to learn more:

- [@article@What is a subnet? | How subnetting works](https://www.cloudflare.com/en-gb/learning/network-layer/what-is-a-subnet/)
- [@article@What is CIDR?](https://aws.amazon.com/what-is/cidr/)
- [@video@Subnetting Explained: Networking Basics](https://www.youtube.com/watch?v=hbdT_Q9DM8w)
- [@video@What is CIDR (Classless Inter Domain Routing)?](https://www.youtube.com/watch?v=KiWXRL-2TnY)
