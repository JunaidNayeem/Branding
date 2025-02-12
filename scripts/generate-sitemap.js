import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Get the current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define your website URL
const websiteUrl = 'https://www.junaidnayeem.in';

// Define the pages in your React app
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more pages as needed
];

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: websiteUrl });

// Write the sitemap to a file
const writeStream = createWriteStream(
  resolve(__dirname, '../public/sitemap.xml')
);

sitemapStream.pipe(writeStream);

// Add pages to the sitemap
pages.forEach((page) => {
  sitemapStream.write(page);
});

// End the stream
sitemapStream.end();

console.log('Sitemap generated successfully!');