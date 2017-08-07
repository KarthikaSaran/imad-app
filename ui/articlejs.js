var button3=document.getElementById("comment");
button3.onclick=function(){
	var comm=document.getElementById("comm").value;
	document.getElementById("comm").value='';
	var request=new XMLHttpRequest();
    var articleName=document.title.split(" ")[0];
    console.log(articleName);
    articleName[0]='a';
	request.open('GET','http://karthikaraghavendrar7.imad.hasura-app.io/'+articleName+'/submitcomment/?comment='+comm,true);
    request.send(null); 


	
};
