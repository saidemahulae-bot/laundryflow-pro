import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { SmartHeader, Sheet, useDisclosure, CookieSettingsLink } from "@wron/kit";

const NAV = [{ to: "/login", label: "Login" }, { to: "/register", label: "Register" }, { to: "/dashboard", label: "Dashboard" }];
const NAME = "LaundryFlow Pro";
const YEAR = new Date().getFullYear();

export default function Layout() {
  const menu = useDisclosure();
  const location = useLocation();
  useEffect(() => { menu.onClose(); }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  const link = ({ isActive }) => "text-sm transition-colors duration-200 hover:text-ink " + (isActive ? "text-ink" : "text-muted");
  return (
    <div className="min-h-screen bg-bg text-ink font-body antialiased">
      <SmartHeader className="transition-colors duration-300">
        <div className="max-w-page mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-6">
          <Link to="/" className="font-display text-xl md:text-2xl tracking-[-0.02em] text-ink">{NAME}</Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} className={link}>{n.label}</NavLink>)}
            <Link to="/dashboard" className="inline-flex items-center bg-primary text-primary-ink rounded-theme px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-ink active:scale-[0.98]">Dashboard</Link>
          </nav>
          <button type="button" onClick={menu.onOpen} className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-theme text-ink" aria-label="Open menu"><Menu size={22} /></button>
        </div>
      </SmartHeader>
      <Sheet open={menu.open} onClose={menu.onClose} side="right" panelClassName="bg-bg text-ink w-[86vw] max-w-sm p-6">
        <div className="flex items-center justify-between mb-10">
          <span className="font-display text-xl">{NAME}</span>
          <button type="button" onClick={menu.onClose} className="inline-flex items-center justify-center h-11 w-11 rounded-theme" aria-label="Close menu"><X size={22} /></button>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Menu">
          <NavLink to="/" className="font-display text-3xl py-3 text-ink">Home</NavLink>
          {NAV.map((n) => <NavLink key={n.to} to={n.to} className="font-display text-3xl py-3 text-ink">{n.label}</NavLink>)}
        </nav>
      </Sheet>
      <Outlet />
      <footer className="border-t border-line mt-10">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-ink">{NAME}</p>
            <p className="mt-3 text-muted max-w-[40ch]">Sistem manajemen usaha laundry lengkap: pesanan, pelanggan, keuangan, dan dashboard real-time.</p>
          </div>
          <nav className="md:col-span-3 flex flex-col gap-2" aria-label="Footer">
            <Link to="/" className="text-muted hover:text-ink transition-colors duration-200">Home</Link>
            {NAV.map((n) => <Link key={n.to} to={n.to} className="text-muted hover:text-ink transition-colors duration-200">{n.label}</Link>)}
          </nav>
          <div className="md:col-span-4 md:text-right text-sm text-muted flex flex-col gap-2 md:items-end">
            <span>{YEAR} {NAME}</span>
            <CookieSettingsLink className="hover:text-ink transition-colors duration-200">Cookie settings</CookieSettingsLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
