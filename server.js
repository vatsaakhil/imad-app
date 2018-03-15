var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool=require('pg').Pool;
var config={
    user:'vatsaakhil',
    database:'vatsaakhil',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};
var app = express();
app.use(morgan('combined'));


var ArticleOne={
    title:'Welcome Bhavana Singh',
    heading:'ArticleOne1',
    date:'February 23, 2018',
    content:`<p>First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.</p><p>First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.First way to depoly my page on server.</p></div>
            <div>Written By~</div>
            <strong>Bhavana Singh</strong>`
    
};
function CreateTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
      <html>
    <head>
        <title>${title}</title>
        
        
    </head>
    <body>
        <div class="container">
            <div><h2>${heading}</h2></div>
            <div>${date}</div>
            <div>${content}</div>
        
        
    </body>
    
</html>

`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM author',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result));
        }
        
    });
    
});
app.get('/register.html',function(req,res){ //First way to get a response from a server
   res.sendFile(path.join(__dirname, 'ui', 'register.html')); 
});

app.get('/ArticleTwo.html',function(req,res){//Second way to get a response from the server
   res.send('This is second way to get our response from server');
});

app.get('/ArticleOne.html',function(req,res){//Third way to deploy page on web server
   res.send(CreateTemplate(ArticleOne));
});



var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});

//app.post('/submit-name', function(req, res) {
  //  var name = req.query.name;
    //console.log("post received: %s", name);
//});

app.get('article/:articleName',function(req,res){
    var articleName = req.params.articleName;
   res.send(CreateTemplate(articles[articleName]));
});





app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});