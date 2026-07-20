import { wa } from '../lib/wa';

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="reveal">
          <h2>Siap melihat langsung Little Champ?</h2>
          <p>Jadwalkan kunjungan gratis, lihat fasilitas, temui caregiver, dan diskusikan kebutuhan si kecil.</p>
          <a className="btn light" href={wa()} target="_blank" rel="noreferrer noopener">
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
