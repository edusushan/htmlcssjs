const body=document.body;

const buttom=document.querySelector('.switch');
const paragraph=document.querySelector('.color');

buttom.addEventListener('click',function(){
  let color1=  getRandomNumber();
   let color2= getRandomNumber();
   let color3= getRandomNumber();

   const colorString = `rgb(${color1},${color2},${color3})`
   paragraph.innerText= colorString;
   body.style.backgroundColor=colorString;



});

function getRandomNumber(){
    return Math.floor(Math.random( )* 256);
}