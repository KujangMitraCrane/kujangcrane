export function generateXMLSitemap() {
  const urls = [{ loc: 'https://kujangmitracrane.site/layanan-kami', lastmod: '2024-03-13', changefreq: 'weekly', priority: '0.8' }];

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) =>
              `<url>
            <loc>${url.loc}</loc>
            <lastmod>${url.lastmod}</lastmod>
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
          </url>`
          )
          .join('')}
      </urlset>`;

  const blob = new Blob([xmlString], { type: 'text/xml' });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  a.style.display = 'none';
  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
