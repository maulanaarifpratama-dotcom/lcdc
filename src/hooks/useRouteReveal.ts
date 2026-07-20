import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useRouteReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.classList.add('js-ready');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const els = [...document.querySelectorAll('.reveal')];
    const fallback = window.setTimeout(
      () => els.forEach((el) => el.classList.add('in-view')),
      300
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => {
      el.classList.remove('in-view');
      io.observe(el);
    });
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, [pathname]);
}
