#!/bin/bash
# Run this ONCE after first `make start` to get SSL certificates
# Usage: ./docker/init-ssl.sh wikolabs.com your@email.com

set -e

DOMAIN=${1:?"Usage: $0 <domain> <email>"}
EMAIL=${2:?"Usage: $0 <domain> <email>"}

echo "==> Getting SSL certificate for $DOMAIN..."

# Request cert via certbot container
docker compose --env-file .env -f docker/docker-compose.yml run --rm certbot \
  certonly --webroot \
  -w /var/www/certbot \
  -d "$DOMAIN" -d "www.$DOMAIN" \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email

echo "==> Certificate obtained. Updating Nginx config for HTTPS..."

# Write the HTTPS config
cat > docker/nginx/conf.d/default.conf << EOF
# HTTP → HTTPS redirect
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://\$host\$request_uri;
    }
}

# HTTPS
server {
    listen 443 ssl;
    server_name $DOMAIN www.$DOMAIN;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location / {
        proxy_pass http://app:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

echo "==> Reloading Nginx..."
docker compose --env-file .env -f docker/docker-compose.yml exec nginx nginx -s reload

echo "==> Done! HTTPS is live at https://$DOMAIN"
echo "    Certbot container auto-renews every 12h."