# Product Requirements Document (PRD)

## Personal Portfolio Website

## 1. Ringkasan Produk

Website portfolio personal untuk menampilkan identitas profesional,
kompetensi teknis, pengalaman, dan proyek yang pernah dikerjakan.
Website harus membantu recruiter, calon klien, dan rekan teknis memahami
kemampuan pemilik portfolio melalui penjelasan proyek yang konkret,
kontribusi yang jelas, serta tautan demo atau source code jika tersedia.

Referensi struktur konten: portfolio Muhammad Elang Prakoso, yang
mencakup hero/profile, featured projects, about, technology stack,
experience, education, dan contact. Halaman detail proyeknya memuat
ringkasan, kategori, teknologi, fitur utama, dokumentasi, galeri
screenshot, serta tautan demo bila tersedia.

## 2. Tujuan

-   Menyampaikan profil profesional secara ringkas dan spesifik.
-   Menampilkan proyek sebagai studi kasus, bukan sekadar kumpulan
    gambar.
-   Menjelaskan kontribusi teknis, keputusan implementasi, dan hasil
    proyek secara jujur.
-   Memudahkan pengunjung menemukan proyek sesuai kategori atau
    teknologi.
-   Menyediakan jalur kontak yang jelas untuk peluang kerja, kolaborasi,
    atau proyek.
-   Menjadi sumber informasi profesional yang dapat ditautkan dari CV
    dan LinkedIn.

## 3. Target Pengguna

-   Recruiter dan hiring manager yang mengevaluasi kandidat.
-   Calon klien yang mencari developer untuk membangun atau
    mengembangkan aplikasi.
-   Developer atau kolaborator yang ingin memahami pengalaman teknis
    pemilik portfolio.
-   Dosen, komunitas, atau pihak profesional yang ingin melihat proyek
    dan kontribusi.

## 4. Struktur Halaman

### 4.1 Halaman Utama

#### A. Hero / Introduction

Tujuan: memperkenalkan pemilik portfolio dan bidang pekerjaan utama.

Komponen: - Nama lengkap. - Peran profesional utama, misalnya Full-Stack
Developer atau Software Engineer. - Ringkasan profesional 1--3
kalimat. - Lokasi, jika relevan. - Tombol atau tautan ke daftar
proyek. - Tombol atau tautan kontak. - Status ketersediaan kerja/proyek,
hanya jika masih akurat. - Tautan profil profesional, misalnya GitHub,
LinkedIn, dan email.

Kebutuhan konten: - Ringkasan harus spesifik pada jenis sistem atau
masalah yang dikerjakan. - Hindari slogan motivasional generik. - Jangan
mencantumkan klaim, angka, atau pengalaman yang tidak dapat
diverifikasi.

#### B. Featured Projects / Selected Work

Tujuan: menampilkan proyek paling relevan dan representatif.

Komponen: - Daftar atau grid proyek. - Filter kategori, misalnya All,
Full-Stack, Backend, Frontend, Data/AI. - Item proyek yang berisi nama,
ringkasan, kategori, teknologi utama, dan tautan detail. - Tautan demo
langsung jika tersedia dan aman untuk dibagikan. - Tautan source code
jika repositori memang publik. - Penanda proyek unggulan bila
diperlukan.

Kebutuhan konten: - Prioritaskan proyek berdasarkan relevansi,
kontribusi pribadi, kompleksitas teknis, dan dampak. - Jangan
menampilkan teknologi hanya sebagai daftar logo; tampilkan sebagai
metadata yang mendukung konteks proyek. - Proyek internal atau
pemerintahan dapat ditampilkan dengan deskripsi yang tidak membocorkan
data, kredensial, atau informasi sensitif.

#### C. About / Professional Summary

Tujuan: memberi konteks tentang fokus kerja dan cara pemilik portfolio
menyelesaikan masalah.

Komponen: - Ringkasan profil profesional. - Bidang yang sering
dikerjakan. - Jenis masalah yang mampu ditangani. - Prinsip kerja
teknis, seperti maintainability, data integrity, security, dan
performance, jika memang mencerminkan praktik nyata. - Lokasi atau
konteks profesional jika dibutuhkan.

Kebutuhan konten: - Utamakan bukti dan spesifikasi dibanding pernyataan
abstrak. - Tidak perlu menonjolkan jumlah tahun pengalaman jika tidak
menambah nilai informasi.

#### D. Technical Skills / Tech Stack

Tujuan: merangkum teknologi yang benar-benar pernah digunakan.

Komponen: - Kelompok Backend. - Kelompok Frontend. - Kelompok Database
dan Data. - Kelompok DevOps/Deployment. - Kelompok Testing dan Tools. -
Nama teknologi per kelompok.

Kebutuhan konten: - Hanya cantumkan teknologi yang pernah digunakan
dalam proyek atau pekerjaan. - Jika tingkat penguasaan ditampilkan,
gunakan definisi yang jelas dan jangan mengandalkan persentase
subjektif. - Teknologi yang dipakai pada proyek tertentu sebaiknya juga
dicantumkan di halaman detail proyek terkait.

#### E. Experience

Tujuan: menjelaskan pengalaman kerja, magang, atau peran profesional.

Komponen: - Nama perusahaan atau organisasi. - Jabatan/peran. -
Periode. - Ringkasan tanggung jawab. - Kontribusi atau pekerjaan
utama. - Teknologi yang digunakan, bila relevan. - Tautan ke perusahaan
atau proyek, jika tersedia dan boleh dibagikan.

Kebutuhan konten: - Gunakan kata kerja yang menjelaskan tindakan
konkret: developed, integrated, refactored, tested, migrated, deployed,
atau optimized. - Bedakan kontribusi pribadi dari hasil kerja tim. -
Angka dampak hanya dicantumkan jika dapat dibuktikan.

#### F. Education & Achievements

Tujuan: memberi informasi pendidikan dan pencapaian yang relevan.

Komponen: - Institusi pendidikan. - Program studi atau kualifikasi. -
Periode pendidikan. - Prestasi, sertifikasi, atau kompetisi yang
relevan. - IPK hanya jika ingin dicantumkan dan datanya akurat.

Kebutuhan konten: - Utamakan pencapaian yang mendukung kompetensi
profesional. - Bagian ini dapat disembunyikan jika tidak ada konten yang
cukup relevan.

#### G. Contact

Tujuan: memudahkan pengunjung menghubungi pemilik portfolio.

Komponen: - Email profesional. - Tautan LinkedIn. - Tautan GitHub. -
Formulir kontak dengan nama, email, subjek opsional, dan pesan. - Status
ketersediaan, jika akurat.

Kebutuhan fungsional: - Validasi field wajib. - Pesan sukses atau gagal
setelah pengiriman. - Proteksi spam dasar. - Validasi server-side dan
sanitasi input. - Jangan menampilkan kredensial atau alamat pribadi yang
tidak ingin dipublikasikan.

#### H. Footer

Komponen: - Nama pemilik portfolio. - Tahun hak cipta. - Tautan utama ke
proyek, profil, dan kontak. - Tautan kembali ke bagian atas halaman,
jika digunakan.

### 4.2 Halaman Detail Proyek

Setiap proyek unggulan memiliki halaman detail tersendiri agar
kontribusi dan proses teknis dapat dijelaskan secara memadai.

#### A. Project Header

Komponen: - Nama proyek. - Kategori proyek. - Ringkasan satu atau dua
kalimat. - Peran pemilik portfolio. - Teknologi utama. - Periode
pengerjaan, jika relevan. - Tautan demo, repositori, atau dokumentasi
yang dapat diakses.

#### B. Project Overview

Komponen: - Latar belakang proyek. - Pengguna atau stakeholder yang
dilayani. - Masalah utama. - Tujuan proyek. - Batasan atau konteks
penting.

#### C. Role & Contribution

Komponen: - Tanggung jawab pribadi. - Fitur atau modul yang
dikerjakan. - Integrasi yang dibangun. - Keputusan teknis yang menjadi
tanggung jawab pribadi. - Kolaborasi dengan anggota tim, bila relevan.

#### D. Key Features

Komponen: - Daftar 3--5 fitur utama. - Penjelasan singkat mengenai
fungsi setiap fitur. - Masalah pengguna yang diselesaikan oleh fitur
tersebut.

#### E. Technical Implementation

Komponen: - Arsitektur sistem dalam bentuk penjelasan atau diagram, jika
diperlukan. - Backend dan API. - Frontend. - Database dan relasi data. -
Autentikasi dan otorisasi. - Integrasi pihak ketiga. - Deployment dan
infrastruktur. - Testing, logging, atau monitoring bila relevan.

Tidak semua subbagian wajib ditampilkan pada setiap proyek. Pilih yang
benar-benar digunakan dan penting untuk menjelaskan proyek.

#### F. Technical Challenges & Decisions

Komponen: - Tantangan teknis yang nyata. - Alternatif solusi yang
dipertimbangkan. - Solusi yang dipilih dan alasan pemilihannya. -
Trade-off atau keterbatasan yang diketahui.

#### G. Results / Impact

Komponen: - Hasil implementasi. - Perbaikan proses atau pengalaman
pengguna. - Dampak yang dapat diverifikasi. - Metrik sebelum/sesudah
jika tersedia. - Hal yang masih menjadi keterbatasan atau rencana
pengembangan, bila relevan.

Jangan mengarang angka, metrik, atau dampak yang belum diukur.

#### H. Project Media / Documentation

Komponen: - Screenshot antarmuka atau fitur. - Keterangan untuk setiap
screenshot. - Diagram arsitektur atau alur proses, bila bermanfaat. -
Tautan demo, repositori, atau dokumentasi. - Navigasi ke proyek
berikutnya dan kembali ke daftar proyek.

Jangan mempublikasikan screenshot yang mengandung data pribadi, token,
kredensial, atau informasi internal.

### 4.3 Halaman Opsional

Halaman berikut tidak wajib pada tahap awal dan hanya ditambahkan jika
memiliki konten yang memadai.

#### Engineering Notes / Articles

-   Judul artikel.
-   Tanggal publikasi atau pembaruan.
-   Ringkasan.
-   Topik dan kategori.
-   Isi artikel.
-   Tautan terkait.

#### Open Source

-   Nama repositori.
-   Tujuan proyek.
-   Kontribusi pribadi.
-   Bahasa atau teknologi utama.
-   Tautan repositori.
-   Status proyek.

## 5. Rekomendasi Isi Awal Portfolio

Konten berikut dapat diprioritaskan berdasarkan pengalaman proyek yang
relevan. Pastikan setiap deskripsi sesuai dengan kontribusi yang
benar-benar dilakukan.

### A. Sistem Pelayanan Pajak Daerah

-   Rebuild sistem pelayanan pajak.
-   Pelacakan status dan posisi dokumen.
-   Restrukturisasi database dari ribuan tabel menjadi sekitar 100
    tabel, jika angka akhir tersebut sudah terverifikasi.
-   Data cleaning dan migrasi data.
-   Integrasi dengan data kependudukan Kabupaten Banyuwangi.
-   Jelaskan peran pribadi, teknologi, batasan akses publik, dan hasil
    yang dapat dibagikan.

### B. Aplikasi Analisis Sentimen Berbasis Aspek (ABSA)

-   Tujuan analisis sentimen ulasan konsumen sektor makanan dan minuman.
-   Aspek yang dianalisis.
-   Pipeline preprocessing dan pelabelan data.
-   Fine-tuning IndoBERT.
-   API inference menggunakan FastAPI dan integrasi aplikasi, jika
    sesuai dengan implementasi aktual.
-   Evaluasi model menggunakan metrik yang benar-benar diperoleh.
-   Jangan mengklaim akurasi tanpa hasil evaluasi yang terukur.

### C. Sistem Pembayaran Pondok Pesantren

-   Pengelolaan data santri dan tagihan.
-   Pembuatan dan pemantauan tagihan.
-   Notifikasi dan laporan jika tersedia.
-   Peran dalam pengembangan atau pengujian.
-   Teknologi yang benar-benar digunakan.

### D. Proyek Lain yang Relevan

Pilih proyek tambahan yang menunjukkan variasi kemampuan, misalnya
dashboard, integrasi API, aplikasi administrasi, pemetaan objek pajak,
atau pengelolaan data. Setiap proyek harus menjelaskan kontribusi dan
konteksnya, bukan hanya menampilkan screenshot.

## 6. Komponen Fungsional

### ProjectCard

Data yang ditampilkan: - Nama proyek. - Ringkasan. - Kategori. -
Teknologi utama. - Gambar representatif opsional. - Tautan ke detail. -
Tautan demo atau source code jika tersedia.

### ProjectFilter

Fungsi: - Memfilter proyek berdasarkan kategori. - Menyediakan opsi
All. - Memastikan hasil filter konsisten dengan kategori proyek. -
Menampilkan pesan jika tidak ada proyek pada kategori tertentu.

### ProjectDetailSection

Fungsi: - Menampilkan informasi proyek berdasarkan bagian yang
tersedia. - Menyembunyikan bagian yang tidak memiliki konten. -
Menampilkan tautan eksternal jika tersedia. - Menyediakan navigasi
kembali ke daftar proyek.

### SkillGroup

Data yang ditampilkan: - Nama kategori. - Daftar teknologi. - Konteks
penggunaan opsional.

### ExperienceItem

Data yang ditampilkan: - Organisasi. - Jabatan. - Periode. - Deskripsi
kontribusi. - Teknologi terkait opsional.

### EducationItem

Data yang ditampilkan: - Institusi. - Kualifikasi atau program studi. -
Periode. - Pencapaian opsional.

### ContactForm

Field: - Nama. - Email. - Subjek opsional. - Pesan.

Fungsi: - Validasi input. - Pengiriman pesan ke tujuan yang
dikonfigurasi. - Indikator proses pengiriman. - Pesan sukses atau
gagal. - Proteksi spam dan validasi server-side.

### SocialLinks

Data yang ditampilkan: - Platform. - URL profil. - Label tautan yang
dapat diakses.

### SectionNavigation

Fungsi: - Mengarahkan pengunjung ke bagian utama. - Menyediakan tautan
ke halaman proyek. - Menjaga navigasi tetap konsisten di seluruh
halaman.

## 7. Model Konten

### Project

-   id
-   slug
-   title
-   summary
-   category
-   role
-   start_date
-   end_date
-   featured
-   status
-   problem
-   goals
-   contributions
-   features
-   technical_implementation
-   challenges
-   decisions
-   results
-   limitations
-   technologies
-   screenshots
-   demo_url
-   repository_url
-   documentation_url
-   visibility
-   sort_order

### Technology

-   id
-   name
-   category
-   description (opsional)

### Experience

-   id
-   organization
-   role
-   start_date
-   end_date
-   summary
-   responsibilities
-   technologies
-   public_url (opsional)
-   sort_order

### Education

-   id
-   institution
-   qualification
-   field_of_study
-   start_date
-   end_date
-   achievements (opsional)
-   sort_order

### SocialLink

-   id
-   platform
-   url
-   label
-   sort_order

### ContactMessage

-   id
-   name
-   email
-   subject (opsional)
-   message
-   submitted_at
-   status
-   spam_check_status

Model konten ini adalah rancangan konseptual. Implementasi tidak harus
memakai tabel database terpisah untuk setiap jenis konten; pemilihan
struktur mengikuti kebutuhan aplikasi dan metode pengelolaan konten.

## 8. Kebutuhan Fungsional

-   Pengunjung dapat melihat profil, proyek, pengalaman, pendidikan,
    teknologi, dan kontak.
-   Pengunjung dapat memfilter proyek berdasarkan kategori.
-   Pengunjung dapat membuka halaman detail setiap proyek.
-   Pengunjung dapat membuka demo, source code, atau dokumentasi jika
    tautannya tersedia.
-   Pengunjung dapat mengirim pesan melalui formulir kontak.
-   Tautan eksternal harus mengarah ke URL yang valid dan sesuai dengan
    proyek terkait.
-   Proyek yang bersifat rahasia atau belum mendapat izin publikasi
    tidak boleh ditampilkan.
-   Bagian yang belum memiliki data tidak boleh menampilkan placeholder
    yang menyesatkan.

## 9. Kebutuhan Nonfungsional

-   Konten mudah diperbarui tanpa mengubah seluruh struktur halaman.
-   Halaman dan navigasi dapat digunakan pada perangkat desktop maupun
    mobile.
-   Informasi penting dapat diakses melalui navigasi yang jelas.
-   Formulir kontak memiliki validasi client-side dan server-side.
-   Data dan kredensial sensitif tidak boleh masuk ke source code
    publik.
-   Gambar dan aset proyek dioptimalkan agar tidak membebani pemuatan
    halaman.
-   Struktur konten mendukung metadata halaman, judul, deskripsi, dan
    URL yang dapat dibagikan.
-   Tautan demo dan repositori harus diperiksa secara berkala.
-   Informasi pengalaman, teknologi, dan dampak proyek harus akurat dan
    dapat dipertanggungjawabkan.

## 10. Di Luar Cakupan

PRD ini tidak menetapkan: - Warna, tipografi, spacing, layout visual,
animasi, atau efek dekoratif. - Implementasi backend atau framework
tertentu. - Sistem CMS atau dashboard admin, kecuali dibutuhkan untuk
mengelola konten. - Blog lengkap, sistem autentikasi pengunjung, atau
fitur komentar. - Klaim metrik dan pencapaian yang belum diverifikasi.

## 11. Prioritas Implementasi

### MVP

1.  Hero / Introduction.
2.  Featured Projects dengan kategori.
3.  Halaman detail proyek untuk proyek unggulan.
4.  About / Professional Summary.
5.  Tech Stack.
6.  Experience dan Education.
7.  Contact dengan tautan email dan profil profesional.
8.  Footer.

### Tahap Berikutnya

1.  Formulir kontak dengan backend dan proteksi spam.
2.  Artikel atau Engineering Notes.
3.  Open Source.
4.  Pengelolaan konten melalui CMS jika pembaruan manual mulai
    menyulitkan.
5.  Analitik kunjungan yang menghormati privasi.

## 12. Kriteria Penerimaan

-   Semua bagian utama menampilkan konten yang valid.
-   Setiap kartu proyek membuka halaman detail yang sesuai.
-   Filter kategori menghasilkan daftar proyek yang benar.
-   Tautan demo, source code, dan media hanya muncul jika tersedia.
-   Halaman detail menjelaskan konteks, kontribusi, fitur, implementasi,
    dan hasil sesuai data proyek.
-   Informasi yang tidak tersedia tidak diganti dengan klaim rekaan.
-   Formulir kontak menampilkan hasil pengiriman yang jelas dan
    menangani input tidak valid.
-   Pengunjung dapat menemukan informasi kontak tanpa harus menelusuri
    seluruh daftar proyek.
-   Konten dapat dipahami tanpa bergantung pada elemen dekoratif atau
    animasi.
