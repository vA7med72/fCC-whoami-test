var express = require('express');
var app = express();

app.use(express.static('public'));
 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/whoami', function (req, res) {
  res.json({
    "ipaddress": req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    "language": req.headers["accept-language"],
    "software": req.headers['user-agent']
  });
});


var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
