const rambuData = {
  peringatan: {
    title: "Rambu Peringatan",
    desc: "Rambu berbentuk belah ketupat/segitiga berwarna dasar kuning dengan lambang hitam. Berfungsi memberi peringatan bahaya atau kondisi jalan berbahaya di depan.",
    items: [
      {
        name: "Peringatan Lampu Lalu Lintas",
        desc: "Menandakan ada persimpangan dengan alat pemberi isyarat lalu lintas di depan. Bersiaplah untuk berhenti jika lampu merah.",
        img: "rambu/tandalalulintas.webp",
      },
      {
        name: "Peringatan Banyak Anak-anak",
        desc: "Menandakan kawasan yang sering dilalui anak-anak, seperti area sekolah atau taman. Kurangi kecepatan dan tingkatkan kewaspadaan.",
        img: "rambu/Peringatan Banyak Anak-anak.webp",
      },
      {
        name: "Peringatan Jalan Licin",
        desc: "Menandakan permukaan jalan licin, terutama saat basah atau hujan. Kurangi kecepatan dan hindari pengereman mendadak.",
        img: "rambu/Peringatan Jalan Licin.webp",
      },
      {
        name: "Persimpangan Tiga Serong Kiri",
        desc: "Memberi peringatan bahwa ada pertemuan jalan yang serong (tidak tegak lurus) dari arah kiri di depan. Pengendara harus waspada dan siap untuk menyesuaikan arah atau kecepatan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.07.webp",
      },
      {
        name: "Persimpangan Jalan Samping Kiri",
        desc: "Menandakan ada persimpangan jalan tegak lurus dari arah kiri.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.07 (1).webp",
      },
      {
        name: "Persimpangan Tiga Serong Kanan",
        desc: "Memberi peringatan bahwa ada pertemuan jalan yang serong (tidak tegak lurus) dari arah kanan di depan. Pengendara harus waspada dan siap untuk menyesuaikan arah atau kecepatan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.07 (2).webp",
      },
      {
        name: "Persimpangan T ",
        desc: "Menandakan pertemuan jalan yang berbentuk huruf T di depan. Pengemudi wajib belok ke kiri atau kanan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.08.webp",
      },
      {
        name: "Persimpangan Empat Bersilang",
        desc: "Menandakan adanya pertemuan jalan yang bersilang (+). Waspada dari semua sisi.",
        img: "rambu/simpanganempatbersilang.webp",
      },
      {
        name: "Bundaran (Rotary)",
        desc: "Di depan terdapat bundaran lalu lintas. Wajib mengikuti putaran bundaran.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.09 (1).webp",
      },
      {
        name: "Tikungan Tajam ke Kiri",
        desc: "Jalan berbelok tajam ke arah kiri. Kurangi kecepatan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.10 (1).webp",
      },
      {
        name: "Tikungan Tajam ke Kanan",
        desc: "Jalan berbelok tajam ke arah kanan. Kurangi kecepatan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.11.webp",
      },
      {
        name: "Tikungan Ganda Pertama Kiri",
        desc: "Jalan berbelok ke kiri kemudian ke kanan. Waspada dan jaga kecepatan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.12.webp",
      },
      {
        name: "Tanjakan Curam",
        desc: "Jalan menanjak curam di depan. Gunakan gigi rendah.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.13.webp",
      },
      {
        name: "Turunan Curam",
        desc: "Jalan menurun curam di depan. Gunakan engine brake.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.13 (1).webp",
      },
      {
        name: "Jalan Menyempit di Kedua Sisi",
        desc: "Ruas jalan menyempit dari arah kiri dan kanan bersamaan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.14.webp",
      },
      {
        name: "Jalan Menyempit di Kanan",
        desc: "Ruas jalan menyempit dari sisi kanan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.14 (2).webp",
      },
      {
        name: "Jalan Menyempit di Kiri",
        desc: "Ruas jalan menyempit dari sisi kiri.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.15 (1).webp",
      },
    ],
  },
  larangan: {
    title: "Rambu Larangan",
    desc: "Rambu berbentuk lingkaran dengan garis tepi merah. Menyatakan perbuatan yang dilarang dilakukan pengguna jalan.",
    items: [
      {
        name: "Dilarang Masuk (Verboden)",
        desc: "Semua jenis kendaraan bermotor maupun tidak bermotor dilarang masuk ke jalan atau jalur ini.",
        img: "rambu/rambudilarangmasuk.webp",
      },
      {
        name: "Dilarang Parkir",
        desc: "Kendaraan dilarang parkir di sepanjang area atau jalan ini. Berhenti sejenak tanpa meninggalkan kendaraan mungkin diizinkan.",
        img: "rambu/dilarang parkir.webp",
      },
      {
        name: "Wajib Berhenti (STOP)",
        desc: "Pengendara wajib berhenti sejenak sebelum garis henti, memastikan kondisi aman, baru melanjutkan perjalanan.",
        img: "rambu/Rambu STOP.webp",
      },
      {
        name: "Dilarang Mendahului",
        desc: "Kendaraan dilarang mendahului kendaraan lain di area yang ditandai rambu ini karena berbahaya.",
        img: "rambu/Dilarang Mendahului.webp",
      },
      {
        name: "Dilarang Putar Balik (U-Turn)",
        desc: "Kendaraan dilarang melakukan putaran balik (U-Turn) di titik ini.",
        img: "rambu/dilarangputarbalik.webp",
      },
      {
        name: "Dilarang Bus",
        desc: "Kendaraan berupa bus dilarang melintas di ruas jalan ini.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.05.webp",
      },
      {
        name: "Dilarang Gerobak / Pedati",
        desc: "Kendaraan tidak bermotor seperti pedati atau gerobak dilarang melintas.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.05 (1).webp",
      },
      {
        name: "Dilarang Berhenti",
        desc: "Kendaraan dilarang berhenti di sepanjang jalan yang dipasangi rambu ini.",
        img: "rambu/rambularangan/2.webp",
      },
      {
        name: "Dilarang Sepeda Motor",
        desc: "Kendaraan bermotor roda dua (sepeda motor) dilarang masuk.",
        img: "rambu/rambularangan/12.webp",
      },
      {
        name: "Dilarang Pejalan Kaki",
        desc: "Pejalan kaki dilarang melintas di ruas jalan ini (biasanya di jalan tol atau jalan cepat).",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.06 (1).webp",
      },
      {
        name: "Dilarang Mobil Barang / Truk",
        desc: "Kendaraan angkutan barang/truk dilarang melintas di jalan ini.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.06 (2).webp",
      },
      {
        name: "Larangan Belok Kanan",
        desc: "Pengendara dilarang berbelok ke arah kanan.",
        img: "rambu/rambularangan/3.webp",
      },
      {
        name: "Larangan Lurus",
        desc: "Melarang kendaraan untuk bergerak lurus dan mengharuskan mengikuti arah yang diperbolehkan.",
        img: "rambu/rambularangan/4.webp",
      },
      {
        name: "Larangan Membunyikan Klakson",
        desc: "Melarang penggunaan klakson di area tersebut.",
        img: "rambu/rambularangan/6.webp",
      },
      {
        name: "Batas Kecepatan Maksimum 80 km/jam",
        desc: "Melarang kendaraan melaju melebihi 80 km/jam.",
        img: "rambu/rambularangan/7.webp",
      },
      {
        name: "Larangan Kendaraan dengan Lebar Tertentu",
        desc: "Melarang kendaraan yang lebarnya melebihi batas yang ditentukan.",
        img: "rambu/rambularangan/8.webp",
      },
      {
        name: "Larangan Masuk untuk Kendaraan Bermotor ",
        desc: "Melarang kendaraan bermotor memasuki jalan tersebut.",
        img: "rambu/rambularangan/9.webp",
      },
      {
        name: "Larangan Berpindah Jalur",
        desc: "Melarang kendaraan berpindah ke jalur tertentu.",
        img: "rambu/rambularangan/10.webp",
      },
    ],
  },
  perintah: {
    title: "Rambu Perintah",
    desc: "Rambu berbentuk lingkaran berwarna dasar biru dengan lambang putih. Menyatakan perintah wajib bagi pengguna jalan.",
    items: [
      {
        name: "Wajib Belok Kiri",
        desc: "Pengendara wajib berbelok ke arah kiri.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.16.webp",
      },
      {
        name: "Wajib Belok Kanan",
        desc: "Pengendara wajib berbelok ke arah kanan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.16 (1).webp",
      },
      {
        name: "Wajib Belok sesuai petunjuk",
        desc: "Pengendara wajib berbelok sesuai petunjuk.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.16 (2).webp",
      },
      {
        name: "Wajib Lurus",
        desc: "Pengendara wajib meneruskan perjalanan lurus ke depan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.17 (1).webp",
      },
      {
        name: "Wajib Mengitari Bundaran",
        desc: "Pengendara wajib mengikuti arah putaran bundaran.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.17 (2).webp",
      },
      {
        name: "Wajib Lurus atau Belok Kiri",
        desc: "Pengendara diwajibkan untuk meneruskan perjalanan lurus atau berbelok ke kiri.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.18.webp",
      },
      {
        name: "Wajib Lurus atau Belok Kanan",
        desc: "Pengendara diwajibkan untuk meneruskan perjalanan lurus atau berbelok ke kanan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.18 (1).webp",
      },
      {
        name: "Wajib Melewati Sisi Kiri",
        desc: "Pengendara wajib melewati sisi kiri dari pulau lalu lintas atau rintangan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.18 (2).webp",
      },
      {
        name: "Wajib Melewati Sisi Kanan",
        desc: "Pengendara wajib melewati sisi kanan dari pulau lalu lintas atau rintangan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.19.webp",
      },
      {
        name: "Wajib Melewati Salah Satu Sisi",
        desc: "Pengendara dapat melewati sisi kiri atau kanan dari rintangan di depan.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.19 (1).webp",
      },
      {
        name: "Kawasan Pejalan Kaki (Perintah)",
        desc: "Kawasan yang dikhususkan dan diwajibkan untuk pejalan kaki.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.19 (2).webp",
      },
      {
        name: "Jalur Khusus Becak",
        desc: "Jalur ini diwajibkan khusus untuk kendaraan tidak bermotor (becak).",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.20.webp",
      },
      {
        name: "Kecepatan Minimum 30 km/jam",
        desc: "Kecepatan kendaraan tidak boleh kurang dari 30 km/jam di jalur ini.",
        img: "rambu/WhatsApp Image 2026-08-02 at 13.16.20 (1).webp",
      },
    ],
  },
  petunjuk: {
    title: "Rambu Petunjuk",
    desc: "Rambu berbentuk persegi panjang atau bujur sangkar berwarna dasar biru, hijau, atau cokelat. Memberikan petunjuk arah, lokasi, fasilitas umum, atau informasi lalu lintas.",
    items: [
      {
        name: "Tempat Putar Balik (U-Turn)",
        desc: "Menunjukkan lokasi atau area yang secara resmi diperbolehkan bagi kendaraan untuk melakukan putar balik (U-Turn).",
        img: "rambu/Rambu Tempat Berputar Balik.webp",
      },
      {
        name: "Petunjuk Gereja",
        desc: "Menunjukkan lokasi atau arah menuju gereja.",
        img: "rambu/rambupetunjuk/1.webp",
      },
      {
        name: "Petunjuk Parkir",
        desc: "Menunjukkan lokasi atau area yang diperuntukkan sebagai tempat",
        img: "rambu/rambupetunjuk/2.webp",
      },
      {
        name: "Petunjuk Masjid ",
        desc: "Menunjukkan lokasi atau arah menuju masjid.",
        img: "rambu/rambupetunjuk/3.webp",
      },
      {
        name: "Lokasi Pelayanan Kesehatan",
        desc: " Menunjukkan lokasi fasilitas pelayanan kesehatan.",
        img: "rambu/rambupetunjuk/4.webp",
      },
      {
        name: "Petunjuk SPBU",
        desc: "Menunjukkan lokasi atau arah menuju SPBU.",
        img: "rambu/rambupetunjuk/5.webp",
      },
      {
        name: "Petunjuk Bandara",
        desc: "Menunjukkan lokasi atau arah menuju bandar udara.",
        img: "rambu/rambupetunjuk/6.webp",
      },
      {
        name: "Petunjuk Rute",
        desc: "Menunjukkan arah dan tujuan suatu rute perjalanan.",
        img: "rambu/rambupetunjuk/7.webp",
      },
      {
        name: "Petunjuk Masuk Tol",
        desc: "Menunjukkan arah atau akses menuju jalan tol.",
        img: "rambu/rambupetunjuk/8.webp",
      },
    ],
  },
  putus: {
    title: "Marka Garis Putus-Putus",
    desc: "Marka jalan berupa garis terputus-putus yang berfungsi sebagai pemisah jalur. Pengendara diperbolehkan melintasi garis ini untuk berpindah lajur atau mendahului kendaraan lain asalkan situasi aman. Berdasarkan Permenhub No. 34 Tahun 2014.",
    items: [
      {
        name: "Garis Putus Putih (Pemisah Jalur Searah)",
        desc: "Garis putus-putus berwarna putih yang berfungsi memisahkan dua atau lebih jalur yang memiliki arah lalu lintas yang SAMA. Pengendara DIPERBOLEHKAN melintasi garis ini untuk berpindah lajur ke kiri atau kanan, asalkan tidak mengganggu kendaraan lain yang sudah berada di jalur tujuan. Garis ini biasa ditemukan di jalan dalam kota yang memiliki dua lajur atau lebih. Panjang garis dan jarak putusnya diatur standar oleh Kementerian Perhubungan. Sebelum berpindah lajur, wajib menyalakan lampu sein dan memeriksa spion terlebih dahulu.",
        img: "marka/WhatsApp Image 2026-08-02 at 14.59.41.webp",
      },
      {
        name: "Garis Putus Kuning (Pemisah Arus Berlawanan)",
        desc: "Garis putus-putus berwarna kuning yang berfungsi memisahkan dua arus lalu lintas dari arah yang BERLAWANAN. Pengendara MASIH DIPERBOLEHKAN mendahului kendaraan di depan dengan melintasi garis ini, namun HARUS memastikan tidak ada kendaraan dari arah berlawanan yang sedang mendekat. Garis kuning putus lebih berisiko dilintasi dibanding garis putih putus karena melibatkan potensi tabrakan frontal. Selalu periksa spion dan pastikan jarak pandang cukup sebelum mendahului. Di tikungan atau tanjakan, garis kuning biasanya berubah menjadi garis utuh karena mendahului sangat berbahaya.",
        img: "marka/WhatsApp Image 2026-08-02 at 14.59.42 (2).webp",
      },
      {
        name: "Garis Putus dan Utuh (Kombinasi)",
        desc: "Kombinasi satu garis utuh dan satu garis putus-putus sejajar. Aturannya ASIMETRIS: Pengendara yang berada di sisi garis PUTUS diperbolehkan melintasi untuk mendahului, sedangkan pengendara yang berada di sisi garis UTUH DILARANG melintasi garis. Artinya, hanya kendaraan dari SATU ARAH saja yang boleh mendahului. Marka ini biasa dipasang di dekat tikungan atau tanjakan di mana jarak pandang terbatas dari satu arah. Contoh: di tanjakan, kendaraan yang naik boleh mendahului (sisi putus), sedangkan kendaraan yang turun tidak boleh (sisi utuh) karena jarak pandang terhalang tanjakan.",
        img: "marka/WhatsApp Image 2026-08-02 at 14.59.42 (1).webp",
      },
      {
        name: "Zebra Cross (Penyeberangan Pejalan Kaki)",
        desc: "Marka berupa garis-garis melintang putih lebar di permukaan jalan yang menandakan lokasi penyeberangan pejalan kaki. Pengendara WAJIB BERHENTI dan mendahulukan pejalan kaki yang sedang atau akan menyeberang. Zebra cross memberikan HAK UTAMA kepada pejalan kaki berdasarkan Pasal 114 UU No. 22 Tahun 2009. Pengendara yang tidak berhenti saat ada pejalan kaki di zebra cross dapat dikenakan sanksi tilang. Marka ini biasa ditemukan di dekat sekolah, rumah sakit, pasar, dan kawasan padat pejalan kaki. Lebar garis zebra cross standar adalah 40-60 cm dengan jarak antar garis 60-80 cm.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect width='200' height='120' fill='%23444'/%3E%3Crect x='10' y='8' width='180' height='18' rx='2' fill='white'/%3E%3Crect x='10' y='34' width='180' height='18' rx='2' fill='white'/%3E%3Crect x='10' y='60' width='180' height='18' rx='2' fill='white'/%3E%3Crect x='10' y='86' width='180' height='18' rx='2' fill='white'/%3E%3C/svg%3E",
      },
      {
        name: "Marka Panah Arah di Permukaan Jalan",
        desc: "Lambang panah yang dicat di permukaan jalan menunjukkan arah yang DIPERBOLEHKAN bagi pengendara di jalur tersebut. Jenis panah: (1) Panah lurus = wajib lurus, (2) Panah belok kiri = harus belok kiri, (3) Panah belok kanan = harus belok kanan, (4) Panah ganda = boleh lurus atau belok. Pengendara WAJIB mengikuti arah panah yang tertera dan tidak boleh berbelok berlawanan dengan arah panah. Pelanggaran marka panah termasuk pelanggaran lalu lintas yang dapat ditilang berdasarkan Pasal 106 ayat 4 UU No. 22 Tahun 2009. Marka panah biasa dipasang di persimpangan besar dan jalan utama.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Cpolygon points='100,20 130,80 115,80 115,170 85,170 85,80 70,80' fill='white'/%3E%3C/svg%3E",
      },
      {
        name: "Garis Pemberhentian (Stop Line)",
        desc: "Garis melintang putih tebal di permukaan jalan yang menandakan BATAS BERHENTI kendaraan. Pengendara WAJIB berhenti di belakang garis ini saat: (1) lampu lalu lintas menyala merah, (2) ada rambu STOP, (3) ada pejalan kaki yang akan menyeberang di zebra cross, atau (4) ada kendaraan berpioritas yang lewat. Garis pemberhentian biasa dipasang di persimpangan, dekat zebra cross, atau di pintu masuk jalan utama. Berhenti MELEWATI garis ini termasuk pelanggaran.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect width='200' height='120' fill='%23374151'/%3E%3Crect x='0' y='45' width='200' height='30' rx='2' fill='white'/%3E%3C/svg%3E",
      },
    ],
  },
  utuh: {
    title: "Marka Garis Utuh (Solid Line)",
    desc: "Marka jalan berupa garis memanjang tanpa putus. Berfungsi sebagai pembatas yang TIDAK BOLEH dilanggar atau dilintasi oleh kendaraan. Garis utuh menandakan batas tegas antar jalur yang tidak boleh dilampaui. Berdasarkan Permenhub No. 34 Tahun 2014.",
    items: [
      {
        name: "Garis Utuh Putih Tunggal (Pembatas Jalur Searah)",
        desc: "Garis putih memanjang tanpa putus yang memisahkan jalur dalam arah yang SAMA. Pengendara DILARANG melintasi garis ini untuk berpindah lajur. Garis utuh putih biasa dipasang di area di mana perpindahan lajur dilarang, seperti di terowongan, jembatan sempit, menjelang persimpangan besar, atau di area dengan lalu lintas padat. Berbeda dengan garis putus putih yang memperbolehkan perpindahan lajur, garis utuh putih menandakan bahwa pengendara HARUS tetap berada di jalurnya. Pelanggaran garis utuh putih dapat berakibat tilang karena membahayakan keselamatan.",
        img: "marka/WhatsApp Image 2026-08-02 at 14.59.42.webp",
      },
      {
        name: "Garis Utuh Putih Ganda (Pembatas Ketat Jalur Searah)",
        desc: "Dua garis putih utuh sejajar yang memisahkan jalur arah yang sama dengan PEMBATASAN PALING KETAT. Pengendara DILARANG melintasi dari kedua sisi dalam kondisi apapun. Marka ini biasa dipasang di area yang memerlukan pemisahan jalur yang sangat ketat, seperti jalur busway/khusus, area bandara, atau jalan tol menjelang gerbang tol. Pelanggaran garis ganda putih utuh dapat mengakibatkan kecelakaan serius karena area ini biasanya memiliki lalu lintas khusus. Jarak antara kedua garis sekitar 10-15 cm.",
        img: "marka/WhatsApp Image 2026-08-02 at 14.59.43.webp",
      },
      {
        name: "Garis Utuh Kuning Tunggal (Pemisah Arus Berlawanan)",
        desc: "Garis kuning memanjang tanpa putus yang memisahkan dua arus lalu lintas dari arah yang BERLAWANAN. Pengendara DILARANG KERAS melintasi garis ini dalam kondisi apapun, kecuali dalam keadaan darurat mendesak. Garis utuh kuning biasa dipasang di ruas jalan di mana mendahului SANGAT BERBAHAYA, seperti di dekat tikungan, tanjakan curam, jembatan, atau area dengan riwayat kecelakaan tinggi. Pelanggaran garis utuh kuning termasuk pelanggaran SERIUS karena berisiko tabrakan frontal yang bisa berakibat fatal.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Crect x='94' y='0' width='12' height='200' rx='2' fill='%23F59E0B'/%3E%3C/svg%3E",
      },
      {
        name: "Marka Tepi Jalan (Edge Line)",
        desc: "Garis memanjang di tepi kiri atau kanan jalan yang membatasi area jalan yang DAPAT dilalui kendaraan. (1) Garis tepi PUTIH menandakan batas jalan yang bisa dilalui, (2) Garis tepi KUNING menandakan batas jalan yang tidak boleh dilampaui. Pengendara DILARANG melewati garis tepi karena di luar garis merupakan area yang tidak layak untuk kendaraan (trotoar, parit, atau area berbahaya). Garis tepi sangat penting sebagai panduan visual saat berkendara di malam hari atau dalam kondisi hujan.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Crect x='15' y='0' width='8' height='200' rx='2' fill='white'/%3E%3Crect x='177' y='0' width='8' height='200' rx='2' fill='white'/%3E%3C/svg%3E",
      },
      {
        name: "Garis Serong / Chevron (Area Terlarang)",
        desc: "Garis-garis serong membentuk pola chevron atau herringbone di permukaan jalan. Area yang ditandai dengan garis serong adalah ZONA TERLARANG yang tidak boleh dilalui kendaraan. Garis serong biasa ditemukan di: (1) area persimpangan besar, (2) di antara jalur penyatu dan jalan utama, (3) di sekitar pembatas jalan (median), (4) di area pulau lalu lintas, dan (5) di area penyeberangan pejalan kaki. Pengendara yang melintasi area garis serong melanggar aturan dan berisiko menabrak kendaraan lain.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Cpolyline points='60,20 100,55 140,20' fill='none' stroke='white' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpolyline points='60,70 100,105 140,70' fill='none' stroke='white' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpolyline points='60,120 100,155 140,120' fill='none' stroke='white' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
      },
      {
        name: "Marka Zigzag (Kawasan Terlarang Parkir)",
        desc: "Garis zigzag berwarna kuning di tepi jalan yang menandakan KAWASAN DILARANG PARKIR dan DILARANG BERHENTI. Pengendara TIDAK BOLEH memarkirkan kendaraan atau berhenti di area yang ditandai dengan marka zigzag. Marka ini biasa dipasang di sepanjang kawasan sekolah, rumah sakit, jalur pemadam kebakaran, atau area yang harus tetap lancar arus lalu lintasnya. Pelanggaran marka zigzag dapat dikenakan sanksi tilang.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Cpolyline points='90,10 120,35 90,60 120,85 90,110 120,135 90,160 120,185' fill='none' stroke='%23F59E0B' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
      },
    ],
  },
};

let activeRambu = null;

function toggleRambu(type) {
  const detailBox = document.getElementById("detail-box");
  const titleEl = document.getElementById("detail-title");
  const descEl = document.getElementById("detail-desc");
  const gridEl = document.getElementById("sign-grid");
  const emptyEl = document.getElementById("detail-empty");
  const snapContainer = document.getElementById("snap-container");

  document.querySelectorAll(".rambu-card").forEach((card) => {
    card.classList.remove(
      "ring-[5px]",
      "ring-amber",
      "shadow-2xl",
      "scale-105",
    );
  });

  if (activeRambu === type) {
    detailBox.classList.remove("active");
    emptyEl.style.display = "flex";
    gridEl.style.display = "none";
    activeRambu = null;
    if (snapContainer) snapContainer.style.scrollSnapType = "y mandatory";
    return;
  }

  const data = rambuData[type];
  titleEl.innerHTML =
    '<i class="fa-solid fa-circle-info text-amber"></i> ' + data.title;
  descEl.innerText = data.desc;

  gridEl.innerHTML = data.items
    .map((item) => {
      const imgHtml = item.img
        ? `<div class="flex justify-center items-center mb-2 bg-white rounded-xl p-2" style="min-height:90px">
                <img src="${item.img}" alt="${item.name}" class="max-h-20 max-w-full object-contain" onerror="this.style.display='none'">
            </div>`
        : "";
      return `
        <div class="sign-card bg-white p-3 rounded-xl border border-gray-100 ${item.img ? "text-center" : "text-left"} hover:shadow-md transition-shadow">
            ${imgHtml}
            <h5 class="font-bold text-navy text-xs mb-1 leading-tight">${item.name}</h5>
            <p class="text-[10px] text-gray-400 leading-relaxed">${item.desc}</p>
        </div>`;
    })
    .join("");

  document
    .getElementById("card-" + type)
    .classList.add("ring-[5px]", "ring-amber", "shadow-2xl", "scale-105");
  emptyEl.style.display = "none";
  gridEl.style.display = "grid";
  detailBox.classList.add("active");
  activeRambu = type;

  if (snapContainer) snapContainer.style.scrollSnapType = "none";

  setTimeout(() => {
    gridEl.scrollTop = 0;
  }, 100);
}

function closeDetail() {
  const detailBox = document.getElementById("detail-box");
  const emptyEl = document.getElementById("detail-empty");
  const gridEl = document.getElementById("sign-grid");
  detailBox.classList.remove("active");
  emptyEl.style.display = "flex";
  gridEl.style.display = "none";
  document.querySelectorAll(".rambu-card").forEach((card) => {
    card.classList.remove(
      "ring-[5px]",
      "ring-amber",
      "shadow-2xl",
      "scale-105",
    );
  });
  activeRambu = null;
  const snapContainer = document.getElementById("snap-container");
  if (snapContainer) snapContainer.style.scrollSnapType = "y mandatory";
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("active");
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const sections = document.querySelectorAll(".sec-target");
  const dots = document.querySelectorAll(".dot-indicator");

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute("id");
          dots.forEach((dot) => {
            if (dot.getAttribute("data-target") === targetId) {
              dot.classList.remove("bg-gray-300", "hover:bg-gray-400");
              dot.classList.add("bg-amber", "scale-125", "shadow-md");
            } else {
              dot.classList.remove("bg-amber", "scale-125", "shadow-md");
              dot.classList.add("bg-gray-300", "hover:bg-gray-400");
            }
          });
        }
      });
    },
    { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 },
  );

  sections.forEach((sec) => spyObserver.observe(sec));
});
