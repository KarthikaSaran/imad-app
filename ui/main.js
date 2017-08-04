var button1=document.getElementById("counter");

button1.onclick=function(){
    var request=new XMLHttpRequest();
    request.onReadyStateChanged=function() {
        if(request.readyState==XMLHttpRequest.DONE) {
           if(request.status==200){
               var counter=request.responseText;
               counter=counter+1;
               span.innerHTML=counter.toString();
           } 
        }
    };
 rrequest.send(null);   
};