console.log('Loaded!');
var element = document.getElementById('text');
element.innerHTML("New Text");
var img = document.getElementById('madi');
function moveRight(){
    var marginLeft = 10;
    marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
    image.style.marginLeft='100px';
};