const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      "name": "Arsenal",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t3.svg"
    },
    {
      "name": "Aston Villa",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t7.svg"
    },
    {
      "name": "Bournemouth",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t91.svg"
    },
    {
      "name": "Brentford",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t94.svg"
    },
    {
      "name": "Brighton and Hove Albion",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t36.svg"
    },
    {
      "name": "Chelsea",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t8.svg"
    },
    {
      "name": "Crystal Palace",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t31.svg"
    },
    {
      "name": "Everton",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t11.svg"
    },
    {
      "name": "Fulham",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t54.svg"
    },
    {
      "name": "Leeds United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t2.svg"
    },
    {
      "name": "Leicester City",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t13.svg"
    },
    {
      "name": "Liverpool",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t14.svg"
    },
    {
      "name": "Manchester City",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t43.svg"
    },
    {
      "name": "Manchester United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t1.svg"
    },
    {
      "name": "Newcastle United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t4.svg"
    },
    {
      "name": "Nottingham Forest",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t17.svg"
    },
    {
      "name": "Southampton",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t20.svg"
    },
    {
      "name": "Tottenham Hotspur",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t6.svg"
    },
    {
      "name": "West Ham United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t21.svg"
    },
    {
      "name": "Wolverhampton Wanderers",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t39.svg"
    }
  ]);
});

app.use(`/.netlify/functions/api/teams`, router);

module.exports = app;
module.exports.handler = serverless(app);

