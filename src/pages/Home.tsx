import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ProgramCards } from '../components/ProgramCards';
import { Included } from '../components/Included';
import { ArticleGrid } from '../components/ArticleGrid';
import { FaqList } from '../components/FaqList';
import { FinalCta } from '../components/FinalCta';
import { wa } from '../lib/wa';
import { articles, features, homeFaq, site, stats, type FaqTuple } from '../data';

const heroImg = '/assets/media/photos/hero.webp';
const videoId = 'VtKiX3_RKns';

function iconFor(name: string) {
  const props = { size: 34, strokeWidth: 2.4 };
  if (name === 'camera') return <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>;
  if (name === 'shield') return <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>;
  if (name === 'utensils') return <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>;
  return <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M9 18h6"/><path d="M9 10h6"/></svg>;
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function VideoSection() {
  return (
    <section className="section video-section">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">Lihat Suasana Little Champ</p>
          <h2>Kenali Lingkungan Daycare Sebelum Berkunjung</h2>
          <p>
            Lihat sekilas suasana kegiatan, ruang daycare, dan cara tim Little Champ mendampingi anak sepanjang hari. Video ini membantu orang tua mendapat gambaran awal sebelum menjadwalkan kunjungan langsung.
          </p>
          <p className="small-note">Video diputar otomatis tanpa suara. Aktifkan suara untuk menonton dengan audio.</p>
        </Reveal>
        <Reveal>
          <div className="video-frame">
            <iframe
              title="Little Champ Daycare video"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section alt">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">Kenapa ini penting</p>
          <h2>Ibu bekerja berhak tenang. Anak berhak berkembang optimal.</h2>
          <p>
            Little Champ menjawab kebutuhan keluarga melalui sistem yang menggabungkan pengasuhan, transparansi, nutrisi, caregiver profesional, dan pemantauan perkembangan.
          </p>
          <ul className="check-list">
            <li>Golden window usia 0-5 tahun perlu stimulasi konsisten.</li>
            <li>Orang tua butuh bukti harian, bukan hanya janji layanan.</li>
            <li>Daycare ideal harus punya standar caregiver, rasio, dan laporan yang jelas.</li>
          </ul>
        </Reveal>
        <Reveal>
          <img
            className="section-photo"
            src="/assets/media/photos/facility.webp"
            alt="Little Champ daycare facility"
            width="600"
            height="450"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Keunggulan Kami"
            title="Bukan sekadar penitipan. Ini ekosistem tumbuh kembang."
            desc="Setiap pilar layanan dibuat untuk membantu anak merasa aman, orang tua tetap terinformasi, dan perkembangan anak terpantau."
          />
        </Reveal>
        <div className="feature-grid">
          {features.map((f) => (
            <Reveal className="feature-card" key={f.title}>
              <div className="feature-icon">{iconFor(f.icon)}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsPreview() {
  return (
    <section className="section alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Program"
            title="Fleksibel sesuai kebutuhan keluarga."
            desc="Program dibagi berdasarkan usia dan kebutuhan pendampingan agar anak mendapat dukungan sesuai tahap perkembangan."
          />
        </Reveal>
        <ProgramCards />
        <Included />
      </div>
    </section>
  );
}

function DaySection() {
  const items = [
    ['07:00', 'Arrival & Asesmen'],
    ['08:00', 'Sarapan Bergizi'],
    ['09:00', 'Stimulasi & Aktivitas'],
    ['10:00', 'Makan Siang & Istirahat'],
    ['15:00', 'Snack & Eksplorasi'],
    ['19:00', 'Laporan ke Orang Tua']
  ];
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Sehari di Little Champ"
            title="Setiap hari dirancang untuk tumbuh."
            desc="Rutinitas harian membantu anak merasa aman, memahami pola, dan mendapatkan stimulasi yang konsisten."
          />
        </Reveal>
        <div className="timeline">
          {items.map(([time, title]) => (
            <Reveal className="timeline-item" key={time}>
              <span>{time}</span>
              <h3>{title}</h3>
              <p>Aktivitas dilakukan dengan pendampingan caregiver dan komunikasi harian ke orang tua.</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaregiverSection() {
  return (
    <section className="section alt">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">Tim caregiver</p>
          <h2>Dilatih, tersertifikasi, dan disupervisi.</h2>
          <p>Caregiver Little Champ memiliki latar belakang pengasuhan dan kesehatan anak yang mendukung pendampingan harian.</p>
          <ul className="check-list">
            <li>Latar pengasuhan dan kesehatan anak.</li>
            <li>Training intensif dan supervisi berkala.</li>
            <li>Fokus pada adaptasi, keamanan, dan perkembangan anak.</li>
          </ul>
        </Reveal>
        <Reveal>
          <img
            className="caregiver-squad"
            src="/assets/media/photos/caregiver-squad.webp"
            alt="Little Champ caregiver squad"
            width="600"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    'C***** naik berat badan hampir 800 gram dalam sebulan berkat program BB dan dukungan tim Little Champ.',
    'Laporan harian dan CCTV membuat kami tenang. Anak saya kini senang di daycare berkat variasi aktivitas yang bagus.',
    'Setelah 3 bulan, saya puas. Rasio 1:2 untuk bayi, CCTV, makan 3x, protokol anak sakit, dan laporan WhatsApp yang detail.',
    'Daycare dekat kantor yang luar biasa. Ruang nyaman, fasilitas lengkap, caregiver terlatih, dan CCTV di semua ruangan.'
  ];
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader eyebrow="Kata orang tua" title="Kepercayaan yang tidak kami anggap ringan." />
        </Reveal>
        <div className="quote-grid">
          {quotes.map((q, i) => (
            <Reveal className="quote-card" key={q}>
              <p>&ldquo;{q}&rdquo;</p>
              <strong>{['Mama Naura', 'Mama Vinda', 'Papa Kemal', 'Mama Ega'][i]}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticlePreview() {
  return (
    <section className="section alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Panduan Orang Tua"
            title="Artikel Praktis Seputar Daycare dan Tumbuh Kembang"
            desc="Baca panduan ringkas namun mendalam untuk membantu orang tua memilih daycare, memahami proses adaptasi, membaca laporan harian, dan memantau tumbuh kembang anak dengan lebih percaya diri."
          />
        </Reveal>
        <ArticleGrid items={articles.slice(0, 3)} />
      </div>
    </section>
  );
}

function HomeFAQ() {
  return (
    <section className="section">
      <div className="container narrow-container">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Ditanyakan Orang Tua"
            desc="Memilih daycare adalah keputusan besar. Berikut beberapa pertanyaan yang sering muncul sebelum orang tua menjadwalkan kunjungan ke Little Champ."
          />
        </Reveal>
        <Reveal>
          <FaqList items={homeFaq as FaqTuple[]} />
        </Reveal>
        <Reveal>
          <div className="faq-cta">
            <h3>Masih punya pertanyaan lain?</h3>
            <p>Lihat halaman FAQ lengkap atau chat tim Little Champ untuk konsultasi kebutuhan anak.</p>
            <div className="cta-row center">
              <Link className="btn ghost" to="/faq">
                Lihat Semua FAQ
              </Link>
              <a className="btn" href={wa()} target="_blank" rel="noreferrer noopener">
                Chat WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <SEO title="Little Champ Daycare | Daycare Berbasis Tumbuh Kembang Anak" description={site.description} />
      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <p className="eyebrow">Pioneer layanan childcare berbasis tumbuh kembang anak</p>
            <h1>Daycare yang membantu orang tua bekerja dengan tenang.</h1>
            <p className="lead">
              Tempat titip anak bukan sekadar penitipan. Ini tentang keamanan, transparansi, nutrisi, caregiver profesional, dan pemantauan tumbuh kembang yang terjaga.
            </p>
            <div className="cta-row">
              <Link className="btn" to="/contact">
                Jadwalkan Visit Gratis <ArrowRight size={18} />
              </Link>
              <Link className="btn ghost" to="/programs">
                Lihat Program
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="hero-card">
              <img
                src={heroImg}
                alt="Little Champ daycare activity"
                width="600"
                height="450"
                loading="eager"
                decoding="async"
              />
              <div className="motion-badge">
                <Sparkles size={18} /> Growth Monitoring
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="stats-band">
        <div className="container stat-grid">
          {stats.map(([v, label]) => (
            <Reveal className="stat-card" key={label}>
              <strong>{v}</strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <VideoSection />
      <ProblemSection />
      <WhySection />
      <ProgramsPreview />
      <DaySection />
      <CaregiverSection />
      <Testimonials />
      <ArticlePreview />
      <HomeFAQ />
      <FinalCta />
    </>
  );
}
