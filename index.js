require("dotenv").config();

const http = require("http");
const ngrok = require("ngrok");
const fs = require("fs")

const port = 8080;
const server = http.createServer((req, res) => {
    fs.readFile(`${__dirname}/src/index.html`, function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
    })
});

server.listen(port, (err) => {
  if (err) return console.log(`Something bad happened: ${err}`);
  console.log(`Node.js server listening on ${port}`);

  ngrok.authtoken(process.env.NGROK_AUTH);
  ngrok.connect(port, function (err, url) {
    if (err) return console.log(`ngrok error ${err}`);
    console.log(`Node.js local server is publicly-accessible at ${url}`);
  });
});
