# VeluxePay Wallet — First GitHub Release

A responsive VeluxePay-branded **frontend preview** inspired by the approved navy/electric-blue 9:16 design. No sidebar. Uses the supplied Veluxe AI logo, a CSS-generated globe, and clean mobile-first panels.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit http://localhost:3000. Deploy as a Next.js app on Vercel or a compatible host.

## Current implementation

- Fully responsive wallet dashboard, action tiles, virtual card preview, payment tools, transaction area, and feature dialogs.
- Functional local interactions: open/close panels, balance visibility, sample-data toggle, recipient and amount fields.
- **No fabricated live wallet, balance, card, transaction, or payment processing.** All illustrative numbers are explicitly labeled as demo data and hidden by default.
- No backend, real wallet signing, KYC, banking, onramp, payouts, card issuing, or yield transactions yet.
- Environment placeholders for Crossmint; setting a key does **not** enable production transactions.

## Next engineering milestone

Integrate the actual Crossmint auth/wallet providers from https://github.com/Crossmint/fintech-starter-app into this design; connect balances, transactions, wallet signing, onramp and send with staging keys. Add server-side validation, rate limiting, webhooks, idempotency and reconciliation. Production financial functionality requires provider approval, legal/compliance review and extensive security testing.

## Brand asset

`public/veluxe-logo.png` is a transparency-treated derivative of the supplied Veluxe AI artwork. Keep the original brand asset for reference.

## Security

Never commit secrets. Only public client keys belong in `NEXT_PUBLIC_*`. No payment or bank-account credentials should be collected by this preview.
