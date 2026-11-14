# git.soycelik.com

Kişisel site: kısa tanıtım sayfası (`/`), portfolyo görünümü (`/home`) ve CV (`/cv`).
Next.js 15 (App Router) + React 19 + Motion-Primitives, **statik export**, GitHub
Pages üzerinde yayında.

## Sayfalar

| Yol | İçerik |
|---|---|
| `/` | Kısa tanıtım (tek ekran) |
| `/cv` | Tam CV — deneyim ve eğitim; tarih/unvan için **tek doğruluk kaynağı** (`app/cv/cv-page.tsx`) |
| `/home` | Portfolyo görünümü; içerik `app/(site)/data.ts` (projeler, deneyim, sosyal linkler) |
| `/sitemap.xml`, `/robots.txt` | `lib/constants.ts` içindeki `WEBSITE_URL`'den üretilir |

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # statik export -> out/
```

## Yayın

`main`'e push `.github/workflows/deploy.yml`'i tetikler: `npm run build` → `out/`
GitHub Pages'e yüklenir. Yayın adresi `git.soycelik.com`; canonical/OG/sitemap
adresleri `lib/constants.ts` → `WEBSITE_URL` üzerinden gelir (başka bir alana
taşınırsa tek yerde değiştirilir).

## Notlar

- Repo bir zamanlar "Nim" adlı açık kaynak kişisel site şablonundan türetildi.
  Şablonun örnek içeriği (yabancı bir geliştiricinin projeleri, iş geçmişi,
  `your@email.com`) ve Vercel/Figma kurulum belgeleri temizlendi.
- Blog yok: yayınlanmış kişisel yazı olmadığı için şablonun örnek MDX yazıları ve
  `/blog` rotası kaldırıldı.
- Kardeş repolar (`cv-2`, `readcv`, `noir`) aynı kişisel içeriğin farklı
  tasarımları; yayındaki kanonik sürüm bu repo.
