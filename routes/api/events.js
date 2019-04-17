const express = require("express");
const router = express.Router();
const fs = require('fs');
const moment = require('moment');
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
  const eventDate = moment(req.body.date);
  const newEvent = {
    "id": eventsData.length + 1,
    "type": req.body.type,
    "date": eventDate,
    "attended": req.body.attended === "Yes" 
  };

  let reminderEvent; 

  if (req.body.type === "court-date" && eventDate > moment()) {
    const reminderDate = moment(eventDate).subtract(1, 'days'); 

    reminderEvent = {
      "id": eventsData.length + 2,
      "type": "reminder",
      "date": reminderDate,
      "body": `Hello John, reminder that you have court tomorrow at ${eventDate.format('h:mm a')}. If you need assistance with transportation please contact your case manager at 555-555-5555.`,
      "attended": req.body.attended === "Yes" 
    };
  }

  eventsData.push(newEvent); 
  if (reminderEvent) eventsData.push(reminderEvent); 

  fs.writeFile('../../data.json', JSON.stringify(eventsData), (err) => {
    if (err) console.log('Error writing file:', err);
  });
});

module.exports = router;
