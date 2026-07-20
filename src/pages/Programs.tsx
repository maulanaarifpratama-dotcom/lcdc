import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { ProgramCards } from '../components/ProgramCards';
import { Included } from '../components/Included';
import { FaqList } from '../components/FaqList';
import { FinalCta } from '../components/FinalCta';
import { programFaq, type FaqTuple } from '../data';

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
              <p>
                Aktivitas dilakukan dengan pendampingan caregiver dan komunikasi harian ke orang
                tua.
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <>
      <SEO
        title="Program Little Champ Daycare"
        description="Program daycare Baby, Tiny Toddler, dan Toddler."
        image="/assets/media/photos/activity.webp"
      />
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Programs</p>
            <h1>Program Fleksibel untuk Kebutuhan Anak dan Keluarga</h1>
            <p className="lead">
              Setiap anak memiliki tahap perkembangan dan kebutuhan rutinitas yang berbeda. Program
              Little Champ dirancang berdasarkan usia, rasio caregiver, kebutuhan stimulasi, dan
              kebutuhan orang tua bekerja.
            </p>
          </div>
          <div className="reveal">
            <img
              className="hero-photo"
              src="/assets/media/photos/activity.webp"
              alt="Little Champ activity"
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
              eyebrow="Program by Age"
              title="Pilih Program Sesuai Tahap Usia Anak"
              desc="Program Little Champ dibagi berdasarkan kelompok usia agar pengasuhan, aktivitas, dan rasio caregiver lebih sesuai dengan kebutuhan perkembangan anak."
            />
          </Reveal>
          <ProgramCards />
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Duration Options" title="Pilihan Durasi yang Fleksibel" />
          </Reveal>
          <div className="rich-grid two">
            <Reveal className="card">
              <h3>Half Day 6 / 8 Jam</h3>
              <p>
                Cocok untuk keluarga yang membutuhkan daycare sebagian hari, masa adaptasi bertahap,
                atau jadwal kerja fleksibel.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3>Full Day 12 Jam</h3>
              <p>
                Cocok untuk orang tua dengan jam kerja penuh dan kebutuhan pengasuhan harian yang
                lebih panjang.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <p className="small-note center-text">
              Untuk informasi paket dan ketersediaan slot, orang tua dapat menghubungi tim Little
              Champ melalui WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Included />
        </div>
      </section>
      <section className="section alt">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Nutrition</p>
            <h2>Nutrisi yang Disesuaikan dengan Usia Anak</h2>
            <p>
              Menu harian di Little Champ dirancang untuk mendukung kebutuhan anak sesuai usia. Kami
              menghindari ultra-processed food, mendukung kebutuhan MPASI, dan memperhatikan
              kebiasaan makan anak dari hari ke hari.
            </p>
          </Reveal>
          <Reveal>
            <img
              className="section-photo"
              src="/assets/media/photos/facility.webp"
              alt="Nutrition and daycare facility"
              width="600"
              height="450"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Growth Monitoring"
              title="Aktivitas Harian yang Terhubung dengan Pemantauan Tumbuh Kembang"
              desc="Setiap program Little Champ tidak hanya berisi aktivitas harian. Tim juga memperhatikan perkembangan anak melalui observasi dan growth monitoring, sehingga stimulasi dapat disesuaikan dengan usia dan kebutuhan anak."
            />
          </Reveal>
          <div className="pill-grid centered">
            <span>Observasi motorik</span>
            <span>Observasi bahasa</span>
            <span>Observasi sosial dan kemandirian</span>
            <span>KPSP</span>
            <span>Denver II</span>
            <span>Laporan perkembangan bulanan</span>
          </div>
        </div>
      </section>
      <DaySection />
      <section className="section alt">
        <div className="container narrow-container">
          <Reveal>
            <SectionHeader eyebrow="Programs FAQ" title="Pertanyaan Seputar Program" />
          </Reveal>
          <Reveal>
            <FaqList items={programFaq as FaqTuple[]} />
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
