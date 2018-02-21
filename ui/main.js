//counter
var button=document.getElementById('counter');
var counter=0;
button.onClick=function(){
      //makes request to counter endpoint
      //capture the rsponse and store in a var
 
     counter++; //render the variable in correct span
     var span=document.getElementById('count');
     span.innerHTML=counter.toString();
};