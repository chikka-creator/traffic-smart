---

## 0. Peran & Prinsip Kerja

Kamu membangun MVP untuk lomba dengan **deadline < 1 minggu**. Prioritas:
1. Semua fitur inti benar-benar **berfungsi**, bukan mockup/dummy.
2. Konsisten mengikuti design system di bawah — jangan improvisasi warna/font baru di tengah jalan.
3. Kalau harus memotong scope karena waktu, potong dari daftar "Di Luar Cakupan MVP" di PRD — **jangan** korbankan salah satu dari 4 fitur inti (Edukasi, Studi Kasus, Game, Evaluasi), karena itu semua nilai jual utama ke juri.
4. Setiap konten (studi kasus, statistik) yang butuh data nyata **wajib dicari lewat web search saat build**, bukan dikarang. Kalau ragu dengan suatu angka/fakta, cari sumber resmi (Korlantas Polri, KNKT, Kemenhub, media nasional kredibel) sebelum menuliskannya.

---

## 1. Tech Stack

- **HTML/CSS/JS murni** — tanpa framework, tanpa build tool/bundler. Alasan: gampang di-hosting di mana saja, tidak butuh setup rumit menjelang deadline.
- **Game:** [Phaser.js](https://phaser.io) versi terbaru, di-load lewat CDN (`<script src="https://cdn.jsdelivr.net/npm/phaser@.../dist/phaser.min.js">`), bukan lewat npm install.
- **Font:** Google Fonts, di-load via `<link>` tag.
- **Ikon:** boleh pakai icon set gratis (mis. Lucide, Heroicons — ambil sebagai SVG inline, jangan tarik dari CDN yang butuh JS besar).
- **Aset game:** kalau butuh sprite/tile jalan-kendaraan-cepat, gunakan aset gratis CC0 dari [Kenney.nl](https://kenney.nl) (sudah teruji dipakai ribuan game jam, license aman, hemat waktu dibanding gambar sendiri).
- **Penyimpanan skor sementara:** `localStorage` browser biasa (ini website statis biasa, bukan Claude artifact — jadi localStorage aman & valid dipakai di sini, beda dengan aturan artifact).

---

## 2. Struktur Folder

```
traffic-smart/
├── index.html              (Beranda)
├── edukasi.html
├── studi-kasus.html
├── game.html
├── evaluasi.html
├── /css
│   ├── style.css           (global: reset, variabel warna, tipografi, navbar, footer)
│   ├── home.css
│   ├── edukasi.css
│   ├── studi-kasus.css
│   ├── game.css
│   └── evaluasi.css
├── /js
│   ├── nav.js               (navbar & interaksi umum)
│   ├── studi-kasus-data.js  (array data studi kasus)
│   ├── quiz-data.js         (array soal kuis)
│   ├── quiz.js              (logika kuis + scoring)
│   └── /game
│       ├── main.js          (Phaser config & scene loader)
│       ├── scene-play.js    (scene utama simulasi)
│       └── scene-result.js  (scene hasil akhir)
├── /assets
│   ├── /illustrations       (SVG/PNG ilustrasi custom)
│   ├── /icons
│   └── /game                (sprite, tileset dari Kenney atau custom)
└── README.md
```

---

## 3. Design System

### Palet Warna (tema rambu lalu lintas, bukan warna Tuku)

| Nama | Hex | Pemakaian |
|---|---|---|
| Kuning Rambu | `#FDB813` | aksen utama, highlight, badge |
| Merah Stop | `#D62828` | peringatan, tombol penting, elemen bahaya di game |
| Hijau Aman | `#2A9D8F` | status "benar"/aman, tombol CTA positif |
| Abu Aspal | `#2B2D31` | teks gelap, background section gelap |
| Putih Marka | `#FAF9F6` | background utama (hangat, bukan putih dingin) |
| Biru Rambu Petunjuk | `#1D3557` | elemen navigasi/informasi (opsional, sekunder) |

### Tipografi
- **Judul/Display:** font rounded & tebal (mis. `Baloo 2` atau `Fredoka` dari Google Fonts) — kesan ramah & playful, mengganti peran font hand-lettered ala Tuku.
- **Body text:** font sans-serif jelas dan mudah dibaca (mis. `Plus Jakarta Sans` atau `Inter`) — **wajib legible**, ingat target audiens termasuk usia lebih tua, jangan pakai font dekoratif untuk paragraf panjang.
- Ukuran dasar body **minimal 16px**, judul section minimal 32px di desktop.

### Komponen Visual Khas
- Gunakan motif **sticker/badge** bernomor (seperti di referensi awal) untuk urutan fitur di Beranda — tapi gambar ulang dengan gaya sendiri, bukan reuse asset Canva lama.
- Elemen dekoratif: garis putus-putus (dashed line, seperti jalur kendaraan), bintang kecil, bentuk rambu (segitiga/lingkaran/persegi) sebagai aksen dekorasi antar-section.
- Sudut membulat (border-radius besar, 16-24px) untuk kartu — kesan ramah, bukan kaku.

---

## 4. Urutan Kerja (Build Order) — selaras dengan timeline 7 hari di PRD

**P0 = wajib ada. P1 = kerjakan kalau waktu masih ada.**

1. **P0** — Setup `style.css` global: variabel warna (CSS custom properties), reset, navbar, footer, grid dasar.
2. **P0** — `index.html` (Beranda): hero, section alasan pentingnya keselamatan lalu lintas (pakai data yang dicari via web search, bukan angka dari PRD ini — cari yang paling baru saat build), 4 kartu fitur.
3. **P0** — `edukasi.html`: 4 kategori (Pejalan Kaki, Motor, Mobil, Sepeda), tiap kategori beberapa poin singkat + ilustrasi/ikon.
4. **P0** — Riset studi kasus: cari 5-8 kejadian nyata dari sumber kredibel Indonesia, tulis ulang (parafrase) di `studi-kasus-data.js`, render sebagai kartu di `studi-kasus.html`.
5. **P0** — Game (`game.html` + `/js/game/*`): lihat spesifikasi detail di §5. Ini bagian paling berisiko molor — jangan ditunda ke hari terakhir.
6. **P0** — `evaluasi.html`: 10-15 soal di `quiz-data.js`, logika di `quiz.js`, tampilkan skor + feedback di akhir.
7. **P1** — Sertifikat hasil kuis (generate simple pakai `<canvas>`, bisa diunduh sebagai gambar).
8. **P1** — Micro-animasi scroll (fade-in section saat discroll) untuk memperkuat kesan storytelling ala Tuku.
9. **Wajib sebelum submit** — QA checklist di §7.

---

## 5. Spesifikasi Game 2D (Phaser.js)

**Konsep:** simulasi top-down sederhana. Pemain mengendarai satu kendaraan (motor atau mobil, pilih salah satu dulu untuk MVP) menyusuri jalan kota mini menuju titik tujuan, sambil dihadapkan pada elemen lalu lintas yang harus direspons dengan benar.

### Mekanik Inti
- **Kontrol:** Arrow keys / WASD untuk gerak (atas-bawah-kiri-kanan atau maju-belok, pilih yang paling gampang diimplementasikan Phaser Arcade Physics).
- **Sistem poin "Skor Keselamatan"**, mulai dari 100:
  - Menerobos lampu merah → **-15**
  - Melawan arah di jalur satu arah (one way) → **-15**
  - Tidak berhenti di rambu STOP → **-10**
  - Melebihi batas kecepatan di zona sekolah/ramai → **-10**
  - Menabrak pejalan kaki di zebra cross → **-25** (dan langsung trigger "Game Over — Coba Lagi")
  - Tidak pakai helm (jika mode motor, dipilih di awal sebagai checkpoint) → **-10**
- **Kondisi selesai:** sampai di titik tujuan.
  - Skor akhir ≥ 70 → "Selamat! Kamu Pengendara yang Bertanggung Jawab 🎉"
  - Skor akhir < 70 → "Masih Ada yang Perlu Diperbaiki — Yuk Coba Lagi" + tampilkan pelanggaran apa saja yang terjadi
- **Feedback real-time:** setiap pelanggaran muncul notifikasi singkat di layar (mis. "⚠️ Kamu menerobos lampu merah! -15 poin") — ini bagian penting dari nilai edukasi game-nya, bukan cuma "game over" tanpa penjelasan.

### Elemen di Map (MVP: 1 map cukup)
- Minimal 2 persimpangan dengan lampu lalu lintas (siklus merah-kuning-hijau otomatis)
- 1 rambu STOP
- 1 ruas jalan satu arah (one way)
- 1 zebra cross dengan pedestrian NPC sederhana (bisa cuma sprite statis yang muncul berkala, tidak perlu AI canggih)
- 1 zona batas kecepatan (mis. dekat "sekolah")

### Desain Kesulitan
Game ini **bukan tentang refleks cepat** — kecepatan kendaraan dibuat lambat/terkontrol supaya pemain sempat berpikir dan mengambil keputusan yang benar. Ini krusial supaya orang awam (termasuk juri yang baru pertama kali main) tidak frustrasi.

### Struktur Scene Phaser
1. `BootScene` — load asset
2. `IntroScene` — pilih kendaraan (opsional untuk MVP, boleh skip langsung ke PlayScene kalau waktu mepet)
3. `PlayScene` — simulasi utama
4. `ResultScene` — skor akhir + rekap pelanggaran + tombol "Main Lagi" & "Kembali ke Beranda"

---

## 6. Struktur Data Konten

### Studi Kasus (`studi-kasus-data.js`)
```js
const studiKasus = [
  {
    id: 1,
    judul: "...",
    ringkasan: "...", // parafrase 3-5 kalimat, BUKAN copy-paste dari sumber
    pelajaran: ["poin 1", "poin 2"],
    sumber: { nama: "Nama Media/Institusi", url: "https://..." }
  },
  // ...
];
```
⚠️ **Aturan konten wajib:** semua `ringkasan` harus ditulis ulang dengan kalimat sendiri berdasarkan hasil riset, cantumkan sumber asli, dan hindari detail grafis yang tidak perlu (fokus ke penyebab & pelajaran, bukan deskripsi kejadian yang sensitif).

### Kuis (`quiz-data.js`)
```js
const quizQuestions = [
  {
    id: 1,
    pertanyaan: "...",
    pilihan: ["A. ...", "B. ...", "C. ...", "D. ..."],
    jawabanBenar: 0, // index
    penjelasan: "..." // muncul setelah dijawab, edukatif bukan menghakimi
  },
  // ...
];
```

---

## 7. QA Checklist Sebelum Submit Lomba

- [ ] Semua link navbar berfungsi di semua halaman
- [ ] Game bisa dimainkan dari awal sampai selesai tanpa error console
- [ ] Kuis menghitung skor dengan benar & menampilkan feedback
- [ ] Semua gambar punya `alt` text
- [ ] Dicoba di minimal 1 browser desktop + 1 device mobile (atau mode responsive DevTools)
- [ ] Tidak ada teks lorem ipsum / placeholder "TODO" tersisa
- [ ] Semua studi kasus punya sumber yang valid & bisa diklik
- [ ] Bahasa di seluruh halaman konsisten — santai, jelas, tidak ada sisa jargon hukum tanpa penjelasan
- [ ] Cek ulang: apakah tampilan Beranda "menjual" dalam 5 detik pertama? (ini yang pertama dilihat juri)

---

## 8. Do's & Don'ts

**Do:**
- Riset ulang data/statistik terbaru saat menulis konten, jangan asumsi dari memori.
- Jaga konsistensi warna & font di semua halaman.
- Uji game sendiri minimal 3x dari awal sampai akhir sebelum dianggap selesai.

**Don't:**
- Jangan copy-paste teks mentah dari artikel berita untuk studi kasus — selalu parafrase.
- Jangan tambah fitur di luar scope MVP kalau P0 belum semua selesai.
- Jangan pakai warna/aset bertema kopi/coklat dari Tuku — itu cuma referensi *prinsip storytelling*, bukan identitas visual yang ditiru.
- Jangan bikin game terlalu sulit/cepat — target pemain adalah orang awam, bukan gamer.

---