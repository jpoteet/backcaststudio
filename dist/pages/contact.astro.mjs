export { renderers } from '../renderers.mjs';

const page = () => import('../chunks/prerender_BWgWHAKs.mjs').then(n => n.h);

export { page };