/*
console.log('Loaded!');
var element = document.getElementById('text');
element.innerHTML="New Text";
var img = document.getElementById('madi');
var marginLeft = 10;
function moveRight(){
    marginLeft = marginLeft +10;
    img.style.marginLeft= marginLeft + 'px';

}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};
*/
//counter
var counter = 0;
var button = getElementById('counter');
button.onclick = function() {
    //make a request to counter end point
    
    //capture respone in another variable
    
    //render the variable in correct span
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};