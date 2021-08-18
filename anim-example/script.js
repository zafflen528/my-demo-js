const spinner = document.querySelector('div');
const bodyClick = document.querySelector('body');

let rotateCount = 0;
let startTime = null;
let rAF;
let spinning = false;

function draw(timestamp){
    if(!startTime){
        startTime = timestamp;
    }
    rotateCount = (timestamp - startTime)/3;
    rotateCount %= 360;
    spinner.style.transform = 'rotate('+rotateCount+'deg)';
    rAF = requestAnimationFrame(draw);
}

bodyClick.addEventListener('click', ()=>{
    if(spinning){
        cancelAnimationFrame(rAF);
        spinning = false;
    }else{
        draw();
        spinning=true;
    }
});
