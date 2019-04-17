const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const events = require('./routes/api/events');

app.use(bodyParser.json());
app.use('/api/events', events); 

app.listen(port, () => console.log(`Server is running on port ${port}`));