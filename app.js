const container = document.querySelector(".container");
const search = document.querySelector(".search_box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const image = document.querySelector('.weather-box img');
const error404 = document.querySelector('.not-found');
search.addEventListener('click',()=>{
    const APIKey = 'c5c84538a9a1dfbb009610ea38ea2e7d';
    const city = document.querySelector(".search_box input").value;

    if(city === ''){
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

        if(json.cod == '404'){
            container.computedStyleMap.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }
        container.style.height = '520px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active');
        
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        console.log(json)
        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'file:///C:/Users/ABHISHEK%20MITRA/OneDrive/Desktop/weather%20app/clear.png';
                break;
            case 'Rain':
                image.src = 'file:///C:/Users/ABHISHEK%20MITRA/OneDrive/Desktop/weather%20app/rain.png';
                break; 
            case 'Snow':
                image.src = 'file:///C:/Users/ABHISHEK%20MITRA/OneDrive/Desktop/weather%20app/snow.png';
                break;
            case 'Clouds':
                image.src = 'file:///C:/Users/ABHISHEK%20MITRA/OneDrive/Desktop/weather%20app/cloud.png';
                break;
            case 'Mist':
                image.src = 'file:///C:/Users/ABHISHEK%20MITRA/OneDrive/Desktop/weather%20app/mist.png';
                break;
            case 'Haze':
                image.src = 'file:///C:/Users/ABHISHEK%20MITRA/OneDrive/Desktop/weather%20app/cloud.png';
                break;
            default:
                image.src = 'file:///C:/Users/ABHISHEK%20MITRA/OneDrive/Desktop/weather%20app/404.png';
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity} %`;
        wind.innerHTML = `${parseInt(json.wind.speed)} <span>Km/h</span>`;
    });
    
})