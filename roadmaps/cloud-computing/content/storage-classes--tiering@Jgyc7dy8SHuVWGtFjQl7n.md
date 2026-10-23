# Storage Classes & Tiering

Cloud object storage services offer multiple storage classes with different cost and retrieval trade-offs. Hot tiers store frequently accessed data at higher cost per GB but with immediate retrieval. Cool and cold tiers are cheaper for data accessed infrequently. Archive tiers (Glacier on AWS, Coldline and Archive on GCP) offer the lowest storage cost but charge retrieval fees and have delays of minutes to hours. Lifecycle policies automatically move objects between tiers based on age or access patterns, optimizing cost without manual intervention.

Visit the following resources to learn more:

- [@article@What is Cloud Tiering and How Does it Work?](https://wasabi.com/learn/what-is-cloud-tiering)
- [@article@Choosing the Right Cloud Storage Tier](https://www.commvault.com/explore/choosing-the-right-cloud-storage-tier)
- [@video@What Is Tiered Storage?](https://www.youtube.com/watch?v=C60ckS2110Y&t=132s)