import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2023 - 2024",
      content: (
        <div className="timeline-card">
          <h4 className="timeline-card-role">
            Lead Full-Stack Engineer & Database Architect
          </h4>
          <p className="timeline-card-org">
            Proyek Sistem Pelayanan Pajak Daerah (Bapenda Banyuwangi)
          </p>
          <p className="timeline-card-summary">
            Memimpin perancangan ulang arsitektur sistem dan database pelayanan perpajakan daerah, menyederhanakan ribuan tabel warisan menjadi sekitar 100 tabel terverifikasi.
          </p>

          <div className="timeline-contributions-block">
            <span className="timeline-contributions-label">Kontribusi Utama:</span>
            <ul className="timeline-contributions-list">
              <li>Menyusun skema database baru dan merestrukturisasi ribuan tabel warisan menjadi sekitar 100 tabel terverifikasi.</li>
              <li>Membangun modul pelacakan alur berkas pajak dengan riwayat disposisi transparan.</li>
              <li>Mengintegrasikan verifikasi identitas wajib pajak ke server kependudukan daerah.</li>
              <li>Mengkoordinasikan proses data cleaning dan migrasi data historis tanpa mengganggu layanan berjalan.</li>
            </ul>
          </div>

          <div className="timeline-tech-stack">
            {["Laravel", "PostgreSQL", "Docker", "Redis", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="timeline-tech-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="timeline-visuals-grid">
            <div className="timeline-visual-wrap">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop"
                alt="Pajak Daerah Dashboard"
                className="timeline-visual-img"
                loading="lazy"
              />
            </div>
            <div className="timeline-visual-wrap">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700&auto=format&fit=crop"
                alt="Data Architecture"
                className="timeline-visual-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div className="timeline-card">
          <h4 className="timeline-card-role">
            Machine Learning Engineer
          </h4>
          <p className="timeline-card-org">
            Riset Pemrosesan Bahasa Alami (NLP)
          </p>
          <p className="timeline-card-summary">
            Penelitian dan implementasi model Aspect-Based Sentiment Analysis pada domain ulasan konsumen kuliner Indonesia dengan fine-tuning model IndoBERT.
          </p>

          <div className="timeline-contributions-block">
            <span className="timeline-contributions-label">Kontribusi Utama:</span>
            <ul className="timeline-contributions-list">
              <li>Mengumpulkan dan melakukan pelabelan terstruktur pada ribuan dataset ulasan konsumen.</li>
              <li>Melatih dan melakukan fine-tuning model IndoBERT untuk multi-aspect classification.</li>
              <li>Mendeploy model ke dalam format ONNX runtime untuk inference API berlatensi rendah menggunakan FastAPI.</li>
            </ul>
          </div>

          <div className="timeline-tech-stack">
            {["Python", "PyTorch", "IndoBERT", "FastAPI", "Hugging Face"].map((tech) => (
              <span key={tech} className="timeline-tech-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="timeline-visuals-grid">
            <div className="timeline-visual-wrap">
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=700&auto=format&fit=crop"
                alt="NLP Model Visualizer"
                className="timeline-visual-img"
                loading="lazy"
              />
            </div>
            <div className="timeline-visual-wrap">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=700&auto=format&fit=crop"
                alt="Code and pipeline"
                className="timeline-visual-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="timeline-card">
          <h4 className="timeline-card-role">
            Backend & Database Developer
          </h4>
          <p className="timeline-card-org">
            Pengembangan Sistem Administrasi & Finansial Pesantren
          </p>
          <p className="timeline-card-summary">
            Pengembangan sistem terpadu pencatatan iuran santri dan otomasi rekapitulasi keuangan berbasis transaksi ACID di PostgreSQL.
          </p>

          <div className="timeline-contributions-block">
            <span className="timeline-contributions-label">Kontribusi Utama:</span>
            <ul className="timeline-contributions-list">
              <li>Merancang arsitektur database PostgreSQL dengan mekanisme transaksi ACID dan pencegahan race condition.</li>
              <li>Mengembangkan REST API pencatatan pembayaran cicilan dan pembuatan invoice massal.</li>
              <li>Menyediakan endpoint laporan rekapitulasi tunggakan dan verifikasi kuitansi digital.</li>
            </ul>
          </div>

          <div className="timeline-tech-stack">
            {["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma"].map((tech) => (
              <span key={tech} className="timeline-tech-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="timeline-visuals-grid">
            <div className="timeline-visual-wrap">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=700&auto=format&fit=crop"
                alt="Financial Ledger"
                className="timeline-visual-img"
                loading="lazy"
              />
            </div>
            <div className="timeline-visual-wrap">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=700&auto=format&fit=crop"
                alt="System Management"
                className="timeline-visual-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
