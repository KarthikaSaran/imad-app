var button1=document.getElementById("counter");
var counter=0;
button1.onClick=function(){
    var span=document.getElementById("count");
    alert(span);
    counter=counter+1;
    span.innerHTML=counter.toString();
};