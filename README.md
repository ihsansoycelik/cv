# cv

[git.soycelik.com](https://git.soycelik.com) sitesinin kaynak kodu. Next.js 15 ile yazıldı, statik export
olarak GitHub Pages'te yayında.

| Yol | İçerik |
|---|---|
| `/` | Kısa tanıtım |
| `/home` | Portfolyo (`app/(site)/data.ts`) |
| `/cv` | CV (`app/cv/cv-page.tsx`) |

## Geliştirme

```bash
npm install
npm run dev
npm run build    # out/
```

`main`'e yapılan her push siteyi yeniden yayınlar. Alan adı `lib/constants.ts` içindeki
`WEBSITE_URL`'den gelir.

`v2/` eski Vite sürümüdür. İlk sürüm Nim kişisel site şablonundan türetildi.
