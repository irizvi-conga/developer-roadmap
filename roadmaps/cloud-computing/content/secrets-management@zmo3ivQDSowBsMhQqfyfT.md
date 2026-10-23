# Secrets Management

Secrets management is the practice of storing, accessing, and rotating sensitive values (API keys, database passwords, certificates, tokens) securely. Hardcoding secrets in application code or environment variables is a common source of security breaches. Dedicated secrets managers (AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager) store secrets encrypted, control access through IAM policies, provide audit logs of every access, and support automatic rotation to reduce the blast radius of a compromised credential.

Visit the following resources to learn more:

- [@article@How to Manage Secrets in Web Applications?](https://cs.fyi/guide/secret-management-best-practices)
- [@article@What Is Secrets Management?](https://www.sysdig.com/learn-cloud-native/what-is-secrets-management)
- [@article@AWS Secrets Management Website](https://aws.amazon.com/secrets-manager/)
- [@video@Secrets Management: Secure Credentials & Avoid Data Leaks](https://www.youtube.com/watch?v=BqekRTA6VCs)