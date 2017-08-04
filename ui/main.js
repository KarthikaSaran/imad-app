var button1=document.getElementById("counter");

button1.onclick=function(){
    var request=new XMLHttpRequest();
    request.onReadyStateChange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
            console.log("In");
           if(request.status===200){
              
               var counter=request.responseText;
               console.log(counter);
               var span=document.getElementById("count");
               span.innerHTML=counter.toString();
           } 
        }
    };
request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/counter',true);
request.send(null);   
};