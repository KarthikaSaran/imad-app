var element=document.getElementById("textq");
element.innerHTML="Hi";
var img=document.getElementById("img1");

var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.margin.left=marginLeft+"px";
}
img.onClick=function(){
    var interval=setInterval(moveRight(),50);
};