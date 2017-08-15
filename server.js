var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto=require('crypto');
var bodyParser=require('body-parser');
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var config={
    user:'karthikaraghavendrar7',
    database:'karthikaraghavendrar7',
    host:'db.imad.hasura-app.io',
    port: '5432',
    password:process.env.DB_PASSWORD
};



/*var articles={
    'article-one':{
        title:"Article-One By Karthika",
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
                    </ol>`,
        comments:""
},
    'article-two':{
        title:"Article-Two By Karthika",
        date:"3nd August,2017",
        heading:"India",
        place:"Bangalore",
        content: ` <p> India is my country. It is rich in wealth , natural resources and human resources. It's ancient tradition is noteworthy. </p>
            <ul>
                <li> National Flower : Lotus</li>
                <li> National Animal : Tiger</li>
                <li> National Bird : Peacock</li>
                <li> National Anthem : Jana Gana Mana</li>
                <li> National Flag : Tricoloured with chakra in between</li>
            </ul>`,
        comments:""
    },
    'article-three':{
        title:"Article-Three By Karthika",
        date:"4th August,2017",
        heading:"Computer",
        place:"Bangalore",
        content: ` <p>What is a computer? </p>
            <p> A computer is an electronic device which takes an input, processes it and renders the output.</p>
            <p> The computer is very fast and it replaces the boring and tiring mundane tasks</p>
            <p> Computers made our lives much easier</p>`,
        comments:""
        
        
    }
    
};*/




/*function createTemplate(data)
{
    var title=data.title;
    var place=data.place;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var comments=data.comments; 
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
                        ${date} <br>
                    </div>
                    <div>
                        <h3> ${heading} </h3>
                        ${content}
                    </div>
                    <div>
        				<h4> Comments </h4> <hr>
        				<ul id="comm_list">
        				    ${comments}
        				</ul>
    			    </div>
    			    <div>
        				<input type="text" id="comm" placeholder="Type your comments here"/>
        				<button id="comment"> Post </button>
    			    </div>
                </div>
                <script type="text/javascript" src="/ui/articlejs.js">
                </script>
            </body>
        </html>`;
    return htmlTemplate;
}*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool=new Pool(config);
app.get('/test-db',function(req,res) {
   
    pool.query('SELECT * FROM article', function (err,result){
       if(err) res.status(500).send(err.toString());
       else res.send(JSON.stringify(result.rows));
    });
});




var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});


var names=[];
app.get('/submitname/', function (req, res) {
 var name=req.query.name;
 names.push(name);
 res.send(JSON.stringify(names));
});

function hash(input,salt){
    var output=crypto.pbkdf2Sync(input,salt , 100000, 512, 'sha512');
    return ['pbkdf2Sync','10000',salt,output.toString('hex')].join('$');
}

app.get("/hash/:input",function(req,res){
    var salt='randomized-value-for-salt';
   var input=req.params.input;
   var output=hash(input,salt);
   res.send(output);
});

app.post("/create-user",function(req,res){
   var username=req.body.username;
   var password=req.body.password;
   var salt=crypto.randomBytes(128).toString('hex');
   var hpassword=hash(password,salt);
   pool.query('INSERT INTO "user"(username,password) VALUES ($1, $2)',[username,hpassword],function(err,response){
      if(err) res.status(500).send(err.toString());
      else res.send("User successfully created for"+username); 
   });
});


app.post("/login",function(req,res){
   var username=req.body.username;
   var password=req.body.password;
   
   pool.query('SELECT * FROM "user" where username= $1',[username],function(err,result){
      if(err) res.status(500).send(err.toString());
      else if(result.rows[0].length===0) res.status(404).send("Not found");
      else{
          storedPassword=result.rows[0].password;
          hpassword=hash(password,storedPassword.split('$')[2]);
          if(storedPassword===hpassword) res.send("Login Successful");
          else res.send("Login Failed");
          
      }
   });
});


/*app.get("/:articleName",function (req,res){
   var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
    
});

app.get("/articles/:articleName",function (req,res){
   pool.query("SELECT * FROM article where title=$1",[req.params.articleName],function(err,result){
      if(err) res.status(500).send(err.toString());
      else if(result.rows.length===0) res.status(404).send("Not found");
      else res.send(createTemplate(result.rows[0]));
   });
   
    
});

var comments=[];
app.get("/:articleName/submitcomment/",function(req,res){
   var articleName=req.params.articleName;
    var comm=req.query.comment;
    comments.push(comm);
   res.send(JSON.stringify(comments));
    
    //res.send(JSON.stringify(comments));
});*/






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/articlejs.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articlejs.js'));
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
