var button = document.getElementById("signout");
button.onclick = function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
         
         if(request.readyState===XMLHttpRequest.DONE) {
            if(request.status===200) 
               alert("Logged out");
        }
     
  }; 
 request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/logout',true);
 request.send(null);  
};
