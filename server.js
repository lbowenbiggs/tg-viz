var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

var stories = JSON.parse(fs.readFileSync(path.join(__dirname, '/public/stories.json')));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/stories', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/stories.json'));
});

app.post('/newStory', function(req, res) {
  var year = +req.body.year;
  var initials = req.body.initials;
  var state = req.body.state;
  var storyText = req.body.storyText;

  var newStory = {"year": year, "initials": initials,  "body": storyText, "state": state};
  console.log(newStory);
  stories.push(newStory);

  fs.writeFileSync('public/stories.json', JSON.stringify(stories));

  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
});
