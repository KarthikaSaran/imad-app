var button1=document.getElementById("counter");

button1.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
              
               var counter=request.responseText;
               
               var span=document.getElementById("count");
               span.innerHTML=counter.toString();
           } 
        }
    };
request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/counter',true);
request.send(null);   
};



var button2=document.getElementById("submit");
button2.onclick=function(){
    var name1=document.getElementById("name").value;
    document.getElementById("name").value='';
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
              
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++)
                    list+='<li>'+names[i]+'</li>';
                document.getElementById("namelist").innerHTML=list; 
           }
        }
    
    };
    request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/submitname/?name='+name1,true);
    request.send(null);    
};

var button3=document.getElementById("login");
button3.onclick=function(){
    var username=document.getElementById("username").value;
    document.getElementById("username").value='';
    var password=document.getElementById("password").value;
    document.getElementById("password").value='';
    console.log(username,password);
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200) document.location.href='http://karthikaraghavendrar7.imad.hasura-app.io/welcome';
           else if(request.status===403) alert("Login Failed");
           else if(request.status===404) alert("User not available");
           else if(request.status===500) alert("Something went wrong");
        }
    
    };
    request.open('POST','http://karthikaraghavendrar7.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-type','application/json');
    request.send(JSON.stringify({username:username,password:password}));    
};

var button4 = document.getElementById("signup");
button4.onclick = function(){
var request = new XMLHttpRequest();
request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200) window.location.href="http://karthikaraghavendrar7.imad.hasura-app.io/registration";
        }
};
request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/registration',true);
request.send(null);   
};

var button5 = document.getElementById("submitdb");
button5.onclick = function(){
    console.log("inside onclick function");
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  if (password === confirmpassword) {
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200) alert("Login Successful");
           else if(request.status===403) alert("Login Failed");
           else if(request.status===404) alert("User not available");
           else if(request.status===500) alert("Something went wrong");
        }
    request.open('POST','http://karthikaraghavendrar7.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-type','application/json');
    request.send(JSON.stringify({username:name,password:password}));  
  };
  }
};
