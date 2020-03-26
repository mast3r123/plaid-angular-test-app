
//Install express server
const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist'));

app.use('/proxy', proxy('https://ancient-shore-04419.herokuapp.com'));

app.get('/*', function(req,res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname,'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
