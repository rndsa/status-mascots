# Status Mascots — Animated SVG HTTP Status Library

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Status-Production%20Ready-00d992.svg)]()
[![Assets: 14 SVGs](https://img.shields.io/badge/Assets-14%20Animated%20SVGs-38bdf8.svg)]()
[![Format: Pure SVG + CSS](https://img.shields.io/badge/Format-Pure%20CSS%20Keyframes-ff70a6.svg)]()
[![Author: ren](https://img.shields.io/badge/Author-ren%20(%40rskl411_)-ff70a6.svg)](https://instagram.com/rskl411_)

> Production-ready collection of 14 cute animated vector SVG mascots mapped to HTTP status codes and API responses, featuring an interactive live preview playground and zero-dependency web embeds.

---

## ⚡ Kelebihan & Fitur Utama

* **14 Karakter Maskot Unik & Responsif**:
  * Meliputi respon sukses, client error, hingga server failure (`200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `418 Teapot`, `422 Unprocessable`, `429 Rate Limit`, `500 Server Error`, `502 Bad Gateway`, `503 Maintenance`).
* **Animasi Murni CSS Keyframes (Zero Dependency)**:
  * Seluruh animasi (geleng-geleng kepala, lompat gembira, uap teko, percikan kabel putus, kipas pendingin) tertanam langsung di dalam file SVG tanpa perlu JavaScript atau library animasi eksternal.
* **Astro Bot Geleng-Geleng (`409 Conflict`)**:
  * Karakter maskot Astro Bot dengan animasi realistis geleng-geleng kepala cepat (`headShake`), antena berkedip merah, dan tetesan keringat saat subdo/akun/resource sudah terpakai.
* **Tampilan Showcase SwiftUI / Cue by Manus**:
  * Dashboard interaktif dark-theme (`#090A0D`) dengan simulator live response, pencarian status code instan, dan preview payload JSON real-time.
* **Ringan & Instan di CDN**:
  * Rata-rata ukuran file hanya 1–2 KB per SVG, bisa di-embed langsung via tag `<img>`, SVG inline, maupun komponen React/Vue.

---

## ⚠️ Kekurangan & Batasan Sistem

* **Dukungan Render Gambar SVG Non-Browser**:
  * Beberapa image viewer offline lawas atau parser PDF statis mungkin tidak merender animasi CSS di dalam SVG (animasi tampil maksimal di browser modern, web apps, dan mobile webviews).
* **Efek Interaktif Terbatas pada `<img>`**:
  * Jika disisipkan menggunakan tag `<img src="...">`, animasi loop CSS tetap berjalan normal, namun event hover interaktif antar-layer memerlukan embedding via inline `<svg>` atau tag `<object>`.

---

## 🚀 Cara Pakai & Panduan Integrasi

### 1. Direct Embed via Tag HTML
Gunakan URL raw GitHub langsung di web frontend lu:

```html
<!-- 409 Conflict (Astro Bot Geleng-Geleng) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/409-conflict.svg" width="120" height="120" alt="409 Conflict" />

<!-- 200 OK (Happy Astro Bot) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/200-ok.svg" width="120" height="120" alt="200 OK" />

<!-- 429 Too Many Requests (Overheat Fan Bot) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/429-ratelimit.svg" width="120" height="120" alt="429 Rate Limit" />
```

### 2. Komponen React / Next.js

```jsx
export function StatusMascot({ code }) {
  const fileMap = {
    200: "200-ok.svg",
    400: "400-badrequest.svg",
    401: "401-unauthorized.svg",
    403: "403-forbidden.svg",
    404: "404-notfound.svg",
    409: "409-conflict.svg",
    429: "429-ratelimit.svg",
    500: "500-error.svg",
    503: "503-maintenance.svg"
  };

  const filename = fileMap[code] || "200-ok.svg";
  return (
    <img
      src={`https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/${filename}`}
      alt={`HTTP ${code}`}
      width={120}
      height={120}
    />
  );
}
```

### 3. Menjalankan Live Showcase Lokal

```bash
# Clone repository
git clone https://github.com/rndsa/status-mascots.git
cd status-mascots

# Jalankan server
node server.js
# Buka di browser: http://127.0.0.1:4848
```

---

## 📋 Katalog Maskot & HTTP Status Codes

| Status Code | Karakter | Perilaku & Animasi |
|---|---|---|
| `200 OK` | **Happy Astro Bot** | Nafas ngambang halus, kedip mata cyan `(^ ^)`, antena pulsing |
| `201 Created` | **Party Sprout Bot** | Topi pesta, lompat gembira, letupan confetti warna-warni |
| `204 No Content` | **Ghost Bot** | Hantu mengambang transparan, memudar halus naik-turun |
| `400 Bad Request` | **Puzzled Bot** | Miringin kepala penasaran, tanda tanya kuning melayang |
| `401 Unauthorized` | **Keyhole Guard Bot** | Visor gembok kuning-merah berkedip, shield pengaman |
| `403 Forbidden` | **Security Shield Bot** | Mata merah stern `(- -)`, sirine atas kepala, akses ditolak |
| `404 Not Found` | **Detective Bot** | Topi detektif tweed, kaca pembesar celingukan lirik kiri-kanan |
| `409 Conflict` | **GELENG-GELENG Bot** | Geleng-geleng kepala cepat (`headShake`), mata silang `(> <)`, keringat |
| `418 Teapot` | **Cute Teapot Bot** | Teko imut bersiul, kepulan uap hangat naik dari corong |
| `422 Unprocessable` | **Glitch Wire Bot** | Mata spiral bergetar, kabel ruwet merah, getaran glitch |
| `429 Rate Limit` | **Overheat Fan Bot** | Helm merah membara, kipas pendingin muter kencang, uap panas |
| `500 Server Error` | **Crash Smoke Bot** | Helm retak keluar asap, mata spiral pusing `(@ @)` |
| `502 Bad Gateway` | **Disconnected Plug Bot** | Dua ujung kabel terlepas dengan percikan api biru listrik |
| `503 Maintenance` | **Builder Bot** | Helm proyek kuning, memegang kunci inggris siap servis |

---

## 📄 Lisensi & Kontributor

* **Lisensi**: MIT License
* **Author**: [ren](https://instagram.com/rskl411_) • GitHub: [@rndsa](https://github.com/rndsa)
* Seluruh hak cipta dilindungi (c) 2026 ren.
