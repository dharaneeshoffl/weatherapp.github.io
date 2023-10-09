document.addEventListener("DOMContentLoaded",()=>{
    let cityfind = document.getElementById("city_find")
    let city_name = document.getElementById("city-name")
    let getweather = document.getElementById("search_btn")
    let temperature = document.getElementById("temperature")
    let weatherdesc = document.getElementById("weather-description")

    getweather.addEventListener("click",()=>{
        let city = cityfind.value;
        if (city) {
            getWeatherData(city)
        } else {
            alert("please enter city name")
        }
    })

    async function getWeatherData(city) {
        let apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        
            let response = await fetch(apiUrl)
            console.log(response);
            let data = await response.json()
            console.log(data)
            
                city_name.innerHTML = `Weather in ${data.name}, ${data.sys.country}`
                temperature.innerHTML = `Temperature in ${data.name} is ${Math.round(data.main.temp)}°C`
                weatherdesc.innerHTML = `Weather report in ${data.name} is ${data.weather[0].main}`
            
           
        
    }



})