const weatherApi={
    key:"10201ff743875a037cfeeb4fccdcea69",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
// lat={lat}&lon={lon}&appid={API key}


const searchinputbox=document.getElementById('input-box');

searchinputbox.addEventListener('keypress',(event)=>{
  if (event.keyCode==13){
 console.log(searchinputbox.value)
 getweatherReport(searchinputbox.value);
 document.querySelector('.details').style.display="block";
  }
})
//call anynomous function ,event listner function on key press

//get weather report

function getweatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showweatherReport);
}

//show weather report in html
  function showweatherReport(weather){
    // console.log(weather);


    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;


    let temperature=document.getElementById('temp');
    
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;c`;


    let minmaxtemp=document.getElementById('min-max');
    minmaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c (min)/${Math.ceil(weather.main.temp_max)}&deg;c (max)`
  
    let weathercondition=document.getElementById('weather');
    weathercondition.innerText=`${weather.weather[0].main}`

    let date=document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    // if(weathercondition.textContent=='rain'){
    //     document.body.style.backgroundImage="url('')";
    // } else if()

   



}

//date manage

function dateManage(dateArg){
    let days=["sunday","monday","Tuesday","wednesday","Thrusday","Friday","Saturday"];

    let months=["jan","Feb","Mar","Apr","May","jun","jul","Aug","Sept","oct","Nov","Dec"]
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()]


    return `${date} ${month} ${(day)}, ${year}`
}






// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// dba50ad48a4e2c1433d97ba045f7b13a