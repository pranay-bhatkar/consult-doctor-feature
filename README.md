# 🩺 Consult a Doctor – Online Booking App

A responsive and SEO-optimized web application built with **Next.js 14 App Router** and **Tailwind CSS**, designed to simulate an Apollo-like online doctor consultation platform.

---

## ✨ Features

- 🧑‍⚕️ Browse verified doctor profiles
- 📅 Book appointments with available slots
- ✅ Instant success/error UI feedback
- 📱 Mobile-friendly responsive design
- 🔍 SEO-optimized (metadata, sitemap, robots.txt, structured data)
- 🌐 Deployed on Vercel

---

## 🖥️ Tech Stack

- [Next.js (App Router)](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Hosting](https://vercel.com/)
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) for SEO

---

## 📦 Installation

```bash
git clone https://github.com/pranay-bhatkar/consult-doctor-feature.git
cd consult-doctor
npm install
```

---

## ▶️ Running Locally

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🚀 Build & Deploy

To build for production:

```bash
npm run build
npm start
```

To deploy on **Vercel**, push the code to GitHub and import the repo on [vercel.com](https://vercel.com/).

---
<!-- 
## 🔍 SEO Setup

### 1. `next-sitemap`

```bash
npm install next-sitemap
```

```bash
npm run build
npm run postbuild
```

> This generates `/sitemap.xml` and `/robots.txt` in the `public` folder automatically.

### 2. Metadata & Open Graph

Set up in `layout.tsx` and dynamic pages via the `metadata` API + `<Head />`.

### 3. Structured Data

Implemented using JSON-LD in doctor profile pages for Google Rich Results.

--- -->

## 📁 Project Structure

```
src/
  app/
    page.tsx              # Home page
    layout.tsx            # Global layout with metadata
    consult/
      page.tsx            # Doctor list page
      [id]/page.tsx       # Individual doctor profile & booking
  components/
    DoctorCard.tsx        # Doctor profile UI card

styles/
  globals.css             # Tailwind base and custom styles
```

---

## ✅ Live Demo

🌐 [https://consult-doctor-feature.vercel.app/](https://consult-doctor-feature.vercel.app/)

---

## 📌 Todo / Future Enhancements

- 🔐 Add authentication with Clerk/Auth.js
- 💾 Connect to a database (MongoDB, PostgreSQL)
- 📆 Store appointment data
- 🛠 Admin dashboard to manage doctors & bookings
- 📹 Video consultation with Zoom/Agora API

---

## 📄 License

MIT © [Pranay Bhatkar](https://github.com/pranay-bhatkar)