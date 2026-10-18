
import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  Wallet,
  Settings,
  Search,
  Bell,
  Plus,
  Menu,
  X,
  Clock,
  CheckCircle2,
  TrendingUp,
  Shirt
} from "lucide-react";

const initialOrders = [
  { id: "LF-1001", customer: "Andi Saputra", service: "Cuci Setrika", weight: 4, total: 40000, status: "Diproses", payment: "Lunas" },
  { id: "LF-1002", customer: "Siti Rahma", service: "Cuci Kering", weight: 3, total: 21000, status: "Siap diambil", payment: "Lunas" },
  { id: "LF-1003", customer: "Budi Santoso", service: "Laundry Express", weight: 2, total: 30000, status: "Diproses", payment: "Belum lunas" },
  { id: "LF-1004", customer: "Maya Putri", service: "Setrika", weight: 5, total: 30000, status: "Selesai", payment: "Lunas" }
];

const money = value =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [page, setPage] = useState("Dashboard");
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [customer, setCustomer] = useState("");
  const [weight, setWeight] = useState("3");
  const [service, setService] = useState("Cuci Setrika");
  const [notice, setNotice] = useState("");

  const services = {
    "Cuci Kering": 7000,
    "Cuci Setrika": 10000,
    "Setrika": 6000,
    "Laundry Express": 15000
  };

  const filtered = orders.filter(order =>
    `${order.id} ${order.customer} ${order.service}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const totalRevenue = orders
    .filter(order => order.payment === "Lunas")
    .reduce((sum, order) => sum + order.total, 0);

  function addOrder(event) {
    event.preventDefault();

    if (!customer.trim() || Number(weight) <= 0) {
      setNotice("Isi nama pelanggan dan berat cucian dengan benar.");
      return;
    }

    const order = {
      id: `LF-${Date.now().toString().slice(-6)}`,
      customer: customer.trim(),
      service,
      weight: Number(weight),
      total: Number(weight) * services[service],
      status: "Diproses",
      payment: "Belum lunas"
    };

    setOrders(previous => [order, ...previous]);
    setCustomer("");
    setWeight("3");
    setShowForm(false);
    setPage("Pesanan");
    setNotice("Pesanan berhasil ditambahkan.");
  }

  function updateStatus(id, status) {
    setOrders(previous =>
      previous.map(order =>
        order.id === id ? { ...order, status } : order
      )
    );
  }

  const navigation = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Pesanan", icon: ShoppingBag },
    { name: "Pelanggan", icon: Users },
    { name: "Layanan", icon: Package },
    { name: "Keuangan", icon: Wallet },
    { name: "Pengaturan", icon: Settings }
  ];

  return (
    <div className="app-shell">
      {mobileMenu && (
        <button className="mobile-backdrop" onClick={() => setMobileMenu(false)} aria-label="Tutup menu" />
      )}

      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-icon"><Shirt size={25} /></div>
          <div><strong>LaundryFlow</strong><small>PRO MANAGEMENT</small></div>
          <button className="close-menu" onClick={() => setMobileMenu(false)}><X /></button>
        </div>

        <div className="workspace-label">WORKSPACE</div>
        <div className="workspace">
          <div className="workspace-avatar">L</div>
          <div><strong>Laundry Anda</strong><small>Administrator</small></div>
        </div>

        <div className="nav-label">MENU UTAMA</div>
        <nav className="nav-list">
          {navigation.map(item => {
            const Icon = item.icon;
            return (
              <button key={item.name}
                className={`nav-item ${page === item.name ? "active" : ""}`}
                onClick={() => { setPage(item.name); setMobileMenu(false); }}>
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="support-card">
            <div className="support-icon">✦</div>
            <strong>Butuh bantuan?</strong>
            <p>Kelola laundry dengan lebih mudah setiap hari.</p>
          </div>
          <div className="profile">
            <div className="profile-avatar">A</div>
            <div><strong>Admin Laundry</strong><small>Pemilik usaha</small></div>
            <Settings size={17} />
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button className="menu-toggle" onClick={() => setMobileMenu(true)}><Menu /></button>
            <div className="breadcrumb">Workspace <span>/</span> <strong>{page}</strong></div>
          </div>
          <div className="topbar-actions">
            <span className="today-label">Manajemen Laundry</span>
            <button className="notification-button" aria-label="Notifikasi"><Bell size={19} /><i /></button>
            <div className="top-avatar">A</div>
          </div>
        </header>

        <section className="page-content">
          {notice && (
            <div className="notice">
              <span>{notice}</span>
              <button onClick={() => setNotice("")}><X size={16} /></button>
            </div>
          )}

          <div className="page-heading">
            <div>
              <div className="eyebrow">LAUNDRY MANAGEMENT SYSTEM</div>
              <h1>{page === "Dashboard" ? "Ringkasan Bisnis" : page}</h1>
              <p>Pantau operasional laundry Anda dalam satu tempat.</p>
            </div>
            <button className="primary-button" onClick={() => setShowForm(true)}>
              <Plus size={18} /> Tambah Pesanan
            </button>
          </div>

          {page === "Dashboard" && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-top"><span>Total pembayaran lunas</span><div className="stat-icon teal"><Wallet /></div></div>
                  <div className="stat-value">{money(totalRevenue)}</div>
                  <div className="stat-foot"><TrendingUp size={15} /> Data pesanan contoh</div>
                </div>
                <div className="stat-card">
                  <div className="stat-top"><span>Total pesanan</span><div className="stat-icon purple"><ShoppingBag /></div></div>
                  <div className="stat-value">{orders.length}</div>
                  <div className="stat-foot">Seluruh pesanan tercatat</div>
                </div>
                <div className="stat-card">
                  <div className="stat-top"><span>Sedang diproses</span><div className="stat-icon orange"><Clock /></div></div>
                  <div className="stat-value">{orders.filter(order => order.status === "Diproses").length}</div>
                  <div className="stat-foot">Pesanan aktif</div>
                </div>
                <div className="stat-card">
                  <div className="stat-top"><span>Siap diambil</span><div className="stat-icon green"><CheckCircle2 /></div></div>
                  <div className="stat-value">{orders.filter(order => order.status === "Siap diambil").length}</div>
                  <div className="stat-foot">Menunggu pelanggan</div>
                </div>
              </div>

              <div className="content-grid">
                <section className="panel orders-panel">
                  <div className="panel-heading">
                    <div><h2>Pesanan Terbaru</h2><p>Ringkasan pesanan laundry</p></div>
                    <button className="text-button" onClick={() => setPage("Pesanan")}>Lihat semua →</button>
                  </div>
                  {renderOrders(filtered.slice(0, 4), updateStatus)}
                </section>

                <section className="panel quick-panel">
                  <div className="panel-heading"><div><h2>Aksi Cepat</h2><p>Kelola pekerjaan harian</p></div></div>
                  <button className="quick-action" onClick={() => setShowForm(true)}><span className="quick-icon teal"><Plus /></span><span><strong>Pesanan baru</strong><small>Catat cucian pelanggan</small></span><span className="quick-arrow">›</span></button>
                  <button className="quick-action" onClick={() => setPage("Pelanggan")}><span className="quick-icon purple"><Users /></span><span><strong>Data pelanggan</strong><small>Lihat daftar pelanggan</small></span><span className="quick-arrow">›</span></button>
                  <button className="quick-action" onClick={() => setPage("Keuangan")}><span className="quick-icon green"><Wallet /></span><span><strong>Laporan keuangan</strong><small>Pantau pembayaran</small></span><span className="quick-arrow">›</span></button>
                  <div className="tip-box"><strong>✦ Tips hari ini</strong><p>Perbarui status cucian agar pelanggan mengetahui kapan pesanan siap diambil.</p></div>
                </section>
              </div>
            </>
          )}

          {page === "Pesanan" && (
            <section className="panel">
              <div className="panel-heading">
                <div><h2>Semua Pesanan</h2><p>Kelola dan perbarui status cucian</p></div>
                <div className="search-box"><Search size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari pesanan..." /></div>
              </div>
              {renderOrders(filtered, updateStatus)}
            </section>
          )}

          {page === "Pelanggan" && (
            <section className="panel">
              <div className="panel-heading"><div><h2>Daftar Pelanggan</h2><p>Pelanggan dari transaksi yang tercatat</p></div></div>
              <div className="table-wrap"><table><thead><tr><th>Nama pelanggan</th><th>Nomor pesanan</th><th>Layanan</th><th>Total</th></tr></thead><tbody>
                {orders.map(order => <tr key={order.id}><td><strong>{order.customer}</strong></td><td>{order.id}</td><td>{order.service}</td><td>{money(order.total)}</td></tr>)}
              </tbody></table></div>
            </section>
          )}

          {page === "Layanan" && (
            <section className="panel">
              <div className="panel-heading"><div><h2>Daftar Layanan</h2><p>Harga layanan yang digunakan pada pesanan baru</p></div></div>
              <div className="service-grid">{Object.entries(services).map(([name, price]) => <div className="service-card" key={name}><div className="service-symbol"><Shirt /></div><strong>{name}</strong><span>{money(price)} <small>/ kg</small></span></div>)}</div>
            </section>
          )}

          {page === "Keuangan" && (
            <section className="panel">
              <div className="panel-heading"><div><h2>Ringkasan Pembayaran</h2><p>Pantau pembayaran dan tagihan</p></div></div>
              <div className="finance-summary">
                <div><span>Pembayaran lunas</span><strong>{money(totalRevenue)}</strong></div>
                <div><span>Belum lunas</span><strong>{money(orders.filter(order => order.payment !== "Lunas").reduce((sum, order) => sum + order.total, 0))}</strong></div>
              </div>
              {renderOrders(filtered, updateStatus)}
            </section>
          )}

          {page === "Pengaturan" && (
            <section className="panel settings-panel">
              <div className="panel-heading"><div><h2>Pengaturan Usaha</h2><p>Informasi profil usaha Anda</p></div></div>
              <label>Nama usaha<input className="form-input" defaultValue="Laundry Anda" /></label>
              <label>Nomor WhatsApp<input className="form-input" placeholder="Masukkan nomor WhatsApp usaha" /></label>
              <label>Alamat usaha<textarea className="form-input" placeholder="Masukkan alamat usaha" /></label>
              <button className="primary-button" onClick={() => setNotice("Pengaturan contoh berhasil diperbarui untuk sesi ini.")}>Simpan pengaturan</button>
              <p className="helper-text">Versi ini belum menyimpan pengaturan ke database.</p>
            </section>
          )}
        </section>
      </main>

      {showForm && (
        <div className="modal-backdrop" onClick={() => setShowForm(false)}>
          <section className="modal" onClick={event => event.stopPropagation()}>
            <div className="modal-heading"><div><h2>Tambah Pesanan</h2><p>Masukkan detail cucian pelanggan.</p></div><button onClick={() => setShowForm(false)}><X /></button></div>
            <form onSubmit={addOrder}>
              <label>Nama pelanggan<input className="form-input" value={customer} onChange={event => setCustomer(event.target.value)} placeholder="Contoh: Budi Santoso" required /></label>
              <label>Jenis layanan<select className="form-input" value={service} onChange={event => setService(event.target.value)}>{Object.entries(services).map(([name, price]) => <option key={name} value={name}>{name} — {money(price)}/kg</option>)}</select></label>
              <label>Berat cucian (kg)<input className="form-input" type="number" min="0.1" step="0.1" value={weight} onChange={event => setWeight(event.target.value)} required /></label>
              <div className="price-preview"><span>Estimasi total</span><strong>{money(Number(weight || 0) * services[service])}</strong></div>
              <button className="primary-button full-button" type="submit">Simpan Pesanan</button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

function renderOrders(orders, updateStatus) {
  if (!orders.length) return <div className="empty-state">Belum ada pesanan yang cocok.</div>;

  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>No. Pesanan</th><th>Pelanggan</th><th>Layanan</th><th>Total</th><th>Status</th><th>Pembayaran</th></tr></thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td><strong className="order-id">{order.id}</strong></td>
              <td>{order.customer}<small className="cell-subtitle">{order.weight} kg</small></td>
              <td>{order.service}</td>
              <td><strong>{money(order.total)}</strong></td>
              <td><select className={`status-select ${order.status === "Siap diambil" ? "status-ready" : order.status === "Selesai" ? "status-done" : "status-process"}`} value={order.status} onChange={event => updateStatus(order.id, event.target.value)}><option>Diproses</option><option>Siap diambil</option><option>Selesai</option></select></td>
              <td><span className={`payment-badge ${order.payment === "Lunas" ? "paid" : "unpaid"}`}>{order.payment}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
