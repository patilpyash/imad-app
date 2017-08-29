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

var button = document.getElementById('counter');
button.onclick = function() {
    //create a request obj
    var request =new XMLHttpRequest();
    //capture respone in another variable
    request.onreadystatechange = function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //take action
            if(request.status==200){
                var counter = request.resposeText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //make the req
    request.open('GET','http://patilpyash.imad.hasura-app.io',true)
    request.send("NULL")
};