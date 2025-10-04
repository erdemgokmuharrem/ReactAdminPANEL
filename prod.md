Project name: React Admin Pro — Full-featured Admin Panel Template
Goal: Her ihtiyaca uygun, enterprise-ready, yüksek kalite bir React admin panel template’i. Müşteri alan kullanıcı sadece kendi verisini/ayarını girsin, prodüksiyona alabilsin.

Hedef pazar / kullanıcı: SaaS kurucuları, startup’lar, internal tools ekipleri, ajanslar. Kullanıcı: frontendi entegre eden geliştirici (non-designer).

Kapsam / Özellikler (minimum viable + premium):

Tech stack: React (v18+), TypeScript, Vite/Next tercih belirtilebilir (default: Vite), React Router, Zustand/Redux Toolkit (state), React Query / TanStack Query, i18n (react-i18next), TailwindCSS + component library (Headless UI), Formik/React Hook Form, Yup/Zod validation.

Layouts: responsive dashboard layout, sidebar, topbar, breadcrumbs, role-based access control (RBAC).

Auth: email+password flow örneği (mock), JWT integration hooks, protected routes.

Users & Roles CRUD (admin UX).

Settings page (application + user settings).

Multi-tenant-ready structure (namespacing, env flags).

Analytics & Metrics: Chart components (recharts), sample KPIs.

Tables: server-side pagination, filtering, sorting, column visibility, CSV export.

Forms: complex nested forms, dynamic fields.

File uploads (S3-compatible adapter mock).

Notifications: toast + in-app notifications.

Real-time: sample websocket hook for live updates.

Testing: unit tests (Jest/React Testing Library), E2E tests (Playwright).

Accessibility: a11y checks, keyboard navigation.

Theming: light/dark + custom theme tokens.

Internationalization: English + Turkish sample.

Docs & Demos: README, setup guide, storybook (component preview).

CI/CD: GitHub Actions workflows (lint, test, build).

Sample data seed script and docker-compose for dev services (if any).

Acceptance criteria:

yarn dev veya npm run dev çalıştığında localhost üzerinde tam çalışan dashboard açılmalı.

Auth korunmalı; protected route testleri geçmeli.

CRUD örneği (Users) HTTP/mock server üzerinden tam çalışmalı.

Storybook ile component library çalışmalı.

README.md: kurulum, env, build, deploy (Netlify/Vercel), bileşen listesi, how-to customize.

Test coverage >= %60 (örnek). Playwright e2e basic flows çalışmalı.

Mimari öneri:

Monorepo değil (tek repo). src/ altında components, hooks, services, pages, layouts, i18n, tests.

API adapter: services/api.ts — axios wrapper.

Feature-first file structure önerisi (ör: features/users/*).

Deliverables / Dosyalar:

Tam çalışan template repo (Vite + React + TS).

README.md, CONTRIBUTING.md, CHANGELOG.md.

prod.md, rules.md (repo root).

Storybook config + sample stories.

GitHub Actions workflows.

Demo deploy link instructions.

Milestones / Checklist (agent tarafından tamamlanacak)

Repo scaffold (Vite + TS + Tailwind) ✔

Base layout + responsive sidebar/topbar ✔

Auth mock + protected routes ✔

Users CRUD (list, create, edit, delete) ✔

Tables + filters + export ✔

Forms + validation ✔

Theming + i18n ✔

Storybook + components ✔

Tests (unit + e2e) ✔

README + docs + sample env ✔

CI workflows ✔

Final QA checks + accessibility audit ✔

Risk / Notes:

Real auth providers (Google/Apple) not included here — template integrates easily via adapters.

For production-ready needs, user should plug their backend and secrets.