const express = require("express");
const router = express.Router();
const fs = require('fs');
let eventsData;

fs.readFile('data.json', 'utf8', function (err, jsonString) {
  if (err) throw err;
  eventsData = JSON.parse(jsonString);
});

router.get("/", (req, res) => {
  console.log(eventsData);
  res.json(
    {
      "data": eventsData,
    }
  );
});

router.post("/", (req, res) => {
  const newEvent = {
    "id": eventsData.length + 1,
    "type": req.body.type,
    "date": req.body.date,
    "attended": req.body.attended === "Yes" 
  };

  eventsData.push(newEvent); 

  fs.writeFile('../../data.json', JSON.stringify(eventsData), (err) => {
    if (err) console.log('Error writing file:', err);
  });
});

module.exports = router;
