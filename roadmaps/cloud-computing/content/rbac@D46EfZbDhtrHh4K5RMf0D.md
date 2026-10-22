# RBAC
 
RBAC (Role-Based Access Control) assigns permissions to roles rather than to individual users. Users or service accounts are then assigned roles, inheriting the permissions those roles define. This simplifies permission management at scale: instead of editing hundreds of individual user policies, you manage a smaller set of roles. Cloud providers implement RBAC through IAM role policies (AWS), IAM roles and bindings (GCP), and Azure Role Assignments. Kubernetes also uses RBAC to control access to cluster resources.

Visit the following resources to learn more:

- [@article@Role-Based Access Control](https://auth0.com/docs/manage-users/access-control/rbac)
- [@article@What is Role-based Access Control (RBAC)?](https://www.redhat.com/en/topics/security/what-is-role-based-access-control)
- [@video@Role-based Access Control (RBAC) vs. Attribute-based Access Control (ABAC)](https://www.youtube.com/watch?v=rvZ35YW4t5k)
