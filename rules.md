Repo rules — React Admin Pro

Branching

main = production, protected.

develop = integration branch.

Feature branches: feat/<short-desc>, bugfix: fix/<short-desc>, chore: chore/<short-desc>.

Commits & PRs

Commit mesajı: Conventional Commits: feat:, fix:, docs:, chore:, refactor:, test:.

PR açıklamasında: yapılanlar, ilgili issue, nasıl test edilir (steps).

PR review: en az 1 approve + passing CI gereklidir.

Code style

TypeScript strict mode ON.

ESLint + Prettier enforced. npm run lint geçmeli.

No any unless bir not gerekir ve comment ile açıklanmalı.

Components üstünde prop interface tanımlanacak, JSDoc kısa açıklama eklenecek.

Testing

Unit tests: Jest + RTL. Yeni feature için test yazılmalı (kritik path).

E2E: Playwright minimal akış (login, CRUD) sağlanmalı.

Security & Secrets

.env dosyaları commit edilmez. .env.example olmalı.

API keys ve secrets GitHub Secrets veya environment vars olmalı.

XSS ve injection için sanitize işlemleri frontend tarafında gösterilmeli.

Performance

Lazy load routes / code splitting.

Büyük paketlerin (charting, editor) dynamic import ile yüklenmesi.

Accessibility

aria-* attribute kullanımı zorunlu uygun yerlerde.

Keyboard navigasyon kontrolü.

Docs

README must contain install, dev, build, test, storybook, deploy.

Component docs -> Storybook stories.

Release

Semver. Release PR + CHANGELOG update.

Support

Issue templates: bug, feature request, docs.

Maintainer response target: 72 hours.