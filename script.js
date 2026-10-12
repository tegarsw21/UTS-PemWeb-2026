/* =====================================================
   SCRIPT.JS - Portofolio Website
   Materi: JavaScript & Manipulasi DOM (Modul 6)
   ===================================================== */

/* ── 1. DARK MODE (Style & Animation) ───────────────── */
/*
   Sesuai tugas modul JS:
   "Tambahkan tombol Dark Mode yang jika diklik akan mengaktifkan
   mode gelap... dapat dikembalikan ke mode terang ketika tombol diklik ulang."
*/
function toggleDarkMode() {
    var body = document.body;
    var btnDark = document.getElementById("btnDarkMode");

    // DOM Manipulation: toggle class pada body
    if (body.classList.contains("dark-mode")) {
        // Kembalikan ke Light Mode
        body.classList.remove("dark-mode");
        btnDark.innerText = "Dark Mode";
        // Simpan preferensi ke localStorage
        localStorage.setItem("tema", "light");
    } else {
        // Aktifkan Dark Mode
        body.classList.add("dark-mode");
        btnDark.innerText = "Light Mode";
        localStorage.setItem("tema", "dark");
    }
}

/* ── 2. SEMBUNYIKAN / TAMPILKAN FOTO (DOM Manipulation) ─ */
/*
   Sesuai tugas modul JS halaman about:
   "Buat tombol 'Sembunyikan Foto' dan 'Tampilkan Foto' untuk
   mengatur visibilitas foto profil."
*/
function sembunyikanFoto() {
    var foto = document.getElementById("foto-profil");
    var btnSembunyi = document.getElementById("btnSembunyikanFoto");
    var btnTampil = document.getElementById("btnTampilkanFoto");

    if (foto !== null) {
        // Mengubah style visibility menggunakan DOM
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

/* ── 3. VALIDASI FORM & DOM (Form Validation + DOM Manipulation) ── */
/*
   Sesuai tugas modul JS halaman contact:
   - Menampilkan notifikasi "Pesan berhasil dikirim" menggunakan DOM
   - Jika input kosong, tampilkan pesan error dengan warna merah
*/
function kirimPesan(event) {
    // Cegah form submit default (reload halaman)
    event.preventDefault();

    var nama = document.getElementById("inputNama");
    var email = document.getElementById("inputEmail");
    var pesan = document.getElementById("inputPesan");

    var errorNama = document.getElementById("errorNama");
    var errorEmail = document.getElementById("errorEmail");
    var errorPesan = document.getElementById("errorPesan");
    var notifSukses = document.getElementById("notifSukses");

    // Reset error sebelumnya
    errorNama.innerText = "";
    errorEmail.innerText = "";
    errorPesan.innerText = "";
    nama.classList.remove("input-error");
    email.classList.remove("input-error");
    pesan.classList.remove("input-error");
    notifSukses.style.display = "none";

    var valid = true;

    // Validasi: Nama tidak boleh kosong
    if (nama.value.trim() === "") {
        errorNama.innerText = "Nama tidak boleh kosong!";
        nama.classList.add("input-error");
        valid = false;
    }

    // Validasi: Email harus diisi dan format benar
    if (email.value.trim() === "") {
        errorEmail.innerText = "Email tidak boleh kosong!";
        email.classList.add("input-error");
        valid = false;
    } else {
        // Cek format email (mengandung @ dan .)
        var atIndex = email.value.indexOf("@");
        var dotIndex = email.value.lastIndexOf(".");
        if (atIndex < 1 || dotIndex < atIndex + 2) {
            errorEmail.innerText = "Format email tidak valid! (contoh: nama@email.com)";
            email.classList.add("input-error");
            valid = false;
        }
    }

    // Validasi: Pesan tidak boleh kosong
    if (pesan.value.trim() === "") {
        errorPesan.innerText = "Pesan tidak boleh kosong!";
        pesan.classList.add("input-error");
        valid = false;
    }

    // Jika semua valid: tampilkan notifikasi sukses menggunakan DOM
    if (valid) {
        notifSukses.style.display = "block";
        // Reset form
        document.getElementById("formKontak").reset();
        // Scroll ke notifikasi
        notifSukses.scrollIntoView({ behavior: "smooth" });
    }
}

/* ── 4. ANIMASI PROGRESS BAR (Style & Animation) ─────── */
function animasiProgressBar() {
    var bars = document.querySelectorAll(".skill-bar-fill");
    var labels = [
        document.getElementById("html-pct"),
        document.getElementById("css-pct"),
        document.getElementById("js-pct"),
        document.getElementById("jq-pct")
    ];

    // Reset dulu ke 0
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.width = "0%";
        if (labels[i] !== null) {
            labels[i].innerText = "0%";
        }
    }

    // Delay sedikit lalu animasi
    setTimeout(function() {
        for (var j = 0; j < bars.length; j++) {
            var targetValue = bars[j].getAttribute("data-value");
            bars[j].style.width = targetValue + "%";

            // Update label persentase dengan animasi counter
            animasiCounter(labels[j], parseInt(targetValue));
        }
    }, 200);

    // Ubah teks tombol
    var btn = document.getElementById("btnAnimasiBar");
    if (btn !== null) {
        btn.innerText = "Ulangi Animasi";
    }
}

// Fungsi helper untuk animasi counter angka
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

/* ── 5. ISI SKILLS GRID (DOM Manipulation - createElement) ── */
/*
   Mengisi section keahlian di halaman Beranda menggunakan
   DOM manipulation: createElement dan appendChild
   (sesuai modul JS latihan 2: fungsi tampilkan() dengan createElement)
*/
function isiSkillsGrid() {
    var skillsContainer = document.getElementById("skills-grid");
    if (skillsContainer === null) return;

    // Data keahlian (menggunakan array sesuai modul)
    var daftarKeahlian = [
        { nama: "HTML5", level: "Dasar" },
        { nama: "CSS3", level: "Dasar" },
        { nama: "JavaScript", level: "Dasar" },
        { nama: "jQuery", level: "Dasar" },
        { nama: "Git", level: "Dasar" },
        { nama: "Responsive", level: "Dasar" }
    ];

    // Kosongkan dulu (sama seperti innerHTML = "" di modul)
    skillsContainer.innerHTML = "";

    // Gunakan for...of sesuai modul
    for (var skill of daftarKeahlian) {
        // Buat elemen card (createElement sesuai modul)
        var card = document.createElement("div");
        card.classList.add("skill-card");

        var judul = document.createElement("h3");
        judul.innerText = skill.nama;

        var keterangan = document.createElement("p");
        keterangan.innerText = skill.level;

        // appendChild sesuai modul
        card.appendChild(judul);
        card.appendChild(keterangan);
        skillsContainer.appendChild(card);
    }
}

/* ── 6. EVENT HANDLING (mouseover pada project cards) ─── */
/*
   Event handling sesuai modul: mouseover dan mouseout
   untuk mengubah style elemen saat mouse diarahkan
*/
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

/* ── 7. EVENT HANDLING pada INPUT KONTAK (real-time) ──── */
/*
   Event input untuk menampilkan teks secara real-time
   (sesuai modul: addEventListener("input", ...))
*/
function pasangEventInput() {
    var inputNama = document.getElementById("inputNama");
    var inputPesan = document.getElementById("inputPesan");

    if (inputNama !== null) {
        inputNama.addEventListener("input", function() {
            // Hapus error saat user mulai mengetik
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

/* ── 8. INISIALISASI HALAMAN (window load event) ────────── */
/*
   Sesuai modul: window.addEventListener("load", ...)
   Dijalankan saat halaman selesai dimuat
*/
window.addEventListener("load", function() {

    // Cek preferensi dark mode yang tersimpan
    var temaTersimpan = localStorage.getItem("tema");
    if (temaTersimpan === "dark") {
        document.body.classList.add("dark-mode");
        var btnDark = document.getElementById("btnDarkMode");
        if (btnDark !== null) {
            btnDark.innerText = "Light Mode";
        }
    }

    // Isi skills grid (hanya jika ada di halaman Beranda)
    isiSkillsGrid();

    // Pasang event pada project cards (hover border)
    pasangEventCards();

    // Pasang event pada input form
    pasangEventInput();

    // Jalankan animasi progress bar jika ada di halaman Tentang
    var skillBars = document.querySelectorAll(".skill-bar-fill");
    if (skillBars.length > 0) {
        // Auto-animasi saat halaman pertama kali dimuat
        setTimeout(function() {
            animasiProgressBar();
        }, 500);
    }

});
