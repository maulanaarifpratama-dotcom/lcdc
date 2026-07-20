import { useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { wa } from '../lib/wa';
import { articles } from '../data';
import { NotFound } from './NotFound';

export function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return (
    <>
      <SEO title={article.seoTitle} description={article.seoDescription} image={article.cover} />
      <section className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <p className="eyebrow">
              {article.category} &bull; {article.readingTime}
            </p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </div>
          <img src={article.cover} alt={article.title} width="500" height="420" loading="eager" />
        </div>
      </section>
      <section className="article-section">
        <div className="container article-layout">
          <article className="article-body">
            {article.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}
            <section className="checklist-box">
              <h2>Checklist Singkat</h2>
              <ul>
                {article.checklist.map((item) => (
                  <li key={item}>&#9633; {item}</li>
                ))}
              </ul>
            </section>
            <div className="article-note">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukatif dan tidak menggantikan konsultasi dengan
              dokter anak, psikolog anak, atau tenaga kesehatan profesional bila anak memiliki kondisi khusus.
            </div>
            <section className="refs">
              <h2>APA References</h2>
              <ol>
                {article.references.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
            </section>
          </article>
          <aside className="article-side">
            <h3>Konsultasi kebutuhan anak?</h3>
            <p>
              Gunakan artikel ini sebagai panduan saat visit. Jika ingin melihat langsung Little Champ, jadwalkan
              kunjungan gratis.
            </p>
            <a
              className="btn"
              href={wa(`Halo Little Champ, saya membaca artikel ${article.title} dan ingin konsultasi.`)}
              target="_blank"
              rel="noreferrer noopener"
            >
              Chat WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
