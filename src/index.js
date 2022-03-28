import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import yaml from "js-yaml";
import fs from "fs-extra";
import path from 'path';
import { cwd } from "process";

//const configPath = path.join(cwd(), 'src', 'config', 'deploy-server.yml')
const { json } = bodyParser;
const app = express();
//const config = yaml.load(fs.readFileSync(configPath, "utf8"));

//const { serverPort } = config;
const serverPort = 8080;
app.use(helmet());
app.use(
  json({
    verify: (req, res, buf, encoding) => {
      if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || "utf8");
      }
    },
  })
);

app.post('/', (req, res) => {
  res.send('Success!');
});

app.listen(serverPort, () => {
  console.log(`Listening on ${serverPort}`);
});