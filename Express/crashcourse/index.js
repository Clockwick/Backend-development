const { assert } = require("console");
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const exphdb = require('express-handlebars');
const members = require('./Members');
const app = express();

// app.use(logger) 


// Handle bar middleware
app.engine('handlebars', exphdb({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
// Init Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
// Homepage route
app.get('/', (req,res) => res.render('index', {
  title: "Hello world",
  members: members
}));
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Start server at port ${PORT}`));
