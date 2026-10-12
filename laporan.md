# LAPORAN PENJELASAN KODE UTS PEMROGRAMAN WEB
Nama: Tegar Satria  
Mata Kuliah: Pemrograman Web  
Tugas: Ujian Tengah Semester (UTS) - Website Portofolio Pribadi  

---

## 1. RINGKASAN PROYEK UTS (UTS SUMMARY)

### 1.1 Daftar File yang Dibuat

| File | Fungsi dan Deskripsi |
|------|----------------------|
| index.html | Halaman utama (Beranda) berisi pengenalan diri, keahlian yang dimuat secara dinamis via DOM, dan daftar proyek portofolio. |
| tentang.html | Halaman Tentang Saya berisi deskripsi diri, foto profil interaktif, tabel biodata, animasi bilah keahlian (progress bar), dan garis waktu riwayat pendidikan. |
| kontak.html | Halaman Kontak berisi informasi kontak dan formulir pesan dengan validasi JavaScript langsung. |
| style.css | Berkas stylesheet utama yang mengatur tata letak, warna, tipografi, mode gelap (dark mode), transisi, dan responsivitas. |
| script.js | Berkas JavaScript murni yang menangani seluruh interaksi, manipulasi DOM, event listener, dan validasi form. |
| avatar.png | Berkas gambar foto profil pengguna. |
| README.md | Berkas dokumentasi proyek untuk repositori GitHub. |

---

### 1.2 Fitur JavaScript yang Diimplementasikan (Sesuai Modul 6)

#### A. Event Handling
- `window.addEventListener("load", ...)`: Menjalankan inisialisasi script otomatis saat struktur halaman selesai dimuat.
- `addEventListener("mouseover")` dan `addEventListener("mouseout")`: Memberikan efek visual batas (border highlight) pada kartu proyek saat kursor mouse melintas.
- `addEventListener("input")`: Menghapus notifikasi pesan error secara seketika saat pengguna mulai mengetik kembali di formulir.
- `onsubmit` pada elemen `<form>`: Mencegah reload halaman secara default dan memanggil fungsi validasi data form.
- `onclick` pada tombol: Menjalankan fungsi ganti tema (Dark Mode) serta sembunyikan/tampilkan foto profil.

#### B. Manipulasi DOM (Document Object Model)
- `document.getElementById()`: Memilih elemen spesifik berdasarkan atribut ID yang unik.
- `document.querySelectorAll()`: Memilih sekumpulan elemen menggunakan selector CSS (seperti class).
- `document.createElement()` dan `element.appendChild()`: Membangun kartu keahlian secara dinamis dari array JavaScript ke dalam elemen HTML.
- `classList.add()`, `classList.remove()`, `classList.contains()`: Mengelola penambahan dan penghapusan class CSS (misalnya class `dark-mode` dan `input-error`).
- `element.innerText` dan `element.innerHTML`: Mengubah dan memperbarui teks maupun struktur HTML elemen.
- `element.style.*`: Memanipulasi properti visual secara langsung melalui JavaScript (seperti `opacity`, `visibility`, `width`, `display`).
- `element.getAttribute()`: Membaca nilai dari atribut kustom (seperti `data-value` pada progress bar).

#### C. Pengaturan Gaya & Animasi
- Pengalihan mode gelap (Dark Mode) yang terintegrasi dengan penyimpanan preferensi di `localStorage`.
- Animasi pengisian bilah keahlian (progress bar) berbasis CSS transition dengan pemicu JavaScript.
- Animasi penghitung angka persentase (counter) yang berjalan halus menggunakan fungsi `setInterval()`.
- Pengaturan visibilitas foto profil dengan transisi opasitas dan properti visibility.

#### D. Validasi Formulir (Form Validation)
- Pengecekan input kosong pada nama, alamat email, dan pesan.
- Validasi struktur alamat email (memeriksa keberadaan karakter '@' dan titik '.').
- Penandaan kolom input bermasalah dengan batas warna merah dan menampilkan teks pesan kesalahan.
- Penayangan pesan sukses "Pesan berhasil dikirim" menggunakan manipulasi DOM setelah semua input terbukti sah.

---

### 1.3 Pemetaan Konsep Modul Kuliah

| Modul | Konsep Pembelajaran | Penerapan pada Proyek |
|-------|---------------------|-----------------------|
| Modul 2 - HTML | Elemen semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`) | Struktur kerangka pada `index.html`, `tentang.html`, dan `kontak.html`. |
| Modul 3 & 4 - CSS & CSS Lanjut | Flexbox, CSS Grid, Box Model, Pseudo-class (`:hover`, `:focus`), Transisi CSS, Media Queries | Tata letak halaman, responsivitas mobile, perataan elemen, dan efek interaksi visual di `style.css`. |
| Modul 6 - JavaScript | Deklarasi variabel (`var`, `let`, `const`), Tipe data String, Number, Array, Object | Struktur logika data pada seluruh fungsi di `script.js`. |
| Modul 6 - JavaScript | Percabangan (`if`, `else if`, `else`) | Logika validasi input form dan logika pengalihan tema dark mode. |
| Modul 6 - JavaScript | Perulangan (`for`, `for...of`) | Iterasi data array pada fungsi `isiSkillsGrid()` dan pembacaan elemen node list. |
| Modul 6 - JavaScript | Manipulasi DOM & Event Listener | Pembangunan elemen baru, manipulasi style, event klik, hover, input, dan load. |
| Modul 6 - JavaScript | Timer (`setTimeout`, `setInterval`) | Animasi pengisian bilah progress dan angka persentase. |
| Modul 6 - JavaScript | Web Storage (`localStorage`) | Penyimpanan status mode gelap agar tetap bertahan saat berpindah halaman. |

---

## 2. PENJELASAN KODE JAVASCRIPT (script.js) BARIS PER BARIS

### Bagian 1: Fitur Dark Mode (Ganti Mode Terang / Gelap)

#### Potongan Kode:
```javascript
function toggleDarkMode() {
    var body = document.body;
    var btnDark = document.getElementById("btnDarkMode");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        btnDark.innerText = "Dark Mode";
        localStorage.setItem("tema", "light");
    } else {
        body.classList.add("dark-mode");
        btnDark.innerText = "Light Mode";
        localStorage.setItem("tema", "dark");
    }
}
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`function toggleDarkMode() {`):** Mendeklarasikan fungsi bernama `toggleDarkMode` yang akan dipanggil ketika tombol Dark Mode pada navbar diklik.
- **Baris 2 (`var body = document.body;`):** Membuat variabel `body` yang menyimpan referensi ke elemen `<body>` dokumen HTML melalui properti DOM `document.body`.
- **Baris 3 (`var btnDark = document.getElementById("btnDarkMode");`):** Mengambil elemen tombol yang memiliki atribut `id="btnDarkMode"` menggunakan method DOM `getElementById` dan menyimpannya ke variabel `btnDark`.
- **Baris 5 (`if (body.classList.contains("dark-mode")) {`):** Melakukan pemeriksaan kondisi: apakah elemen `body` saat ini sedang memiliki class CSS bernama `"dark-mode"`? Method `classList.contains()` mengembalikan nilai `true` jika class tersebut ada, atau `false` jika tidak ada.
- **Baris 6 (`body.classList.remove("dark-mode");`):** Jika kondisi terpenuhi (sedang aktif mode gelap), class `"dark-mode"` dihapus dari elemen `body` menggunakan method `classList.remove()`, sehingga tampilan kembali menjadi mode terang.
- **Baris 7 (`btnDark.innerText = "Dark Mode";`):** Mengubah teks di dalam tombol menjadi `"Dark Mode"` menggunakan properti `innerText` untuk memberi tahu pengguna bahwa tombol siap digunakan untuk mengaktifkan mode gelap lagi.
- **Baris 8 (`localStorage.setItem("tema", "light");`):** Menyimpan status pilihan tema `"light"` ke dalam memori peramban web (`localStorage`) dengan kunci `"tema"`, agar pilihan tidak hilang saat halaman disegarkan (refresh) atau berpindah halaman.
- **Baris 9 (`} else {`):** Blok kode alternatif yang dieksekusi jika kondisi `if` bernilai `false` (artinya saat ini sedang berada pada mode terang).
- **Baris 10 (`body.classList.add("dark-mode");`):** Menambahkan class `"dark-mode"` ke elemen `body` menggunakan method `classList.add()`, sehingga gaya CSS mode gelap langsung diterapkan ke seluruh halaman.
- **Baris 11 (`btnDark.innerText = "Light Mode";`):** Mengubah teks di dalam tombol menjadi `"Light Mode"` menggunakan `innerText`.
- **Baris 12 (`localStorage.setItem("tema", "dark");`):** Menyimpan nilai `"dark"` pada kunci `"tema"` di `localStorage`.
- **Baris 13 (`}`):** Menutup blok percabangan dan fungsi `toggleDarkMode`.

---

### Bagian 2: Sembunyikan dan Tampilkan Foto Profil

#### Potongan Kode:
```javascript
function sembunyikanFoto() {
    var foto = document.getElementById("foto-profil");
    var btnSembunyi = document.getElementById("btnSembunyikanFoto");
    var btnTampil = document.getElementById("btnTampilkanFoto");

    if (foto !== null) {
        foto.style.opacity = "0";
        foto.style.visibility = "hidden";
        btnSembunyi.style.display = "none";
        btnTampil.style.display = "inline-block";
    }
}

function tampilkanFoto() {
    var foto = document.getElementById("foto-profil");
    var btnSembunyi = document.getElementById("btnSembunyikanFoto");
    var btnTampil = document.getElementById("btnTampilkanFoto");

    if (foto !== null) {
        foto.style.opacity = "1";
        foto.style.visibility = "visible";
        btnSembunyi.style.display = "inline-block";
        btnTampil.style.display = "none";
    }
}
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`function sembunyikanFoto() {`):** Mendeklarasikan fungsi `sembunyikanFoto` yang dipanggil saat tombol "Sembunyikan Foto" diklik.
- **Baris 2 (`var foto = document.getElementById("foto-profil");`):** Mengambil elemen gambar foto profil berdasarkan id `"foto-profil"`.
- **Baris 3 (`var btnSembunyi = document.getElementById("btnSembunyikanFoto");`):** Mengambil tombol "Sembunyikan Foto".
- **Baris 4 (`var btnTampil = document.getElementById("btnTampilkanFoto");`):** Mengambil tombol "Tampilkan Foto".
- **Baris 6 (`if (foto !== null) {`):** Melakukan pengecekan validasi keberadaan elemen foto agar tidak terjadi galat (error) jika fungsi ini terpanggil di halaman yang tidak memuat foto profil.
- **Baris 7 (`foto.style.opacity = "0";`):** Mengubah nilai transparansi foto menjadi 0 (transparan penuh) melalui manipulasi properti style DOM. Transisi CSS pada stylesheet membuat proses memudar menjadi halus.
- **Baris 8 (`foto.style.visibility = "hidden";`):** Menyembunyikan elemen foto secara visual dari peramban menggunakan properti `visibility: hidden`.
- **Baris 9 (`btnSembunyi.style.display = "none";`):** Menyembunyikan tombol "Sembunyikan Foto" itu sendiri agar tidak membingungkan pengguna.
- **Baris 10 (`btnTampil.style.display = "inline-block";`):** Memunculkan tombol "Tampilkan Foto" sebagai gantinya.
- **Baris 11-12 (`}`):** Menutup blok pengecekan dan fungsi `sembunyikanFoto`.
- **Baris 14 (`function tampilkanFoto() {`):** Mendeklarasikan fungsi `tampilkanFoto` untuk mengembalikan visibilitas foto profil.
- **Baris 15-17:** Mengambil kembali referensi ketiga elemen DOM yang bersangkutan (`foto`, `btnSembunyi`, `btnTampil`).
- **Baris 19 (`if (foto !== null) {`):** Memastikan elemen foto profil ada di halaman.
- **Baris 20 (`foto.style.opacity = "1";`):** Mengembalikan opasitas foto ke angka 1 (terlihat jelas seutuhnya).
- **Baris 21 (`foto.style.visibility = "visible";`):** Mengembalikan properti `visibility` menjadi `"visible"`.
- **Baris 22 (`btnSembunyi.style.display = "inline-block";`):** Memunculkan kembali tombol "Sembunyikan Foto".
- **Baris 23 (`btnTampil.style.display = "none";`):** Menyembunyikan tombol "Tampilkan Foto".
- **Baris 24-25 (`}`):** Menutup blok pengecekan dan fungsi `tampilkanFoto`.

---

### Bagian 3: Validasi Formulir Kontak dan Tampilan Notifikasi

#### Potongan Kode:
```javascript
function kirimPesan(event) {
    event.preventDefault();

    var nama = document.getElementById("inputNama");
    var email = document.getElementById("inputEmail");
    var pesan = document.getElementById("inputPesan");

    var errorNama = document.getElementById("errorNama");
    var errorEmail = document.getElementById("errorEmail");
    var errorPesan = document.getElementById("errorPesan");
    var notifSukses = document.getElementById("notifSukses");

    errorNama.innerText = "";
    errorEmail.innerText = "";
    errorPesan.innerText = "";
    nama.classList.remove("input-error");
    email.classList.remove("input-error");
    pesan.classList.remove("input-error");
    notifSukses.style.display = "none";

    var valid = true;

    if (nama.value.trim() === "") {
        errorNama.innerText = "Nama tidak boleh kosong!";
        nama.classList.add("input-error");
        valid = false;
    }

    if (email.value.trim() === "") {
        errorEmail.innerText = "Email tidak boleh kosong!";
        email.classList.add("input-error");
        valid = false;
    } else {
        var atIndex = email.value.indexOf("@");
        var dotIndex = email.value.lastIndexOf(".");
        if (atIndex < 1 || dotIndex < atIndex + 2) {
            errorEmail.innerText = "Format email tidak valid! (contoh: nama@email.com)";
            email.classList.add("input-error");
            valid = false;
        }
    }

    if (pesan.value.trim() === "") {
        errorPesan.innerText = "Pesan tidak boleh kosong!";
        pesan.classList.add("input-error");
        valid = false;
    }

    if (valid) {
        notifSukses.style.display = "block";
        document.getElementById("formKontak").reset();
        notifSukses.scrollIntoView({ behavior: "smooth" });
    }
}
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`function kirimPesan(event) {`):** Mendeklarasikan fungsi `kirimPesan` yang menerima parameter objek `event` ketika form disubmit.
- **Baris 2 (`event.preventDefault();`):** Menghentikan aksi submit standar bawaan browser (yang biasanya memicu reload halaman web), sehingga form dapat diproses melalui JavaScript.
- **Baris 4-6:** Mengambil elemen input field menggunakan `document.getElementById` untuk input nama (`inputNama`), input email (`inputEmail`), dan input textarea pesan (`inputPesan`).
- **Baris 8-11:** Mengambil elemen kontainer pesan error (`errorNama`, `errorEmail`, `errorPesan`) dan kotak notifikasi sukses (`notifSukses`).
- **Baris 13-19:** Membersihkan status error sebelumnya: mengosongkan teks error (`innerText = ""`), menghapus class CSS penanda merah (`input-error`), dan menyembunyikan kotak notifikasi sukses (`display = "none"`).
- **Baris 21 (`var valid = true;`):** Membuat variabel penanda (flag) bertipe boolean `valid` dengan nilai awal `true`.
- **Baris 23 (`if (nama.value.trim() === "") {`):** Memeriksa apakah nilai kolom input nama setelah dihilangkan spasi awal dan akhirnya (`trim()`) berupa string kosong.
- **Baris 24 (`errorNama.innerText = "Nama tidak boleh kosong!";`):** Menuliskan kalimat peringatan error ke dalam elemen `errorNama` di bawah field input.
- **Baris 25 (`nama.classList.add("input-error");`):** Menambahkan class CSS `"input-error"` pada kotak input agar pinggirannya (border) berwarna merah.
- **Baris 26 (`valid = false;`):** Mengubah nilai penanda validitas menjadi `false`.
- **Baris 29 (`if (email.value.trim() === "") {`):** Memeriksa apakah input kolom email kosong.
- **Baris 30-32:** Menampilkan pesan error email kosong, memberi batas merah pada kotak email, dan menandai `valid = false`.
- **Baris 33 (`} else {`):** Jika kolom email diisi, kode melanjutkan pemeriksaan format alamat email.
- **Baris 34 (`var atIndex = email.value.indexOf("@");`):** Mencari indeks posisi karakter simbol `@` pada teks email.
- **Baris 35 (`var dotIndex = email.value.lastIndexOf(".");`):** Mencari indeks posisi karakter titik `.` terakhir pada teks email.
- **Baris 36 (`if (atIndex < 1 || dotIndex < atIndex + 2) {`):** Validasi logika dasar modul: format dianggap salah jika tidak ada karakter sebelum `@` (`atIndex < 1`) atau jika titik `.` tidak berada minimal 2 karakter setelah simbol `@` (`dotIndex < atIndex + 2`).
- **Baris 37-39:** Jika format tidak valid, memunculkan pesan instruksi format contoh, memberi batas merah, dan mengubah variabel `valid = false`.
- **Baris 42 (`if (pesan.value.trim() === "") {`):** Memeriksa apakah textarea pesan kosong.
- **Baris 43-45:** Menampilkan teks peringatan "Pesan tidak boleh kosong!", menambahkan class batas merah, dan mengubah `valid = false`.
- **Baris 48 (`if (valid) {`):** Memeriksa apakah nilai `valid` tetap bernilai `true` (seluruh kolom formulir terisi dengan benar).
- **Baris 49 (`notifSukses.style.display = "block";`):** Menampilkan kotak notifikasi keberhasilan di halaman dengan mengubah properti style `display` menjadi `"block"`.
- **Baris 50 (`document.getElementById("formKontak").reset();`):** Mengosongkan kembali isi seluruh isian formulir menggunakan method bawaan form `reset()`.
- **Baris 51 (`notifSukses.scrollIntoView({ behavior: "smooth" });`):** Menggulirkan layar browser secara halus ke arah posisi kotak notifikasi sukses agar terbaca jelas oleh pengguna.
- **Baris 52 (`}`):** Menutup blok pengecekan sukses dan fungsi `kirimPesan`.

---

### Bagian 4: Animasi Bilah Keahlian (Progress Bar) dan Penghitung Angka

#### Potongan Kode:
```javascript
function animasiProgressBar() {
    var bars = document.querySelectorAll(".skill-bar-fill");
    var labels = [
        document.getElementById("html-pct"),
        document.getElementById("css-pct"),
        document.getElementById("js-pct"),
        document.getElementById("jq-pct")
    ];

    for (var i = 0; i < bars.length; i++) {
        bars[i].style.width = "0%";
        if (labels[i] !== null) {
            labels[i].innerText = "0%";
        }
    }

    setTimeout(function() {
        for (var j = 0; j < bars.length; j++) {
            var targetValue = bars[j].getAttribute("data-value");
            bars[j].style.width = targetValue + "%";
            animasiCounter(labels[j], parseInt(targetValue));
        }
    }, 200);

    var btn = document.getElementById("btnAnimasiBar");
    if (btn !== null) {
        btn.innerText = "Ulangi Animasi";
    }
}

function animasiCounter(elLabel, target) {
    if (elLabel === null) return;

    var current = 0;
    var step = Math.ceil(target / 40);
    var interval = setInterval(function() {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        elLabel.innerText = current + "%";
    }, 30);
}
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`function animasiProgressBar() {`):** Mendeklarasikan fungsi `animasiProgressBar` untuk menjalankan animasi pemanjangan batang persentase keahlian.
- **Baris 2 (`var bars = document.querySelectorAll(".skill-bar-fill");`):** Mengambil seluruh elemen bilah pengisi yang memiliki class CSS `".skill-bar-fill"` menggunakan method DOM `querySelectorAll()`.
- **Baris 3-8:** Menyusun array variabel `labels` yang menampung 4 elemen teks persentase HTML (`#html-pct`, `#css-pct`, `#js-pct`, `#jq-pct`).
- **Baris 10 (`for (var i = 0; i < bars.length; i++) {`):** Perulangan `for` untuk mereset seluruh bilah keahlian ke posisi nol sebelum animasi baru dimulai.
- **Baris 11 (`bars[i].style.width = "0%";`):** Mengatur lebar elemen bilah pengisi kembali ke 0%.
- **Baris 12-14:** Memeriksa elemen label teks dan mengembalikan tulisannya menjadi `"0%"`.
- **Baris 15 (`}`):** Menutup blok perulangan reset.
- **Baris 17 (`setTimeout(function() {`):** Menggunakan fungsi pewaktu `setTimeout()` untuk menunda eksekusi kode selama 200 milidetik agar browser sempat mencatat kondisi reset awal 0%.
- **Baris 18 (`for (var j = 0; j < bars.length; j++) {`):** Melakukan perulangan kedua untuk memulai animasi pengisian.
- **Baris 19 (`var targetValue = bars[j].getAttribute("data-value");`):** Membaca nilai target persentase yang disimpan pada atribut kustom HTML `data-value` (misalnya 90, 85, 75).
- **Baris 20 (`bars[j].style.width = targetValue + "%";`):** Mengatur lebar bilah (`style.width`) ke nilai target persentase. Efek CSS `transition: width 1.2s` pada stylesheet akan menggerakkan bilah secara perlahan dan halus.
- **Baris 21 (`animasiCounter(labels[j], parseInt(targetValue));`):** Memanggil fungsi helper `animasiCounter` untuk menaikkan teks angka dari 0% ke angka target secara bertahap.
- **Baris 22 (`}`):** Menutup blok perulangan.
- **Baris 23 (`}, 200);`):** Menutup fungsi callback `setTimeout` dengan waktu tunggu 200 milidetik.
- **Baris 25-28:** Mengambil elemen tombol pemicu manual `#btnAnimasiBar` dan memperbarui teksnya menjadi `"Ulangi Animasi"`.
- **Baris 29 (`}`):** Menutup fungsi `animasiProgressBar`.
- **Baris 31 (`function animasiCounter(elLabel, target) {`):** Mendeklarasikan fungsi `animasiCounter` dengan parameter elemen label tujuan (`elLabel`) dan nilai akhir angka (`target`).
- **Baris 32 (`if (elLabel === null) return;`):** Menghindari eksekusi jika elemen label tidak ditemukan pada dokumen.
- **Baris 34 (`var current = 0;`):** Membuat variabel `current` bernilai 0 sebagai titik awal hitungan angka.
- **Baris 35 (`var step = Math.ceil(target / 40);`):** Menentukan besaran lompatan penambahan angka tiap interval (pembulatan ke atas dari target dibagi 40) agar animasi selesai dalam durasi sekitar 1,2 detik.
- **Baris 36 (`var interval = setInterval(function() {`):** Menjalankan fungsi pewaktu berulang `setInterval()` setiap 30 milidetik.
- **Baris 37 (`current += step;`):** Menambahkan angka hitungan berjalan dengan nilai lompatan `step`.
- **Baris 38 (`if (current >= target) {`):** Memeriksa apakah angka hitungan sudah mencapai atau melebihi target akhir.
- **Baris 39 (`current = target;`):** Mengunci angka agar presisi tepat di angka target (tidak berlebih).
- **Baris 40 (`clearInterval(interval);`):** Menghentikan interval pewaktu menggunakan fungsi bawaan JavaScript `clearInterval()`.
- **Baris 41 (`}`):** Menutup blok pengecekan target.
- **Baris 42 (`elLabel.innerText = current + "%";`):** Memperbarui tulisan label dengan angka hitungan berjalan ditambah simbol persen.
- **Baris 43 (`}, 30);`):** Menutup callback interval dan menetapkan kecepatan eksekusi 30 milidetik per frame.
- **Baris 44 (`}`):** Menutup fungsi `animasiCounter`.

---

### Bagian 5: Pengisian Kartu Keahlian Dinamis via DOM (createElement & appendChild)

#### Potongan Kode:
```javascript
function isiSkillsGrid() {
    var skillsContainer = document.getElementById("skills-grid");
    if (skillsContainer === null) return;

    var daftarKeahlian = [
        { nama: "HTML5", level: "Dasar" },
        { nama: "CSS3", level: "Dasar" },
        { nama: "JavaScript", level: "Dasar" },
        { nama: "jQuery", level: "Dasar" },
        { nama: "Git", level: "Dasar" },
        { nama: "Responsive", level: "Dasar" }
    ];

    skillsContainer.innerHTML = "";

    for (var skill of daftarKeahlian) {
        var card = document.createElement("div");
        card.classList.add("skill-card");

        var judul = document.createElement("h3");
        judul.innerText = skill.nama;

        var keterangan = document.createElement("p");
        keterangan.innerText = skill.level;

        card.appendChild(judul);
        card.appendChild(keterangan);
        skillsContainer.appendChild(card);
    }
}
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`function isiSkillsGrid() {`):** Mendeklarasikan fungsi `isiSkillsGrid` yang bertugas membentuk elemen kartu keahlian menggunakan DOM murni.
- **Baris 2 (`var skillsContainer = document.getElementById("skills-grid");`):** Mengambil wadah elemen kartu dengan ID `"skills-grid"`.
- **Baris 3 (`if (skillsContainer === null) return;`):** Jika elemen wadah tidak berada di halaman saat ini (misalnya di halaman Tentang atau Kontak), fungsi langsung berhenti.
- **Baris 5-12:** Membuat array berisi kumpulan objek JavaScript yang menyimpan data nama keterampilan dan level kemampuannya.
- **Baris 14 (`skillsContainer.innerHTML = "";`):** Mengosongkan isi HTML di dalam wadah kontainer untuk memastikan tidak terjadi duplikasi elemen.
- **Baris 16 (`for (var skill of daftarKeahlian) {`):** Menggunakan perulangan modern `for...of` sesuai modul untuk mengambil tiap item objek `skill` satu per satu.
- **Baris 17 (`var card = document.createElement("div");`):** Membuat elemen HTML `<div>` baru di memori menggunakan method `document.createElement()`.
- **Baris 18 (`card.classList.add("skill-card");`):** Menambahkan class CSS `"skill-card"` ke elemen `<div>` tersebut.
- **Baris 20 (`var judul = document.createElement("h3");`):** Membuat elemen judul `<h3>` baru.
- **Baris 21 (`judul.innerText = skill.nama;`):** Mengisi teks di dalam `<h3>` dengan properti nama keahlian (`skill.nama`).
- **Baris 23 (`var keterangan = document.createElement("p");`):** Membuat elemen paragraf `<p>` baru.
- **Baris 24 (`keterangan.innerText = skill.level;`):** Mengisi teks paragraf dengan level keahlian (`skill.level`).
- **Baris 26 (`card.appendChild(judul);`):** Memasukkan elemen judul `<h3>` ke dalam elemen kartu `<div>` menggunakan method `appendChild()`.
- **Baris 27 (`card.appendChild(keterangan);`):** Memasukkan elemen paragraf `<p>` ke dalam kartu `<div>`.
- **Baris 28 (`skillsContainer.appendChild(card);`):** Memasukkan elemen kartu lengkap `<div>` ke dalam kontainer utama `#skills-grid` pada struktur dokumen HTML.
- **Baris 29 (`}`):** Menutup blok perulangan `for...of`.
- **Baris 30 (`}`):** Menutup fungsi `isiSkillsGrid`.

---

### Bagian 6: Event Handling Hover Kartu Proyek (mouseover & mouseout)

#### Potongan Kode:
```javascript
function pasangEventCards() {
    var cards = document.querySelectorAll(".project-card");

    for (var i = 0; i < cards.length; i++) {
        (function(card) {
            card.addEventListener("mouseover", function() {
                card.style.borderColor = "#7c3aed";
            });

            card.addEventListener("mouseout", function() {
                card.style.borderColor = "";
            });
        })(cards[i]);
    }
}
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`function pasangEventCards() {`):** Mendeklarasikan fungsi `pasangEventCards` untuk memasang event pendengar kursor mouse pada semua kartu proyek.
- **Baris 2 (`var cards = document.querySelectorAll(".project-card");`):** Menyeleksi semua elemen yang memiliki class `".project-card"`.
- **Baris 4 (`for (var i = 0; i < cards.length; i++) {`):** Melakukan perulangan pada seluruh koleksi kartu proyek.
- **Baris 5 (`(function(card) {`):** Menggunakan pola IIFE (Immediately Invoked Function Expression) untuk mengikat variabel `card` secara spesifik pada tiap iterasi.
- **Baris 6 (`card.addEventListener("mouseover", function() {`):** Memasang pendengar event saat kursor mouse melintas di atas kartu (`"mouseover"`).
- **Baris 7 (`card.style.borderColor = "#7c3aed";`):** Mengubah warna garis batas kartu menjadi warna ungu (`#7c3aed`) saat mouse berada di atas elemen.
- **Baris 8 (`});`):** Menutup callback event mouseover.
- **Baris 10 (`card.addEventListener("mouseout", function() {`):** Memasang pendengar event saat kursor mouse meninggalkan kartu (`"mouseout"`).
- **Baris 11 (`card.style.borderColor = "";`):** Menghapus nilai warna garis batas langsung (inline style) agar kembali ke warna default stylesheet CSS.
- **Baris 12 (`});`):** Menutup callback event mouseout.
- **Baris 13 (`})(cards[i]);`):** Mengeksekusi fungsi closure dengan memberikan argumen elemen kartu indeks ke-`i`.
- **Baris 14 (`}`):** Menutup blok perulangan `for`.
- **Baris 15 (`}`):** Menutup fungsi `pasangEventCards`.

---

### Bagian 7: Event Handling Input Formulir Kontak (Real-Time Error Clearing)

#### Potongan Kode:
```javascript
function pasangEventInput() {
    var inputNama = document.getElementById("inputNama");
    var inputPesan = document.getElementById("inputPesan");

    if (inputNama !== null) {
        inputNama.addEventListener("input", function() {
            var errNama = document.getElementById("errorNama");
            if (errNama !== null) {
                errNama.innerText = "";
                inputNama.classList.remove("input-error");
            }
        });
    }

    if (inputPesan !== null) {
        inputPesan.addEventListener("input", function() {
            var errPesan = document.getElementById("errorPesan");
            if (errPesan !== null) {
                errPesan.innerText = "";
                inputPesan.classList.remove("input-error");
            }
        });
    }
}
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`function pasangEventInput() {`):** Mendeklarasikan fungsi `pasangEventInput` untuk merespons ketikan keyboard secara langsung pada kolom formulir.
- **Baris 2-3:** Mengambil elemen input nama dan pesan menggunakan `document.getElementById`.
- **Baris 5 (`if (inputNama !== null) {`):** Memastikan kolom input nama ada di halaman saat ini.
- **Baris 6 (`inputNama.addEventListener("input", function() {`):** Memasang event listener bertipe `"input"` yang langsung berjalan setiap kali pengguna mengetik satu karakter baru.
- **Baris 7 (`var errNama = document.getElementById("errorNama");`):** Mengambil elemen teks error nama.
- **Baris 8 (`if (errNama !== null) {`):** Memastikan elemen teks error ditemukan.
- **Baris 9 (`errNama.innerText = "";`):** Mengosongkan teks error seketika.
- **Baris 10 (`inputNama.classList.remove("input-error");`):** Menghapus class batas merah sehingga tampilan input kembali normal saat pengguna mulai mengetik kembali.
- **Baris 11-13 (`}`):** Menutup blok pengecekan dan callback listener nama.
- **Baris 15-23:** Melakukan logika pembersihan error yang persis sama pada kolom isian textarea pesan (`inputPesan`).
- **Baris 24 (`}`):** Menutup fungsi `pasangEventInput`.

---

### Bagian 8: Inisialisasi Seluruh Script Saat Halaman Selesai Dimuat (window load event)

#### Potongan Kode:
```javascript
window.addEventListener("load", function() {
    var temaTersimpan = localStorage.getItem("tema");
    if (temaTersimpan === "dark") {
        document.body.classList.add("dark-mode");
        var btnDark = document.getElementById("btnDarkMode");
        if (btnDark !== null) {
            btnDark.innerText = "Light Mode";
        }
    }

    isiSkillsGrid();
    pasangEventCards();
    pasangEventInput();

    var skillBars = document.querySelectorAll(".skill-bar-fill");
    if (skillBars.length > 0) {
        setTimeout(function() {
            animasiProgressBar();
        }, 500);
    }
});
```

#### Penjelasan Baris per Baris:
- **Baris 1 (`window.addEventListener("load", function() {`):** Memasang event listener pada objek jendela browser `window` dengan event `"load"`. Callback ini akan dieksekusi secara otomatis segera setelah seluruh HTML, CSS, dan gambar selesai dimuat secara lengkap.
- **Baris 2 (`var temaTersimpan = localStorage.getItem("tema");`):** Mengambil data preferensi tema yang tersimpan di peramban web melalui `localStorage.getItem("tema")`.
- **Baris 3 (`if (temaTersimpan === "dark") {`):** Memeriksa apakah pengguna sebelumnya telah mengaktifkan mode gelap.
- **Baris 4 (`document.body.classList.add("dark-mode");`):** Jika ya, langsung menambahkan class `"dark-mode"` ke elemen `body` sehingga seluruh warna tema gelap langsung aktif seketika tanpa perlu menekan tombol lagi.
- **Baris 5-8:** Memeriksa tombol `#btnDarkMode` dan mengubah teksnya menjadi `"Light Mode"` agar sesuai dengan keadaan aktif.
- **Baris 10 (`isiSkillsGrid();`):** Memanggil fungsi pembuatan elemen keahlian dinamis di halaman Beranda.
- **Baris 11 (`pasangEventCards();`):** Memanggil fungsi pemasangan event hover pada kartu proyek.
- **Baris 12 (`pasangEventInput();`):** Memanggil fungsi pemasangan listener input formulir kontak.
- **Baris 14 (`var skillBars = document.querySelectorAll(".skill-bar-fill");`):** Memeriksa apakah halaman saat ini memiliki elemen bilah keahlian.
- **Baris 15 (`if (skillBars.length > 0) {`):** Jika ditemukan bilah keahlian (khusus di halaman Tentang Saya).
- **Baris 16-18:** Menjalankan fungsi `animasiProgressBar()` dengan penundaan 500 milidetik agar transisi visual pengisian bilah terlihat memukau begitu halaman terbuka.
- **Baris 19-20 (`}`):** Menutup blok pengecekan dan fungsi callback inisialisasi load.

---

## 3. PENJELASAN KODE CSS (style.css) BARIS PER BARIS

### Bagian 1: Reset dan Pengaturan Dasar (Reset & Base Styles)

#### Potongan Kode:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f0f2f5;
    color: #1a1a2e;
    line-height: 1.7;
    transition: background-color 0.4s, color 0.4s;
}
```

#### Penjelasan Baris per Baris:
- **`* {`**: Menggunakan selector universal (`*`) yang menargetkan seluruh elemen HTML pada halaman.
- **`margin: 0;`**: Menghilangkan margin bawaan (default) yang berbeda-beda di tiap browser.
- **`padding: 0;`**: Menghilangkan ruang bantalan (padding) bawaan seluruh elemen.
- **`box-sizing: border-box;`**: Memastikan ukuran lebar (width) dan tinggi (height) suatu elemen sudah memperhitungkan padding dan border ke dalamnya, sehingga tata letak tidak rusak atau bergeser.
- **`html { scroll-behavior: smooth; }`**: Membuat pergerakan gulir layar (scrolling) saat berpindah antar bagian halaman menjadi halus dan tidak melompat mendadak.
- **`font-family: Arial, Helvetica, sans-serif;`**: Mengatur jenis huruf utama yang bersih, profesional, dan kompatibel di semua komputer.
- **`background-color: #f0f2f5;`**: Mengatur warna latar belakang halaman mode terang dengan abu-abu sangat muda yang nyaman di mata.
- **`color: #1a1a2e;`**: Mengatur warna teks utama dengan biru tua gelap untuk kontras membaca yang tinggi.
- **`line-height: 1.7;`**: Memberikan jarak antar baris teks sebesar 1,7 kali ukuran font agar tulisan nyaman dan mudah dibaca.
- **`transition: background-color 0.4s, color 0.4s;`**: Memberikan animasi transisi perubahan warna latar dan warna teks selama 0,4 detik saat berganti mode gelap/terang.

---

### Bagian 2: Mode Gelap (Dark Mode Styles)

#### Potongan Kode:
```css
body.dark-mode {
    background-color: #0f0f1a;
    color: #e8e8f0;
}

body.dark-mode #header {
    background-color: #16213e;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

body.dark-mode .section-alt {
    background-color: #16213e;
}

body.dark-mode .project-card,
body.dark-mode .skill-card,
body.dark-mode .timeline-content,
body.dark-mode .kontak-info-item {
    background-color: #1a1a2e;
    border-color: #2d2d4e;
    color: #e8e8f0;
}

body.dark-mode input,
body.dark-mode textarea {
    background-color: #1a1a2e;
    border-color: #2d2d4e;
    color: #e8e8f0;
}
```

#### Penjelasan Baris per Baris:
- **`body.dark-mode { ... }`**: Mengatur aturan CSS khusus saat class `.dark-mode` disematkan ke elemen `<body>` oleh JavaScript.
- **`background-color: #0f0f1a;`**: Mengubah latar belakang seluruh halaman menjadi hitam kebiruan pekat.
- **`color: #e8e8f0;`**: Mengubah warna teks utama menjadi putih keperakan lembut agar tidak menyilaukan mata.
- **`body.dark-mode #header`**: Mengubah warna bilah navigasi header menjadi biru gelap (`#16213e`) dengan bayangan yang lebih tegas.
- **`body.dark-mode .section-alt`**: Mengubah warna latar section alternatif agar tetap memiliki pemisah visual yang elegan.
- **`body.dark-mode .project-card, ...`**: Mengubah warna latar kartu proyek, kartu keahlian, riwayat, dan info kontak menjadi gelap (`#1a1a2e`) dengan garis batas abu-abu gelap (`#2d2d4e`).
- **`body.dark-mode input, body.dark-mode textarea`**: Mengubah latar kolom isian formulir menjadi gelap dengan teks terang, selaras dengan estetika mode gelap modern.

---

### Bagian 3: Header dan Navigasi (#header, #navbar)

#### Potongan Kode:
```css
#header {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo {
    font-size: 1.8rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -1px;
}

.logo .accent {
    color: #7c3aed;
}

.tagline {
    font-size: 0.75rem;
    color: #a0a8c0;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 2px;
}

#navbar {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.nav-list {
    list-style: none;
    display: flex;
    gap: 0.5rem;
}

.nav-link {
    text-decoration: none;
    color: #c0c8e0;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
    background-color: rgba(124, 58, 237, 0.2);
    color: #a78bfa;
}

.nav-link.active {
    background-color: #7c3aed;
    color: #ffffff;
}
```

#### Penjelasan Baris per Baris:
- **`background: linear-gradient(...)`**: Menerapkan gradien warna latar belakang 3 warna bernuansa gelap elegan dari kiri atas ke kanan bawah.
- **`padding: 1rem 2rem;`**: Memberikan bantalan ruang vertikal 1rem dan horizontal 2rem di dalam header.
- **`position: sticky; top: 0; z-index: 100;`**: Menjadikan header menempel di posisi paling atas layar saat halaman digulir ke bawah, dengan lapisan tertinggi (`z-index: 100`) agar tidak tertutup elemen lain.
- **`display: flex; justify-content: space-between;`**: Menggunakan modul Flexbox CSS untuk memisahkan posisi logo di sisi kiri dan menu navigasi di sisi kanan secara otomatis.
- **`flex-wrap: wrap; gap: 1rem;`**: Memungkinkan elemen header turun ke bawah secara rapi pada layar kecil dengan jarak renggang 1rem.
- **`.logo` & `.logo .accent`**: Mengatur ukuran teks logo nama menjadi tebal (900) dengan warna aksen ungu modern (`#7c3aed`).
- **`.tagline`**: Mengatur teks deskripsi kecil di bawah logo dengan huruf kapital dan spasi karakter yang renggang.
- **`.nav-list { list-style: none; display: flex; }`**: Menghapus titik balok bawaan elemen `<ul>` dan menyusun menu navbar secara mendatar menggunakan Flexbox.
- **`.nav-link`**: Menghilangkan garis bawah tautan (`text-decoration: none`), memberi ruang klik tombol, serta mengatur transisi warna.
- **`.nav-link:hover`**: Memberikan warna latar ungu transparan dan warna teks ungu muda saat kursor mouse menyentuh link navigasi.
- **`.nav-link.active`**: Memberikan warna latar ungu penuh (`#7c3aed`) dan teks putih pada menu halaman yang sedang aktif dibuka.

---

### Bagian 4: Tombol Dark Mode (#btnDarkMode)

#### Potongan Kode:
```css
#btnDarkMode {
    background-color: rgba(124, 58, 237, 0.2);
    color: #c0c8e0;
    border: 1px solid rgba(124, 58, 237, 0.4);
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

#btnDarkMode:hover {
    background-color: #7c3aed;
    color: #ffffff;
    border-color: #7c3aed;
}
```

#### Penjelasan Baris per Baris:
- **`border-radius: 20px;`**: Membuat sudut tombol berbentuk lonjong membulat (pill-shaped).
- **`cursor: pointer;`**: Mengubah bentuk kursor mouse menjadi telunjuk saat diarahkan ke tombol sebagai indikator elemen interaktif.
- **`#btnDarkMode:hover`**: Mengubah latar tombol menjadi ungu penuh dan teks menjadi putih saat disentuh kursor.

---

### Bagian 5: Tata Letak Section dan Judul (.section, .section-title)

#### Potongan Kode:
```css
.section {
    padding: 5rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
}

.section-alt {
    background-color: #e8eaf0;
    max-width: 100%;
    padding: 5rem 2rem;
}

.section-title {
    font-size: 2rem;
    font-weight: 800;
    color: #1a1a2e;
    text-align: center;
    margin-bottom: 0.5rem;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #7c3aed, #a78bfa);
    border-radius: 2px;
    margin: 0.5rem auto 0;
}
```

#### Penjelasan Baris per Baris:
- **`max-width: 1100px; margin: 0 auto;`**: Membatasi lebar maksimum konten utama hingga 1100 piksel dan menempatkannya persis di tengah layar (center-aligned).
- **`.section-alt`**: Mengatur blok section dengan warna latar pembeda abu-abu lembut selebar 100% layar.
- **`.section-title::after`**: Menggunakan pseudo-element CSS `::after` untuk menggambar garis dekoratif bergradien ungu selebar 60px di bawah judul section secara otomatis tanpa menambah tag HTML baru.

---

### Bagian 6: Bagian Hero / Banner Utama (.hero-section)

#### Potongan Kode:
```css
.hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
    gap: 3rem;
    flex-wrap: wrap;
}

.hero-text {
    flex: 1;
    min-width: 280px;
}

.hero-sub {
    font-size: 1rem;
    color: #7c3aed;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
}

.hero-text h2 {
    font-size: 3rem;
    font-weight: 900;
    color: #1a1a2e;
    line-height: 1.1;
    margin-bottom: 1rem;
}

.hero-desc {
    color: #555;
    font-size: 1.05rem;
    margin-bottom: 2rem;
    max-width: 480px;
}
```

#### Penjelasan Baris per Baris:
- **`display: flex; align-items: center; justify-content: space-between;`**: Menata teks perkenalan di sebelah kiri dan foto profil di sebelah kanan secara sejajar.
- **`.hero-text { flex: 1; min-width: 280px; }`**: Membuat kolom teks mengambil porsi ruang yang fleksibel dengan lebar minimum 280px agar tidak menyusut terlalu sempit.
- **`.hero-text h2 { font-size: 3rem; line-height: 1.1; }`**: Mengatur judul nama dengan ukuran besar yang mencolok dan rapat.

---

### Bagian 7: Komponen Tombol (.btn-primary, .btn-secondary)

#### Potongan Kode:
```css
.btn-primary {
    background: linear-gradient(135deg, #7c3aed, #5b21b6);
    color: #ffffff;
    padding: 0.75rem 1.8rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    display: inline-block;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
}

.btn-secondary {
    background-color: transparent;
    color: #7c3aed;
    padding: 0.75rem 1.8rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    border: 2px solid #7c3aed;
    cursor: pointer;
    font-size: 0.95rem;
    display: inline-block;
    transition: background-color 0.2s, color 0.2s, transform 0.2s;
}

.btn-secondary:hover {
    background-color: #7c3aed;
    color: #ffffff;
    transform: translateY(-2px);
}
```

#### Penjelasan Baris per Baris:
- **`.btn-primary`**: Tombol utama dengan latar gradien ungu dan bayangan lembut (`box-shadow`).
- **`transform: translateY(-2px);`**: Efek interaksi saat disentuh kursor yang mengangkat tombol setinggi 2 piksel ke atas untuk memberikan respon visual sentuhan.
- **`.btn-secondary`**: Tombol alternatif dengan latar transparan dan garis tepi ungu 2 piksel yang berubah menjadi ungu penuh saat dihover.

---

### Bagian 8: Bingkai Foto Profil & Kontrol Foto (.avatar-ring, .avatar-img)

#### Potongan Kode:
```css
.avatar-ring {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #a78bfa, #5b21b6);
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #f0f2f5;
    transition: opacity 0.4s;
    background-color: #d1c4e9;
}
```

#### Penjelasan Baris per Baris:
- **`border-radius: 50%;`**: Membentuk bingkai dan foto menjadi lingkaran sempurna.
- **`padding: 4px; background: linear-gradient(...)`**: Menciptakan efek cincin batas luar bergradien warna di sekeliling foto.
- **`object-fit: cover;`**: Memastikan gambar terpotong pas di dalam lingkaran tanpa terdistorsi atau gepeng.
- **`transition: opacity 0.4s;`**: Memberikan durasi perubahan opasitas 0,4 detik saat fungsi sembunyikan/tampilkan foto dijalankan JavaScript.

---

### Bagian 9: Grid Keahlian (.skills-grid, .skill-card)

#### Potongan Kode:
```css
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
}

.skill-card {
    background-color: #ffffff;
    border: 1px solid #e0e4f0;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: default;
}

.skill-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.15);
}
```

#### Penjelasan Baris per Baris:
- **`display: grid;`**: Menggunakan modul CSS Grid untuk menata tata letak kartu secara responsif.
- **`grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));`**: Secara otomatis membagi kolom dengan ukuran minimal 150px dan membagi sisa ruang secara seimbang tanpa memerlukan media query berulang.
- **`.skill-card:hover`**: Memberikan efek kartu terangkat setinggi 6px ke atas disertai bayangan ungu halus saat kursor melintas.

---

### Bagian 10: Kartu Proyek (.projects-grid, .project-card, .project-tag)

#### Potongan Kode:
```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.project-card {
    background-color: #ffffff;
    border: 1px solid #e0e4f0;
    border-radius: 12px;
    padding: 2rem;
    transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15);
}

.project-tag {
    display: inline-block;
    background-color: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin: 0.2rem 0.1rem;
}
```

#### Penjelasan Baris per Baris:
- **`minmax(280px, 1fr)`**: Menetapkan lebar kartu proyek minimal 280px sehingga pas di layar ponsel maupun desktop.
- **`.project-tag`**: Memberikan gaya badge label teknologi dengan latar ungu transparan 10% dan teks ungu cerah.

---

### Bagian 11: Tabel Biodata Diri (.info-table, .info-row)

#### Potongan Kode:
```css
.info-table {
    margin-top: 1.5rem;
    border-top: 1px solid #e0e4f0;
}

.info-row {
    display: flex;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e0e4f0;
    gap: 1rem;
    font-size: 0.9rem;
}

.info-label {
    min-width: 140px;
    font-weight: 700;
    color: #7c3aed;
}

.info-value {
    color: #333;
}
```

#### Penjelasan Baris per Baris:
- **`.info-row { display: flex; }`**: Mengatur baris data informasi secara horizontal menggunakan Flexbox.
- **`.info-label { min-width: 140px; }`**: Mengunci lebar kolom label minimal 140px agar seluruh isi data nilai sejajar rapi ke bawah.

---

### Bagian 12: Bilah Keahlian Persentase (.skill-bar-track, .skill-bar-fill)

#### Potongan Kode:
```css
.skill-bar-track {
    background-color: #d0d4e8;
    border-radius: 20px;
    height: 12px;
    overflow: hidden;
}

.skill-bar-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #7c3aed, #a78bfa);
    border-radius: 20px;
    transition: width 1.2s ease-in-out;
}
```

#### Penjelasan Baris per Baris:
- **`.skill-bar-track`**: Wadah lintasan luar dengan tinggi 12px dan sudut melengkung 20px. `overflow: hidden` memastikan isi di dalamnya tidak bocor keluar batas sudut bulat.
- **`.skill-bar-fill`**: Bilah pengisi bergradien horizontal yang lebar awalnya diatur 0%.
- **`transition: width 1.2s ease-in-out;`**: Kunci animasi: saat JavaScript mengubah nilai `style.width`, peramban secara otomatis memanjangkan bilah selama 1,2 detik dengan akselerasi halus.

---

### Bagian 13: Garis Waktu Riwayat Pendidikan (.timeline)

#### Potongan Kode:
```css
.timeline {
    position: relative;
    padding-left: 2rem;
    max-width: 700px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #7c3aed, #a78bfa, transparent);
}

.timeline-dot {
    position: absolute;
    left: -2rem;
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #7c3aed;
    border: 3px solid #f0f2f5;
    box-shadow: 0 0 0 2px #7c3aed;
}
```

#### Penjelasan Baris per Baris:
- **`.timeline::before`**: Menggambar garis vertikal lurus bergradien ungu di sebelah kiri daftar riwayat pendidikan menggunakan pseudo-element.
- **`.timeline-dot`**: Menggambar lingkaran penanda titik riwayat dengan cincin ganda tepat di atas garis vertikal.

---

### Bagian 14: Tata Letak Formulir dan Indikator Error (input, textarea, .error-msg)

#### Potongan Kode:
```css
input,
textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e0e4f0;
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffffff;
    color: #1a1a2e;
    transition: border-color 0.3s, box-shadow 0.3s;
    outline: none;
}

input:focus,
textarea:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
}

input.input-error,
textarea.input-error {
    border-color: #dc2626;
}

.error-msg {
    color: #dc2626;
    font-size: 0.82rem;
    margin-top: 0.3rem;
    min-height: 1.2rem;
}
```

#### Penjelasan Baris per Baris:
- **`input, textarea`**: Mengatur kotak isian selebar 100% kolom dengan sudut lengkung 8px dan transisi fokus.
- **`:focus`**: Memberikan cincin cahaya ungu (`box-shadow`) saat kolom sedang aktif dipilih pengguna.
- **`.input-error`**: Mengubah batas kolom menjadi merah tegas (`#dc2626`) jika validasi JavaScript mendeteksi kesalahan data.
- **`.error-msg`**: Wadah teks pesan peringatan berwarna merah dengan tinggi minimum (`min-height: 1.2rem`) agar tata letak di bawahnya tidak bergetar saat pesan muncul.

---

### Bagian 15: Notifikasi Keberhasilan (.notif-sukses)

#### Potongan Kode:
```css
.notif-sukses {
    margin-top: 1.5rem;
    background-color: #d1fae5;
    color: #065f46;
    border: 1px solid #6ee7b7;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 500;
}

body.dark-mode .notif-sukses {
    background-color: #064e3b;
    color: #6ee7b7;
    border-color: #065f46;
}
```

#### Penjelasan Baris per Baris:
- **`.notif-sukses`**: Kotak pengumuman berlatar hijau muda dengan teks hijau tua sebagai indikator bahwa pesan berhasil terkirim.
- **`body.dark-mode .notif-sukses`**: Penyesuaian kontras warna hijau tua gelap untuk kenyamanan mata pada mode gelap.

---

### Bagian 16: Footer Halaman (#footer)

#### Potongan Kode:
```css
#footer {
    text-align: center;
    padding: 2rem;
    background-color: #1a1a2e;
    color: #888;
    font-size: 0.88rem;
    border-top: 1px solid #2d2d4e;
    margin-top: 2rem;
}
```

#### Penjelasan Baris per Baris:
- **`text-align: center;`**: Memposisikan teks hak cipta tepat di tengah.
- **`background-color: #1a1a2e;`**: Menggunakan warna biru gelap yang senada dengan header.

---

### Bagian 17: Responsivitas Layar (@media queries)

#### Potongan Kode:
```css
@media (max-width: 768px) {
    #header {
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-section {
        flex-direction: column-reverse;
        text-align: center;
    }

    .hero-text h2 {
        font-size: 2rem;
    }

    .hero-buttons {
        justify-content: center;
    }

    .tentang-grid,
    .kontak-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 480px) {
    .nav-list {
        flex-direction: column;
        gap: 0.25rem;
    }

    .hero-text h2 {
        font-size: 1.7rem;
    }
}
```

#### Penjelasan Baris per Baris:
- **`@media (max-width: 768px)`**: Mengatur aturan tata letak saat situs dibuka pada layar tablet atau ponsel pintar (lebar layar kurang dari atau sama dengan 768 piksel).
- **`flex-direction: column;`**: Mengubah susunan elemen mendatar menjadi menurun ke bawah.
- **`flex-direction: column-reverse;`**: Membalik susunan banner hero agar foto profil tampil di atas dan teks perkenalan di bawahnya pada layar kecil.
- **`grid-template-columns: 1fr;`**: Menumpuk kolom grid Tentang dan Kontak menjadi 1 kolom penuh ke bawah.
- **`@media (max-width: 480px)`**: Mengatur tampilan pada layar ponsel kecil dengan mengecilkan ukuran teks judul dan menata menu navigasi secara vertikal ke bawah.

---
Laporan ini disusun secara komprehensif untuk kebutuhan pembelajaran, dokumentasi teknis, dan presentasi Ujian Tengah Semester mata kuliah Pemrograman Web.
