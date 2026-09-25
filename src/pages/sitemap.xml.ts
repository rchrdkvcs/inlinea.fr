import type { APIRoute } from "astro";

const paths = [
  "/",
  "/studio/",
  "/expertises/design-produit/",
  "/expertises/sites-applications-web/",
  "/expertises/outils-sur-mesure/",
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://inlinea.fr");
  const urls = paths
    .map((path) => `<url><loc>${new URL(path, baseUrl)}</loc></url>`)
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
