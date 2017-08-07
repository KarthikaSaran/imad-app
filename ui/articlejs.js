var button3=document.getElementById("comment");
button3.onclick=function(){
	var comm=document.getElementById("comm").value;
	document.getElementById("comm").value='';
	var request=new XMLHttpRequest();
    var articleName=document.title.split(" ")[0].toLowerCase();
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
              
                var comments=request.responseText;
                comments=JSON.parse(comments);
                var list='';
                for(var i=0;i<names.length;i++)
                    list+='<li>'+names[i]+'</li>';
                document.getElementById("comm_list").innerHTML=list; 
           }
        }
	request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/'+articleName+'/submitcomment/?comment='+comm,true);
    request.send(null); 


	
};
};