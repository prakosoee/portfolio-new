# Panduan Integrasi GIS API (DataGIS) pada Modul Pelayanan PBB

Dokumen ini berisi panduan teknis dan standard operating procedure (SOP) untuk mereplikasi implementasi fitur visualisasi peta polygon batas bidang tanah berbasis **GIS API (DataGIS)** ke modul-modul pelayanan lainnya di Cortaxt PBB (seperti Pelayanan Mutasi, Mutasi WP, Perubahan Data, Pemecahan, Penggabungan, dan Keberatan).

---

## 1. Arsitektur & Alur Kerja GIS API

Integrasi GIS API di Cortaxt PBB dirancang dengan pendekatan **on-demand proxy** agar frontend tidak berhubungan langsung dengan API GIS eksternal.

```
[Browser / React (Inertia)]
        │
        ▼ (GET /api/peta/polygon?nop=...)
[Laravel Controller: ApiPetaController]
        │
        ▼
[Service: DataGisApiService]
        │
        ├─► [Cek & Sanitasi NOP (numerik saja)]
        ├─► [HTTP Client Laravel -> GET {DATAGIS_API_URL}/peta/polygon-only?nop=...]
        └─► [Fallback: Python Bridge fetch_datagis.py jika kendala TLS/SSL]
```

### Komponen Utama Sistem
1. **Konfigurasi (`config/services.php`)**:
   Menyimpan endpoint `services.datagis.api_url` dari environment `DATAGIS_API_URL`.
2. **Service Backend (`Modules/Pelayanan/app/Services/DataGisApiService.php`)**:
   Bertanggung jawab melakukan sanitasi NOP (`preg_replace('/[^0-9]/', '', $nop)`), pemanggilan API eksternal, penanganan timeout, dan format respons JSON.
3. **Controller Proxy (`Modules/Pelayanan/app/Http/Controllers/ApiPetaController.php`)**:
   Menyediakan endpoint internal aman `GET /api/peta/polygon` yang dilindungi middleware autentikasi `auth`.
4. **Komponen Peta Frontend (`resources/js/Components/EsriPolygonMap.tsx`)**:
   Merender polygon GeoJSON/ArcGIS ring menggunakan Esri ArcGIS JavaScript API dengan basemap satelit, zoom otomatis ke bounding box polygon, dan pin marker koordinat.

---

## 2. Analisis Implementasi Eksisting

### A. Pada SPOP (Formulir & Cetak Denah)
1. **Frontend SPOP (`StepShowSPOP.tsx`)**:
   - Memeriksa apakah `selectedOp.polygon` atau `selectedOp.polygon_coordinates` sudah ada dari database.
   - Jika ada di database, langsung merender peta dengan status sumber `'db'`.
   - Jika belum ada di database, memicu `useEffect` untuk fetch ke `/api/peta/polygon?nop=${cleanNop}`.
   - Hasil fetch disimpan ke state `dynamicPolygon` dan status sumber menjadi `'datagis'`.
   - Menampilkan badge indikator status:
     - Loading: `Mengambil polygon Data GIS...`
     - Sukses: `Data GIS Terpetakan`
     - Kosong: Peta fallback ke pin koordinat (latitude/longitude) atau pesan informatif bahwa bidang belum terpetakan.
2. **Backend Cetak Denah (`SpopLspopService.php`)**:
   - Pada method `getSvgDenah(object $spop)`, jika kolom polygon pada tabel transaksi kosong, backend memanggil `app(DataGisApiService::class)->getPolygonByNop($spop->nop)`.
   - Data polygon API ini diekstrak koordinatnya untuk digambar menjadi SVG denah lokasi objek pajak saat generate PDF/preview berkas pelayanan tanpa harus mewajibkan simpan permanen ke tabel OP jika belum diverifikasi.

### B. Pada Pelayanan Salinan & Pelayanan Penghapusan
1. **Saat Tahap Create (Memilih NOP)**:
   - Komponen: `StepPilihNOP.tsx` pada role `User`, `Loket`, dan `LoketDesa`.
   - Ketika pengguna memilih salah satu objek pajak dari dropdown pencarian, state `selectedOp` terisi.
   - `useEffect` mendeteksi `selectedOp.nop` dan menjalankan query ke `/api/peta/polygon?nop=${cleanNop}`.
   - Di bawah kartu ringkasan NOP dan identitas Wajib Pajak, komponen `EsriPolygonMap` langsung muncul setinggi 240px.
   - Memberikan kepastian visual instan bagi petugas loket atau wajib pajak bahwa bidang tanah yang dipilih sesuai dengan objek fisik di lapangan.
2. **Saat Tahap Show / Review (Detail Permohonan)**:
   - Komponen: `show_pelayanan_salinan.tsx` dan `show_pelayanan_penghapusan.tsx` pada seluruh role aktor (`User`, `Loket`, `LoketDesa`, `Verifikator`, `Persetujuan`, `Penetapan`).
   - Melakukan pengecekan polygon dari relasi data transaksi objek pajak (`objekPajakTrx?.polygon`). Jika kosong, melakukan fetch on-demand ke API Peta.
   - Membantu petugas verifikator dan pejabat penetapan memvalidasi batas bidang tanah permohonan secara langsung dalam kartu objek pajak.

---

## 3. Langkah-Langkah Penerapan di Pelayanan Lainnya

Untuk menerapkan fitur GIS ini pada pelayanan lain (misalnya **Pelayanan Mutasi**, **Pelayanan Mutasi WP**, **Pelayanan Perubahan Data**, dll.), ikuti dua langkah standar berikut:

### Langkah 1: Menerapkan di Step Create (`StepPilihNOP.tsx`)

Buka file target:
`Modules/Pelayanan/resources/js/Pages/[NamaPelayanan]/[Role]/components/create/StepPilihNOP.tsx`

#### 1. Import Dependencies
Pastikan import komponen peta dan ikon telah tersedia:
```tsx
import EsriPolygonMap from '@/Components/EsriPolygonMap';
import { Loader2, CheckCircle2, MapPin } from 'lucide-react';
```

#### 2. Deklarasi State & Hook `useEffect`
Tambahkan state untuk polygon dan status loading di dalam komponen:
```tsx
const [polygonData, setPolygonData] = useState<any>(null);
const [isLoadingPolygon, setIsLoadingPolygon] = useState<boolean>(false);

useEffect(() => {
    if (!selectedOp?.nop) {
        setPolygonData(null);
        return;
    }

    // 1. Cek apakah OP sudah memiliki data polygon lokal dari database
    const dbPolygon = selectedOp.polygon || selectedOp.polygon_coordinates;
    const hasValidDbPolygon = dbPolygon && (
        (typeof dbPolygon === 'string' && dbPolygon.trim() !== '' && dbPolygon.trim() !== '{}' && dbPolygon.trim() !== '[]') ||
        (typeof dbPolygon === 'object' && Object.keys(dbPolygon).length > 0)
    );

    if (hasValidDbPolygon) {
        setPolygonData(dbPolygon);
        return;
    }

    // 2. Jika di database belum ada, ambil on-demand dari GIS API
    let isMounted = true;
    setIsLoadingPolygon(true);
    const cleanNop = String(selectedOp.nop).replace(/\D/g, '');

    fetch(`/api/peta/polygon?nop=${encodeURIComponent(cleanNop)}`, {
        headers: { 'Accept': 'application/json' }
    })
        .then(res => res.json())
        .then(res => {
            if (!isMounted) return;
            if (res.success && res.polygon) {
                setPolygonData(res.polygon);
            } else {
                setPolygonData(null);
            }
        })
        .catch(err => {
            console.error('[StepPilihNOP] Gagal mengambil polygon:', err);
            if (!isMounted) return;
            setPolygonData(null);
        })
        .finally(() => {
            if (isMounted) setIsLoadingPolygon(false);
        });

    return () => {
        isMounted = false;
    };
}, [selectedOp?.nop, selectedOp?.polygon, selectedOp?.polygon_coordinates]);
```

#### 3. Render Komponen Peta di Bawah Ringkasan Objek Pajak
Letakkan blok JSX ini tepat setelah ringkasan data tanah/bangunan di dalam `CardContent`:
```tsx
{/* Peta Lokasi & Batas Bidang (Data GIS) */}
<div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-3 space-y-2">
    <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="size-3.5 text-sky-500" /> Lokasi &amp; Batas Bidang Tanah (GIS)
        </p>
        {isLoadingPolygon && (
            <span className="inline-flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400">
                <Loader2 className="size-3 animate-spin" /> Mengambil polygon Data GIS...
            </span>
        )}
        {polygonData && !isLoadingPolygon && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="size-3" /> Data GIS Terpetakan
            </span>
        )}
    </div>

    {polygonData || (selectedOp.latitude && selectedOp.longitude) ? (
        <EsriPolygonMap
            polygon={polygonData}
            latitude={selectedOp.latitude}
            longitude={selectedOp.longitude}
            mode="view"
            height="240px"
            showLocate={false}
        />
    ) : (
        <div className="bg-white/60 dark:bg-slate-900/60 rounded-xl p-3 text-center border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-400 dark:text-slate-500">
                {isLoadingPolygon ? 'Sedang mengecek batas bidang di Data GIS...' : 'Batas polygon bidang belum terpetakan di GIS.'}
            </p>
        </div>
    )}
</div>
```

---

### Langkah 2: Menerapkan di Halaman Detail/Show (`show_pelayanan_[nama].tsx`)

Buka file target untuk masing-masing role:
`Modules/Pelayanan/resources/js/Pages/[NamaPelayanan]/[Role]/show_pelayanan_[nama].tsx`

#### 1. Import Dependencies
```tsx
import EsriPolygonMap from '@/Components/EsriPolygonMap';
import { Loader2, CheckCircle2, MapPin } from 'lucide-react';
```

#### 2. Deklarasi State & Fetch di Hook
```tsx
const [polygonData, setPolygonData] = useState<any>(null);
const [isLoadingPolygon, setIsLoadingPolygon] = useState<boolean>(false);

useEffect(() => {
    // 1. Cek polygon yang tersimpan di objek pajak transaksi permohonan
    if (objekPajakTrx?.polygon) {
        setPolygonData(objekPajakTrx.polygon);
        return;
    }
    
    // 2. Ambil NOP dari permohonan atau objek pajak transaksi
    const nop = permohonan?.nop ?? objekPajakTrx?.nop;
    if (!nop || String(nop).trim().length < 10) return;

    let isMounted = true;
    setIsLoadingPolygon(true);
    const cleanNop = String(nop).replace(/\D/g, '');

    fetch(`/api/peta/polygon?nop=${encodeURIComponent(cleanNop)}`, {
        headers: { 'Accept': 'application/json' }
    })
        .then(res => res.json())
        .then(res => {
            if (!isMounted) return;
            if (res.success && res.polygon) {
                setPolygonData(res.polygon);
            }
        })
        .catch(() => {})
        .finally(() => {
            if (isMounted) setIsLoadingPolygon(false);
        });

    return () => {
        isMounted = false;
    };
}, [permohonan?.nop, objekPajakTrx?.nop, objekPajakTrx?.polygon]);
```

#### 3. Render Komponen Peta di Bagian Detail Objek Pajak
Tempatkan di grid informasi objek pajak (biasanya setelah kolom koordinat latitude/longitude):
```tsx
{/* Peta Lokasi & Batas Bidang (Data GIS) */}
<div className="sm:col-span-2 border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2">
    <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="size-3.5 text-sky-500" /> Lokasi &amp; Batas Bidang Tanah (GIS)
        </p>
        {isLoadingPolygon && (
            <span className="inline-flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400">
                <Loader2 className="size-3 animate-spin" /> Mengambil polygon Data GIS...
            </span>
        )}
        {polygonData && !isLoadingPolygon && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="size-3" /> Data GIS Terpetakan
            </span>
        )}
    </div>

    {polygonData || (objekPajakTrx?.latitude && objekPajakTrx?.longitude) ? (
        <EsriPolygonMap
            polygon={polygonData}
            latitude={objekPajakTrx?.latitude}
            longitude={objekPajakTrx?.longitude}
            mode="view"
            height="260px"
            showLocate={false}
        />
    ) : (
        <div className="bg-white/60 dark:bg-slate-900/60 rounded-xl p-3 text-center border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-400 dark:text-slate-500">
                {isLoadingPolygon ? 'Sedang mengecek batas bidang di Data GIS...' : 'Batas polygon bidang belum terpetakan di GIS.'}
            </p>
        </div>
    )}
</div>
```

---

## 4. Checklist Modul Pelayanan Target

Daftar modul yang dapat diterapkan dengan pola di atas:

| Nama Modul | Target Create (`StepPilihNOP.tsx`) | Target Detail/Show (`show_pelayanan_*.tsx`) | Keterangan Khusus |
|---|---|---|---|
| **Pelayanan Mutasi** | `Loket`, `LoketDesa`, `User` | `Loket`, `LoketDesa`, `Verifikator`, `Persetujuan`, `Penetapan`, `User` | Prioritas Utama |
| **Pelayanan Mutasi WP** | `Loket`, `LoketDesa`, `User` | `Loket`, `LoketDesa`, `Verifikator`, `Persetujuan`, `Penetapan`, `User` | Prioritas Utama |
| **Pelayanan Perubahan Data** | `Loket`, `User` | Seluruh role | Prioritas Utama |
| **Pelayanan Pemecahan** | `Loket`, `User` | Seluruh role | Peta menampilkan batas NOP Induk yang akan dipecah |
| **Pelayanan Penggabungan** | `Loket`, `User` | Seluruh role | Mendukung tampilan bidang NOP terpilih |
| **Pelayanan Keberatan** | `LoketMPP`, `UserWP` | Seluruh role | Memvalidasi NOP yang diajukan keberatan |

---

## 5. Best Practices & Catatan Teknis

1. **Pembersihan String NOP**: Selalu gunakan `.replace(/\D/g, '')` sebelum query ke backend untuk mencegah kegagalan pencocokan akibat tanda titik atau strip (contoh NOP: `35.09.123...`).
2. **Pencegahan Memory Leak**: Selalu gunakan flag `isMounted = false` pada fungsi pembersih `useEffect` agar tidak mengupdate state komponen yang sudah unmounted ketika pengguna berganti NOP secara cepat.
3. **Penanganan Koordinat Kosong**: Komponen `EsriPolygonMap` secara aman menangani polygon `null` dan koordinat 0 tanpa memicu error di browser.
