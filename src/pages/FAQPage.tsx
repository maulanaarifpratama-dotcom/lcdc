import { useState } from 'react';
import { Search } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { FaqList } from '../components/FaqList';
import { faqGroups, type FaqTuple } from '../data';
import { wa } from '../lib/wa';

type FaqGroup = {
  category: string;
  items: FaqTuple[];
};

export function FAQPage() {
  const groups = faqGroups as FaqGroup[];
  const [active, setActive] = useState(groups[0]?.category ?? '');
  const [query, setQuery] = useState('');

  const normalized = query.trim().toLowerCase();
  const activeGroup = groups.find((g) => g.category === active) ?? groups[0];

  const filtered = normalized
    ? groups.flatMap((g) =>
        g.items.filter(([q, a]) => `${q} ${a}`.toLowerCase().includes(normalized))
      )
    : activeGroup.items;

  function handleCategoryClick(category: string) {
    setActive(category);
    setQuery('');
  }

  return (
    <>
      <SEO title="FAQ Little Champ Daycare" description="Pertanyaan yang sering ditanyakan orang tua tentang Little Champ Daycare." />
      <PageHero
        eyebrow="FAQ"
        title="Pertanyaan yang Sering Ditanyakan Orang Tua"
        desc="Kami tahu memilih daycare adalah keputusan besar. Berikut jawaban untuk pertanyaan yang sering muncul seputar program, fasilitas, caregiver, laporan harian, nutrisi, dan pemantauan tumbuh kembang di Little Champ Daycare."
      />
      <section className="section">
        <div className="container faq-page-grid">
          <aside className="faq-tabs">
            <div className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari pertanyaan..."
                aria-label="Cari pertanyaan FAQ"
              />
            </div>
            {groups.map((group) => (
              <button
                key={group.category}
                className={active === group.category && !query ? 'active' : ''}
                onClick={() => handleCategoryClick(group.category)}
                aria-pressed={active === group.category && !query}
              >
                {group.category}
              </button>
            ))}
          </aside>
          <div>
            <div className="reveal">
              <h2>{query ? 'Hasil Pencarian FAQ' : activeGroup.category}</h2>
              <p className="lead faq-intro">
                Tidak menemukan jawaban yang dicari? Chat tim Little Champ melalui WhatsApp.
              </p>
            </div>
            <div className="reveal">
              <FaqList items={filtered as FaqTuple[]} />
            </div>
            <div className="reveal">
              <div className="faq-cta">
                <h3>Masih butuh bantuan?</h3>
                <p>Tim Little Champ dapat membantu menjawab pertanyaan seputar program, slot, visit, dan kebutuhan anak.</p>
                <a className="btn" href={wa()} target="_blank" rel="noreferrer noopener">
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
