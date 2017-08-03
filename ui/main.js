var element=document.getElementById("textq");
element.innerHTML="Hi";
var img1=document.getElementById("img1");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img1.style.marginLeft=marginLeft+"px";
}
img1.onClick=function(){
    var interval=setInterval(moveRight,50);
};