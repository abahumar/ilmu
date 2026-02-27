# ilmu.my (MVP)

Laman statik untuk kurasi video ilmu Islam berasaskan embed YouTube.

## Status semasa

- Projek kini menggunakan Astro sepenuhnya.
- Semua route utama tersedia melalui Astro di folder `src/pages`.
- URL utama kini menggunakan route Astro seperti `/carian`, `/kategori`, `/tonton`.

## Jalankan projek (Astro)

1. Pasang dependency:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

3. Build production:

```bash
npm run build
```

## Ciri MVP

- Halaman utama + kategori + carian
- Halaman tonton menggunakan YouTube embed (`youtube-nocookie.com`)
- Halaman laporan kandungan (simpanan localStorage)
- Halaman `Terma`, `Privasi`, `Penafian`
- Sedia deploy ke GitHub Pages

## Struktur ringkas

- `src/pages/index.astro` — halaman utama versi Astro
- `src/pages/carian.astro` — carian klien (`?q=`)
- `src/pages/kategori.astro` — senarai video ikut kategori (`?k=`)
- `src/pages/tonton.astro` — pemain video (`?v=`)
- `src/pages/lapor.astro` — laporan kandungan
- `src/pages/terma.astro`, `privasi.astro`, `penafian.astro` — halaman legal
- `src/layouts/BaseLayout.astro` — layout global Astro
- `src/data/videos.js` — dataset utama (module)
- `src/styles/global.css` — gaya global Astro
- `public/CNAME` — domain custom untuk GitHub Pages

## Deploy GitHub Pages

1. Push repo ke GitHub (`main` branch).
2. Di GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Workflow `.github/workflows/pages.yml` akan deploy automatik.
4. Pastikan DNS domain `ilmu.my` menunjuk ke GitHub Pages.

## Nota penting

- Laman ini tidak menyimpan/rehos video YouTube.
- Gunakan hanya saluran dipercayai dalam `src/data/videos.js`.
- Untuk fasa seterusnya (API sync), pindah ke platform yang menyokong backend/serverless.


