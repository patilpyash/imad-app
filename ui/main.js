console.log('Loaded!');
var element = document.getElementById('text');
element.innerHTML="New Text";
var img = document.getElementById('madi');
var marginLeft = 10;
function moveRight(){
    marginLeft = marginLeft +'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
    img.style.marginLeft='100px';
};