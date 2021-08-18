const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */



for(let i = 1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/pic'+i+'.jpg');
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',function changeDisplay() {
        displayedImage.setAttribute('src',newImage.getAttribute('src'));
    })
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function darkenLighten(){
    let currName = btn.getAttribute('class','dark');
    if(currName === 'dark'){
           btn.setAttribute('class','light');
           btn.textContent = 'Lighten';
           overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
           btn.setAttribute('class','dark');
           btn.textContent = 'Darken';
           overlay.style.backgroundColor = "rgba(0,0,0,0)"
    }
});