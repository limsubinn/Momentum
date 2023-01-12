const API_KEY = "***"

function onGeoOk(position) {
    const x = position.coords.latitude
    const y = position.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=${API_KEY}&units=metric`
    // https://openweathermap.org/api
    
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`

        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
    })
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)