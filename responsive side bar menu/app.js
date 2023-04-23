const togglebtn=document.querySelector(".toggle-btn");

const mainHeader=document.querySelector(".main-header");
const overlay=document.querySelector('.overlay');

togglebtn.addEventListener('click',function(){
    togglebtn.classList.toggle('open');
    overlay.classList.toggle('open');
    mainHeader.classList.toggle('open');
})