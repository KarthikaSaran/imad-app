var button1=document.getElementById("counter");

button1.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
              
               var counter=request.responseText;
               
               var span=document.getElementById("count");
               span.innerHTML=counter.toString();
           } 
        }
    };
request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/counter',true);
request.send(null);   
};

var name1=document.getElementById("name").value;

var button2=document.getElementById("submit");
button2.onclick=function(){
    var names=['Smrithi','Srijanani'];
    var list='';
    for(var i=0;i<names.length;i++)
        list+='<li>'+names[i]+'</li>';
   document.getElementById("nameList").innerHTML=list; 
}