import { useState } from 'react';

const videoId = 'VtKiX3_RKns';
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

export function VideoFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="video-frame">
        <iframe
          title="Little Champ Daycare video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1`}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="video-facade"
      onClick={() => setLoaded(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setLoaded(true);
      }}
      aria-label="Putar video Little Champ Daycare"
    >
      <img
        src={thumbnailUrl}
        alt="Video suasana Little Champ Daycare"
        width="640"
        height="360"
        loading="lazy"
      />
      <div className="play-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="68"
          viewBox="0 0 24 24"
          fill="white"
          stroke="none"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    </div>
  );
}
