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

request.open('GET','http://shivendra12091999.imad.hasura-app.io/counter',true);
request.send(null);
};
