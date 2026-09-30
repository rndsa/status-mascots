const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4848;
const BASE_DIR = __dirname;
const PUBLIC_DIR = path.join(BASE_DIR, 'public');
const MASCOTS_DIR = path.join(BASE_DIR, 'mascots');

const MIME = {
  '.html': 'text/html; charset=UTF-8',
  '.svg': 'image/svg+xml; charset=UTF-8',
  '.json': 'application/json',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let filePath = '';
  if (reqPath.startsWith('/mascots/')) {
    filePath = path.join(MASCOTS_DIR, reqPath.replace('/mascots/', ''));
  } else {
    filePath = path.join(PUBLIC_DIR, reqPath);
  }

  // Security check: ensure path stays within project
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 403, error: 'Forbidden' }));
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      console.log(`[${new Date().toISOString()}] 404 NOT FOUND: ${req.url}`);
      res.writeHead(404, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
      });
      return res.end(JSON.stringify({ status: 404, error: 'Not Found', path: reqPath }));
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';

    // Anti-caching headers so client mobile WebView always fetches fresh assets
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store'
    });
    
    console.log(`[${new Date().toISOString()}] 200 OK: ${req.url}`);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[Status Mascots] Server running at http://127.0.0.1:${PORT}`);
});
