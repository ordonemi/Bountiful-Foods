const temp = document.querySelector("#temp-today");
const icon = document.querySelector("#today-icon");
const conditions = document.querySelector("#conditions-today");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.158092&lon=-117.350594&appid=d1b070fe2f96f702ee25c897fbb773f5&units=imperial";

async function getWeather()
{
    try
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const weatherData = await response.json();
            displayWeather(weatherData);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

function displayWeather(data)
{
    conditions.innerHTML = `Humidity: ${data.main.humidity}%`;
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F - ${data.weather[0].description}`;  
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src',iconsrc);
    icon.setAttribute('alt',data.weather[0].description);
}

getWeather();