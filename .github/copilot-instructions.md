# Copilot instructions — rgpd-compliance-saas

Quick context
- Small SaaS app (French) for GDPR compliance: Next.js (app router), TypeScript, Tailwind, Prisma + PostgreSQL (Supabase), Clerk for auth, Stripe for billing, Resend for emails, and @react-pdf/renderer for PDFs. See `package.json` and `prisma/schema.prisma` for core deps and data model.

What the agent should know (big picture)
- Multi-tenant data model: almost every primary entity belongs to a Company via `companyId` (see `prisma/schema.prisma`). Always scope reads/updates by `companyId` and enforce access based on the authenticated user’s `companyId`.
- Auth: Clerk is used. `User` model keeps `clerkId` (unique) and `email` (unique). When correlating auth -> DB, find the `User` by `clerkId`.
- Data storage: flexible JSON fields are used for complex data (e.g., `Registry.dataTypes`, `Audit.results`). PDFs are stored as URLs (e.g., `Registry.pdfUrl`, `Audit.reportPdfUrl`) — generation likely server-side using `@react-pdf/renderer` and stored externally.

Developer workflows & commands (explicit)
- Run locally: `npm run dev` (starts Next dev on :3000).
- Build: `npm run build`; start prod: `npm run start`.
- DB management: use `npm run db:push` to apply the current Prisma schema to the DB and `npm run db:studio` to open Prisma Studio. The repo uses `prisma db push` (no migrations script present).
- Environment: secrets live in `.env.local` (do not commit). Required variables found in repo: `DATABASE_URL`, `NEXT_PUBLIC_CLERK_*`, `CLERK_SECRET_KEY`, `STRIPE_*`, `RESEND_API_KEY`, `NEXT_PUBLIC_APP_URL`.

Project-specific conventions & patterns
- File layout: Next 14 app router — `app/` contains routes and server components; UI pieces should go under `components/` (Tailwind is configured in `tailwind.config.ts`).
- TypeScript: `strict: true` in `tsconfig.json`. Prefer typed Prisma client usages via `@prisma/client`.
- Indexing & queries: Several Prisma models have `@@index([companyId])` — queries should leverage these fields for performance and tenancy filtering.
- Role-based access: `User.role` enum (`ADMIN`, `MEMBER`, `DPO`) exists; enforce role checks in server actions and API handlers.

Integration points & external dependencies
- Auth: Clerk — map Clerk session -> local `User` by `clerkId` (see `prisma/schema.prisma` user model). Set `NEXT_PUBLIC_CLERK_*` envs.
- Payments: Stripe — prices are configured via env vars (`STRIPE_PRICE_*`) and `STRIPE_WEBHOOK_SECRET` exists for webhooks.
- Emails: Resend — `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are present.
- Database: Postgres (Supabase) via `DATABASE_URL`.

Examples & quick references
- Multi-tenant query (pseudo):
  const registry = await prisma.registry.findFirst({ where: { id, companyId: currentUser.companyId } })
- Lookups from auth (pseudo):
  const dbUser = await prisma.user.findUnique({ where: { clerkId: clerkUser.id } })
- Prisma schema references: `prisma/schema.prisma` (models: `User`, `Company`, `Registry`, `Audit`, `RightsRequest`).

Agent operational guidelines (how to make changes safely)
- When changing Prisma models, run `npm run db:push` to sync the DB (note: repo currently uses `db push`, not migrations).
- Keep secrets out of commits — `.env.local` is configured locally for convenience.
- There is no test suite in `package.json`; if adding tests, add appropriate scripts and CI steps.

Where to look first (priority files)
- `prisma/schema.prisma` — canonical data model and tenancy rules
- `package.json` — scripts and dependencies
- `next.config.js`, `tailwind.config.ts`, `tsconfig.json` — framework config
- `.env.local` — local env var examples

If anything is unclear or you want more depth (examples for API routes, SRP split, CI, or tests), tell me what area you want fleshed out and I’ll iterate. ✅
