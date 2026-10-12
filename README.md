# Portofolio Website - UTS Pemrograman Web

**Nama Mahasiswa:** Tegar Satria  
**Matakuliah:** Pemrograman Web  
**Program Studi/Semester:** Sarjana Terapan Manajemen Informatika / 3  
**Dosen:** Ari Kurniawan, S.Kom., M.T. & Faris Abdi El Hakim, S.Kom., M.Tr.Kom.  

---

## Deskripsi Proyek

Website portofolio personal yang dibuat sebagai tugas **Ujian Tengah Semester (UTS) Pemrograman Web**. Website ini dibangun menggunakan **HTML, CSS, dan JavaScript** murni (vanilla) tanpa framework tambahan. Tujuannya adalah untuk mendemonstrasikan kemampuan dalam membuat halaman web interaktif yang mencakup struktur HTML yang baik, desain CSS yang estetis, dan interaksi JavaScript yang fungsional.

---

## Struktur File

```
/
|-- index.html          -> Halaman Beranda
|-- tentang.html        -> Halaman Tentang Kami
|-- kontak.html         -> Halaman Kontak
|-- style.css           -> File CSS (semua styling)
|-- script.js           -> File JavaScript (semua interaksi)
|-- avatar.png          -> Foto profil
|-- bahan belajar.pdf   -> Berkas Laporan Penjelasan Kode (PDF)
|-- laporan.md          -> Berkas Laporan Penjelasan Kode (Markdown)
+-- README.md           -> Dokumentasi proyek ini
```

---

## Cara Membuka Website

### Lokal (Tanpa Hosting)
1. Download atau clone repositori ini:
   ```bash
   git clone https://github.com/tegarsw21/UTS-PemWeb-2026.git
   ```
2. Buka file `index.html` langsung di browser (Google Chrome / Firefox / Edge / Brave).
3. Atau klik kanan pada `index.html` -> "Open with" -> Browser pilihan Anda.

### Via GitHub Pages (Hosting)
Akses website secara online melalui tautan GitHub Pages:  
**[https://tegarsw21.github.io/UTS-PemWeb-2026/](https://tegarsw21.github.io/UTS-PemWeb-2026/)**

---

## Halaman-Halaman Website

### 1. Beranda (`index.html`)
Halaman utama yang menampilkan:
- **Hero Section** dengan nama, deskripsi singkat, dan tombol aksi
- **Foto profil** dengan tombol Sembunyikan/Tampilkan Foto
- **Section Keahlian** - diisi secara dinamis menggunakan DOM Manipulation (`createElement`, `appendChild`)
- **Section Proyek Terbaru** - menampilkan 3 kartu proyek dengan efek hover

### 2. Tentang Kami (`tentang.html`)
Halaman profil lengkap yang menampilkan:
- Foto profil dengan tombol **Sembunyikan/Tampilkan Foto** (DOM Manipulation)
- Deskripsi diri dan informasi pribadi (nama, prodi, universitas, semester, email)
- **Progress Bar Keahlian** dengan animasi CSS + JavaScript (HTML 85%, CSS 78%, JS 65%, jQuery 55%)
- **Timeline Pengalaman & Pendidikan**

### 3. Kontak (`kontak.html`)
Halaman kontak yang menampilkan:
- Informasi kontak (email, lokasi, universitas)
- **Form Kontak** lengkap dengan validasi JavaScript:
  - Validasi nama tidak boleh kosong
  - Validasi format email (harus mengandung `@` dan `.`)
  - Validasi pesan tidak boleh kosong
  - Pesan error ditampilkan dengan **warna merah** di bawah kolom input yang salah
  - Notifikasi **"Pesan berhasil dikirim"** muncul jika semua input valid

---

## Penjelasan Struktur HTML

File HTML menggunakan elemen-elemen **semantik HTML5**:

| Elemen | Fungsi |
|--------|--------|
| `<header>` | Header halaman berisi logo dan navigasi |
| `<nav>` | Navigasi menu antar halaman |
| `<main>` | Konten utama setiap halaman |
| `<section>` | Membagi konten utama menjadi bagian-bagian logis |
| `<footer>` | Footer halaman berisi hak cipta |
| `<form>` | Form kontak dengan validasi |
| `<ul> / <li>` | Daftar item navigasi |

Setiap halaman memiliki:
- Tag `<meta charset>` dan `<meta viewport>` untuk kompatibilitas perangkat
- `<meta name="description">` untuk SEO
- `<title>` yang deskriptif
- Hierarki heading yang terstruktur (`<h1>` untuk logo/nama, `<h2>` untuk judul section)
- Elemen interaktif dengan atribut `id` yang unik dan deskriptif

---

## Penjelasan Desain CSS

### Sistem Warna
- **Warna utama:** `#7c3aed` (ungu) - digunakan untuk aksen, tombol, dan elemen aktif
- **Background terang:** `#f0f2f5`
- **Background gelap (dark mode):** `#0f0f1a`
- **Gradient header:** `linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)`

### Fitur-Fitur CSS yang Diimplementasikan

#### a. Dark Mode
- Menggunakan **class toggle** (`.dark-mode` ditambahkan ke elemen `body`)
- Semua elemen memiliki aturan CSS khusus untuk dark mode
- Transisi halus menggunakan `transition: background-color 0.4s, color 0.4s`

#### b. Hover Effects
- **Project Cards:** `transform: translateY(-6px)` dan `box-shadow` saat hover
- **Skill Cards:** efek kartu terangkat dengan bayangan ungu saat hover
- **Tombol-tombol:** transformasi posisi dan bayangan saat hover
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

## Penjelasan Fungsionalitas JavaScript

### 1. Dark Mode - `toggleDarkMode()`
**Kategori:** Style & Animation + DOM Manipulation  
- Menggunakan `document.body.classList.contains()`, `.add()`, `.remove()` untuk toggle class
- Mengubah teks tombol menggunakan `.innerText`
- Menyimpan preferensi ke `localStorage` agar tersimpan meski halaman di-refresh

### 2. Sembunyikan/Tampilkan Foto - `sembunyikanFoto()` & `tampilkanFoto()`
**Kategori:** DOM Manipulation + Style & Animation  
- Mengakses elemen dengan `document.getElementById()`
- Mengubah `style.opacity` dan `style.visibility` untuk animasi visibilitas
- Menampilkan/menyembunyikan tombol secara bergantian dengan `style.display`

### 3. Validasi Form - `kirimPesan(event)`
**Kategori:** Form Validation + DOM Manipulation + Event Handling  
- `event.preventDefault()` mencegah reload halaman saat form submit
- Mengambil nilai input dengan `.value.trim()`
- Menampilkan pesan error merah menggunakan `.innerText` pada elemen paragraf
- Menambah/menghapus class `input-error` untuk penanda visual
- Menampilkan notifikasi sukses dengan `style.display = "block"`

### 4. Animasi Progress Bar - `animasiProgressBar()` & `animasiCounter()`
**Kategori:** Style & Animation + DOM Manipulation  
- Menggunakan `document.querySelectorAll()` untuk memilih seluruh bilah keahlian
- Mengubah `style.width` secara dinamis untuk animasi bilah
- `setTimeout()` dan `setInterval()` untuk animasi hitungan angka persentase
- Membaca nilai target dari atribut `data-value` menggunakan `getAttribute()`

### 5. Isi Skills Grid - `isiSkillsGrid()`
**Kategori:** DOM Manipulation  
- Menggunakan **array** untuk menyimpan data keahlian
- Loop `for...of` untuk iterasi array (sesuai modul)
- `createElement()` dan `appendChild()` untuk membuat elemen dinamis
- `innerHTML = ""` untuk reset kontainer sebelum mengisi ulang

### 6. Event Handling pada Cards - `pasangEventCards()`
**Kategori:** Event Handling + Style & Animation  
- `addEventListener("mouseover", ...)` untuk mendeteksi hover kursor
- `addEventListener("mouseout", ...)` untuk mengembalikan gaya saat kursor keluar
- Mengubah `style.borderColor` secara langsung

### 7. Event Handling pada Form Input - `pasangEventInput()`
**Kategori:** Event Handling + DOM Manipulation  
- `addEventListener("input", ...)` untuk respons real-time
- Menghapus pesan error dan batas merah saat pengguna mulai mengetik kembali

### 8. Inisialisasi - `window.addEventListener("load", ...)`
**Kategori:** Event Handling  
- Menjalankan seluruh inisialisasi setelah halaman selesai dimuat
- Memeriksa preferensi dark mode dari `localStorage`
- Memulai animasi progress bar dengan `setTimeout()` (delay 500ms)

---

## Pemenuhan Kriteria Penilaian UTS

| Kriteria | Poin | Implementasi |
|----------|------|--------------|
| **Struktur HTML** | 20 | 3 halaman dengan elemen semantik lengkap, navigasi antar halaman, hierarki heading yang benar, id unik pada semua elemen interaktif |
| **Desain CSS** | 30 | Sistem warna konsisten, dark mode, efek hover, animasi transisi, flexbox & grid layout, progress bar, responsive design |
| **Kreativitas & Desain** | 20 | Dark mode toggle, header gradien, animasi hover kartu, garis waktu riwayat, bilah kemahiran beranimasi, penanda pesan error |
| **Dokumentasi & Laporan** | 30 | README.md dan laporan lengkap - menjelaskan struktur, desain CSS, dan seluruh fungsi JavaScript baris per baris |
| **Fungsionalitas JavaScript** | 20 | 4 kategori JS: Event Handling, DOM Manipulation, Style & Animation, Form Validation - seluruhnya diimplementasikan |

---

## Referensi Materi

Seluruh kode dibuat berdasarkan materi yang diajarkan dalam modul perkuliahan:
- **Modul 2: HTML** - Struktur dasar, elemen semantik, form
- **Modul 3 & 4: CSS & CSS Lanjut** - Styling, flexbox, grid, animasi
- **Modul 6: JavaScript & Manipulasi DOM** - Variabel, fungsi, array, DOM, event handling
- **Modul 7: jQuery** - Konsep selector dan manipulasi elemen

---

*Dibuat untuk Ujian Tengah Semester Pemrograman Web - Sarjana Terapan Manajemen Informatika, Universitas Negeri Surabaya*
