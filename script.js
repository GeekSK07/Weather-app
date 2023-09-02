const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '77603f8429msh05e67f8926165d4p110febjsn32c8dd3d7cbd',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then((response) =>{
        console.log(response)

        cloud_pcts.innerHTML = response.cloud_pct
        temps.innerHTML = response.temp
        feels_likes.innerHTML = response.feels_like
        humiditys.innerHTML = response.humidity
        min_temps.innerHTML = response.min_temp
        max_temps.innerHTML = response.max_temp
        wind_speeds.innerHTML = response.wind_speed
        wind_degreess.innerHTML = response.wind_degrees
        sunrises.innerHTML = response.sunrise
        sunsets.innerHTML = response.sunset

    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then((response) =>{
        console.log(response)

        cloud_pctb.innerHTML = response.cloud_pct
        tempb.innerHTML = response.temp
        feels_likeb.innerHTML = response.feels_like
        humidityb.innerHTML = response.humidity
        min_tempb.innerHTML = response.min_temp
        max_tempb.innerHTML = response.max_temp
        wind_speedb.innerHTML = response.wind_speed
        wind_degreesb.innerHTML = response.wind_degrees
        sunriseb.innerHTML = response.sunrise
        sunsetb.innerHTML = response.sunset

    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) =>{
        console.log(response)

        cloud_pctl.innerHTML = response.cloud_pct
        templ.innerHTML = response.temp
        feels_likel.innerHTML = response.feels_like
        humidityl.innerHTML = response.humidity
        min_templ.innerHTML = response.min_temp
        max_templ.innerHTML = response.max_temp
        wind_speedl.innerHTML = response.wind_speed
        wind_degreesl.innerHTML = response.wind_degrees
        sunrisel.innerHTML = response.sunrise
        sunsetl.innerHTML = response.sunset

    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Japan', options)
    .then(response => response.json())
    .then((response) =>{
        console.log(response)

        cloud_pctj.innerHTML = response.cloud_pct
        tempj.innerHTML = response.temp
        feels_likej.innerHTML = response.feels_like
        humidityj.innerHTML = response.humidity
        min_tempj.innerHTML = response.min_temp
        max_tempj.innerHTML = response.max_temp
        wind_speedj.innerHTML = response.wind_speed
        wind_degreesj.innerHTML = response.wind_degrees
        sunrisej.innerHTML = response.sunrise
        sunsetj.innerHTML = response.sunset

    })

