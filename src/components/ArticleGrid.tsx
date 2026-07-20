import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Article } from '../data';

interface ArticleGridProps {
  items: Article[];
}

export function ArticleGrid({ items }: ArticleGridProps) {
  return (
    <div className="article-grid">
      {items.map((article) => (
        <div className="article-card reveal" key={article.slug}>
          <img
            src={article.cover}
            alt={article.title}
            width="400"
            height="215"
            loading="lazy"
            decoding="async"
          />
          <p className="eyebrow">
            {article.category} &bull; {article.readingTime}
          </p>
          <h3>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </h3>
          <p>{article.excerpt}</p>
          <Link className="readmore" to={`/articles/${article.slug}`}>
            Baca artikel <ArrowRight size={16} />
          </Link>
        </div>
      ))}
    </div>
  );
}
