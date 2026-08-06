const fs = require('fs');
const file = 'c:/traffic-smart/js/rambu-data.js';

let content = fs.readFileSync(file, 'utf8');

const newData = `const rambuData = {
    peringatan: {
        title: "Rambu Peringatan",
        desc: "Rambu berbentuk belah ketupat/segitiga berwarna dasar kuning dengan lambang hitam. Berfungsi memberi peringatan bahaya atau kondisi jalan berbahaya di depan.",
        items: [
            {
                name: "Peringatan Lampu Lalu Lintas",
                desc: "Menandakan ada persimpangan dengan alat pemberi isyarat lalu lintas di depan. Bersiaplah untuk berhenti jika lampu merah.",
                img: "rambu/tandalalulintas.webp"
            },
            {
                name: "Peringatan Banyak Anak-anak",
                desc: "Menandakan kawasan yang sering dilalui anak-anak, seperti area sekolah atau taman. Kurangi kecepatan dan tingkatkan kewaspadaan.",
                img: "rambu/Peringatan Banyak Anak-anak.webp"
            },
            {
                name: "Peringatan Jalan Licin",
                desc: "Menandakan permukaan jalan licin, terutama saat basah atau hujan. Kurangi kecepatan dan hindari pengereman mendadak.",
                img: "rambu/Peringatan Jalan Licin.webp"
            },
            {
                name: "Persimpangan Jalan Samping Kanan",
                desc: "Menandakan ada persimpangan jalan tegak lurus dari arah kanan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.07.webp"
            },
            {
                name: "Persimpangan Jalan Samping Kiri",
                desc: "Menandakan ada persimpangan jalan tegak lurus dari arah kiri.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.07 (1).webp"
            },
            {
                name: "Persimpangan T",
                desc: "Jalan di depan buntu atau berbentuk huruf T. Pengemudi wajib belok ke kiri atau kanan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.07 (2).webp"
            },
            {
                name: "Persimpangan T (Alternatif)",
                desc: "Menandakan pertemuan jalan yang berbentuk huruf T di depan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.08.webp"
            },
            {
                name: "Persimpangan Empat Bersilang",
                desc: "Menandakan adanya pertemuan jalan yang bersilang (+). Waspada dari semua sisi.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.09.webp"
            },
            {
                name: "Bundaran (Rotary)",
                desc: "Di depan terdapat bundaran lalu lintas. Wajib mengikuti putaran bundaran.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.09 (1).webp"
            },
            {
                name: "Tikungan Tajam ke Kiri",
                desc: "Jalan berbelok tajam ke arah kiri. Kurangi kecepatan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.10 (1).webp"
            },
            {
                name: "Tikungan Tajam ke Kanan",
                desc: "Jalan berbelok tajam ke arah kanan. Kurangi kecepatan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.11.webp"
            },
            {
                name: "Tikungan Ganda Pertama Kiri",
                desc: "Jalan berbelok ke kiri kemudian ke kanan. Waspada dan jaga kecepatan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.12.webp"
            },
            {
                name: "Tanjakan Curam",
                desc: "Jalan menanjak curam di depan. Gunakan gigi rendah.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.13.webp"
            },
            {
                name: "Turunan Curam",
                desc: "Jalan menurun curam di depan. Gunakan engine brake.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.13 (1).webp"
            },
            {
                name: "Jalan Menyempit di Kedua Sisi",
                desc: "Ruas jalan menyempit dari arah kiri dan kanan bersamaan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.14.webp"
            },
            {
                name: "Jalan Menyempit di Kanan",
                desc: "Ruas jalan menyempit dari sisi kanan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.14 (2).webp"
            },
            {
                name: "Jalan Menyempit di Kiri",
                desc: "Ruas jalan menyempit dari sisi kiri.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.15 (1).webp"
            }
        ]
    },
    larangan: {
        title: "Rambu Larangan",
        desc: "Rambu berbentuk lingkaran dengan garis tepi merah. Menyatakan perbuatan yang dilarang dilakukan pengguna jalan.",
        items: [
            {
                name: "Dilarang Masuk (Verboden)",
                desc: "Semua jenis kendaraan bermotor maupun tidak bermotor dilarang masuk ke jalan atau jalur ini.",
                img: "rambu/rambudilarangmasuk.webp"
            },
            {
                name: "Dilarang Parkir",
                desc: "Kendaraan dilarang parkir di sepanjang area atau jalan ini. Berhenti sejenak tanpa meninggalkan kendaraan mungkin diizinkan.",
                img: "rambu/dilarang parkir.webp"
            },
            {
                name: "Wajib Berhenti (STOP)",
                desc: "Pengendara wajib berhenti sejenak sebelum garis henti, memastikan kondisi aman, baru melanjutkan perjalanan.",
                img: "rambu/Rambu STOP.webp"
            },
            {
                name: "Dilarang Mendahului",
                desc: "Kendaraan dilarang mendahului kendaraan lain di area yang ditandai rambu ini karena berbahaya.",
                img: "rambu/Dilarang Mendahului.webp"
            },
            {
                name: "Dilarang Putar Balik",
                desc: "Kendaraan dilarang melakukan putaran balik (U-Turn) di titik ini.",
                img: "rambu/dilarangputarbalik.webp"
            },
            {
                name: "Dilarang Bus",
                desc: "Kendaraan berupa bus dilarang melintas di ruas jalan ini.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.05.webp"
            },
            {
                name: "Dilarang Gerobak / Pedati",
                desc: "Kendaraan tidak bermotor seperti pedati atau gerobak dilarang melintas.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.05 (1).webp"
            },
            {
                name: "Dilarang Berhenti",
                desc: "Kendaraan dilarang berhenti di sepanjang jalan yang dipasangi rambu ini.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.05 (2).webp"
            },
            {
                name: "Dilarang Sepeda Motor",
                desc: "Kendaraan bermotor roda dua (sepeda motor) dilarang masuk.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.06.webp"
            },
            {
                name: "Dilarang Pejalan Kaki",
                desc: "Pejalan kaki dilarang melintas di ruas jalan ini (biasanya di jalan tol atau jalan cepat).",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.06 (1).webp"
            },
            {
                name: "Dilarang Mobil Barang / Truk",
                desc: "Kendaraan angkutan barang/truk dilarang melintas di jalan ini.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.06 (2).webp"
            }
        ]
    },
    perintah: {
        title: "Rambu Perintah",
        desc: "Rambu berbentuk lingkaran berwarna dasar biru dengan lambang putih. Menyatakan perintah wajib bagi pengguna jalan.",
        items: [
            {
                name: "Wajib Mengikuti Arah ke Kanan",
                desc: "Pengendara wajib berbelok atau mengikuti arah ke kanan sesuai panah.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.16.webp"
            },
            {
                name: "Wajib Belok Kanan",
                desc: "Pengendara wajib berbelok ke arah kanan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.16 (1).webp"
            },
            {
                name: "Wajib Belok Kiri",
                desc: "Pengendara wajib berbelok ke arah kiri.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.16 (2).webp"
            },
            {
                name: "Wajib Lurus",
                desc: "Pengendara wajib meneruskan perjalanan lurus ke depan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.17 (1).webp"
            },
            {
                name: "Wajib Mengitari Bundaran",
                desc: "Pengendara wajib mengikuti arah putaran bundaran.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.17 (2).webp"
            },
            {
                name: "Wajib Lurus atau Belok Kiri",
                desc: "Pengendara diwajibkan untuk meneruskan perjalanan lurus atau berbelok ke kiri.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.18.webp"
            },
            {
                name: "Wajib Lurus atau Belok Kanan",
                desc: "Pengendara diwajibkan untuk meneruskan perjalanan lurus atau berbelok ke kanan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.18 (1).webp"
            },
            {
                name: "Wajib Melewati Sisi Kiri",
                desc: "Pengendara wajib melewati sisi kiri dari pulau lalu lintas atau rintangan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.18 (2).webp"
            },
            {
                name: "Wajib Melewati Sisi Kanan",
                desc: "Pengendara wajib melewati sisi kanan dari pulau lalu lintas atau rintangan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.19.webp"
            },
            {
                name: "Wajib Melewati Salah Satu Sisi",
                desc: "Pengendara dapat melewati sisi kiri atau kanan dari rintangan di depan.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.19 (1).webp"
            },
            {
                name: "Kawasan Pejalan Kaki (Perintah)",
                desc: "Kawasan yang dikhususkan dan diwajibkan untuk pejalan kaki.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.19 (2).webp"
            },
            {
                name: "Jalur Khusus Becak",
                desc: "Jalur ini diwajibkan khusus untuk kendaraan tidak bermotor (becak).",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.20.webp"
            },
            {
                name: "Kecepatan Minimum 30 km/jam",
                desc: "Kecepatan kendaraan tidak boleh kurang dari 30 km/jam di jalur ini.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.20 (1).webp"
            },
            {
                name: "Wajib Menggunakan Rantai Ban",
                desc: "Kendaraan wajib dipasangi rantai ban (untuk wilayah bersalju/ekstrem).",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.21.webp"
            },
            {
                name: "Batas Akhir Kecepatan Minimum 30 km/jam",
                desc: "Kewajiban batas kecepatan minimum 30 km/jam telah berakhir.",
                img: "rambu/WhatsApp Image 2026-08-02 at 13.16.21 (1).webp"
            }
        ]
    }`;

content = content.replace(/const rambuData = \{[\s\S]*?petunjuk:/, newData + ',\n    petunjuk:');
fs.writeFileSync(file, content);
console.log("Done");
