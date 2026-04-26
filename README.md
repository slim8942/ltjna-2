# LTJ&A Financial — Website

Full-stack Next.js 14 website for **LTJ&A Financial** at [www.ltjna.com](https://www.ltjna.com).

---

## Tech Stack

| Layer       | Tech                                   |
|-------------|----------------------------------------|
| Framework   | Next.js 14 (App Router, TypeScript)    |
| Styling     | Tailwind CSS                           |
| Email       | Nodemailer (SMTP / Gmail)              |
| Scheduling  | Calendly embed                         |
| Hosting     | Vercel                                 |
| Storage     | File-based JSON (swap for Vercel KV / Supabase for scale) |

---

## Project Structure

```
ltjna/
├── app/
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── resources/page.tsx    # Resources page
│   ├── contact/page.tsx      # Contact + Calendly
│   ├── admin/page.tsx        # Admin dashboard (leads + CMS)
│   └── api/
│       ├── contact/route.ts  # POST — creates lead, sends emails
│       ├── leads/route.ts    # GET / PATCH — lead management
│       ├── content/route.ts  # GET / PUT — CMS content
│       └── admin/
│           └── login/route.ts # POST / DELETE — session auth
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx       # Client contact form
│   └── CalendlyWidget.tsx    # Calendly iframe embed
├── lib/
│   ├── db.ts                 # File-based data store
│   ├── mailer.ts             # Nodemailer helpers
│   └── auth.ts               # Admin session check
└── .env.example              # Required environment variables
```

---

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Email — use Gmail App Password (NOT your regular password)
# Setup: Google Account → Security → 2-Step Verification → App Passwords
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=xxxx_xxxx_xxxx_xxxx     # 16-char app password
NOTIFY_EMAIL=leads@ltjna.com      # Where you want lead emails

# Admin dashboard password (pick something strong)
ADMIN_SECRET=my_super_secret_password_here

# Your Calendly URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_ORG/ltjna-website.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Add all environment variables from `.env.example` in the Vercel dashboard
4. Deploy!

### 3. Custom Domain

In Vercel → Project Settings → Domains:
- Add `www.ltjna.com`
- Add `ltjna.com` (redirect to www)
- Update your DNS records as instructed by Vercel

---

## Admin Dashboard

Access at `/admin` (e.g., `https://www.ltjna.com/admin`)

**Features:**
- 🔐 Password-protected login (set via `ADMIN_SECRET` env var)
- 📋 View all leads with name, email, company, service, message
- 🏷️ Update lead status: New → Contacted → Qualified → Closed
- ✏️ CMS editor — edit all homepage/service text without touching code
- 📊 Lead count stats by status

---

## Email Setup (Gmail)

1. Enable 2-Step Verification on your Google Account
2. Go to: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Create an app password for "Mail"
4. Use the 16-character password as `SMTP_PASS`

---

## Upgrading the Data Store (Production Scale)

The current file-based store works well for low-moderate traffic. For high volume, upgrade to:

**Option A — Vercel KV (Redis)**
```bash
npm install @vercel/kv
```
Replace `lib/db.ts` read/write functions with `kv.get` / `kv.set` / `kv.lrange`.

**Option B — Supabase (Postgres)**
```bash
npm install @supabase/supabase-js
```
Create a `leads` table and replace `readLeads` / `writeLead` with Supabase queries.

---

## Calendly Integration

Replace the iframe URL with your actual Calendly link:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle/30min
```

The `CalendlyWidget` component embeds it inline on the Contact page.

---

## License

Private — LTJ&A Financial. All rights reserved.
