import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Page, Img, Reveal, RollText } from "@wron/kit";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState({ name: "", email: "", body: "" });
  const [msgSent, setMsgSent] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => navigate("/dashboard"), 700);
  };

  const onMsg = (e) => {
    e.preventDefault();
    setMsgSent(true);
  };

  const field = "w-full bg-surface border border-line rounded-[10px] px-4 py-3 text-ink text-base placeholder:text-muted/70 focus-visible:outline-2 outline-primary transition-colors duration-200";

  return (
    <Page title="Masuk" description="Masuk ke LaundryFlow Pro dengan email dan kata sandi akun Anda untuk membuka dashboard usaha laundry.">
      {/* 1. Masuk akun */}
      <section className="max-w-page mx-auto px-5 sm:px-8 pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] text-ink">Masuk ke LaundryFlow Pro.</h1>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-muted max-w-[46ch]">Gunakan email dan kata sandi akun Anda untuk membuka dashboard usaha.</p>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Bahasa antarmuka: Indonesia
            </div>
          </div>

          <Reveal delay={0.1} className="md:col-start-7 md:col-span-6">
            <form onSubmit={onLogin} className="bg-surface border border-line rounded-[14px] p-6 md:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="nama@usaha.com" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">Kata sandi</label>
                  <input id="password" type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={field} placeholder="••••••••" />
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
                <button type="submit" className="group inline-flex items-center justify-center gap-2 bg-primary text-white rounded-[10px] px-7 py-4 text-base font-medium transition-colors duration-150 hover:bg-ink active:scale-[0.98] w-full sm:w-auto focus-visible:outline-2 outline-primary">
                  <RollText>{sent ? "Membuka dashboard…" : "Masuk ke akun"}</RollText>
                  <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
                </button>
                <Link to="/register" className="inline-flex items-center justify-center gap-2 px-4 py-3 text-base text-ink hover:text-primary transition-colors duration-150">
                  Atur ulang kata sandi
                </Link>
              </div>

              <p className="mt-6 text-sm text-muted leading-relaxed">Belum punya akun? <Link to="/register" className="text-primary hover:text-ink transition-colors duration-150">Buat akun</Link></p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 2. Belum punya akun */}
      <section className="bg-surface">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">Baru mengenal LaundryFlow Pro.</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-muted max-w-[52ch]">Buat akun pemilik laundry dan mulai catat pesanan pertama Anda hari ini.</p>
            <div className="mt-8">
              <Link to="/register" className="group inline-flex items-center justify-center gap-2 bg-primary text-white rounded-[10px] px-7 py-4 text-base font-medium transition-colors duration-150 hover:bg-ink active:scale-[0.98] w-full sm:w-auto focus-visible:outline-2 outline-primary">
                <RollText>Buat akun</RollText>
                <ArrowUpRight size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <Reveal delay={0.1}>
            <Img src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80" alt="Pemilik laundry tersenyum di depan rak cucian" ratio="3/2" className="rounded-[14px] overflow-hidden" />
          </Reveal>
        </div>
      </section>

      {/* 3. Bantuan masuk */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">Kendala saat masuk.</h2>
            <p className="mt-5 text-[17px] md:text-lg leading-relaxed text-muted max-w-[54ch]">Kirim pesan kepada kami dan kami akan membantu proses masuk akun Anda.</p>

            <form onSubmit={onMsg} className="mt-8 space-y-5">
              <div>
                <label htmlFor="mname" className="block text-sm font-medium text-ink mb-2">Nama</label>
                <input id="mname" type="text" required value={msg.name} onChange={(e) => setMsg({ ...msg, name: e.target.value })} className={field} placeholder="Nama Anda" />
              </div>
              <div>
                <label htmlFor="memail" className="block text-sm font-medium text-ink mb-2">Email</label>
                <input id="memail" type="email" required value={msg.email} onChange={(e) => setMsg({ ...msg, email: e.target.value })} className={field} placeholder="nama@usaha.com" />
              </div>
              <div>
                <label htmlFor="mbody" className="block text-sm font-medium text-ink mb-2">Pesan</label>
                <textarea id="mbody" rows={5} required value={msg.body} onChange={(e) => setMsg({ ...msg, body: e.target.value })} className={field + " resize-y"} placeholder="Ceritakan kendala Anda" />
              </div>
              <button type="submit" className="group inline-flex items-center justify-center gap-2 bg-primary text-white rounded-[10px] px-7 py-4 text-base font-medium transition-colors duration-150 hover:bg-ink active:scale-[0.98] w-full sm:w-auto focus-visible:outline-2 outline-primary">
                <RollText>{msgSent ? "Pesan terkirim" : "Kirim pesan"}</RollText>
                <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
              </button>
              {msgSent && <p className="text-base text-ink" role="status">Message us and we will get back to you</p>}
            </form>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-9">
            <div className="border-t border-line pt-6">
              <p className="text-sm uppercase tracking-[0.14em] text-muted">Bantuan masuk</p>
              <p className="mt-4 text-[17px] leading-relaxed text-muted max-w-[40ch]">Tim kami membantu proses masuk akun Anda. Sertakan email akun dan singkat kendala yang Anda hadapi.</p>
            </div>
            <div className="mt-8 border-t border-line pt-6 space-y-4">
              <div>
                <p className="text-sm text-muted">Fitur aplikasi</p>
                <p className="mt-1 text-base text-ink">Autentikasi, dashboard, CRUD pesanan, pelanggan, layanan, laporan, dan pengaturan usaha.</p>
              </div>
              <div>
                <p className="text-sm text-muted">Dibuat untuk</p>
                <p className="mt-1 text-base text-ink">Pemilik usaha laundry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
