import { useState } from 'react';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { wa } from '../lib/wa';
import { site } from '../data';

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function Contact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim().length > 0 && age.trim().length > 0;
  const msg = `Halo Little Champ, saya ingin jadwalkan visit gratis. Nama orang tua: ${name || '-'}. Usia anak: ${age || '-'}.`;

  function handleSubmit(e: React.FormEvent) {
    if (!canSubmit) {
      e.preventDefault();
      setSubmitted(true);
      return;
    }
  }

  return (
    <>
      <SEO title="Contact Little Champ Daycare" description="Jadwalkan visit gratis ke Little Champ Daycare." image="/assets/media/photos/caregiver-squad.webp" />
      <PageHero eyebrow="Contact" title="Jadwalkan Kunjungan Gratis" desc="Lihat langsung fasilitas, temui caregiver, dan rasakan bedanya sistem pengasuhan Little Champ." image="/assets/media/photos/caregiver-squad.webp" />
      <section className="section">
        <div className="container contact-grid">
          <Reveal className="card">
            <MapPin />
            <h3>Head Quarter</h3>
            <p>{site.address}</p>
            <a className="readmore" href={site.mapsUrl} target="_blank" rel="noreferrer noopener">
              Buka Google Maps <ExternalLink size={14} />
            </a>
          </Reveal>
          <Reveal className="card">
            <Phone />
            <h3>WhatsApp</h3>
            <p>{site.displayWhatsapp}</p>
            <a className="readmore" href={wa()} target="_blank" rel="noreferrer noopener">
              Chat WhatsApp
            </a>
          </Reveal>
          <Reveal className="card">
            <Mail />
            <h3>Email &amp; Instagram</h3>
            <p>
              {site.email}
              <br />
              {site.instagram}
            </p>
          </Reveal>
        </div>
        <div className="container form-wrap">
          <Reveal className="form-card">
            <h2>Form WhatsApp cepat</h2>
            <p>Isi data singkat, lalu sistem akan membuka WhatsApp dengan pesan yang sudah disiapkan.</p>
            <form onSubmit={handleSubmit} noValidate>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama orang tua"
                required
                aria-label="Nama orang tua"
                aria-invalid={submitted && !name.trim()}
              />
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Usia anak (contoh: 8 bulan)"
                required
                aria-label="Usia anak"
                aria-invalid={submitted && !age.trim()}
              />
              {submitted && !canSubmit && (
                <p className="form-error" role="alert">
                  Mohon isi nama orang tua dan usia anak sebelum mengirim.
                </p>
              )}
              <a
                className="btn"
                href={wa(msg)}
                target="_blank"
                rel="noreferrer noopener"
                aria-disabled={!canSubmit}
                onClick={(e) => {
                  if (!canSubmit) e.preventDefault();
                }}
              >
                Kirim via WhatsApp
              </a>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
