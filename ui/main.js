var button=document.getElementById("counter");
var count=0;
button.onClick=function(){
    var span=document.getElementById("count");
    count=count+1;
    span.innerHTML=count.toString();
};