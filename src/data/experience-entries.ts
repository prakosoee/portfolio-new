import { Database, Brain, Layers } from "lucide-react";
import type { TimeLine_01Entry } from "@/components/ui/release-time-line";

export const experienceEntries: TimeLine_01Entry[] = [
  {
    icon: Database,
    title: "Lead Full-Stack Engineer & Database Architect",
    subtitle: "Bapenda Banyuwangi • 2023 - 2024",
    description:
      "Memimpin perancangan ulang arsitektur sistem dan basis data pelayanan perpajakan daerah, menyederhanakan ribuan tabel warisan menjadi skema terverifikasi.",
    items: [
      "Menyusun skema database baru dan merestrukturisasi tabel warisan menjadi sekitar 100 tabel terverifikasi",
      "Membangun modul pelacakan alur berkas pajak dengan riwayat disposisi transparan",
      "Mengintegrasikan verifikasi identitas wajib pajak ke server kependudukan daerah",
      "Mengkoordinasikan proses data cleaning dan migrasi data historis tanpa downtime layanan",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    button: {
      url: "/projects/sistem-pelayanan-pajak-daerah",
      text: "Lihat Studi Kasus",
    },
  },
  {
    icon: Brain,
    title: "Machine Learning Engineer",
    subtitle: "Riset Pemrosesan Bahasa Alami • 2023 - 2024",
    description:
      "Penelitian dan implementasi model Aspect-Based Sentiment Analysis pada domain ulasan konsumen kuliner Indonesia menggunakan IndoBERT.",
    items: [
      "Mengumpulkan dan melakukan pelabelan terstruktur pada ribuan dataset ulasan konsumen",
      "Melatih dan melakukan fine-tuning model IndoBERT untuk klasifikasi multi-aspek",
      "Mendeploy model ke format ONNX runtime untuk inference API berlatensi rendah dengan FastAPI",
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    button: {
      url: "/projects/analisis-sentimen-absa",
      text: "Lihat Riset Model",
    },
  },
  {
    icon: Layers,
    title: "Backend & Database Developer",
    subtitle: "Sistem Administrasi Pesantren • 2023",
    description:
      "Pengembangan sistem terpadu pencatatan iuran santri dan otomasi rekapitulasi keuangan berbasis transaksi ACID di PostgreSQL.",
    items: [
      "Merancang arsitektur database PostgreSQL dengan mekanisme transaksi ACID dan pencegahan race condition",
      "Mengembangkan REST API pencatatan pembayaran cicilan dan pembuatan invoice massal",
      "Menyediakan endpoint laporan rekapitulasi tunggakan dan verifikasi kuitansi digital",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    button: {
      url: "/projects/sistem-pembayaran-pesantren",
      text: "Lihat Arsitektur Sistem",
    },
  },
];
