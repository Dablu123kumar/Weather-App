const InputBox = document.querySelector('input')
const SearchBtn = document.querySelector('.searchBtn')
const images = document.querySelector('img')
const Temperature = document.querySelector('.temp')
const Description = document.querySelector('.description')
const WindSpeed = document.querySelector('.windS')
const Humidity = document.querySelector('.humidity')
const FeelsLike = document.querySelector('.feels')
const cityName = document.querySelector('.name')
const NotFound = document.querySelector('.error404')
const MainContainer = document.querySelector('.mainContainer')
const ReStartBtn = document.querySelector('.reStart')

async function checkWeither(city){
    const API_KEY = 'fd7fcb471a37bf9a5f42278da13d7d4a'
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  const weitherData = await fetch(`${API_URL}`)
  .then(res => res.json())
 

  if(weitherData.cod === `404`){
   NotFound.classList.add('visible')
   MainContainer.classList.add('none')
    return
   
  }
   cityName.innerHTML = `${weitherData.name}`
  
  Temperature.innerHTML = `${Math.round(weitherData.main.temp-273.15)}°C`
  FeelsLike.innerHTML = `${Math.round(weitherData.main.feels_like-273.15)}°C`
  Description.innerHTML = `${weitherData.weather[0].description}`
  Humidity.innerHTML =`${weitherData.main.humidity} %`
  WindSpeed.innerHTML =`${weitherData.wind.speed} km/h`
// set images 
switch(weitherData.weather[0].main){
    case 'Clear' : images.src = './assets/clear.png';
    break;
    case 'Clouds' : images.src = './assets/cloud.png';
    break;
    case 'Rain' : images.src = './assets/rain.png';
    break;
    case 'Mist' : images.src = './assets/mist.png';
    break;
    case 'Snow' : images.src = './assets/snow.png';
    case 'Haze' : images.src = './assets/haze.png';
}

}

SearchBtn.addEventListener('click' , () => {
    checkWeither(InputBox.value)
})

ReStartBtn.addEventListener('click', () => {
    location.reload()
}
)










 
// fetch(API_URL)
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// }) 