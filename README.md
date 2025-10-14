# Developer Portfolio (EN/TR) — Next.js + TypeScript + Tailwind + shadcn/ui

A clean, fast, **Vercel-deployed** developer portfolio featuring **language switch (EN/TR)**, **sliding hero text**, **scroll-triggered animations**, and a **Medium Articles** section. Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.


## 🎬 Live Demos 

![Image](https://github.com/user-attachments/assets/1b05e1e2-9cfa-4c3b-b9ea-69e807ef5c75)

![Image](https://github.com/user-attachments/assets/803f90a0-f6ac-4987-8344-c94384850592)

![Image](https://github.com/user-attachments/assets/d872ab68-1870-4e51-bac1-3947c3ad219d)

![Image](https://github.com/user-attachments/assets/93a85240-fc25-4972-ab9f-4d0925a1b787)

## ✨ Features

- **Language toggle (EN/TR):** Simple state-based switch for all UI texts (nav, sections, hero lines).
- **Sliding Hero Text:** Staggered entrance with fade/translate for a polished first impression.
- **Scroll Animations:** IntersectionObserver-powered reveal effects (slide, fade, scale, elastic, bounce).
- **Medium Articles:** Client-side fetch via `useMediumArticles` hook with relative publish time display.
- **Dark/Light Theme:** Manual toggle + safe defaults for both color schemes.
- **Accessible & Responsive:** Semantic HTML, keyboard-friendly, and mobile-first layout.
- **Vercel Deploy:** Zero-config CI/CD; push to deploy.

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** Tailwind CSS, shadcn/ui (Radix)
- **Icons:** lucide-react
- **Images:** next/image
- **Deploy:** Vercel

---

## 🧠 How It Works

### Language Toggle (EN/TR)
- `translations` object holds all copy for both languages.
- A single `language` state switches the entire UI:  
  ```ts
  const [language, setLanguage] = useState<"en" | "tr">("en")
  const t = translations[language]
-Button toggles with setLanguage(language === "en" ? "tr" : "en").

### Sliding Hero Text
- <SlidingText /> uses a container IntersectionObserver + staged setTimeout calls to reveal lines with fade/translate.

- Tailored CSS transitions ensure a smooth, modern feel.

### Scroll Animations
- useScrollAnimation() observes elements with data-animate; visible ids are stored in a Set.

- CSS classes like animate-slide-up, animate-elastic, animate-zoom-blur are toggled via .visible.

### Medium Articles
- useMediumArticles() fetches recent posts.

- formatDate() displays relative time in Turkish (e.g., "3 gün önce", "2 hafta önce").

- List is limited (e.g., slice(0, 4)) and each item links to Medium.

---

## 🚀 Getting Started

### 1) Install
```bash
pnpm install
```
# or: npm install / yarn install

### 2) Run Dev
```bash
pnpm dev
# http://localhost:3000
```

### 3) Build & Start (Production)
```bash
pnpm build
pnpm start
```


- Using npm?
  
```bash
npm run dev
npm run build && npm run start
```

---

## 🔧 Configuration

- Branding: Update colors/fonts in tailwind.config.ts.

- Global Styles: Edit styles/globals.css.

- Content: Change sections in app/page.tsx and shared blocks in components/.

- SEO: Adjust default metadata and OG image in app/layout.tsx.

- Images/GIFs: Place under public/ and reference relatively (e.g., public/gifs/...).

