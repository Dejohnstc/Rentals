let div = document.querySelector('.div');
let butt = document.querySelector('#butt');

div.onclick = function(){
    butt.classList.toggle('toggle_nav');
}

let loaderbody = document.querySelector('.loaderbody');
let loader = document.querySelector('.loader');

setTimeout (() =>{
    loaderbody.style.transition = "1s";
    loaderbody.style.display = "none";
    loader.style.opacity = "0";
},1000)