const express = require('express');
const path = require('path');
const ip = require("ip");

const app = express();
const port = process.env.PORT || 8080;


// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public_html/index_youtube.html'));
  });



app.use('/static', express.static(path.join(__dirname, '../public_html/')));


app.listen(port);
console.log('Server started at http://localhost:' + port);``
console.dir ( ip.address() );