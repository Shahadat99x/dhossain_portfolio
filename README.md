# Shahadat Hossain · Portfolio

Production-ready personal site for Shahadat Hossain (“AI & Data Science Explorer”) built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Features

- App Router layout with dark/light theme sync, sticky navigation, and responsive hero CTA
- Centralised content configuration (`data/` + `content/blog/`) with MDX-powered blog and dynamic SEO metadata
- Filterable projects grid, timeline with skill meters, MDX blog detail pages, and API-backed contact form with rate-limiting + Resend email integration
- Tailwind CSS theme tokens, reusable UI primitives, Framer Motion micro-animations, lucide icons, and Vercel Analytics
- SEO assets including dynamic `og` image route, sitemap, robots rules, and Open Graph/Twitter metadata helpers

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment template and update the values:
   ```bash
   cp .env.example .env.local
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:3000` to explore the site. Lint before committing:
   ```bash
   npm run lint
   ```

## Environment Variables

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key used by the contact form API route. |
| `RESEND_FROM_EMAIL` | Verified sender email/address for Resend (e.g. `Portfolio Bot <hello@dhossian.com>`). |
| `CONTACT_EMAIL` | Destination inbox for new enquiries (defaults to `hello@dhossian.com`). |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for generated metadata and sitemap. |

## Editing Content

- `data/site.ts` – name, headline, tagline, location, and navigation/social links.
- `data/projects.ts` – portfolio cards (title, summary, tech stack, links, feature flag).
- `data/skills.ts` & `data/timeline.ts` – about page badge groups and career timeline.
- `content/blog/*.mdx` – blog posts (front matter fields: `title`, `description`, `date`, `tags`, `published`).

Each MDX file is parsed at build time; add new posts by dropping additional `.mdx` files in `content/blog/`. Front matter `published: false` hides a draft from the listings.

## Contact Form

The form posts to `/api/contact` and validates with Zod, applies a simple per-IP rate limit, and attempts to send via Resend. During development without credentials the API responds with `{ preview: true }` instead of sending mail.

## Deployment

- Configure the environment variables in your hosting provider (e.g. Vercel ? Project Settings ? Environment Variables).
- Run the production build locally with `npm run build && npm start` to verify.
- Deploy to Vercel using the dashboard or `vercel` CLI; the project is ready for zero-config deployment.

## Project Structure

```
app/
  (site)/        # Public-facing routes: home, projects, about, blog, contact
  api/contact/   # Resend-backed contact endpoint with rate limiting
  og/route.tsx   # Dynamic Open Graph image generator
  sitemap.ts     # Sitemap metadata route
components/      # UI primitives, layout, providers, section headers, cards
content/blog/    # MDX blog posts
data/            # Structured content (site meta, projects, skills, timeline)
lib/             # Utilities (seo helpers, mdx loader, rate limit, validations)
```

## Adding Blog Posts

1. Create `content/blog/my-new-post.mdx` with YAML front matter and Markdown/MDX body.
2. Add `published: true` when ready. Drafts (or missing field) are ignored by the listing and sitemap.
3. The route `/blog/my-new-post` renders the compiled MDX with typography and anchored headings.

## Support

Issues or enhancement ideas? Open a discussion or tweak the content directly—the site is intentionally modular so edits remain low-friction.
