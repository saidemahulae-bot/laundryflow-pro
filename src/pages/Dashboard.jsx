import { Link } from "react-router";
import { ArrowUpRight, Package, Users, Wallet, ClipboardList, Settings, LayoutDashboard, BarChart3 } from "lucide-react";
import { Page, Reveal, RollText, cn } from "@wron/kit";

const stats = [
  { label: "Pesanan aktif", value: "18", note: "Lihat daftar pesanan", to: "#pesanan", icon: Package },
  { label: "Pelanggan", value: "124", note: "Buka data pelanggan", to: "#pendapatan", icon: Users },
  { label: "Pendapatan", value: "Rp 4,2 jt", note: "Buka laporan keuangan", to: "#pendapatan", icon: Wallet },
];

const orders = [
  { id: "ORD-1042", name: "Siti Rahma", service: "Cuci kering 3 kg", status: "Pesanan baru", tone: "bg-primary/10 text-primary" },
  { id: "ORD-1041", name: "Budi Santoso", service: "Cuci setrika 5 kg", status: "Sedang diproses", tone: "bg-accent/15 text-accent" },
  { id: "ORD-1040", name: "Andi Pratama", service: "Cuci kering 2 kg", status: "Siap diambil", tone: "bg-ink/10 text-ink" },
  { id: "ORD-1039", name: "Dewi Lestari", service: "Cuci setrika 4 kg", status: "Selesai", tone: "bg-surface text-muted" },
  { id: "ORD-1038", name: "Rina Marlina", service: "Cuci kering 6 kg", status: "Sedang diproses", tone: "bg-accent/15 text-accent" },
];

const statusPanel = [
  { label: "Pesanan baru", desc: "Cucian masuk yang belum diproses.", count: 4, dot: "bg-primary" },
  { label: "Sedang diproses", desc: "Cucian yang sedang dicuci atau dikeringkan.", count: 7, dot: "bg-accent" },
  { label: "Siap diambil", desc: "Cucian selesai dan menunggu pelanggan.", count: 5, dot: "bg-ink" },
  { label: "Selesai", desc: "Pesanan yang sudah diambil pelanggan.", count: 2, dot: "bg-muted" },
];

const revenue = [
  { day: "Sen", value: 62 },
  { day: "Sel", value: 78 },
  { day: "Rab", value: 54 },
  { day: "Kam", value: 88 },
  { day: "Jum", value: 96 },
  { day: "Sab", value: 100 },
  { day: "Min", value: 44 },
];

const nav = [
  { label: "Ringkasan", to: "/dashboard", icon: LayoutDashboard, active: true },
  { label: "Pesanan", to: "#pesanan", icon: ClipboardList },
  { label: "Pelanggan", to: "#pendapatan", icon: Users },
  { label: "Laporan", to: "#pendapatan", icon: BarChart3 },
  { label: "Pengaturan", to: "#", icon: Settings },
];

export default function Dashboard() {
  return (
    <Page title="Dashboard" description="Ringkasan usaha LaundryFlow Pro: statistik, grafik pendapatan, dan pesanan aktif hari ini.">
      <div className="max-w-page mx-auto px-5 sm:px-8 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <nav className="bg-ink text-bg rounded-theme p-5 md:p-6 lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.14em] text-bg/60 mb-5">Menu LaundryFlow Pro</p>
              <ul className="space-y-1">
                {nav.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.to}
                      className={cn(
                        "flex items-center gap-3 rounded-theme px-3 py-3 text-sm transition-colors duration-200",
                        n.active ? "bg-primary text-primary-ink font-medium" : "text-bg/80 hover:bg-bg/10"
                      )}
                    >
                      <n.icon size={18} />
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9 order-1 lg:order-2 space-y-16 md:space-y-20">
            {/* 1. Ringkasan usaha */}
            <section id="ringkasan">
              <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
                <div className="md:col-span-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted mb-4">Ringkasan usaha</p>
                  <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em] text-ink pt-2">
                    Selamat datang kembali.
                  </h1>
                  <p className="mt-5 text-[17px] md:text-lg leading-relaxed text-muted max-w-[46ch]">
                    Pantau pesanan, pelanggan, dan keuangan usaha laundry Anda hari ini.
                  </p>
                </div>
                <div className="md:col-span-6 grid sm:grid-cols-3 gap-4">
                  {stats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 0.08}>
                      <a
                        href={s.to}
                        className="group block bg-surface border border-line rounded-theme p-5 h-full transition-colors duration-200 hover:border-primary"
                      >
                        <s.icon size={20} className="text-primary mb-4" />
                        <p className="text-xs uppercase tracking-[0.12em] text-muted">{s.label}</p>
                        <p className="mt-2 font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-none text-ink whitespace-nowrap">{s.value}</p>
                        <p className="mt-4 inline-flex items-center gap-1 text-sm text-ink">
                          {s.note}
                          <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </p>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. Pesanan hari ini */}
            <section id="pesanan">
              <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
                <div className="lg:col-span-8">
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.02em] text-ink mb-6">
                    Pesanan hari ini
                  </h2>
                  <div className="border border-line rounded-theme overflow-hidden">
                    <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-surface text-xs uppercase tracking-[0.1em] text-muted">
                      <span className="col-span-2">ID</span>
                      <span className="col-span-3">Pelanggan</span>
                      <span className="col-span-4">Layanan</span>
                      <span className="col-span-3 text-right">Status</span>
                    </div>
                    {orders.map((o) => (
                      <div
                        key={o.id}
                        className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 px-5 py-4 border-t border-line first:border-t-0 md:first:border-t-0 hover:bg-surface transition-colors duration-200"
                      >
                        <span className="md:col-span-2 text-sm text-muted">{o.id}</span>
                        <span className="md:col-span-3 text-ink font-medium">{o.name}</span>
                        <span className="md:col-span-4 text-muted">{o.service}</span>
                        <span className="md:col-span-3 md:text-right mt-1 md:mt-0">
                          <span className={cn("inline-block text-xs px-3 py-1 rounded-full", o.tone)}>{o.status}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl text-ink mb-4">Status cucian</h3>
                  <div className="space-y-3">
                    {statusPanel.map((s) => (
                      <div key={s.label} className="border border-line rounded-theme p-4 bg-bg">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className={cn("h-2 w-2 rounded-full", s.dot)} />
                            <span className="text-sm font-medium text-ink">{s.label}</span>
                          </div>
                          <span className="font-display text-xl text-ink">{s.count}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Pendapatan */}
            <section id="pendapatan">
              <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
                <div className="lg:col-span-8">
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.02em] text-ink mb-2">
                    Grafik pendapatan
                  </h2>
                  <p className="text-muted mb-6">Perbandingan pendapatan harian dalam satu tampilan.</p>
                  <div className="border border-line rounded-theme p-6 md:p-8">
                    <div className="flex items-end gap-3 md:gap-5 h-56">
                      {revenue.map((r) => (
                        <div key={r.day} className="flex-1 flex flex-col items-center gap-3 h-full">
                          <div className="w-full flex-1 flex items-end min-h-0">
                            <div
                              className="w-full bg-primary rounded-t-[6px] transition-all duration-200 hover:bg-accent"
                              style={{ height: `${r.value}%` }}
                              title={`${r.day}: ${r.value}`}
                            />
                          </div>
                          <span className="text-xs text-muted">{r.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <div className="border border-line rounded-theme p-6 bg-surface">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted">Pesanan selesai</p>
                    <p className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-none text-ink">42</p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">Jumlah pesanan yang sudah diambil pelanggan.</p>
                  </div>
                  <div className="border border-line rounded-theme p-6 bg-surface">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted">Pelanggan aktif</p>
                    <p className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-none text-ink">124</p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">Pelanggan yang pernah membuat pesanan.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Tindakan cepat */}
            <Reveal className="bg-ink text-bg rounded-theme p-10 md:p-14 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.02em] text-bg">
                  Catat pesanan baru sekarang.
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-bg/70 max-w-[46ch]">
                  Tambahkan cucian pelanggan dan pilih layanan yang dipakai.
                </p>
              </div>
              <div className="md:col-span-5 md:justify-self-end flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  to="/dashboard"
                  className="group inline-flex items-center justify-center bg-primary text-primary-ink rounded-theme px-7 py-4 text-base font-medium transition-colors duration-200 hover:bg-bg hover:text-ink active:scale-[0.98] w-full sm:w-auto"
                >
                  <RollText>Tambah pesanan</RollText>
                </Link>
                <Link
                  to="/dashboard"
                  className="group inline-flex items-center justify-center gap-2 border border-bg/30 rounded-theme px-7 py-4 text-base text-bg transition-colors duration-200 hover:bg-bg/10 active:scale-[0.98] w-full sm:w-auto"
                >
                  Kelola layanan
                  <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Page>
  );
}
