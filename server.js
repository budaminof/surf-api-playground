const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const data = require('./data-example.json');

require('dotenv').config();

app.get('/api/forecast', (req, res, next) => {
  console.log("EXPRESS GOT HERE");
  console.log(data);
  res.send(data);
})

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
})

//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
})

