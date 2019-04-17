const express = require("express");
const router = express.Router();
const fs = require('fs');

let events;

fs.readFile('data.json', 'utf8', function (err, jsonString) {
  if (err) throw err;
  events = JSON.parse(jsonString);
});

router.get("/", (req, res) => {
  res.json(
    {
      "data": events,
    }
  );
});

router.post("/", (req, res) => {
  res.send('');
});

module.exports = router;
