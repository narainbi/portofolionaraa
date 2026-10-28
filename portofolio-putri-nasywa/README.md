# Portofolio Personal - Putri Nasywa Aprilia
> Fresh Graduate Psikologi Industri & Organisasi (Binus University)

Website portofolio personal satu halaman (*single-page*) dengan tema minimalis elegan, palet warna putih gading (*ivory*) dan *sage green*, tipografi serif editorial (*Playfair Display*) dipadukan dengan sans-serif (*Inter*), responsif dari 360px hingga 1440px, ramah aksesibilitas, serta siap dideploy langsung ke **Vercel**.

---

## 📁 Struktur File & Direktori

```text
portofolio-putri-nasywa/
├── index.html        # Kerangka semantik HTML5, meta tag SEO, Open Graph & accessibility
├── style.css         # Desain minimalis, token warna CSS variables (Light/Dark mode), responsif
├── styles.css        # Wrapper import untuk kompatibilitas
├── script.js         # Objek data terpusat (PORTFOLIO_DATA), rendering dinamis & interaktivitas
├── main.js           # Wrapper import untuk kompatibilitas
├── README.md         # Dokumentasi panduan penggunaan & deployment
└── assets/           # Folder aset media & ikon
    ├── putri.jpg     # Foto profil utama (sudah terpasang foto asli Putri)
    ├── profile.jpg   # Alias foto profil
    ├── favicon.svg   # Favicon monogram minimalis "PNA"
    └── avatar-putri.svg # SVG fallback ilustrasi profil
```

---

## 🎨 Panduan Kustomisasi & Edit Konten

### 1. Cara Mengganti Foto Profil
1. Siapkan foto terbaru Anda dalam format `.jpg` atau `.png` (rasio potret 4:5 atau 1:1 disarankan).
2. Simpan foto ke dalam folder `assets/` dengan nama `putri.jpg` (menggantikan file yang lama).
3. Atau, ubah path gambar di `script.js` pada bagian atas:
   ```javascript
   profile: {
     // ...
     photoUrl: "assets/nama-foto-baru.jpg",
   }
   ```

### 2. Cara Mengedit Konten Data (Single Source of Truth)
Seluruh teks, biodata, pengalaman kerja, pendidikan, keahlian, dan aktivitas tersimpan rapi dalam objek **`PORTFOLIO_DATA`** di baris 17–195 file **`script.js`**:
- **Profil & Kontak**: Ubah nama, email, nomor WhatsApp, domisili, atau link profil/LinkedIn.
- **About Me**: Ubah teks biografi atau daftar *chips* minat & topik kajian.
- **Pengalaman Kerja**: Tambah atau perbarui poin tugas dan tanggung jawab.
- **Pendidikan**: Perbarui gelar, IPK, atau nama institusi.
- **Keahlian (Skills)**: Tambahkan tag *Soft Skill* atau *Hard Skill*.
- **Aktivitas**: Perbarui riwayat organisasi dan daftar tahun pengabdian masyarakat.

### 3. Cara Mengaktifkan Bagian Projects, Certification, atau Achievements
Sesuai kebutuhan fresh graduate saat ini, bagian Projects, Certification, dan Achievements sengaja disembunyikan agar tidak menampilkan data fiktif atau bagian kosong.

Telah disediakan template komentar siap pakai di:
1. **`index.html`**: Cari komentar `TEMPLATE SECTION PROJECTS`, `TEMPLATE SECTION CERTIFICATIONS`, dan `TEMPLATE SECTION ACHIEVEMENTS`, lalu hapus tanda komentar `<!-- ... -->`.
2. **`script.js`**: Cari bagian komentar `TEMPLATE KOMENTAR UNTUK PENGEMBANGAN FITUR DI MASA DEPAN` untuk mengisikan array datanya.

### 4. Menghubungkan Formulir Kontak (Formspree / EmailJS)
Secara *default*, form kontak dilengkapi validasi sisi klien dan akan membuka draft email via `mailto:` dengan subjek dan isi pesan otomatis.

Untuk menerima pesan langsung ke inbox tanpa membuka aplikasi email pengirim:
- **Opsi Formspree**:
  1. Daftar gratis di [Formspree.io](https://formspree.io/).
  2. Buka `index.html` pada elemen `<form id="portfolio-contact-form">`.
  3. Tambahkan atribut: `action="https://formspree.io/f/ID_FORM_ANDA"` dan `method="POST"`.
  4. Hapus `e.preventDefault()` pada `script.js` atau gunakan `fetch(form.action, { method: 'POST', body: new FormData(form) })`.
- **Opsi EmailJS**:
  Ikuti petunjuk komentar di dalam fungsi `initContactForm()` pada file `script.js`.

---

## 🚀 Panduan Deploy ke Vercel

Website ini murni dibangun menggunakan **Vanilla HTML, CSS, dan JavaScript**, sehingga tidak memerlukan proses *build* rumit (*zero configuration*).

### Metode 1: Deploy via Dashboard Vercel (Paling Mudah)
1. Unggah (*push*) folder proyek ini ke repositori baru di akun GitHub Anda (misal: `portfolio-putri-nasywa`).
2. Masuk ke [Vercel](https://vercel.com/) dan klik **"Add New"** > **"Project"**.
3. Hubungkan repositori GitHub Anda.
4. Biarkan pengaturan *Framework Preset* tetap **Other**, lalu klik **Deploy**.
5. Dalam beberapa detik, portofolio Anda sudah aktif dengan URL publik (misal: `https://putri-nasywa.vercel.app/`).

### Metode 2: Deploy via Vercel CLI
Jika memiliki Node.js terpasang:
```bash
npm i -g vercel
vercel
```
Ikuti instruksi singkat di terminal untuk langsung mempublikasikannya.

---

## 💻 Pengujian Lokal

Untuk melihat tampilan website di komputer lokal:
- Cukup klik dua kali file `index.html` untuk membukanya di browser favorit Anda, **atau**
- Jalankan skrip PowerShell bawaan di terminal:
  ```powershell
  .\serve.ps1
  ```
  Lalu buka `http://localhost:3000/` di browser.

---

&copy; 2026 Putri Nasywa Aprilia. Hak Cipta Dilindungi.
