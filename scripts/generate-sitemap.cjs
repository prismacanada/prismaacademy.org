const { writeFileSync } = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

const hostname = 'https://prismaacademy.org';
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about-us', changefreq: 'yearly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'yearly', priority: 0.7 },
  { url: '/donate', changefreq: 'yearly', priority: 0.9 },
  { url: '/events', changefreq: 'weekly', priority: 0.9 },
];

const sitemap = new SitemapStream({ hostname });

(async () => {
  for (const link of links) {
    sitemap.write(link);
  }
  sitemap.end();

  const data = await streamToPromise(sitemap);
  writeFileSync(path.resolve('static/sitemap.xml'), data.toString());
})();
