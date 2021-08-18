const uoList = document.querySelector('ul');
const inp = document.querySelector('input');
const but = document.querySelector('button');

but.addEventListener('click',()=>{
    let valInp = inp.value;
    inp.value = "";
    const liItem = document.createElement('li');
    const liTxt = document.createElement('span');
    const liButton = document.createElement('button');
    liItem.appendChild(liTxt);liItem.appendChild(liButton);
    liTxt.textContent = valInp;
    liButton.textContent = "Delete";
    uoList.appendChild(liItem);

    liButton.addEventListener('click',()=>{
        liItem.remove();
    });

    inp.focus();
})