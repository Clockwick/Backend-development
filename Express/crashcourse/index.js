const { assert } = require("console");
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger")

const app = express();

// app.use(logger) 
// Init Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Start server at port ${PORT}`));
