# Status Mascots — 11 Characters Animated SVG Library

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Status-Production%20Ready-00d992.svg)]()
[![Assets: 121 Animated SVGs](https://img.shields.io/badge/Mascots-11%20Characters%20%C3%97%2011%20Codes-38bdf8.svg)]()
[![Format: Pure SVG + CSS](https://img.shields.io/badge/Format-Pure%20CSS%20Keyframes-ff70a6.svg)]()
[![Author: ren](https://img.shields.io/badge/Author-ren%20(%40rskl411_)-ff70a6.svg)](https://instagram.com/rskl411_)

> Koleksi 11 karakter maskot animasi vektor SVG mandiri untuk respon kode HTTP dan API. Setiap karakter memiliki 11 variasi ekspresi status lengkap (total 121 file SVG animasi) tanpa dependensi eksternal, bertenaga animasi murni CSS `@keyframes` interaktif.

---

## ⚡ Kelebihan & Fitur Utama

* **11 Karakter Lengkap × 11 Status HTTP (121 File SVG Animasi)**:
  Setiap karakter memiliki 11 variasi status lengkap: `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `422 Unprocessable`, `429 Rate Limit`, `500 Server Error`, dan `503 Maintenance`.
  1. **Astro Bot (Robot Chibi)**: Visor LED cyan dinamis, antena pegas, senter sorot scanning, kipas pendingin berputar kencang, dan helm proyek kunci pas.
  2. **Boofy (Cyber Ghost)**: Hantu spektral melayang lembut, permen melayang, toples kaca perangkap, chromatic aberration RGB glitch, dan kemoceng bersih-bersih server.
  3. **Paws (Cyber Neko)**: Kucing oren manis, bola benang bercahaya, ngintip dari kardus 404, terlilit kabel server merah, dan rebahan flat habis zoomies.
  4. **Jelly (Slime Blob)**: Slime hijau kenyal membal, membelah diri melahirkan baby slime, amblas ke lubang lantai, pixel Minecraft glitch, dan kerucut lalu lintas oranye.
  5. **Rexy (Baby T-Rex)**: Dino hijau melompat ngunyah daun, menetas dari cangkang telur, tangan kependekan gak nyampe garuk kepala, 8-bit Google Chrome dino, dan helm proyek palu.
  6. **Quack (Debug Rubber Duck)**: Bebek kacamata hitam berenang di air tenang, anak bebek mengekor, nyelam pantat ke atas, tersedot pusaran air, dan topi kapten nakhoda.
  7. **Cosmo (Alien in UFO)**: UFO melayang sinar traktor menculik bintang emas, pertahanan perisai planet, papan rahasia Area 51, distorsi lubang cacing, dan bengkel docking antariksa.
  8. **Muggy (Caffeine Mug)**: Cangkir kopi hangat mengepul, latte art hati, ketuker garam kecut, decaf terlarang, getar hebat over-caffeinated, dan cangkir keramik pecah.
  9. **Kuma (Honey Bear)**: Beruang cokelat makan madu manis, sarang lebah segar, kepala nyangkut di toples, semburan api makan cabai, dan hibernasi pulas di goa musim dingin.
  10. **Nimbus (Fluffy Cloud)**: Awan empuk di balik pelangi cerah, matahari emas tersenyum, penangkal petir, gravitasi terbalik hujan ke atas, dan spons wiper mengelap langit.
  11. **Chimp (Code Monkey)**: Monyet coding ngetik cepat 200 OK, piala pisang emas git push, garuk kepala liat sintaks error, keyboard terbakar 1000 WPM, dan server berasap ngumpet di kolong meja.
* **Animasi Fisika CSS Murni (Zero Dependency)**:
  * Squash & stretch, inersia pegas, blinking cadence natural, rotasi, partikel confetti, dan kabut asap.
  * Murni embedded CSS di dalam file SVG tanpa butuh Lottie, GIF, JS, atau canvas runtime.
* **Desain UI Showcase Bergaya Cue by Manus**:
  * Dark slate pekat (`#0c0d12`), rounded cards 22px (`#141722`), border 1px subtle, pill selector 11 karakter responsif, dan embed code drawer 1-klik.

---

## ⚠️ Kekurangan & Batasan Sistem

* **Viewer Gambar Statis Non-Browser**:
  * Aplikasi desktop pembuka gambar offline lawas atau PDF engine mungkin hanya menampilkan frame statis pertama tanpa merender loop animasi CSS `@keyframes`.
* **Dimensi Eksternal Container**:
  * Disarankan menetapkan atribut `width` dan `height` (misal `120x120` atau `160x160`) saat menyematkan tag `<img>` agar proporsional pada container fleksibel.

---

## 🚀 Cara Pakai & Panduan Integrasi

### 1. Direct Embed via Tag HTML
Format direct URL: `https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/<character>/<status>.svg`

```html
<!-- Astro Bot (409 Conflict) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/robot/409-conflict.svg" width="120" height="120" alt="Robot 409 Conflict" />

<!-- Boofy Ghost (200 OK) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/ghost/200-ok.svg" width="120" height="120" alt="Ghost 200 OK" />

<!-- Paws Cyber Cat (404 Not Found) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/cat/404-not-found.svg" width="120" height="120" alt="Cat 404 Not Found" />

<!-- Chimp Monkey (500 Server Error) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/monkey/500-internal-error.svg" width="120" height="120" alt="Monkey 500 Server Error" />
```

### 2. Komponen Dinamis React / Next.js

```jsx
const STATUS_MAP = {
  200: "200-ok.svg",
  201: "201-created.svg",
  400: "400-bad-request.svg",
  401: "401-unauthorized.svg",
  403: "403-forbidden.svg",
  404: "404-not-found.svg",
  409: "409-conflict.svg",
  422: "422-unprocessable.svg",
  429: "429-rate-limit.svg",
  500: "500-internal-error.svg",
  503: "503-maintenance.svg",
};

export function StatusMascot({ character = "robot", code = 200, size = 120 }) {
  const filename = STATUS_MAP[code] || "200-ok.svg";
  const src = `https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/${character}/${filename}`;

  return (
    <img 
      src={src} 
      width={size} 
      height={size} 
      alt={`${character} status ${code}`}
      style={{ userSelect: "none" }}
    />
  );
}
```

---

## 📊 Matriks Karakter & Status

| Karakter | ID | Jumlah Respon | Gaya Visual Utama |
|---|---|---|---|
| **Astro Bot** | `robot` | 11 Status | Robot Chibi Putih, Visor Kaca LED Cyan, Antena Pegas |
| **Boofy** | `ghost` | 11 Status | Cyber Ghost Ungu Muda, Halo Lembut, Ekspresi Manis |
| **Paws** | `cat` | 11 Status | Kucing Oren Manis, Ekor Goyang, Telinga Sensitif |
| **Jelly** | `blob` | 11 Status | Slime Hijau Glossy Membal, Efek Squash & Stretch |
| **Rexy** | `dino` | 11 Status | Baby T-Rex Hijau, Tangan Pendek, Cangkang Telur |
| **Quack** | `duck` | 11 Status | Debugging Rubber Duck Kuning, Riak Air, Kacamata Hitam |
| **Cosmo** | `alien` | 11 Status | Alien Hijau dalam Piring Terbang UFO, Sinar Traktor |
| **Muggy** | `coffee` | 11 Status | Cangkir Kopi Keramik Hangat, Uap Aroma, Latte Art |
| **Kuma** | `bear` | 11 Status | Beruang Cokelat Pipi Bulat, Toples Madu, Sarang Lebah |
| **Nimbus** | `cloud` | 11 Status | Awan Empuk Putih-Biru, Pelangi Melengkung, Badai Petir |
| **Chimp** | `monkey` | 11 Status | Code Monkey Cokelat, Keyboard Laptop, Git Push Piala |

---

## 📄 Lisensi & Kredit

* Lisensi: [MIT License](LICENSE)
* Author: **ren** ([@rskl411_](https://instagram.com/rskl411_))
* GitHub Repo: [rndsa/status-mascots](https://github.com/rndsa/status-mascots)
