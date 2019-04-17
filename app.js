const express = require("express");
const app = express();
const port = 5000;

const events = require('./routes/api/events');

app.use('/api/events', events); 

app.listen(port, () => console.log(`Server is running on port ${port}`));