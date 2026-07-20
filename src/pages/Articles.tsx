import { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ArticleGrid } from '../components/ArticleGrid';
import { articles } from '../data';

export function Articles() {
  const [cat, setCat] = useState('All');
  const cats = useMemo(() => ['All', ...Array.from(new Set(articles.map((a) => a.category)))], []);
  const filtered = cat === 'All' ? articles : articles.filter((a) => a.category === cat);
  return (
    <>
      <SEO title="Articles Little Champ Daycare" description="Artikel daycare dan tumbuh kembang untuk orang tua." />
      <PageHero eyebrow="Articles" title="Artikel Lengkap untuk Keputusan Parenting yang Lebih Tenang" desc="Baca panduan seputar daycare, adaptasi, laporan harian, KPSP, Denver II, dan tumbuh kembang anak." />
      <section className="section">
        <div className="container">
          <div className="filter-row" role="tablist" aria-label="Filter artikel berdasarkan kategori">
            {cats.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                className={cat === c ? 'active' : ''}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <ArticleGrid items={filtered} />
        </div>
      </section>
    </>
  );
}
