console.log('Loaded!');
var element=document.getElementById('main');
//move img
var img=document.getElementById('madi');
var marginLeft=0;

    function moveRight(){
        marginLeft=marginLeft+1;
        img.style.marginLeft=marginLeft+"px";
    }
    img.onclick=function() {
    var interval=setInterval(moveRight,50);
};