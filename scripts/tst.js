
var webgazer = document.createElement('script');
webgazer.src = 'scripts/WebGazer/www/webgazer.js';
document.head.appendChild(webgazer);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function mute(){
    await sleep(5000);  
  
    // webgazer.begin();
    webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
    return;
    }
    // console.log(data.x);
    // console.log(data.y);
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    var circle = document.getElementById("circle");
    var square = document.getElementById("square");
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    var h = window.innerHeight  || document.documentElement.clientHeight || document.body.clientHeight;
    // var bound = square.getBoundingClientRect();
    circle.style.left=xprediction+"px";
    circle.style.top=yprediction+"px";
    if(yprediction <=100){
        window.scrollBy(0,-100);
    }
    if(xprediction <=100){
        window.scrollBy(-100,0);
    }
    if(yprediction> h-100){
        window.scrollBy(0,100);
    }
    if(xprediction> w-100){
        window.scrollBy(100,0);
    }
    // console.log(bound.top)
    square.style.left=xprediction+"px";
    square.style.top=yprediction+"px";
    // console.log(elapsedTime); //elapsed time is based on time since begin was called
    }).begin();
   
    
    }
    mute();
    


