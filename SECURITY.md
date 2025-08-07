# Security Configuration for BMG Landing Page

## Pre-Deployment Security Checklist

### ✅ Completed
- [x] Environment variables properly configured in `.gitignore`
- [x] Contact form marked as demo-only (no backend integration)
- [x] API keys using PUBLIC_ prefix for client-side access

### 🔧 Required for Production Deployment

#### 1. Security Headers
Add these headers to your web server or hosting platform:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://www.google.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

#### 2. API Key Security
- **Google Maps API Key**: Restrict by HTTP referrer (your domain)
- **reCAPTCHA Site Key**: Restrict by domain in Google Console
- Regenerate keys if they were ever exposed in git history

#### 3. Contact Form Warning
The current contact form is **demo-only** and does not send data anywhere. For production:
- Implement proper backend form processing
- Add server-side validation and sanitization
- Integrate with email service or database
- Implement rate limiting and CSRF protection

#### 4. HTTPS Configuration
- Ensure SSL/TLS certificate is properly configured
- Redirect all HTTP traffic to HTTPS
- Use HSTS (HTTP Strict Transport Security)

#### 5. Asset Security
- Ensure no sensitive files are in the `public/` directory
- Implement proper caching headers for static assets
- Consider using a CDN for better security and performance

## Platform-Specific Security Settings

### Netlify
Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Vercel
Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

### Cloudflare Pages
Configure security headers in Cloudflare dashboard under "Security" → "HTTP Response Headers"

## Monitoring and Maintenance
- Regularly update dependencies (`npm audit`)
- Monitor for security vulnerabilities in packages
- Keep Astro and React versions up to date
- Review and rotate API keys periodically