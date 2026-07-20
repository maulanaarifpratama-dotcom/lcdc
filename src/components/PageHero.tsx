const heroImg = '/assets/media/photos/hero.webp';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  desc: string;
  image?: string;
}

export function PageHero({ eyebrow, title, desc, image = heroImg }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container hero-grid">
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{desc}</p>
        </div>
        <div className="reveal">
          <img
            className="hero-photo"
            src={image}
            alt={title}
            width="600"
            height="450"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
