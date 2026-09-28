# Cogniva Softwares – Website (Frontend)

The Cogniva Softwares marketing website, built with **React 19 + Vite + Tailwind CSS 4**.
It talks to the Spring Boot API in the separate **CognivaSoftware backend** folder for the
contact form, services and portfolio.

---

## Table of contents

1. [Prerequisites](#1-prerequisites)
2. [Install](#2-install)
3. [Configure the API URL](#3-configure-the-api-url)
4. [Run in development](#4-run-in-development)
5. [Running the full stack (backend + UI)](#running-the-full-stack-backend--ui)
6. [How the UI uses the backend](#how-the-ui-uses-the-backend)
7. [Available scripts](#available-scripts)
8. [Project structure](#project-structure)
9. [Troubleshooting](#troubleshooting)
10. [Building & deploying](#building--deploying)

---

## 1. Prerequisites

| Tool | Version | Check with | Download |
|---|---|---|---|
| **Node.js** | 20.19+ or 22.12+ (22 LTS recommended) | `node -v` | [nodejs.org](https://nodejs.org/) (includes npm) |
| **npm** | 10+ | `npm -v` | comes with Node.js |
| **Backend** *(for the contact form)* | – | – | see the backend folder's `README.md` |

An editor such as **VS Code** or **IntelliJ / WebStorm** is recommended.

---

## 2. Install

Open a terminal in the **CognivaSoftwares_Frontend** folder and run (first time, or whenever
`package.json` changes):

```bash
npm install
```

---

## 3. Configure the API URL

The UI calls the backend at **`http://localhost:8080/api`** by default – nothing to configure
for local development.

To use a different backend URL, create a file named **`.env`** in this folder
(copy `.env.example`):

```bash
VITE_API_BASE_URL=http://localhost:8080/api
```

Restart `npm run dev` after changing `.env` – Vite only reads it at start-up.

> Only variables starting with `VITE_` are exposed to the browser. Never put secrets in them.

---

## 4. Run in development

```bash
npm run dev
```

Open **http://localhost:5173**. Changes to files in `src/` reload in the browser automatically.

---

## Running the full stack (backend + UI)

```
┌──────────────────────┐    HTTP / JSON     ┌──────────────────────┐     JDBC     ┌──────────────┐
│  React UI (Vite)     │ ─────────────────▶ │  Spring Boot API     │ ───────────▶ │  PostgreSQL  │
│  localhost:5173      │   /api/...         │  localhost:8080      │              │  :5432       │
│  (this folder)       │ ◀───────────────── │  CognivaSoftware     │ ◀─────────── │  cogniva_db  │
│                      │                    │  backend             │              │              │
└──────────────────────┘                    └──────────────────────┘              └──────────────┘
```

### Everything you need installed

| For | Install |
|---|---|
| UI | Node.js 20.19+ / 22 LTS |
| Backend | JDK 17, IntelliJ IDEA (or Maven 3.9+) |
| Database | PostgreSQL 16 (or Docker Desktop) |

### Start in this order

1. **PostgreSQL** – make sure it's running and the database **`cogniva_db`** exists
   (`CREATE DATABASE cogniva_db;` in pgAdmin – first time only).
2. **Backend** – open the *CognivaSoftware backend* folder in IntelliJ, set `DB_PASSWORD` in the run
   configuration, and run `CognivaBackendApplication`. Wait for
   `Started CognivaBackendApplication`. Check http://localhost:8080/api/services returns JSON.
   *(Full details: backend `README.md`.)*
3. **Frontend** – in this folder:

   ```bash
   npm install   # first time only
   npm run dev
   ```

4. Open **http://localhost:5173**.

### Check they're connected

- **Contact page** → fill in and submit the form → "Message sent successfully".
  The enquiry is saved in the database (`contact_enquiries` table).
- **DevTools → Network** tab: the Services and Portfolio pages call
  `localhost:8080/api/services` and `localhost:8080/api/projects`.

---

## How the UI uses the backend

| Page / component | API call | If the backend is down |
|---|---|---|
| Contact page form | `POST /api/contact` | Shows "We could not reach our server…" |
| Services page, Service detail, Footer | `GET /api/services` | Uses built-in data from `src/data/services.js` |
| Portfolio showcase, Case study page | `GET /api/projects` | Uses built-in data from `src/data/projects.js` |

The pages show the built-in data straight away and switch to the API data when it arrives.
The result is cached for the session, so the Footer and the pages share one request.

**Updating content:** services and projects now live in the database. Change them through the
backend's admin API (`/api/admin/services`, `/api/admin/projects`). The files in `src/data/`
are only a fallback. `impactMetrics`, `architectureFlow` and `engagementProcess` still come from
those files.

Relevant code:

```
src/api/client.js       axios instance (reads VITE_API_BASE_URL) + error parsing
src/api/cogniva.js      fetchServices(), fetchProjects(), submitContactEnquiry()
src/hooks/useCatalog.js useServices() / useProjects() hooks with fallback + caching
```

---

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server at http://localhost:5173 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally at http://localhost:4173 |
| `npm run lint` | Run ESLint |

---

## Project structure

```
CognivaSoftwares_Frontend/
├── index.html
├── package.json
├── vite.config.js
├── .env.example              API URL setting (copy to .env)
├── public/                   Static files served as-is (favicon, icons)
└── src/
    ├── main.jsx / App.jsx    App entry
    ├── routes/AppRoutes.jsx  All page routes
    ├── api/                  Backend client (axios)
    ├── hooks/                useServices / useProjects
    ├── pages/                Home, About, Services, ServiceDetail, Portfolio,
    │                         CaseStudy, Contact, ComingSoon, NotFound, legal/*
    ├── components/
    │   ├── layout/           Header, Footer, RootLayout
    │   ├── sections/         Home page sections (Hero, About, ServicesGrid)
    │   ├── about/            About page hub
    │   ├── experience/       Technology experience / architecture visuals
    │   ├── portfolio/        ProjectShowcase
    │   └── common/           ScrollReveal, ScrollToTop
    ├── data/                 Fallback content (services, projects, metrics)
    └── assets/               Images
```

### Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services`, `/services/:slug` | Services list / detail |
| `/portfolio`, `/portfolio/:slug` | Portfolio / case study |
| `/contact` | Contact |
| `/careers`, `/blog` | Coming soon |
| `/privacy-policy`, `/terms-of-service` | Legal |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| **Contact form: "We could not reach our server…"** | The backend isn't running or is on a different URL. Start it and check http://localhost:8080/actuator/health. If you use another port, set `VITE_API_BASE_URL` in `.env` and restart `npm run dev`. |
| **Browser console: `blocked by CORS policy`** | The backend doesn't allow this origin. Add your frontend URL (e.g. `http://localhost:5173`) to the backend's `CORS_ALLOWED_ORIGINS` and restart the backend. |
| **Contact form: "Too many messages…" (429)** | Backend rate limit (5 per 10 min per IP). Wait, or restart the backend in development. |
| **`.env` changes not applied** | Stop and re-run `npm run dev`. |
| **`npm install` errors / `EBADENGINE`** | Your Node.js is too old. Install Node 22 LTS and retry. If it still fails, delete `node_modules` and `package-lock.json`, then run `npm install` again. |
| **Port 5173 already in use** | Vite picks the next free port automatically (check the terminal). If so, add that URL to the backend's `CORS_ALLOWED_ORIGINS`. |
| **Services/Portfolio show old content** | They're falling back to `src/data/*` because the API call failed. Check the Network tab for the `/api/services` or `/api/projects` request. |

---

## Building & deploying

1. Set the production API URL, then build:

   ```bash
   # Windows PowerShell
   $env:VITE_API_BASE_URL="https://api.your-domain.com/api"; npm run build

   # macOS / Linux
   VITE_API_BASE_URL=https://api.your-domain.com/api npm run build
   ```

   (Or put `VITE_API_BASE_URL=...` in a `.env.production` file.)

2. Deploy the **`dist/`** folder to any static host (Netlify, Vercel, S3 + CloudFront, Nginx…).
3. Because this is a single-page app, configure the host to serve `index.html` for all routes
   (Netlify: `_redirects` with `/* /index.html 200`; Nginx: `try_files $uri /index.html;`).
4. On the backend, add your site's URL to `CORS_ALLOWED_ORIGINS`
   (e.g. `https://cognivasoftwares.com`).
