# Digital Saathi

Digital Saathi is a beginner-friendly learning companion that helps older
adults build confidence with everyday digital tasks. Lessons use clear,
step-by-step instructions, safety guidance, accessible text, and optional
Urdu-language support.

**Live site:** [digital-saathi-pk.vercel.app](https://digital-saathi-pk.vercel.app/)

## Features

- Guided lessons for video calls, scam messages, passwords, smartphone
  navigation, savings, and healthy walking.
- Practice activities and quizzes with progress tracking.
- English and Urdu interface options, adjustable text size, high contrast,
  dark mode, read-aloud controls, and supported-browser voice commands.
- Responsive navigation with account actions and mobile-friendly layouts.
- Safety Center with a fictional scam-message example.
- Local-first storage, with optional Supabase accounts and cross-device
  progress synchronization.

Practice activities are simulations. They do not access real accounts,
cameras, microphones, or external services. Financial and health lessons are
educational, not professional advice.

## Run locally

The app source is in [`digital-saathi-main/`](./digital-saathi-main/).
With Node.js installed, run:

```powershell
cd digital-saathi-main
$env:SUPABASE_URL = "https://YOUR_PROJECT_REF.supabase.co"
$env:SUPABASE_PUBLISHABLE_KEY = "sb_publishable_YOUR_PUBLIC_KEY"
npm install
npm run build
py -m http.server 8000
```

Open <http://localhost:8000/>. These environment variables are local to the
PowerShell session and should contain your Supabase project URL and public
publishable key. Never use a service-role or secret key.

## Deploy to Vercel

The Vercel project root is `digital-saathi-main/`. Configure
`SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in the Vercel project
environment, then deploy. Use only a Supabase publishable key in this browser
app; never expose a service-role or secret key.

For production sign-up and email confirmation, configure Supabase Auth:

- **Site URL:** `https://digital-saathi-pk.vercel.app`
- **Allowed redirect URL:** `https://digital-saathi-pk.vercel.app/**`

Database synchronization also requires the existing Supabase tables and
Row Level Security policies to match the app.

## Documentation

See the [full setup, Supabase schema, and RLS guide](./digital-saathi-main/README.md).
