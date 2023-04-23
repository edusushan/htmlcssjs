
const checkbox=document.querySelector('input[name="theme"]')

let htmlElement=document.documentElement;

checkbox.addEventListener("click",function(){
    if(checkbox.checked){
        htmlElement.classList.toogle('transition');
        htmlElement.setAttribute("data-theme","dark");
    } else{
    htmlElement.classList.toogle('transition')
    htmlElement.setAttribute('data-theme',"light");
    }
})