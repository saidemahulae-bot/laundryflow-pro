import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Page, Img, Reveal, SplitText, Accordion, RollText } from "@wron/kit";

const capabilities = [
  {
    title: "Pesanan",
    body: "Catat cucian masuk, pilih layanan, dan pantau status sampai pesanan selesai.",
    span: "md:col-span-7 md:row-span-2",
    img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1600&q=80",
    alt: "Tampilan dashboard pesanan pada layar laptop",
  },
  { title: "Pelanggan", body: "Simpan data pelanggan dan riwayat pesanan mereka dalam satu daftar.", span: "md:col-span-5" },
  { title: "Layanan", body: "Atur jenis layanan dan harga untuk kiloan, satuan, dan layanan khusus.", span: "md:col-span-5" },
  { title: "Laporan", body: "Lihat pendapatan dan jumlah pesanan untuk mengambil keputusan usaha.", span: "md:col-span-12" },
];

const audiences = [
  { name: "Laundry rumahan", line: "Kelola pesanan harian tanpa buku catatan yang tercecer." },
  { name: "Laundry dengan beberapa karyawan", line: "Bagi tugas dan lihat status pesanan bersama." },
  { name: "Laundry yang ingin berkembang", line: "Pantau keuangan sebelum menambah cabang." },
];

const steps = [
  { title: "Daftar akun", body: "Buat akun dan isi nama usaha laundry Anda." },
  { title: "Tambah layanan", body: "Masukkan jenis layanan dan harga yang Anda berlakukan." },
  { title: "Catat pesanan", body: "Terima cucian dan simpan pesanan pelanggan." },
  { title: "Pantau usaha", body: "Baca laporan pendapatan dan pesanan aktif di dashboard." },
];

const faqs = [
  { q: "Apakah data pesanan tersimpan dengan aman?", a: "Ya, data tersimpan di database dan hanya bisa diakses lewat akun Anda." },
  { q: "Apakah bisa dipakai di smartphone?", a: "Ya, tampilan menyesuaikan layar desktop, tablet, dan smartphone." },
  { q: "Apakah bisa mengelola lebih dari satu usaha?", a: "Silakan hubungi kami untuk kebutuhan pengelolaan lebih dari satu usaha." },
  { q: "Bagaimana cara memulai?", a: "Buat akun, isi data usaha, lalu tambahkan layanan laundry Anda." },
  { q: "Apakah ada biaya berlangganan?", a: "Rincian paket berlangganan akan diumumkan saat tersedia." },
];

export default function Home() {
  return (
    <Page title="Home" description="LaundryFlow Pro adalah sistem manajemen usaha laundry yang menata pesanan, pelanggan, dan keuangan dalam satu alur kerja yang rapi.">
      {/* 1. Pengantar */}
      <section className="max-w-page mx-auto px-5 sm:px-8 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SplitText as="h1" text="Kelola usaha laundry Anda dalam satu sistem yang rapi" className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] text-ink" />
            <p className="mt-8 text-[17px] md:text-lg leading-relaxed text-muted max-w-[52ch]">LaundryFlow Pro membantu pemilik laundry mencatat pesanan, mengelola pelanggan, dan memantau keuangan setiap hari.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/register" className="group inline-flex items-center justify-center bg-primary text-primary-ink rounded-theme px-7 py-4 text-base font-medium transition-colors duration-200 hover:bg-ink active:scale-[0.98] w-full sm:w-auto"><RollText>Mulai gratis</RollText></Link>
              <a href="#cara-kerja" className="group inline-flex items-center justify-center gap-2 px-4 py-4 text-base text-ink">Lihat cara kerja <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" /></a>
            </div>
          </div>
          <Reveal className="lg:col-span-6" delay={0.15}>
            <Img src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80" alt="Pemilik laundry memegang tablet di depan mesin cuci" ratio="4/5" className="rounded-theme overflow-hidden" />
          </Reveal>
        </div>
      </section>

      {/* 2. Kemampuan utama */}
      <section className="bg-surface">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="max-w-[46ch] mb-12">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">Kemampuan utama</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted">Semua yang dibutuhkan untuk menjalankan laundry harian, dalam satu alur kerja.</p>
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <Reveal className={"md:col-span-7 md:row-span-2 rounded-theme overflow-hidden bg-ink text-bg flex flex-col"}>
              <Img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1600&q=80" alt="Tampilan dashboard pesanan pada layar laptop" ratio="3/2" className="rounded-none overflow-hidden" />
              <div className="p-8">
                <h3 className="font-display text-2xl md:text-3xl text-bg">Pesanan</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-bg/80 max-w-[42ch]">Catat cucian masuk, pilih layanan, dan pantau status sampai pesanan selesai.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 rounded-theme bg-bg border border-line p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-ink">Pelanggan</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">Simpan data pelanggan dan riwayat pesanan mereka dalam satu daftar.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Nama", "Telepon", "Riwayat"].map((t) => (
                  <span key={t} className="text-sm text-muted border border-line rounded-theme px-3 py-1">{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-5 rounded-theme bg-bg border border-line p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-ink">Layanan</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">Atur jenis layanan dan harga untuk kiloan, satuan, dan layanan khusus.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Kiloan", "Satuan", "Khusus"].map((t) => (
                  <span key={t} className="text-sm text-muted border border-line rounded-theme px-3 py-1">{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-12 rounded-theme bg-bg border border-line p-8">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <h3 className="font-display text-2xl text-ink md:w-1/3">Laporan</h3>
                <p className="md:w-2/3 text-[17px] leading-relaxed text-muted">Lihat pendapatan dan jumlah pesanan untuk mengambil keputusan usaha.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Untuk siapa */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-5">
            <Img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600&q=80" alt="Karyawan laundry melipat pakaian bersih" ratio="4/5" className="rounded-theme overflow-hidden" />
          </Reveal>
          <div className="md:col-span-7">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">Dibuat untuk pemilik usaha laundry yang ingin bekerja lebih tertata.</h2>
            <div className="mt-10">
              {audiences.map((a, i) => (
                <div key={a.name} className={"grid md:grid-cols-12 gap-2 md:gap-6 items-baseline py-6 border-t border-line" + (i === audiences.length - 1 ? " border-b" : "")}>
                  <span className="md:col-span-5 font-display text-xl md:text-2xl text-ink">{a.name}</span>
                  <span className="md:col-span-7 text-[17px] text-muted">{a.line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Alur kerja */}
      <section id="cara-kerja" className="bg-surface scroll-mt-24">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink mb-12">Alur kerja</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="relative">
                <span className="block font-display text-5xl text-primary leading-none mb-6">{i + 1}</span>
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-16">
            <Img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80" alt="Tangan mengetik data pesanan pada keyboard" ratio="21/9" className="rounded-theme overflow-hidden" />
          </Reveal>
        </div>
      </section>

      {/* 5. Pertanyaan umum */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">Pertanyaan umum</h2>
        </div>
        <div className="md:col-span-8">
          <Accordion items={faqs} />
        </div>
      </section>

      {/* 6. Ajakan akhir */}
      <section className="max-w-page mx-auto px-5 sm:px-8 pb-24">
        <Reveal className="bg-primary text-primary-ink rounded-theme p-10 md:p-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">Mulai kelola laundry Anda hari ini.</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-primary-ink/80 max-w-[48ch]">Buat akun LaundryFlow Pro dan catat pesanan pertama Anda.</p>
          </div>
          <div className="md:col-span-5 md:justify-self-end w-full md:w-auto">
            <Link to="/register" className="group inline-flex items-center justify-center bg-bg text-ink rounded-theme px-7 py-4 text-base font-medium transition-colors duration-200 hover:bg-ink hover:text-bg active:scale-[0.98] w-full sm:w-auto"><RollText>Daftar sekarang</RollText></Link>
          </div>
        </Reveal>
      </section>
    </Page>
  );
}
