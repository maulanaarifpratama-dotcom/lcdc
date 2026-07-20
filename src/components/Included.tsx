export function Included() {
  const items = [
    'Skrining tumbuh kembang',
    'Stimulasi harian',
    'Complete meal & snack',
    'Laporan harian WhatsApp',
    'Live CCTV',
    'Laporan perkembangan bulanan',
    'Rutinitas makan dan tidur',
    'Pendampingan adaptasi'
  ];
  return (
    <div className="reveal">
      <div className="included">
        <h3>Yang Termasuk dalam Program Little Champ</h3>
        <div className="pill-grid">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
