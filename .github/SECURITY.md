# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please email your findings to the project maintainers instead of using the issue tracker. Do not publicly disclose the vulnerability until a fix has been released.

**Please include:**
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

## Security Best Practices

### For Users

1. **Keep dependencies updated**
   ```bash
   pnpm update
   ```

2. **Never commit secrets**
   - Use `.env.local` (in .gitignore)
   - Use platform-specific secret management (GitHub Secrets, Netlify, etc.)

3. **Use environment variables for sensitive data**
   - API keys
   - Database credentials
   - OAuth tokens

4. **Enable 2FA on GitHub**
   - Settings > Security & analysis > Two-factor authentication

### For Developers

1. **Never hardcode secrets in code**
   ```typescript
   // ❌ BAD
   const API_KEY = "sk_live_abc123";
   
   // ✓ GOOD
   const API_KEY = process.env.API_KEY;
   ```

2. **Validate user input**
   ```typescript
   import { z } from "zod";
   
   const schema = z.object({
     email: z.string().email(),
     password: z.string().min(8),
   });
   ```

3. **Use HTTPS in production**
   - Netlify, Vercel, Railway provide this automatically
   - Self-hosted: Use Let's Encrypt (certbot)

4. **Keep dependencies updated**
   - GitHub Dependabot is enabled
   - Review security advisories: `pnpm audit`

5. **Run security checks**
   ```bash
   # Check dependencies
   pnpm audit
   
   # Scan for secrets
   pnpm test
   ```

6. **Handle errors securely**
   ```typescript
   // ❌ BAD - Exposes error details
   res.status(500).json({ error: err.message });
   
   // ✓ GOOD - Generic error message
   res.status(500).json({ error: "An error occurred" });
   ```

## Automated Security

This project includes:

- **Dependabot**: Automatic dependency update PRs
- **GitHub Actions**: Automated testing and type checking
- **npm audit**: Dependency vulnerability scanning
- **TruffleHog**: Secret scanning

## Dependency Management

- **Pinned versions**: Package manager config enforces exact versions
- **Regular updates**: Dependabot creates PRs weekly
- **Security scanning**: npm audit runs in CI
- **Frozen lockfile**: `pnpm-lock.yaml` ensures reproducible builds

## Third-party Services

Be cautious when adding integrations:

- ✓ **Verified providers**: Netlify, Vercel, GitHub, etc.
- ⚠️ **Monitor**: Check privacy policies and security practices
- ❌ **Avoid**: Sketchy/unknown services with sensitive data

## Incident Response

If you notice a security issue in production:

1. **Immediate actions**
   - Revoke compromised credentials/tokens
   - Rotate sensitive keys
   - Monitor for unauthorized access

2. **Investigation**
   - Check logs and audit trails
   - Identify scope of compromise
   - Document timeline

3. **Communication**
   - Notify affected users
   - Be transparent
   - Provide remediation steps

4. **Recovery**
   - Deploy fix
   - Verify security measures
   - Update documentation

## Security Headers

Recommended headers for production:

```nginx
# .htaccess or Nginx config
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'";
```

Netlify setup in `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
```

## Testing Security

```bash
# Check dependencies for vulnerabilities
pnpm audit

# Type checking (catches many issues)
pnpm typecheck

# Run all tests
pnpm test
```

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [npm Security Documentation](https://docs.npmjs.com/packages-and-modules/security)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

## License

This security policy is provided as-is. Consult with security professionals for production deployments.
