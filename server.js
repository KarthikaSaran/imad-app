var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:"Article-One",
    date:"2nd August,2017",
    heading:"Numbers",
    place:"Bangalore",
    content: ` <ol>
                    <li> One </li>
                    <li> Two </li>
                    <li> Three </li>
                    <li> Four </li>
                    <li> Five </li>
                    <li> Six </li>
                    <li> Seven </li>
                    <li> Eight </li>
                    <li> Nine </li>
                    <li> Ten </li>
                </ol>`
};
function createTemplate(data)
{
    var title=data.title;
    var place=data.place;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=
       
        `<html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet"/>
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr>
                    <div>
                        ${place} <br>
                        ${date}
                    </div>
                    <div>
                        <h3> ${heading} </h3>
                        ${content}
                    </div>
                </div>
            </body>
        </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get("/article-one",function (req,res){
   res.send(createTemplate(articleone));
    
});
app.get("/article-two",function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});
app.get("/article-three",function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/profile.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
