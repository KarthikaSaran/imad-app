var button3=document.getElementById("comment");
button3.onclick=function(){
	var comm=document.getElementById("comm").value;
	document.getElementById("comm").value='';
	var request=new XMLHttpRequest();
    var articleName=document.title.split(" ")[0].toLowerCase();
    request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/'+articleName+'/submitcomment/?comment='+comm,true);
    request.send(null); 
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
              
                var comments=request.responseText;
                console.log(comments);
                comments=JSON.parse(comments);
                var list='';
                for(var i=0;i<comments.length;i++)
                    list+='<li>'+comments[i]+'</li>';
                document.getElementById("comm_list").innerHTML=list; 
           }
        }
	

	
};


};