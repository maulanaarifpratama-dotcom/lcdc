import { site } from '../data';

export function wa(message = 'Halo Little Champ, saya ingin jadwalkan visit gratis.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
