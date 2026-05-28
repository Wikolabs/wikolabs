# Claude Code — Wikolabs Landing Page

## Commit messages
- NEVER add "Co-Authored-By: Claude" or any mention of Claude/AI in commit messages.
- Keep commits technical and concise: `feat:`, `fix:`, `chore:`, `docs:` prefixes.

## CTA pattern (all landing pages)
- Always include two buttons side by side: Cal.com (primary) + WhatsApp (green #25d366)
- Cal.com: use `<button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}'>` — NOT an <a> href, NOT Calendly
- Cal.com script must be loaded in layout.tsx via next/script (id="cal-embed", strategy="afterInteractive")
- WhatsApp: https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20[ProductName]%20avec%20Wikolabs.
- Email: team@wikolabs.com (never hello@wikolabs.com)

## Parallel tool calls
- NEVER run parallel Edit tool calls — always sequential, one file at a time.
- PowerShell bulk replace is preferred for multi-file changes.
