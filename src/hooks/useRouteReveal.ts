import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useRouteReveal() {
  const { pathname } = useLocation();
  const ioRef = useRef<IntersectionObserver | null>(null);
  const fallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('js-ready');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (ioRef.current) ioRef.current.disconnect();
    if (fallbackRef.current) clearTimeout(fallbackRef.current);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        }),
      { threshold: 0.08 }
    );
    ioRef.current = io;

    function scanAndObserve() {
      const els = [...document.querySelectorAll('.reveal:not(.in-view)')];
      els.forEach((el) => {
        io.observe(el);
      });
      if (els.length === 0) {
        // No reveal elements yet (lazy chunk still loading) — try again shortly
        return false;
      }
      return true;
    }

    // Try immediately, but also poll in case lazy content hasn't rendered yet
    const found = scanAndObserve();

    let pollCount = 0;
    const maxPolls = 20; // 20 * 100ms = 2s max
    let pollTimer: ReturnType<typeof setInterval> | undefined;

    if (!found) {
      pollTimer = setInterval(() => {
        pollCount++;
        const els = [...document.querySelectorAll('.reveal:not(.in-view)')];
        els.forEach((el) => io.observe(el));
        if (els.length > 0 || pollCount >= maxPolls) {
          clearInterval(pollTimer);
          // Final fallback: make everything visible
          document
            .querySelectorAll('.reveal:not(.in-view)')
            .forEach((el) => el.classList.add('in-view'));
        }
      }, 100);
    }

    // Hard fallback: after 600ms, force all remaining .reveal to be visible
    const fallback = setTimeout(() => {
      document
        .querySelectorAll('.reveal:not(.in-view)')
        .forEach((el) => el.classList.add('in-view'));
    }, 600);

    return () => {
      clearTimeout(fallback);
      if (pollTimer) clearInterval(pollTimer);
      io.disconnect();
    };
  }, [pathname]);
}
