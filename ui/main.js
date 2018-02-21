//counter code
var button = document.getElementById('counter');


button.onclick = function() {
    
    // creating a request
    
    var request = new XMLHttpRequest();
    
    //capture the response and store it in the variable
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200) {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                span.innerHTML=counter.toString();             
            }
        }
    };

request.open('GET','http://vatsaakhil.imad.hasura-app.io/counter',true);
request.send(null);
};


//submit name 
var nameInput=document.getElementById("name");
var name= nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
     var request = new XMLHttpRequest(); //make server request and send name
     
     
    //capture and render name list
    
      request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200) {
                  var names=request.responseText;
                  names=JSON.parse(names);
    var list='';
    for(var i=0; i<names.length;i++) {
        list+='<li>'+names[i]+ '</li>'
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
                           
            }
        }
    };
request.open('GET','http://vatsaakhil.imad.hasura-app.io/submit-name='+name,true);
request.send(null);
  
}