import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { FinalCta } from '../components/FinalCta';
import { site } from '../data';

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function About() {
  return (
    <>
      <SEO title="About Little Champ Daycare" description={site.description} image="/assets/media/photos/caregiver-squad.webp" />
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">About Little Champ</p>
            <h1>Bukan Sekadar Daycare. Little Champ Adalah Sistem Pengasuhan.</h1>
            <p className="lead">Little Champ Daycare hadir untuk membantu orang tua bekerja dengan lebih tenang, sambil memastikan anak berada di lingkungan yang aman, responsif, dan mendukung tumbuh kembang.</p>
          </div>
          <div className="reveal">
            <img className="hero-photo" src="/assets/media/photos/caregiver-squad.webp" alt="Little Champ caregiver squad" width="600" height="450" loading="eager" decoding="async" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Kenapa Little Champ Hadir</p>
            <h2>Kami Memahami Kekhawatiran Orang Tua Bekerja</h2>
            <p>Bagi banyak orang tua, menitipkan anak bukan keputusan sederhana. Ada pertanyaan tentang keamanan, kualitas caregiver, makanan, rutinitas tidur, proses adaptasi, dan bagaimana orang tua tetap mendapat kabar selama bekerja.</p>
            <p>Little Champ hadir untuk menjawab kebutuhan itu melalui childcare yang menggabungkan pengasuhan harian, live CCTV, laporan harian, nutrisi terstandarisasi, dan pemantauan tumbuh kembang.</p>
          </Reveal>
          <Reveal>
            <img className="section-photo" src="/assets/media/photos/facility.webp" alt="Little Champ facility" width="600" height="450" loading="lazy" />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Our Philosophy" title="Anak Perlu Merasa Aman Sebelum Bisa Berkembang Optimal" desc="Setiap anak membutuhkan ruang yang aman untuk mengenal lingkungan, membangun rutinitas, dan berkembang sesuai tahap usianya. Karena itu, pendekatan Little Champ berfokus pada rasa aman, observasi, komunikasi, dan stimulasi yang sesuai kebutuhan anak." />
          </Reveal>
          <div className="rich-grid">
            <Reveal className="card"><h3>Care-first</h3><p>Setiap interaksi dengan anak diarahkan untuk membangun rasa aman, kepercayaan, dan rutinitas yang konsisten.</p></Reveal>
            <Reveal className="card"><h3>Evidence-aware</h3><p>Aktivitas anak tidak dibuat asal ramai, tetapi disesuaikan dengan usia, observasi harian, dan pemantauan perkembangan.</p></Reveal>
            <Reveal className="card"><h3>Parent-connected</h3><p>Orang tua tetap terhubung melalui laporan harian, live CCTV, dan komunikasi rutin dengan tim daycare.</p></Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Caregiver Standards</p>
            <h2>Caregiver yang Dilatih, Disupervisi, dan Dekat dengan Anak</h2>
            <p>Caregiver adalah bagian paling penting dalam pengalaman daycare anak. Di Little Champ, caregiver tidak hanya mendampingi aktivitas, tetapi juga membantu anak beradaptasi, menjaga rutinitas, mengamati kebutuhan harian, dan berkomunikasi dengan orang tua.</p>
            <ul className="check-list">
              <li>Caregiver mendapat training dan supervisi rutin.</li>
              <li>Pendampingan anak disesuaikan dengan usia dan kebutuhan adaptasi.</li>
              <li>Rutinitas makan, tidur, bermain, dan aktivitas dipantau setiap hari.</li>
              <li>Komunikasi dengan orang tua dilakukan melalui laporan harian dan update penting.</li>
              <li>Fokus pengasuhan diarahkan pada keamanan, kenyamanan, dan tumbuh kembang anak.</li>
            </ul>
          </Reveal>
          <Reveal>
            <img className="caregiver-squad" src="/assets/media/photos/caregiver-squad.webp" alt="Caregiver squad" width="600" height="500" loading="lazy" />
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Growth Monitoring" title="Pengasuhan Harian yang Terhubung dengan Pemantauan Perkembangan" desc="Little Champ tidak hanya mencatat aktivitas anak. Rutinitas harian anak juga menjadi bagian dari observasi tumbuh kembang, mulai dari motorik, bahasa, sosial, sensorik, kemandirian, hingga kebiasaan makan dan tidur." />
          </Reveal>
          <div className="rich-grid four">
            <Reveal className="card"><h3>KPSP</h3><p>Pra-skrining perkembangan yang membantu melihat apakah kemampuan anak sudah sesuai usia atau perlu perhatian lebih lanjut.</p></Reveal>
            <Reveal className="card"><h3>Denver II</h3><p>Alat skrining perkembangan yang melihat area personal-social, motorik halus, bahasa, dan motorik kasar.</p></Reveal>
            <Reveal className="card"><h3>Grafik WHO</h3><p>Pemantauan pertumbuhan anak dari waktu ke waktu sebagai bagian dari observasi kesehatan dan status gizi.</p></Reveal>
            <Reveal className="card"><h3>Laporan Perkembangan Bulanan</h3><p>Ringkasan perkembangan anak yang membantu orang tua melihat progres secara lebih terarah.</p></Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Care Team</p>
            <h2>Tim yang Mendampingi Anak dengan Hangat dan Terstruktur</h2>
            <p>Tim Little Champ hadir untuk mendampingi anak dengan pendekatan yang hangat, terstruktur, dan transparan kepada orang tua. Setiap rutinitas anak, mulai dari makan, tidur, bermain, hingga proses adaptasi, menjadi bagian dari perhatian harian tim.</p>
          </Reveal>
          <Reveal>
            <img className="section-photo" src="/assets/media/photos/activity.webp" alt="Little Champ daily activity" width="600" height="450" loading="lazy" />
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
