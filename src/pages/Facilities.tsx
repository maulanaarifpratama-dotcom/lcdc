import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { FaqList } from '../components/FaqList';
import { FinalCta } from '../components/FinalCta';
import { facilityFaq, type FaqTuple } from '../data';

const gallery = [
  '/assets/media/photos/gallery-facility.webp',
  '/assets/media/photos/gallery-activity.webp',
  '/assets/media/photos/gallery-baby.webp',
  '/assets/media/photos/gallery-toddler.webp',
  '/assets/media/photos/gallery-squad.webp',
  '/assets/media/photos/hero.webp'
];

export function Facilities() {
  return (
    <>
      <SEO
        title="Facilities Little Champ Daycare"
        description="Fasilitas aman, transparan, dan mendukung tumbuh kembang anak."
        image="/assets/media/photos/facility.webp"
      />
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Facilities</p>
            <h1>Ruang Aman, Nyaman, dan Transparan untuk Anak Bertumbuh</h1>
            <p className="lead">
              Setiap area di Little Champ dirancang untuk mendukung rutinitas anak: bermain, makan,
              tidur, belajar, beradaptasi, dan mendapat pendampingan caregiver.
            </p>
          </div>
          <div className="reveal">
            <img
              className="hero-photo"
              src="/assets/media/photos/facility.webp"
              alt="Little Champ facilities"
              width="600"
              height="450"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Facility Principles"
              title="Setiap Area Punya Fungsi Pengasuhan"
            />
          </Reveal>
          <div className="rich-grid">
            <Reveal className="card">
              <h3>Aman</h3>
              <p>
                Area daycare dirancang untuk mendukung aktivitas anak usia dini dengan pendampingan
                caregiver.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>Nyaman</h3>
              <p>
                Rutinitas makan, tidur, dan bermain dilakukan di ruang yang mendukung anak merasa
                familiar.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>Terpantau</h3>
              <p>
                Live CCTV dan laporan harian membantu orang tua tetap mengetahui aktivitas anak
                selama di daycare.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Inside Little Champ"
              title="Ruang yang Mendukung Rutinitas Anak"
            />
          </Reveal>
          <div className="rich-grid area-grid">
            <Reveal className="card">
              <h3>Activity Area</h3>
              <p>
                Area aktivitas digunakan untuk sensory play, motorik kasar dan halus, learning
                activity, serta interaksi sosial sesuai usia anak.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>Nap / Rest Area</h3>
              <p>
                Rutinitas istirahat membantu anak menjaga energi, regulasi emosi, dan kenyamanan
                sepanjang hari.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>Meal Area</h3>
              <p>
                Area makan mendukung rutinitas makan, snack, dan pembiasaan makan sesuai usia anak.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>Health &amp; Hygiene</h3>
              <p>
                Kebersihan, observasi kondisi anak, dan komunikasi jika anak kurang sehat menjadi
                bagian dari rutinitas daycare.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>CCTV &amp; Parent Transparency</h3>
              <p>
                Live CCTV membantu orang tua tetap terhubung dengan aktivitas anak dan membangun
                rasa percaya saat anak berada di daycare.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Safety &amp; Transparency</p>
            <h2>Hal yang Bisa Orang Tua Perhatikan Saat Visit</h2>
            <ul className="check-list">
              <li>Area indoor terpantau.</li>
              <li>Rutinitas makan dan tidur jelas.</li>
              <li>Caregiver mendampingi aktivitas.</li>
              <li>Live CCTV tersedia.</li>
              <li>Laporan harian dikirim ke orang tua.</li>
              <li>Ada catatan kondisi anak.</li>
              <li>Menu disesuaikan usia.</li>
              <li>Proses adaptasi didampingi.</li>
            </ul>
          </Reveal>
          <Reveal>
            <img
              className="section-photo"
              src="/assets/media/photos/activity.webp"
              alt="Little Champ activity area"
              width="600"
              height="450"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Daily Life Gallery"
              title="Sekilas Aktivitas dan Ruang Little Champ"
              desc="Lihat beberapa momen dan area yang mendukung rutinitas anak di Little Champ, mulai dari aktivitas, makan, istirahat, hingga pendampingan caregiver."
            />
          </Reveal>
          <div className="gallery-grid">
            {gallery.map((src, idx) => (
              <Reveal className="gallery-card" key={src}>
                <img
                  src={src}
                  alt={`Little Champ gallery ${idx + 1}`}
                  width="400"
                  height="260"
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Parent Transparency"
              title="Orang Tua Tetap Terhubung, Meski Sedang Bekerja"
            />
          </Reveal>
          <div className="rich-grid four">
            <Reveal className="card">
              <h3>Live CCTV</h3>
              <p>
                Orang tua dapat memantau aktivitas anak sebagai bagian dari komitmen transparansi.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>Laporan Harian WhatsApp</h3>
              <p>Update makan, tidur, mood, aktivitas, dan catatan khusus dikirim secara rutin.</p>
            </Reveal>
            <Reveal className="card">
              <h3>Laporan Perkembangan Bulanan</h3>
              <p>Orang tua mendapat gambaran perkembangan anak dari waktu ke waktu.</p>
            </Reveal>
            <Reveal className="card">
              <h3>Komunikasi dengan Caregiver</h3>
              <p>
                Informasi dari rumah dan daycare dapat saling terhubung agar pendampingan anak lebih
                konsisten.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container narrow-container">
          <Reveal>
            <SectionHeader eyebrow="Facilities FAQ" title="Pertanyaan Seputar Fasilitas" />
          </Reveal>
          <Reveal>
            <FaqList items={facilityFaq as FaqTuple[]} />
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
