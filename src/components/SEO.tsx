import { Helmet } from 'react-helmet-async';

const heroImg = '/assets/media/photos/hero.webp';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

export function SEO({ title, description, image = heroImg }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Little Champ Daycare" />
    </Helmet>
  );
}
