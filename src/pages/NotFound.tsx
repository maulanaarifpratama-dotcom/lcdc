import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <section className="page-hero">
      <div className="container hero-grid">
        <div className="reveal">
          <p className="eyebrow">404</p>
          <h1>Halaman tidak ditemukan</h1>
          <p className="lead">Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
          <div className="cta-row">
            <Link className="btn" to="/">
              Kembali ke Beranda <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
