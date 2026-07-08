const http = require('http');
const { exec } = require('child_process');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {

  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading dashboard');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }

  else if (req.url === '/status') {
    exec('docker ps --filter "name=miniapp" --format "{{.Names}}"', (err, stdout) => {
      if (err) {
        res.end('Error ❌: ' + err.message);
        return;
      }

      if (stdout.trim() === 'miniapp') {
        res.end('Running 🟢');
      } else {
        res.end('Stopped 🔴');
      }
    });
  }

  else if (req.url === '/deploy') {
    exec('docker rm -f miniapp && docker run -d --name miniapp -p 3002:3000 -v /var/run/docker.sock:/var/run/docker.sock miniapp', (err) => {
      if (err) {
        res.end('Deploy failed ❌');
      } else {
        res.end('App deployed successfully ✅');
      }
    });
  }

  else if (req.url === '/logs') {
    exec('docker logs miniapp --tail 20', (err, stdout) => {
      if (err) {
        res.end('Error fetching logs ❌');
      } else {
        res.end(stdout || 'No logs available');
      }
    });
  }

  else {
    res.writeHead(404);
    res.end('Route not found ❌');
  }

});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
