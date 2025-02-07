const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&appid=d1b070fe2f96f702ee25c897fbb773f5&units=imperial";
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const firstDay = document.querySelector("#first-day");
const firstIcon = document.querySelector("#first-icon");
const firstTemp = document.querySelector("#first-temp");

const secondDay = document.querySelector("#second-day");
const secondIcon = document.querySelector("#second-icon");
const secondTemp = document.querySelector("#second-temp");

const thirdDay = document.querySelector("#third-day");
const thirdIcon = document.querySelector("#third-icon");
const thirdTemp = document.querySelector("#third-temp");


async function getForecast()
{
    try
    {
        const response = await fetch(URL);
        if (response.ok)
        {
            const forecastData = await response.json();
            displayForecast(forecastData);
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

function displayForecast(data){
    firstDay.innerHTML = dayNames[new Date(data.list[3].dt*1000).getDay()];
    const firstSrc = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;
    firstIcon.setAttribute('src',firstSrc);
    firstIcon.setAttribute('alt',data.list[4].weather[0].description);
    firstTemp.innerHTML = `${data.list[4].main.temp.toFixed(0)}&deg;F - ${data.list[4].weather[0].description}`;

    secondDay.innerHTML = dayNames[new Date(data.list[11].dt*1000).getDay()];
    const secondSrc = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`;
    secondIcon.setAttribute('src',secondSrc);
    secondIcon.setAttribute('alt',data.list[12].weather[0].description)
    secondTemp.innerHTML = `${data.list[12].main.temp.toFixed(0)}&deg;F - ${data.list[12].weather[0].description}`;

    thirdDay.innerHTML = dayNames[new Date(data.list[19].dt*1000).getDay()];
    const thirdSrc = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`;
    thirdIcon.setAttribute('src',thirdSrc);
    thirdIcon.setAttribute('alt',data.list[20].weather[0].description);
    thirdTemp.innerHTML = `${data.list[20].main.temp.toFixed(0)}&deg;F - ${data.list[20].weather[0].description}`;
}

getForecast();