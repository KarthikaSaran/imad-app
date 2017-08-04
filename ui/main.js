var button1=document.getElementById("counter");

button1.onclick=function(){
    var request=new XMLHttpRequest();
    request.onReadyStateChange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
               alert(request.responseText);
               var counter=request.responseText;
               console.log(counter);
               counter=counter+1;
               span.innerHTML=counter.toString();
           } 
        }
    };
request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/counter',true);
request.send(null);   
};