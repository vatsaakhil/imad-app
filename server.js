var express = require('express'); /*importing software packages---- creates web server and handles http connection*/ 
var morgan = require('morgan');  /*importing software packages--- outputs log for server */ 
var path = require('path');  /*importing software packages*/ 

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
}); //picks up the file UI 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
}); //picks up the css file 

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
}); //picks up the img file

app.get('/article-one', function (req, res) {
  res.send('Article one requested, and will be served here');
}); //test cmd

app.get('/article-two', function (req, res) {
  res.send('Article two requested, and will be served here');
}); //test cmd

app.get('/article-three', function (req, res) {
  res.send('Article three requested, and will be served here');
}); //test cmd



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
