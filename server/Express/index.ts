import * as express from "express";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express.default();
app.get('/', (req, res) => {
  res.send('Hello World from Docker !\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);