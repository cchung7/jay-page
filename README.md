# Jay Page – Personal Portfolio

A dark-first personal portfolio built with Next.js App Router, Tailwind CSS, Framer Motion, and a production-ready contact form backed by a Next.js API route and SMTP.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Radix UI
- Sonner
- Nodemailer

## Current Features

- Responsive single-page portfolio layout
- Dark-only visual theme
- Animated hero, about, experience, and contact sections
- Projects / work / skills / education tab system
- Contact form powered by `/api/contact`
- SMTP-based email delivery for contact submissions
- Absolute imports via `@/*` → `src/*`

## Project Structure

```text
src/
  app/
    api/contact/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    home/
    shared/
    ui/
  data/
  lib/