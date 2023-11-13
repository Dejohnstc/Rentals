let div = document.querySelector('.div');
let butt = document.querySelector('#butt');

div.onclick = function(){
    butt.classList.toggle('toggle_nav');
}




let loader_backdrop = document.getElementById('loader-backdrop');
let loader_itself = document.getElementById('loader-itself');

// function loadUp() {
setTimeout(() =>{
    loader_backdrop.style.transition = "1s";
    loader_backdrop.style.display = "none";
    loader_itself.style.opacity = "0";
},1000);
// }