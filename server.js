const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4848;
const BASE_DIR = __dirname;
const PUBLIC_DIR = path.join(BASE_DIR, 'public');
const MASCOTS_DIR = path.join(BASE_DIR, 'mascots');

const MIME = {
  '.html': 'text/html; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.css': 'text/css',
  '.js': 'application/javascript',
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

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 404, error: 'Not Found' }));
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[Status Mascots] Server running at http://127.0.0.1:${PORT}`);
});
