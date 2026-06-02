#!/usr/bin/env node
/**
 * Fetches the Substack RSS feed and writes public/substack-feed.json
 * Run with: npm run update-feed
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const FEED_URL = 'https://beatingsisyphus.substack.com/feed';
const OUT_FILE = path.join(process.cwd(), 'public', 'substack-feed.json');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} from ${url}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function stripInvalidXmlChars(str) {
  // Remove chars that are illegal in XML 1.0
  return str.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f\ufffe\uffff]/g, '');
}

function parseRSS(xml) {
  const articles = [];

  // Extract <item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let itemMatch;

  while ((itemMatch = itemRegex.exec(xml)) !== null) {
    const item = itemMatch[1];

    const get = (tag) => {
      // Handle CDATA and plain text
      const re = new RegExp(`<${tag}(?:[^>]*)>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))</${tag}>`, 'i');
      const m = re.exec(item);
      if (!m) return '';
      return (m[1] ?? m[2] ?? '').trim();
    };

    const title       = get('title');
    const link        = get('link') || (/<link>([^<]+)/.exec(item)?.[1] ?? '').trim();
    const pubDate     = get('pubDate');
    const description = get('description');
    const author      = get('dc:creator') || get('author');

    if (title) {
      articles.push({ title, link, pubDate, description, author });
    }
  }

  return articles;
}

async function main() {
  console.log(`Fetching ${FEED_URL}...`);
  const raw = await fetchUrl(FEED_URL);
  console.log(`Downloaded ${raw.length} bytes`);

  if (raw.length < 1000) {
    console.error('Response too small — likely a block page. First 500 chars:');
    console.error(raw.slice(0, 500));
    process.exit(1);
  }

  const clean = stripInvalidXmlChars(raw);
  const articles = parseRSS(clean);

  if (articles.length === 0) {
    console.error('No articles parsed. Check the feed URL.');
    process.exit(1);
  }

  const out = { status: 'ok', items: articles };
  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2), 'utf-8');

  console.log(`\nWrote ${articles.length} articles to ${OUT_FILE}:`);
  articles.forEach(a => console.log(`  - ${a.title.slice(0, 70)}`));
  console.log('\nDone! Now run: npm run deploy');
}

main().catch(err => { console.error(err); process.exit(1); });
