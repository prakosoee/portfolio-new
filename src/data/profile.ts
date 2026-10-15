import type { SkillGroup, ExperienceItem, EducationItem, SocialLink } from '../types/portfolio';

export const personalProfile = {
  name: 'Muhammad Elang Prakoso',
  role: 'Full-Stack Developer & Software Engineer',
  tagline: 'Membangun sistem web yang andal, arsitektur database terstruktur, dan pipeline data/AI yang dapat dipertanggungjawabkan.',
  about: [
    'Saya adalah software engineer yang berfokus pada pengembangan sistem web end-to-end, perancangan basis data relasional, dan integrasi API yang aman. Saya terbiasa menangani proyek dengan kompleksitas data nyata, mulai dari restrukturisasi basis data pelayanan pemerintah daerah hingga perancangan model machine learning untuk pemrosesan teks bahasa Indonesia.',
    'Dalam setiap pekerjaan teknis, prinsip utama saya adalah maintainability (kemudahan pemeliharaan kode), integritas data (konsistensi transaksi), dan efisiensi alur kerja pengguna. Saya percaya bahwa arsitektur yang baik adalah arsitektur yang memecahkan masalah nyata tanpa kerumitan yang berlebihan.'
  ],
  principles: [
    {
      title: 'Integritas & Struktur Data',
      description: 'Menata relasi database, constraint ketat, dan transaksi ACID untuk memastikan data keuangan serta dokumen penting selalu valid dan terlindungi.'
    },
    {
      title: 'Maintainability & Clean Code',
      description: 'Menulis kode modular dengan pemisahan tanggung jawab yang jelas, penamaan eksplisit, dan dokumentasi teknis yang memudahkan kolaborasi tim.'
    },
    {
      title: 'Efisiensi Solusi',
      description: 'Memilih teknologi berdasarkan kecocokan masalah dan skala kebutuhan operasional, bukan sekadar mengikuti tren.'
    }
  ],
  location: 'Indonesia',
  availability: 'Tersedia untuk peluang kerja & kolaborasi proyek'
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend & API',
    skills: [
      { name: 'PHP / Laravel', context: 'Sistem informasi pelayanan & integrasi REST API' },
      { name: 'Node.js / Express', context: 'Microservice, middleware, dan autentikasi JWT' },
      { name: 'Python / FastAPI', context: 'High-performance async API untuk model ML' },
      { name: 'TypeScript', context: 'Type-safe contract dan backend logic' },
      { name: 'RESTful API Architecture', context: 'Spesifikasi endpoint, versioning, dan error handling' }
    ]
  },
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'Astro', context: 'Static site generation cepat & arsitektur berbasis komponen' },
      { name: 'TypeScript & JavaScript', context: 'Manipulasi DOM, validasi form, dan asynchronous state' },
      { name: 'HTML5 Semantic & Modern CSS', context: 'Desain responsif, aksesibilitas WCAG, dan design tokens' },
      { name: 'Tailwind CSS', context: 'Utility-first layouting dan konsistensi token' },
      { name: 'Vue.js / React', context: 'Interaksi komponen dinamis dan state management' }
    ]
  },
  {
    category: 'Database & Data Engineering',
    skills: [
      { name: 'PostgreSQL', context: 'Normalisasi skema, indeks performa, dan partisi' },
      { name: 'MySQL / MariaDB', context: 'Query optimization dan manajemen relasi' },
      { name: 'Redis', context: 'In-memory caching dan job queue backend' },
      { name: 'Prisma & Eloquent ORM', context: 'Database migration dan schema modeling' }
    ]
  },
  {
    category: 'Data Science & Machine Learning',
    skills: [
      { name: 'PyTorch', context: 'Fine-tuning arsitektur Transformer dan evaluasi model' },
      { name: 'Hugging Face Transformers', context: 'Pipeline model bahasa Indonesia (IndoBERT)' },
      { name: 'NLP Preprocessing', context: 'Tokenisasi, normalisasi leksikon, dan augmentasi teks' },
      { name: 'ONNX Runtime', context: 'Optimasi bobot model untuk inferensi CPU berkecepatan tinggi' }
    ]
  },
  {
    category: 'DevOps & Development Tools',
    skills: [
      { name: 'Docker', context: 'Kontainerisasi aplikasi, multi-stage build, dan Docker Compose' },
      { name: 'Git & GitHub', context: 'Version control, branch management, dan issue tracking' },
      { name: 'Linux Server (Ubuntu/Debian)', context: 'Konfigurasi VPS, systemd services, dan cron jobs' },
      { name: 'Nginx', context: 'Reverse proxy, load balancing, dan sertifikasi SSL' }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    organization: 'Proyek Sistem Pelayanan Pajak Daerah (Bapenda Banyuwangi)',
    role: 'Lead Full-Stack Engineer & Database Architect',
    period: '2023 - 2024',
    summary: 'Memimpin perancangan ulang arsitektur sistem dan database pelayanan perpajakan daerah.',
    contributions: [
      'Menyusun skema database baru dan merestrukturisasi ribuan tabel warisan menjadi sekitar 100 tabel terverifikasi.',
      'Membangun modul pelacakan alur berkas pajak dengan riwayat disposisi transparan.',
      'Mengintegrasikan verifikasi identitas wajib pajak ke server kependudukan daerah.',
      'Mengkoordinasikan proses data cleaning dan migrasi data historis tanpa mengganggu layanan berjalan.'
    ],
    technologies: ['Laravel', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS']
  },
  {
    organization: 'Riset Pemrosesan Bahasa Alami (NLP)',
    role: 'Machine Learning Engineer',
    period: '2023 - 2024',
    summary: 'Penelitian dan implementasi model Aspect-Based Sentiment Analysis pada domain ulasan konsumen kuliner Indonesia.',
    contributions: [
      'Mengumpulkan dan melakukan pelabelan terstruktur pada ribuan dataset ulasan konsumen.',
      'Melatih dan melakukan fine-tuning model IndoBERT untuk multi-aspect classification.',
      'Mendeploy model ke dalam format ONNX runtime untuk inference API berlatensi rendah menggunakan FastAPI.'
    ],
    technologies: ['Python', 'PyTorch', 'IndoBERT', 'FastAPI', 'Hugging Face']
  },
  {
    organization: 'Pengembangan Sistem Administrasi & Finansial Pesantren',
    role: 'Backend & Database Developer',
    period: '2023',
    summary: 'Pengembangan sistem terpadu pencatatan iuran santri dan otomasi rekapitulasi keuangan.',
    contributions: [
      'Merancang arsitektur database PostgreSQL dengan mekanisme transaksi ACID dan pencegahan race condition.',
      'Mengembangkan REST API pencatatan pembayaran cicilan dan pembuatan invoice massal.',
      'Menyediakan endpoint laporan rekapitulasi tunggakan dan verifikasi kuitansi digital.'
    ],
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma']
  }
];

export const educationList: EducationItem[] = [
  {
    institution: 'Pendidikan Tinggi Teknik Informatika / Ilmu Komputer',
    qualification: 'Sarjana Komputer (S.Kom)',
    fieldOfStudy: 'Teknik Informatika',
    period: '2020 - 2024',
    achievements: [
      'Fokus studi pada Rekayasa Perangkat Lunak, Arsitektur Basis Data, dan Natural Language Processing (NLP).',
      'Menyelesaikan tugas akhir implementasi Deep Learning untuk analisis sentimen berbahasa Indonesia.'
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/elangprakoso',
    label: 'Profil GitHub Muhammad Elang Prakoso'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/elangprakoso',
    label: 'Profil LinkedIn Muhammad Elang Prakoso'
  },
  {
    platform: 'Email',
    url: 'mailto:elang.prakoso@example.com',
    label: 'Kirim Email ke elang.prakoso@example.com'
  }
];
