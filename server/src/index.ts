import * as express from "express";

type IReq = express.Request;
type IRes = express.Response;

// Constants 
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req: IReq, res: IRes) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);