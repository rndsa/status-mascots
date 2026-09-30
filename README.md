# Status Mascots — 11 Characters Animated SVG Library

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Status-Production%20Ready-00d992.svg)]()
[![Assets: 11 Characters](https://img.shields.io/badge/Mascots-11%20Characters-38bdf8.svg)]()
[![Format: Pure SVG + CSS](https://img.shields.io/badge/Format-Pure%20CSS%20Keyframes-ff70a6.svg)]()
[![Author: ren](https://img.shields.io/badge/Author-ren%20(%40rskl411_)-ff70a6.svg)](https://instagram.com/rskl411_)

> Koleksi 11 karakter maskot animasi vektor SVG mandiri untuk merespon kode status HTTP dan API. Tiap karakter memiliki set ekspresi unik untuk mewakili state aplikasi tanpa dependensi eksternal.

---

## ⚡ Kelebihan & Fitur Utama

* **11 Karakter Maskot Unik & Kaya Ekspresi**:
  1. **Astro Bot (Robot Chibi)**: 10 status lengkap (`200`, `201`, `400`, `401`, `403`, `404`, `409`, `429`, `500`, `503`).
  2. **Boofy (Cyber Ghost)**: Hantu imut melayang dengan ekspresi tersipu, memudar, nangis air mata anime, dan teriak kaget.
  3. **Paws (Cyber Neko)**: Kucing oren dengan ekor bergoyang, ngintip dari kardus 404, mendesis cakar saat conflict, dan terlilit kabel merah.
  4. **Jelly (Slime Blob)**: Slime hijau kenyal membal-membal, goyang miring merah panik, dan lumer gepeng jadi genangan.
  5. **Rexy (Baby T-Rex)**: Dino hijau melompat gembira, garuk kepala gak nyampe karena tangan kependekan, dan mengaum kesal.
  6. **Quack (Debugging Rubber Duck)**: Bebek kacamata hitam berenang santai, nyelam pantat ke atas, dan kwek-kwek marah paruh terbuka.
  7. **Cosmo (Alien in UFO)**: Alien hijau di piring terbang, tersesat di luar angkasa, dan UFO oleng putar-putar sirine merah.
  8. **Muggy (Caffeine Mug)**: Cangkir kopi hangat mengepul, kopi tumpah muncrat ke mana-mana, dan getar hebat over-caffeinated.
  9. **Kuma (Honey Bear)**: Beruang cokelat makan madu, hibernasi di goa kosong, dan telapak tangan melambai NO-NO.
  10. **Nimbus (Fluffy Cloud)**: Awan empuk senyum matahari, awan tertiup angin pudar, dan badai petir kilat menyambar.
  11. **Chimp (Code Monkey)**: Monyet makan pisang jempol mantap, tutup telinga saat error, dan banting laptop terbelah dua.
* **Animasi Murni CSS Keyframes (Zero Dependency)**:
  * Semua gerakan tertanam murni di dalam kode SVG. Tidak membutuhkan JavaScript, Lottie, GIF berat, maupun library eksternal.
* **Tampilan Showcase Cue by Manus**:
  * Clean dark slate (`#0c0d12`), rounded cards 22px, selector pil interaktif, dan simulator JSON real-time.

---

## ⚠️ Kekurangan & Batasan Sistem

* **Dukungan Parser Statis Non-Browser**:
  * Aplikasi viewer gambar offline lawas atau PDF engine mungkin hanya menampilkan frame pertama SVG tanpa menjalankan loop animasi CSS `@keyframes`.
* **Ukuran Skala pada Container Eksternal**:
  * Agar proporsi terjaga tajam dan responsif, disarankan menetapkan atribut `width` dan `height` (contoh: 120x120) saat menyematkan tag `<img>`.

---

## 🚀 Cara Pakai & Panduan Integrasi

### 1. Direct Embed via Tag HTML
Gunakan URL raw GitHub dengan format `mascots/<character>/<status>.svg`:

```html
<!-- Astro Bot (409 Conflict) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/robot/409-conflict.svg" width="120" height="120" alt="Robot 409 Conflict" />

<!-- Boofy Ghost (200 OK) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/ghost/200-ok.svg" width="120" height="120" alt="Ghost 200 OK" />

<!-- Paws Cyber Cat (404 Not Found) -->
<img src="https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/cat/404-not-found.svg" width="120" height="120" alt="Cat 404 Not Found" />
```

### 2. Komponen Dinamis React / Next.js

```jsx
export function StatusMascot({ character = "robot", code = 200 }) {
  const getFile = (char, status) => {
    if (status === 200) return "200-ok.svg";
    if (status === 404) return "404-not-found.svg";
    if (status === 409) return "409-conflict.svg";
    if (status === 500) return "500-internal-error.svg";
    return "200-ok.svg";
  };

  const filename = getFile(character, code);
  const src = `https://raw.githubusercontent.com/rndsa/status-mascots/main/mascots/${character}/${filename}`;

  return (
    <img 
      src={src} 
      width={120} 
      height={120} 
      alt={`${character} status ${code}`}
      style={{ userSelect: "none" }}
    />
  );
}
```

---

## 📄 Lisensi & Kredit

* Lisensi: [MIT License](LICENSE)
* Author: **ren** ([@rskl411_](https://instagram.com/rskl411_))
* GitHub Repo: [rndsa/status-mascots](https://github.com/rndsa/status-mascots)
