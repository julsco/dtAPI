import { teams } from "./teams";
import { players } from "./players";


const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json(teams);
});

app.use(`/.netlify/functions/api/teams`, router);

module.exports = app;
module.exports.handler = serverless(app);


 ////////////////////////////////////////////////////////////////////// 

const app2 = express();
const router2 = express.Router();

router2.get("/", (req, res) => {
  res.json(players);
});

app2.use(`/.netlify/functions/api/players`, router2);

module.exports = app2;
module.exports.handler = serverless(app2);