import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'pajak-daerah-banyuwangi',
    slug: 'sistem-pelayanan-pajak-daerah',
    title: 'Sistem Pelayanan Pajak Daerah',
    summary: 'Modernisasi sistem pelayanan pajak daerah terpadu dengan pelacakan posisi dokumen real-time dan integrasi data kependudukan.',
    category: 'Full-Stack',
    role: 'Lead Full-Stack Engineer & Database Architect',
    period: '2023 - 2024',
    featured: true,
    status: 'Selesai & Diimplementasikan',
    problem: 'Sistem pelayanan pajak sebelumnya mengalami performa lambat akibat skema database warisan dengan ribuan tabel terfragmentasi, proses pelacakan berkas manual yang rentan tumpang tindih, serta validasi data wajib pajak yang belum terhubung dengan data kependudukan daerah.',
    goals: [
      'Menyederhanakan dan merestrukturisasi skema database dari ribuan tabel menjadi sekitar 100 tabel terstruktur.',
      'Membangun sistem pelacakan status dan disposisi dokumen pajak secara transparan untuk staf dan wajib pajak.',
      'Mengintegrasikan verifikasi identitas secara otomatis dengan layanan kependudukan Kabupaten Banyuwangi.'
    ],
    contributions: [
      'Merancang arsitektur database relasional baru dan memimpin pipeline migrasi serta pembersihan data (data cleaning).',
      'Mengembangkan REST API untuk pelacakan alur dokumen dan validasi berkas perpajakan.',
      'Mengintegrasikan secure client untuk konsumsi API data kependudukan dengan mekanisme caching dan error fallback.',
      'Mengimplementasikan antarmuka operasional staf perpajakan dengan kontrol akses berbasis peran (RBAC).'
    ],
    features: [
      {
        title: 'Pelacakan Dokumen Real-Time',
        description: 'Setiap berkas pajak memiliki nomor registrasi unik dengan timeline status pemeriksaan, disposisi petugas, dan catatan verifikasi.'
      },
      {
        title: 'Integrasi Data Kependudukan',
        description: 'Validasi NIK wajib pajak langsung ke basis data kependudukan daerah untuk meminimalkan duplikasi dan kesalahan entri data.'
      },
      {
        title: 'Pipeline Migrasi & Normalisasi Data',
        description: 'Script migrasi data transaksional bertahap dengan validasi integritas referensial dan penanganan inkonsistensi data historis.'
      },
      {
        title: 'Audit Trail Perpajakan',
        description: 'Pencatatan riwayat setiap perubahan data tagihan, berkas bukti, dan tindakan petugas untuk akuntabilitas operasional.'
      }
    ],
    technicalImplementation: {
      architecture: 'Monolit modular berbasis Laravel dengan pemisahan domain service, background job worker untuk migrasi data, dan layer caching Redis.',
      backend: 'PHP 8.2, framework Laravel, RESTful API dengan enkripsi payload internal, dan validasi skema bertingkat.',
      frontend: 'Blade templates yang dioptimasi dengan Alpine.js untuk interaksi form dinamis dan Tailwind CSS untuk styling dashboard.',
      database: 'PostgreSQL dengan partisi tabel transaksional, indexing komprehensif, dan foreign key constraints terverifikasi.',
      deployment: 'Docker containers yang diorkestrasi di server lokal pemerintahan daerah dengan proteksi jaringan internal.'
    },
    challenges: [
      {
        challenge: 'Migrasi jutaan baris data dari ribuan tabel tidak terorganisir tanpa menghentikan pelayanan kantor pajak berjalan.',
        solution: 'Membuat script migrasi berbasis batch dengan checkpoint recovery otomatis dan verifikasi checksum data sebelum cutover final.',
        tradeOff: 'Waktu persiapan pengujian migrasi memakan waktu lebih lama di staging, namun proses live cutover berjalan tanpa downtime operasional.'
      },
      {
        challenge: 'Respons API kependudukan eksternal terkadang mengalami latensi saat jam kerja puncak.',
        solution: 'Mengimplementasikan caching sementara untuk data referensi statis dan antrean background worker dengan exponential backoff retry.',
        tradeOff: 'Data kependudukan baru memiliki jeda sinkronisasi beberapa menit jika server kependudukan sedang lambat.'
      }
    ],
    results: [
      'Skema database berhasil disederhanakan dari ribuan tabel warisan menjadi sekitar 100 tabel ternormalisasi.',
      'Proses pelacakan posisi berkas dapat dipantau langsung dalam hitungan detik tanpa pencarian berkas fisik antarmeja.',
      'Validasi identitas wajib pajak menjadi akurat dan otomatis melalui integrasi API kependudukan Kabupaten Banyuwangi.'
    ],
    technologies: ['Laravel', 'PHP', 'PostgreSQL', 'Redis', 'Docker', 'REST API', 'Tailwind CSS'],
    isPublicRepo: false,
    isPublicDemo: false,
    accessNote: 'Repositori dan link live bersifat internal pada jaringan tertutup instansi pemerintah untuk melindungi kerahasiaan data wajib pajak dan data kependudukan daerah.'
  },
  {
    id: 'absa-sentiment-analysis',
    slug: 'analisis-sentimen-absa',
    title: 'Aplikasi Analisis Sentimen Berbasis Aspek (ABSA)',
    summary: 'Pipeline ekstraksi sentimen ulasan konsumen sektor F&B menggunakan fine-tuning model IndoBERT dan penyediaan API inference FastAPI.',
    category: 'Data/AI',
    role: 'Machine Learning Engineer & API Developer',
    period: '2023 - 2024',
    featured: true,
    status: 'Selesai & Publikasi Riset',
    problem: 'Ulasan konsumen pada industri kuliner seringkali memuat sentimen campur aduk dalam satu kalimat, misalnya makanan enak tetapi pelayanan lambat. Analisis sentimen konvensional tingkat dokumen gagal menangkap nuansa aspek spesifik tersebut.',
    goals: [
      'Membangun pipeline ekstraksi aspek (makanan, pelayanan, harga, suasana) dan klasifikasi polaritas (positif, negatif, netral).',
      'Melakukan fine-tuning model representasi bahasa Indonesia (IndoBERT) pada dataset ulasan kuliner.',
      'Menyediakan REST API cepat untuk integrasi sistem dashboard pemantauan ulasan secara otomatis.'
    ],
    contributions: [
      'Merancang modul preprocessing teks Indonesia: normalisasi slang, ekspansi singkatan, dan penanganan tanda baca.',
      'Melakukan anotasi dataset terarah dan melatih model IndoBERT-base menggunakan arsitektur klasifikasi multi-task.',
      'Mengembangkan microservice inference dengan FastAPI dilengkapi pemrosesan asynchronous dan batch prediction.',
      'Mengukur performa model menggunakan precision, recall, dan F1-score mikro/makro pada data uji independen.'
    ],
    features: [
      {
        title: 'Deteksi Multi-Aspek Simultan',
        description: 'Menganalisis kalimat masukan dan mendeteksi sentimen terpisah untuk aspek rasa makanan, harga, pelayanan, dan kenyamanan tempat.'
      },
      {
        title: 'Preprocessing Teks Informal',
        description: 'Kamus penggantian istilah tidak baku dan singkatan khas ulasan media sosial Indonesia untuk menjaga kualitas token IndoBERT.'
      },
      {
        title: 'FastAPI Inference Endpoint',
        description: 'Endpoint RESTful dengan latency rata-rata di bawah 150ms per permintaan teks berkat optimasi bobot model dan ONNX runtime.'
      },
      {
        title: 'Antarmuka Visualisasi Sentimen',
        description: 'Demo web interaktif untuk menguji kalimat secara langsung dan melihat probabilitas distribusi polaritas per aspek.'
      }
    ],
    technicalImplementation: {
      architecture: 'Pipeline PyTorch untuk training dan validasi offline, dilanjutkan konversi model ke ONNX runtime untuk inference service FastAPI.',
      backend: 'Python 3.10, FastAPI, Uvicorn, PyTorch, Hugging Face Transformers, ONNX Runtime.',
      frontend: 'Antarmuka pengujian web responsif dengan grafik distribusi keyakinan probabilitas model.',
      pipeline: 'Tokenizer IndoBERT, kamus normalisasi leksikon bahasa Indonesia, stratified k-fold cross validation.',
      deployment: 'Container Docker siap pakai pada cloud provider dengan pemanfaatan CPU multithreading.'
    },
    challenges: [
      {
        challenge: 'Ketidakseimbangan jumlah sampel antar aspek pada dataset ulasan kuliner dunia nyata.',
        solution: 'Menerapkan teknik data augmentation berbasis substitusi sinonim dan pembobotan loss function (weighted cross-entropy).',
        tradeOff: 'Waktu training model meningkat sekitar 25% namun performa klasifikasi pada aspek minoritas meningkat signifikan.'
      },
      {
        challenge: 'Waktu respons inference IndoBERT standar cukup berat untuk skenario komputasi CPU saja.',
        solution: 'Mengoptimasi runtime menggunakan ONNX quantisation (int8) tanpa penurunan akurasi yang berarti.',
        tradeOff: 'Sedikit reduksi presisi float (kurang dari 0.8% margin evaluasi), namun kecepatan inferensi naik hingga 2.5 kali lipat.'
      }
    ],
    results: [
      'Model berhasil mengklasifikasikan polaritas aspek kuliner dengan F1-score rata-rata di atas 86% pada data uji terverifikasi.',
      'API inference beroperasi stabil dengan latensi rendah pada lingkungan server tanpa memerlukan GPU khusus.',
      'Tersedia dokumentasi teknis dan repositori riset yang dapat direproduksi.'
    ],
    technologies: ['Python', 'PyTorch', 'IndoBERT', 'FastAPI', 'Hugging Face', 'Docker', 'TypeScript'],
    demoUrl: 'https://github.com/elangprakoso',
    repositoryUrl: 'https://github.com/elangprakoso',
    isPublicRepo: true,
    isPublicDemo: true
  },
  {
    id: 'sistem-pembayaran-pesantren',
    slug: 'sistem-pembayaran-pesantren',
    title: 'Sistem Pembayaran Pondok Pesantren',
    summary: 'Aplikasi manajemen keuangan dan administrasi iuran santri dengan pembuatan tagihan otomatis serta pembukuan kas transparan.',
    category: 'Full-Stack',
    role: 'Backend & Database Developer',
    period: '2023',
    featured: true,
    status: 'Selesai & Digunakan Lembaga',
    problem: 'Pengelolaan iuran bulanan santri (syahriah, asrama, dan katering) sebelumnya dicatat pada buku kas konvensional, menimbulkan kendala pencocokan bukti transfer, keterlambatan laporan kas bulanan, dan kesulitan verifikasi tunggakan wali santri.',
    goals: [
      'Digitalisasi master data santri, wali santri, dan kategori tarif pembayaran.',
      'Sistem generate invoice massal otomatis setiap awal bulan sesuai jenjang santri.',
      'Penyediaan rekapitulasi pelunasan dan pelaporan kas harian/bulanan yang akurat.'
    ],
    contributions: [
      'Merancang skema database PostgreSQL untuk integritas data transaksi dan log pembayaran.',
      'Membangun API manajemen tagihan, pencatatan pembayaran cicilan, dan laporan kas masuk.',
      'Mengimplementasikan validasi invoice dan proteksi duplikasi pembayaran pada level database transaction.',
      'Menulis unit test dan integration test untuk memastikan keakuratan kalkulasi saldo dan sisa tunggakan.'
    ],
    features: [
      {
        title: 'Pembuatan Tagihan Periodik Otomatis',
        description: 'Generator invoice massal pada awal periode dengan perhitungan diskon saudara kandung atau keringanan khusus.'
      },
      {
        title: 'Pencatatan Pembayaran Fleksibel',
        description: 'Mendukung pembayaran lunas maupun angsuran dengan pencetakan kuitansi digital bernomor seri resmi.'
      },
      {
        title: 'Rekapitulasi Keuangan & Tunggakan',
        description: 'Laporan kas masuk per periode dan daftar filter santri yang masih memiliki tunggakan untuk tindak lanjut bendahara.'
      },
      {
        title: 'Portal Pengecekan Riwayat Wali Santri',
        description: 'Halaman verifikasi status tagihan yang dapat diakses wali santri menggunakan NIS santri secara mandiri.'
      }
    ],
    technicalImplementation: {
      architecture: 'REST API service berbasis Node.js dengan ORM terkelola dan PostgreSQL ACID transactions.',
      backend: 'Node.js, Express, TypeScript, Zod untuk validasi skema request, dan logging audit trail.',
      database: 'PostgreSQL dengan transaksi terkontrol (`BEGIN / COMMIT / ROLLBACK`) pada setiap mutasi saldo keuangan.',
      frontend: 'Web dashboard responsif dengan tabel data interaktif, filter status, dan generator kuitansi PDF.',
      deployment: 'Server VPS Linux dengan Nginx reverse proxy, SSL certbot, dan backup database harian terjadwal.'
    },
    challenges: [
      {
        challenge: 'Menghindari race condition dan inkonsistensi saldo saat beberapa petugas kasir menginput pembayaran pada waktu bersamaan.',
        solution: 'Menggunakan mekanisme database row-level locking (`SELECT ... FOR UPDATE`) dalam transaksi PostgreSQL saat mutasi tagihan.',
        tradeOff: 'Sedikit antrean proses ketika satu akun santri diakses bersamaan, namun integritas saldo terjamin 100% konsisten.'
      },
      {
        challenge: 'Kebutuhan cetak kuitansi cepat pada jaringan internet lembaga yang kadang tidak stabil.',
        solution: 'Client-side PDF rendering menggunakan format lightweight sehingga dokumen dapat langsung dicetak tanpa roundtrip server tambahan.',
        tradeOff: 'Desain kuitansi disederhanakan agar tidak membebani memori browser kasir.'
      }
    ],
    results: [
      'Waktu proses rekapitulasi keuangan bulanan berkurang dari hitungan hari menjadi laporan instan sekali klik.',
      'Catatan pembayaran dan status tunggakan ribuan santri terdata rapi tanpa risiko data fisik hilang atau rusak.',
      'Laporan kas masuk dapat diverifikasi silang dengan rekening bank lembaga secara akurat.'
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    isPublicRepo: false,
    isPublicDemo: false,
    accessNote: 'Sistem operasional privat pondok pesantren untuk menjaga kerahasiaan data pribadi santri dan mutasi rekening kas lembaga.'
  }
];
