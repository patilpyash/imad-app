var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
/* mis
var articles = {
'article-one' : {
    title:'Article One | Yash',
    heading:'Article One',
    date:'11 August 2017',
    content:`
        <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        `,
},
'article-two':{
    title:'Article Two | Yash',
    heading:'Article Two',
    date:'13 August 2017',
    content:`
        <p>
            This is the content for my Second article
            </p>
        `,
},
'article-three':{
    title:'Article Three | Yash',
    heading:'Article Three',
    date:'16 August 2017',
    content:`
        <p>
            This is the content for my third article.
            </p>
        `,
},
};


function createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate =`
<html>
    <head>
        <title>title</title>
    <meta name="viewport" ,content="device-width" , iniatial scaled =1 />
   <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class ='container'>
        <div><a href="/">Home</a></div>
        <hr/>
        <h3>${heading} | Yash</h3>
        <div>${date}</div>
        ${content}
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
*/
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
/*
app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
*/
app.get('/article-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter = 0;
app.get('/counter' , function(req,res){
   counter=counter+1;
   res.send(counter.toString());
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
