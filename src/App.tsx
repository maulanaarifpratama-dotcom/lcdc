import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useRouteReveal } from './hooks/useRouteReveal';
import { wa } from './lib/wa';
import { site } from './data';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Programs = lazy(() => import('./pages/Programs').then((m) => ({ default: m.Programs })));
const Facilities = lazy(() => import('./pages/Facilities').then((m) => ({ default: m.Facilities })));
const Articles = lazy(() => import('./pages/Articles').then((m) => ({ default: m.Articles })));
const ArticlePage = lazy(() => import('./pages/ArticlePage').then((m) => ({ default: m.ArticlePage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then((m) => ({ default: m.FAQPage })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Facilities', '/facilities'],
  ['Articles', '/articles'],
  ['FAQ', '/faq'],
  ['Contact', '/contact']
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'Little Champ Daycare',
  description: site.description,
  url: 'https://www.littlechamp.id',
  telephone: site.displayWhatsapp,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Sepat No. 43, Kebagusan, Pasar Minggu',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    postalCode: '12520',
    addressCountry: 'ID'
  },
  sameAs: [site.instagramUrl, site.linkedinUrl, site.facebookUrl, site.youtubeUrl]
};

function LayoutInner() {
  const [open, setOpen] = useState(false);
  useRouteReveal();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Langsung ke konten
      </a>
      <header className="nav" role="banner">
        <div className="container nav-inner">
          <Link className="brand" to="/">
            <img src="/assets/logos/little-champ-logo.png" alt="Little Champ Daycare logo" width="54" height="54" />
            <span>Little Champ Daycare</span>
          </Link>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            {open ? 'Tutup' : 'Menu'}
          </button>
          <nav
            id="main-navigation"
            className={`menu ${open ? 'open' : ''}`}
            aria-label="Main navigation"
          >
            {nav.map(([label, href]) => (
              <NavLink key={href} to={href} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <a className="btn small" href={wa()} target="_blank" rel="noreferrer noopener">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content">
        <Suspense fallback={<div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><p>Memuat...</p></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <a className="floating" href={wa()} target="_blank" rel="noreferrer noopener" aria-label="Chat WhatsApp">
        <MessageCircle size={24} />
      </a>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid expanded">
        <div className="footer-brand">
          <img className="footer-logo" src="/assets/logos/little-champ-logo.png" alt="Little Champ logo" width="78" height="78" loading="lazy" />
          <h3>Little Champ Daycare</h3>
          <p>{site.description}</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {nav.map(([label, href]) => (
              <li key={href}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Programs</h3>
          <ul>
            <li><Link to="/programs#baby">Baby</Link></li>
            <li><Link to="/programs#tiny-toddler">Tiny Toddler</Link></li>
            <li><Link to="/programs#toddler">Toddler</Link></li>
            <li><Link to="/programs">Half Day</Link></li>
            <li><Link to="/programs">Full Day</Link></li>
            <li><Link to="/contact">Jadwalkan Visit</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={site.mapsUrl} target="_blank" rel="noreferrer noopener">{site.address}</a></li>
            <li><a href={wa()} target="_blank" rel="noreferrer noopener">{site.displayWhatsapp}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul className="social-list">
            <li><a href={site.instagramUrl} target="_blank" rel="noreferrer noopener"><span className="social-icon">IG</span>@littlechamp_id</a></li>
            <li><a href={site.linkedinUrl} target="_blank" rel="noreferrer noopener"><span className="social-icon">in</span>Little Champ Daycare</a></li>
            <li><a href={site.facebookUrl} target="_blank" rel="noreferrer noopener"><span className="social-icon">f</span>LittleChamp Daycare</a></li>
            <li><a href={site.youtubeUrl} target="_blank" rel="noreferrer noopener"><span className="social-icon">&#9654;</span>Little Champ Video</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy;2026, Little Champ Daycare. All Rights Reserved by <a href={site.immersiaUrl} target="_blank" rel="noreferrer noopener">Immersia</a>.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrowserRouter>
        <LayoutInner />
      </BrowserRouter>
    </>
  );
}
