var button1=document.getElementById("counter");
var counter=0;
button1.onclick=function(){
    var span=document.getElementById("count");
    counter=counter+1;
    span.innerHTML=counter.toString();
};