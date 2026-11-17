# TAKIP - cv-2
> Son guncelleme: 2026-11-14 · Bu dosya projenin canli durum kaydidir. Her calisma oturumu sonunda guncellenir.

## Ozet tablo

| Tur | Asama | Canli mi | Karar onerisi | Son aktivite tarihi | Stack |
|---|---|---|---|---|---|
| icerik (kisisel CV / portfolyo sayfasi) | canli | Evet: https://cv-2.soycelikihsan.workers.dev (2026-11-14'te HTTP 200) | birlestir (`cv` ile tek asil CV'ye indir) | 2026-10-10 | TanStack Start + React 19 + TypeScript + Tailwind 4 + UIArc, Vite 8, Nitro (cloudflare-module), bun |

## 1. Ne ise yarar, kimin icin
- Ihsan Soycelik'in tek sayfalik Ingilizce CV / portfolyo acilis sayfasi (Product Designer).
- Icerik: giris, 7 deneyim kaydi, egitim, e-posta/telefon/LinkedIn baglantilari, bolum navigasyonu, kalici acik/koyu tema.
- Hedef kitle: ise alimcilar, musteriler. Tek kullanici/sahip.

## 2. Hedef ve "bitti" tanimi
- Yazili bir hedef yok (README sadece ne oldugunu anlatiyor). Cikarim: paylasilabilir, SEO'su duzgun, guncel bir CV sayfasi.
- "Bitti" onerisi: (1) hangi CV'nin asil oldugu karari verilmis, (2) kalici alan adi bagli (workers.dev yerine), (3) og:image ve PDF indirme var, (4) deploy adimi repoda yazili.

## 3. Mevcut asama
Calisan:
- Sayfa canli ve SSR ile donuyor (200, baslik "Ihsan Soycelik | Product Designer").
- SEO temeli: title, description, og etiketleri, canonical, Person JSON-LD, robots.txt, sitemap.xml.
- Tema secimi (localStorage), skip-link, 404 ve hata sayfalari, SSR hata sarmalayici (`src/server.ts`, `src/lib/error-capture.ts`).

Eksik:
- Deploy ayari repoda yok: `wrangler.*` dosyasi, CI, deploy script'i yok. Nasil yayinlandigi bilinmiyor (ilk commit'te build ciktisi `.output/server/wrangler.json` vardi, sonra silindi).
- Canli surumun son commit (c2b844f, UIArc tasarimi) ile ayni oldugu dogrulanmadi.
- og:image / sosyal paylasim gorseli yok. PDF CV yok. Test yok.
- Icerik `src/routes/index.tsx` icine gomulu (ayri veri dosyasi yok).

## 4. Hedefe giden engeller
- Ayni is icin uc repo var (`cv`, `cv-2`, `readcv`); `readcv` README'si asil olarak `cv`'yi gosteriyor. cv-2'nin rolu belirsiz.
- Kalici alan adi yok; URL'ler `cv-2.soycelikihsan.workers.dev` olarak 3 yerde sabit (`src/routes/__root.tsx`, `public/robots.txt`, `public/sitemap.xml`).
- Deploy sureci belgesiz; yeni bir makinede tekrar yayinlamak tahmine kaliyor.

## 5. Acik isler ve verilmemis kararlar
- Karar: asil CV hangisi? `cv` (Next.js, git.soycelik.com/cv) mi, `cv-2` (yeni tasarim, daha yeni) mi?
- Karar: kalici alan adi (ornek: soycelik.com alt yolu / alt alan adi).
- Is: kullanilmayan bagimliliklari temizle (asagida, bolum 14).
- Is: `package.json` adi hala `tanstack_start_ts` (sablon adi).
- Acik PR: yok. Acik issue: yok. Koda yazilmis TODO/FIXME: yok.

## 6. Kritik buglar
- Bilinen kritik bug yok. Build ve lint calistirilmadi (bagimlilik kurulmadi) - dogrulanmadi.
- Kucuk: `components.json` `@/lib/utils`, `@/components/ui`, `@/hooks` yollarini isaret ediyor ama bu dosya/klasorler yok; yeni shadcn bileseni eklenince import kirilabilir.
- Kucuk: `src/components/arc/motion-tokens.ts` ve `src/components/arc/lib/motion-tokens.ts` cift (ikincisi sadece yeniden ihrac ediyor).

## 7. Kritik guvenlik bulgulari
- Commit edilmis gizli anahtar / token / .env bulunmadi (tum gecmisteki dosya adlari tarandi). `.gitignore` `.env*` kapsiyor.
- Kisisel veri: telefon numarasi ve e-posta sayfada ve JSON-LD'de acik (`src/routes/__root.tsx`, `src/routes/index.tsx`), `robots` "index, follow". CV icin bilincli olabilir; spam/kazima riski var. Repo private ama site herkese acik.
- Guvenlik basliklari yok: canli yanitta CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy gorulmedi. Statik icerik icin dusuk risk.
- `src/routes/__root.tsx` icinde `dangerouslySetInnerHTML` ile satir ici tema script'i var; sabit metin, kullanici girdisi yok - risk yok, ama siki bir CSP eklenirse nonce/hash gerekir.
- Sunucu fonksiyonu, form, veritabani, auth yok; saldiri yuzeyi cok kucuk. CSRF ara katmani `src/start.ts` icinde acik.
- Bagimliliklar guncel (React 19, Vite 8, TanStack Start 1.168). `nitro` beta surumde sabit (`3.0.260603-beta`). `bunfig.toml` 24 saatlik surum yasi korumasi iceriyor (iyi). Zafiyet taramasi calistirilmadi - dogrulanmadi.

## 8. Gelecek ve potansiyel
- Tek asil CV sitesi olabilir: en yeni tasarim ve en guncel stack bu repoda.
- Eklenebilir: PDF indirme, og:image, TR/DE dil surumu, proje/vaka calismasi bolumu.
- Tek sayfa statik icerik icin SSR + Nitro + Workers fazla; statik cikti da yeterli olur.

## 9. Tur ve sahiplik
- Tur: icerik (kisisel site). Sahip: ihsansoycelik. Repo: PRIVATE.
- Kaynak: Lovable sablonu (`tanstack_start_ts_current`) ile baslatilmis; Lovable iskelesi 2026-09-05'te temizlenmis. Commit yazarlari arasinda "Playground Developer" (uretici arac) var.

## 10. Canli ortam ve maliyet
- Canli: https://cv-2.soycelikihsan.workers.dev (Cloudflare Workers, worker adi `cv-2`, `nodejs_compat`).
- Ozel alan adi: yok. Deploy yontemi: bilinmiyor (repoda ayar yok).
- Maliyet: Workers ucretsiz katmani icinde olmasi beklenir - dogrulanmadi.
- Dis istek: Google Fonts (Geist, Inter).

## 11. Kopya / ortusen repolar
- `cv`: Next.js 15 portfolyo + /cv sayfasi + blog, GitHub Pages deploy (git.soycelik.com/cv). Son aktivite 2026-08-28. `readcv` README'sine gore asil repo bu.
- `readcv`: Read.cv gorunumlu statik HTML deneme; kendi README'si "asil degil" diyor. Son aktivite 2026-09-07.
- `cv-2`: ayni icerigin en yeni tasarimi, en son guncellenen (2026-10-10). Kod paylasimi yok.
- `self`: kimlik/brief metinleri (CV icerigi icin kaynak olabilir), kod ortusmesi yok.
- Asil: yazili kayda gore `cv`; fiilen en guncel olan `cv-2`. Karar verilmemis.

## 12. Nasil calistirilir, build/test durumu
```sh
bun install
bun run dev      # http://localhost:8080
bun run build    # Nitro cloudflare-module ciktisi (.output/)
bun run lint
```
- Build: calistirilmadi - dogrulanmadi. Lint: calistirilmadi. Test: yok. CI: yok.
- Deploy komutu belgelenmemis (tahmin: build sonrasi `.output` icinden wrangler ile; dogrulanmadi).

## 13. Yarim kalan is
- Branch: sadece `master` (origin ile esit). Baska branch yok.
- PR / issue: yok. TODO/FIXME: yok.
- Commit edilmemis yerel degisiklik: yok (bu dosya haric).
- Yarim gorunen: sablondan kalan kullanilmayan bagimliliklar ve `components.json` yollari.

## 14. Dis bagimliliklar ve lisans
- Lisans dosyasi yok (private kisisel repo).
- Calisma zamani: Cloudflare Workers, Google Fonts.
- UIArc bilesenleri shadcn kaydindan (`https://uiarc.dev/r/`), ucretsiz Button ve ThemeSwitch; UIArc lisans kosullari kontrol edilmedi - dogrulanmadi.
- Sablondan kalan, kodda kullanilmadigi gorunen paketler: ~27 `@radix-ui/*`, `recharts`, `react-hook-form`, `@hookform/resolvers`, `zod`, `cmdk`, `vaul`, `sonner`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `date-fns`. (`src/` altinda `components/ui` yok.) Tek tek import taramasi yapilmadi - silmeden once dogrula.

## 15. Gelir / musteri baglantisi
- Dogrudan gelir yok. Dolayli: is basvurusu ve musteri kazanimi icin vitrin.

## 16. Karar onerisi
**birlestir.** Uc CV reposu ayni isi yapiyor. cv-2 en yeni tasarim ve canli; `cv` ise yazili "asil". Birini asil sec, kalici alan adini ona bagla, digerlerini arsivle. Oneri: tasarim tercih ediliyorsa cv-2 asil olsun, `cv` icindeki blog gerekiyorsa tasinsin; `readcv` arsivlensin.

## 17. Siradaki 3 adim
1. Asil CV kararini ver (`cv` vs `cv-2`) ve kaybedeni + `readcv`'yi arsivle; README'lere not dus. (0,5 saat)
2. Deploy'u repoya yaz: `wrangler` ayari + README'ye deploy komutu; kalici alan adini bagla ve 3 dosyadaki sabit URL'yi guncelle. (1-2 saat)
3. Temizlik: kullanilmayan bagimliliklari sil, paket adini duzelt, `components.json` yollarini onar, og:image ekle; `bun run build` + `lint` ile dogrula. (1-2 saat)

## 18. Agent gunlugu
En yeni kayit en ustte. Her oturum sonunda bir kayit ekle: tarih, agent, ne yapildi, nerede kalindi, siradaki plan, onemli bulgular.

### 2026-11-14 - Claude (ilk inceleme)
- Yapilan: repo incelendi, bu dosya olusturuldu. Git gecmisi (6 commit, 2026-08-27 → 2026-10-10), branch/PR/issue, tum gecmis dosya adlari ve canli URL (HTTP 200) kontrol edildi.
- Kalinan yer: kod degisikligi yapilmadi; build/lint calistirilmadi (bagimlilik kurulmadi).
- Siradaki plan: bolum 17'deki 3 adim; once asil CV karari.
- Onemli bulgular: site canli ama deploy ayari repoda yok; gizli anahtar sizintisi yok; telefon/e-posta herkese acik ve indekslenebilir; `cv` ve `readcv` ile ortusuyor; sablondan kalan cok sayida kullanilmayan bagimlilik var.
