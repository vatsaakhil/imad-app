//counter
var button=document.getElementById('counter');

button.onclick=function(){
     var request=new XMLHttpRequest();   //creates a request to counter endpoint
    
request.onreadystatechange = function(){  //capture the rsponse and store in a var

if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // Everything is good, the response was received.
       if(request.status===200) {
          var counter= request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
       }
} 


};
 
 
 //make a request
 request.open('GET','http://vatsaakhil.imad.hasura-app.io/counter',true);
 request.send(null);
};