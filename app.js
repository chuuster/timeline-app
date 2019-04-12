const express = require("express");
const app = express();
const port = 5000;

app.get("/api/events", (req, res) => {
  res.json(
    {
      "data": [
        {
          "id": "1",
          "type": "court-date",
          "subject": "Court Date",
          "date": "2019-04-05T09:00:00-07:00",
        },
        {
          "id": "2",
          "type": "reminder",
          "subject": "Reminder for Court Date",
          "body": "Hello John, reminder that you have court tomorrow at 9:00am. If you need assistance with transportation please contact your case manager at 555-555-5555.",
          "date": "2019-04-29T09:00:00-07:00",
        },
        {
          "id": "3",
          "type": "cm-appt",
          "subject": "Case Manager Appointment",
          "date": "2019-04-06T09:00:00-07:00",
        },
        {
          "id": "4",
          "type": "reminder",
          "subject": "Reminder for Court Date",
          "body": "Hello John, reminder that you have court tomorrow at 9:00am. If you need assistance with transportation please contact your case manager at 555-555-5555.",
          "date": "2019-05-06T09:00:00-07:00",
        },
        {
          "id": "5",
          "type": "court-date",
          "subject": "Court Date",
          "date": "2019-05-07T09:00:00-07:00",
        },
        {
          "id": "6",
          "type": "date-update",
          "subject": "Client Data Updated",
          "date": "2019-03-29T09:00:00-07:00",
        },
        {
          "id": "7",
          "type": "cm-appt",
          "subject": "Case Manager Appointment",
          "date": "2019-03-06T09:00:00-07:00",
        },
        {
          "id": "8",
          "type": "court-date",
          "subject": "Court Date",
          "date": "2019-02-28T09:00:00-07:00",
        },
      ]
    }
  );
});

app.listen(port, () => console.log(`Server is running on port ${port}`));