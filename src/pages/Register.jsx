import { Link } from "react-router";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Page, Img, Reveal, RollText } from "@wron/kit";

const benefits = [
  { title: "Dashboard usaha", line: "Lihat pesanan aktif dan ringkasan keuangan dalam satu layar." },
  { title: "Data pelanggan", line: "Simpan riwayat pesanan setiap pelanggan dengan rapi." },
  { title: "Pengaturan usaha", line: "Atur nama usaha, layanan, dan harga kapan saja." },
];

function Field({ id, label, type = "text", placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-2">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full bg-surface border border-line rounded-theme px-4 py-3 text-ink placeholder:text-muted/70 focus-visible:outline-2 outline-primary transition-colors duration-200"
      />
    </div>
  );
}

export default function Register() {
  const [registered, setRegistered] = useState(false);
  const [messaged, setMessaged] = useState(false);

  return (
    <Page title="Registrasi" description="Buat akun pemilik laundry dan data usaha Anda untuk mulai memakai LaundryFlow Pro.">
      <section className="max-w-page mx-auto px-5 sm:px-8 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-0.03em] text-ink">Buat akun pemilik laundry.</h1>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-muted max-w-[46ch]">Isi data diri dan data usaha Anda untuk mulai memakai LaundryFlow Pro.</p>
            <ul className="mt-10 space-y-4">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3 border-t border-line pt-4">
                  <span className="mt-1 shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={13} className="text-primary" />
                  </span>
                  <span>
                    <span className="block font-medium text-ink">{b.title}</span>
                    <span className="block text-[15px] leading-relaxed text-muted mt-1">{b.line}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="lg:col-start-7 lg:col-span-6" delay={0.15}>
            <form
              onSubmit={(e) => { e.preventDefault(); setRegistered(true); }}
              className="bg-surface border border-line rounded-theme p-8 md:p-10"
            >
              <h2 className="font-display text-2xl md:text-3xl text-ink tracking-[-0.02em]">Daftar</h2>
              <div className="mt-8 space-y-5">
                <Field id="nama" label="Nama lengkap" placeholder="Nama Anda" autoComplete="name" />
                <Field id="email" label="Email" type="email" placeholder="nama@email.com" autoComplete="email" />
                <Field id="sandi" label="Kata sandi" type="password" placeholder="Minimal 8 karakter" autoComplete="new-password" />
                <Field id="usaha" label="Nama usaha laundry" placeholder="Contoh: Laundry Bersih Kilat" autoComplete="organization" />
              </div>
              <button type="submit" className="group mt-8 w-full inline-flex items-center justify-center bg-primary text-primary-ink rounded-theme px-7 py-4 text-base font-medium transition-colors duration-200 hover:bg-ink active:scale-[0.98]">
                <RollText>Buat akun</RollText>
              </button>
              {registered && (
                <p role="status" className="mt-4 text-[15px] text-ink">Terima kasih. Data Anda sudah kami terima.</p>
              )}
              <p className="mt-6 text-[15px] text-muted">
                Sudah punya akun?{" "}
                <Link to="/login" className="group inline-flex items-center gap-1 text-primary font-medium transition-colors duration-200 hover:text-ink">
                  Masuk ke akun <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">Yang Anda dapat</h2>
            <div className="mt-10">
              {benefits.map((b, i) => (
                <div key={b.title} className={"grid md:grid-cols-12 gap-2 md:gap-6 items-baseline py-6 md:py-8 border-t border-line" + (i === benefits.length - 1 ? " border-b" : "")}>
                  <span className="md:col-span-5 font-display text-2xl md:text-3xl text-ink">{b.title}</span>
                  <span className="md:col-span-7 text-muted">{b.line}</span>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <Img
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80"
              alt="Meja kerja laundry dengan timbangan dan deterjen"
              ratio="4/5"
              className="rounded-theme overflow-hidden"
            />
          </Reveal>
        </div>
      </section>

      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">Ada pertanyaan sebelum mendaftar.</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-muted max-w-[46ch]">Tulis kebutuhan usaha laundry Anda dan kami akan membantu Anda memulai.</p>
            <ul className="mt-10 space-y-4">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3 border-t border-line pt-4">
                  <span className="mt-1 shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={13} className="text-primary" />
                  </span>
                  <span>
                    <span className="block font-medium text-ink">{b.title}</span>
                    <span className="block text-[15px] leading-relaxed text-muted mt-1">{b.line}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="lg:col-start-7 lg:col-span-6" delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setMessaged(true); }}
              className="border border-line rounded-theme p-8 md:p-10"
            >
              <div className="space-y-5">
                <Field id="pesan-nama" label="Nama" placeholder="Nama Anda" autoComplete="name" />
                <Field id="pesan-email" label="Email" type="email" placeholder="nama@email.com" autoComplete="email" />
                <div>
                  <label htmlFor="pesan-isi" className="block text-sm font-medium text-ink mb-2">Pesan</label>
                  <textarea
                    id="pesan-isi"
                    name="pesan-isi"
                    required
                    rows={5}
                    placeholder="Ceritakan kebutuhan usaha Anda"
                    className="w-full bg-surface border border-line rounded-theme px-4 py-3 text-ink placeholder:text-muted/70 focus-visible:outline-2 outline-primary transition-colors duration-200"
                  />
                </div>
              </div>
              <button type="submit" className="group mt-8 w-full inline-flex items-center justify-center bg-primary text-primary-ink rounded-theme px-7 py-4 text-base font-medium transition-colors duration-200 hover:bg-ink active:scale-[0.98]">
                <RollText>Kirim pesan</RollText>
              </button>
              {messaged && (
                <p role="status" className="mt-4 text-[15px] text-ink">Terima kasih. Pesan Anda sudah kami terima.</p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
