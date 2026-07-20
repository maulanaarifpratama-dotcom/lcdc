import type { FaqTuple } from '../data';

interface FaqListProps {
  items: FaqTuple[];
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details className="faq-item" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
