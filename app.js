const http = require('http');
const { exec } = require('child_process');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  
  // Serve dashboard
  if(req.url === '/' || req.url === '/index.html') {
    fs.readFile('index.html', (err, data) => {
      if(err) {
        res.writeHead(500);
        res.end('Error loading dashboard');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  }

  // Status route
  else if(req.url === '/status') {
    exec('docker ps --filter name=miniapp', (err, stdout) => {
      if(err) {
        res.end('Error ❌: ' + err.message);
      } else if(stdout.includes('miniapp')) {
        res.end('Running 🟢');
      } else {
        res.end('Stopped 🔴');
      }
    });
  }

  // Deploy route (auto-remove old container)
  else if(req.url === '/deploy') {
    exec('docker rm -f miniapp 2>/dev/null && docker run -d --name miniapp myminiapp', (err, stdout) => {
      if(err) {
        res.end('Error deploying ❌: ' + err.message);
      } else {
        res.end('App deployed successfully ✅');
      }
    });
  }

  // Logs route
  else if(req.url === '/logs') {
    exec('docker logs miniapp --tail 20', (err, stdout) => {
      if(err) {
        res.end('Error fetching logs ❌: ' + err.message);
      } else {
        res.end(stdout || 'No logs yet');
      }
    });
  }

  else {
    res.writeHead(404);
    res.end('Route not found ❌');
  }

});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
