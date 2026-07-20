import { Camera, ClipboardList, ShieldCheck, Utensils } from 'lucide-react';
import { programs } from '../data';

function iconFor(name: string) {
  const props = { size: 34, strokeWidth: 2.4 };
  if (name === 'camera') return <Camera {...props} />;
  if (name === 'shield') return <ShieldCheck {...props} />;
  if (name === 'utensils') return <Utensils {...props} />;
  return <ClipboardList {...props} />;
}

export { iconFor };

export function ProgramCards() {
  return (
    <div className="program-grid">
      {programs.map((p) => (
        <div className="program-card reveal" key={p.title}>
          <img
            src={p.image}
            alt={p.title}
            width="400"
            height="215"
            loading="lazy"
            decoding="async"
          />
          <p className="eyebrow">{p.age}</p>
          <h3 id={p.id}>{p.title}</h3>
          <strong>{p.ratio}</strong>
          <p>{p.desc}</p>
          <ul className="mini-list">
            {p.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
