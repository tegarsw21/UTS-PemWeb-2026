# ðŸŒ Portofolio Website â€“ UTS Pemrograman Web

**Matakuliah:** Pemrograman Web  
**Program Studi/Semester:** Sarjana Terapan Manajemen Informatika / 3  
**Dosen:** Ari Kurniawan, S.Kom., M.T. & Faris Abdi El Hakim, S.Kom., M.Tr.Kom.

---

## ðŸ“Œ Deskripsi Proyek

Website portofolio personal yang dibuat sebagai tugas **Ujian Tengah Semester (UTS) Pemrograman Web**. Website ini dibangun menggunakan **HTML, CSS, dan JavaScript** murni (vanilla) tanpa framework tambahan. Tujuannya adalah untuk mendemonstrasikan kemampuan dalam membuat halaman web interaktif yang mencakup struktur HTML yang baik, desain CSS yang estetis, dan interaksi JavaScript yang fungsional.

---

## ðŸ“‚ Struktur File

```
/
â”œâ”€â”€ index.html       â†’ Halaman Beranda
â”œâ”€â”€ tentang.html     â†’ Halaman Tentang Kami
â”œâ”€â”€ kontak.html      â†’ Halaman Kontak
â”œâ”€â”€ style.css        â†’ File CSS (semua styling)
â”œâ”€â”€ script.js        â†’ File JavaScript (semua interaksi)
â”œâ”€â”€ avatar.png       â†’ Foto profil
â””â”€â”€ README.md        â†’ Dokumentasi proyek ini
```

---

## ðŸš€ Cara Membuka Website

### Lokal (Tanpa Hosting)
1. Download atau clone repositori ini
2. Buka file `index.html` langsung di browser (Google Chrome / Firefox / Edge)
3. Klik kanan â†’ "Open with" â†’ Browser pilihan Anda

### Via GitHub Pages (Hosting)
Akses website melalui link GitHub Pages:  
ðŸ”— **[https://username.github.io/nama-repo](https://username.github.io/nama-repo)**

---

## ðŸ“„ Halaman-Halaman Website

### 1. ðŸ  Beranda (`index.html`)
Halaman utama yang menampilkan:
- **Hero Section** dengan nama, deskripsi singkat, dan tombol aksi
- **Foto profil** dengan tombol Sembunyikan/Tampilkan Foto
- **Section Keahlian** â€“ diisi secara dinamis menggunakan DOM Manipulation (`createElement`, `appendChild`)
- **Section Proyek Terbaru** â€“ menampilkan 3 kartu proyek dengan hover effect

### 2. ðŸ‘¤ Tentang Kami (`tentang.html`)
Halaman profil lengkap yang menampilkan:
- Foto profil dengan tombol **Sembunyikan/Tampilkan Foto** (DOM Manipulation)
- Deskripsi diri dan informasi pribadi (nama, prodi, universitas, semester, email)
- **Progress Bar Keahlian** dengan animasi CSS + JavaScript (HTML 85%, CSS 78%, JS 65%, jQuery 55%)
- **Timeline Pengalaman & Pendidikan**

### 3. ðŸ“¬ Kontak (`kontak.html`)
Halaman kontak yang menampilkan:
- Informasi kontak (email, lokasi, universitas)
- **Form Kontak** lengkap dengan validasi JavaScript:
  - Validasi nama tidak boleh kosong
  - Validasi format email (harus mengandung `@` dan `.`)
  - Validasi pesan tidak boleh kosong
  - Pesan error ditampilkan dengan **warna merah** di bawah field yang salah
  - Notifikasi **"Pesan berhasil dikirim"** muncul jika semua input valid

---

## ðŸ—ï¸ Penjelasan Struktur HTML

File HTML menggunakan elemen-elemen **semantik HTML5**:

| Elemen | Fungsi |
|--------|--------|
| `<header>` | Header halaman berisi logo dan navigasi |
| `<nav>` | Navigasi menu antar halaman |
| `<main>` | Konten utama setiap halaman |
| `<section>` | Membagi konten utama menjadi bagian-bagian logis |
| `<footer>` | Footer halaman berisi copyright |
| `<form>` | Form kontak dengan validasi |
| `<ul>/<li>` | Daftar item navigasi |

Setiap halaman memiliki:
- Tag `<meta charset>` dan `<meta viewport>` untuk kompatibilitas
- `<meta name="description">` untuk SEO
- `<title>` yang deskriptif
- Hierarki heading yang benar (`<h1>` untuk logo, `<h2>` untuk judul section)
- Elemen interaktif dengan `id` yang unik dan deskriptif

---

## ðŸŽ¨ Penjelasan Desain CSS

### Sistem Warna
- **Warna utama:** `#7c3aed` (ungu) â€“ digunakan untuk aksen, tombol, dan elemen aktif
- **Background terang:** `#f0f2f5`
- **Background gelap (dark mode):** `#0f0f1a`
- **Gradient header:** `linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)`

### Fitur-Fitur CSS yang Diimplementasikan

#### a. Dark Mode
- Menggunakan **class toggle** (`.dark-mode` ditambahkan ke `body`)
- Semua elemen memiliki aturan CSS khusus untuk dark mode
- Transisi halus menggunakan `transition: background-color 0.4s, color 0.4s`

#### b. Hover Effects
- **Project Cards:** `transform: translateY(-6px)` dan `box-shadow` saat hover
- **Skill Cards:** efek naik dengan shadow ungu saat hover
- **Tombol-tombol:** perubahan warna dan bayangan saat hover
- **Kontak Info Items:** `transform: translateX(5px)` saat hover

#### c. Animasi Transisi
- Semua elemen interaktif menggunakan `transition` untuk animasi halus
- Progress bar menggunakan `transition: width 1.2s ease-in-out`
- Foto profil menggunakan `transition: opacity 0.4s`

#### d. Flexbox & Grid Layout
- Header menggunakan `display: flex` dengan `justify-content: space-between`
- Halaman Beranda menggunakan **CSS Grid** untuk skill cards dan project cards
- Halaman Tentang menggunakan **CSS Grid** 2 kolom
- **Responsive design** dengan `@media (max-width: 768px)` dan `@media (max-width: 480px)`

---

## âš¡ Penjelasan Fungsionalitas JavaScript

### 1. Dark Mode â€“ `toggleDarkMode()`
**Kategori:** Style & Animation + DOM Manipulation  
- Menggunakan `document.body.classList.contains()`, `.add()`, `.remove()` untuk toggle class
- Mengubah teks tombol menggunakan `.innerText`
- Menyimpan preferensi ke `localStorage` agar tersimpan meski halaman di-refresh

### 2. Sembunyikan/Tampilkan Foto â€“ `sembunyikanFoto()` & `tampilkanFoto()`
**Kategori:** DOM Manipulation + Style & Animation  
- Mengakses elemen dengan `document.getElementById()`
- Mengubah `style.opacity` dan `style.visibility` untuk animasi visibilitas
- Menampilkan/menyembunyikan tombol secara bergantian dengan `style.display`

### 3. Validasi Form â€“ `kirimPesan(event)`
**Kategori:** Form Validation + DOM Manipulation + Event Handling  
- `event.preventDefault()` mencegah reload halaman saat form submit
- Mengambil nilai input dengan `.value.trim()`
- Menampilkan pesan error merah menggunakan `.innerText` pada elemen paragraph
- Menambah/menghapus class `input-error` untuk styling visual error
- Menampilkan notifikasi sukses dengan `style.display = "block"`

### 4. Animasi Progress Bar â€“ `animasiProgressBar()` & `animasiCounter()`
**Kategori:** Style & Animation + DOM Manipulation  
- Menggunakan `document.querySelectorAll()` untuk memilih semua bar sekaligus
- Mengubah `style.width` secara dinamis untuk animasi bar
- `setTimeout()` dan `setInterval()` untuk animasi counter angka persentase
- Membaca nilai target dari atribut `data-value` menggunakan `getAttribute()`

### 5. Isi Skills Grid â€“ `isiSkillsGrid()`
**Kategori:** DOM Manipulation  
- Menggunakan **array** untuk menyimpan data keahlian
- Loop `for...of` untuk iterasi array (sesuai modul)
- `createElement()` dan `appendChild()` untuk membuat elemen dinamis (sesuai modul latihan 2)
- `innerHTML = ""` untuk reset container sebelum mengisi ulang

### 6. Event Handling pada Cards â€“ `pasangEventCards()`
**Kategori:** Event Handling + Style & Animation  
- `addEventListener("mouseover", ...)` untuk deteksi hover
- `addEventListener("mouseout", ...)` untuk mengembalikan style saat mouse keluar
- Mengubah `style.borderColor` secara langsung

### 7. Event Handling pada Form Input â€“ `pasangEventInput()`
**Kategori:** Event Handling + DOM Manipulation  
- `addEventListener("input", ...)` untuk real-time response
- Menghapus pesan error saat user mulai mengetik

### 8. Inisialisasi â€“ `window.addEventListener("load", ...)`
**Kategori:** Event Handling  
- Menjalankan semua fungsi inisialisasi setelah halaman selesai dimuat
- Mengecek preferensi dark mode dari `localStorage`
- Memulai animasi progress bar dengan `setTimeout()` (delay 500ms)

---

## âœ… Pemenuhan Kriteria Penilaian UTS

| Kriteria | Poin | Implementasi |
|----------|------|--------------|
| **Struktur HTML** | 20 | 3 halaman dengan elemen semantik lengkap, navigasi antar halaman, heading hierarchy yang benar, id unik pada semua elemen interaktif |
| **Desain CSS** | 30 | Sistem warna konsisten, dark mode, hover effects, animasi transisi, flexbox & grid layout, progress bar, responsive design |
| **Kreativitas & Desain** | 20 | Dark mode toggle, gradient header, card hover animations, timeline design, progress bar animasi, color-coded error messages |
| **Dokumentasi & SRS** | 30 | README.md ini â€“ menjelaskan struktur, desain CSS, dan setiap fungsi JavaScript secara detail |
| **Fungsionalitas JavaScript** | 20 | 4 kategori JS: Event Handling, DOM Manipulation, Style & Animation, Form Validation â€“ semuanya diimplementasikan |

---

## ðŸ“š Referensi Materi

Seluruh kode dibuat berdasarkan materi yang diajarkan dalam modul:
- **Modul 2: HTML** â€“ Struktur dasar, elemen semantik, form
- **Modul 3 & 4: CSS & CSS Lanjut** â€“ Styling, flexbox, grid, animasi
- **Modul 6: JavaScript & Manipulasi DOM** â€“ Variabel, fungsi, array, DOM, event handling
- **Modul 7: jQuery** â€“ (sebagai referensi konsep selector dan method)

---

*Dibuat untuk Ujian Tengah Semester Pemrograman Web â€“ Sarjana Terapan Manajemen Informatika, Universitas Negeri Surabaya*

