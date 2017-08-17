var button5 = document.getElementById("submitdb");
button5.onclick = function(){
    console.log("inside onclick function");
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  console.log(name+password);
  if (password === confirmpassword) {
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200) alert("user created successfully");
        }
    request.open('POST','http://karthikaraghavendrar7.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-type','application/json');
    request.send(JSON.stringify({username:name,password:password}));  
  };
  }
};

