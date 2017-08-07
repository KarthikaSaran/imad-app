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



var button2=document.getElementById("submit");
button2.onclick=function(){
    var name1=document.getElementById("name").value;
    document.getElementById("name").value='';
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
              
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++)
                    list+='<li>'+names[i]+'</li>';
           }
        }
    document.getElementById("namelist").innerHTML=list; 
    };
    request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/submitname/?name='+name1,true);
    request.send(null);    
};

var button3=document.getElementById("comment").onclick=function(){
	var comm=document.getElementById("comm").value;
	document.getElementById("comm").value='';
	var request=new XMLHttpRequest();
	request.onreadystatechange=function(){
		if(request.readyState==XMLHttpRequest.DONE) {
			if(request.status===200) {
				var comments=JSON.parse(request.responseText);
				var list='';
				for(var i=0;i<comments.length;i++)
                    list+='<li>'+comments[i]+'</li>';
				
				
			}
		}
	document.getElementById("comm_list").innerHTML=list;
	};
	request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/'+this.document.title.split(" ")[0]+'submitcomment/?comment='+comm+'/?article='+this.document.title.split(" ")[0],true);
    request.send(null); 
};