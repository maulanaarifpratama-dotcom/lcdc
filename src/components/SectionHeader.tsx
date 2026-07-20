interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  desc?: string;
}

export function SectionHeader({ eyebrow, title, desc }: SectionHeaderProps) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {desc && <p className="lead narrow">{desc}</p>}
    </div>
  );
}
