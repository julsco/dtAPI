import { teams } from "./teams";
import { players } from "./players";

const buildAPI = (data, path) => {
  const express = require("express");
  const serverless = require("serverless-http");

  const app = express();
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json(data);
  });

  app.use(`/.netlify/functions/api/${path}`, router);

  module.exports = app;
  module.exports.handler = serverless(app);
}

buildAPI(teams, "/teams")
buildAPI(players, "/players")