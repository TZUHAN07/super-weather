let nowshowcity = ""

function getfeildData(city) {
    let citydetail = document.getElementById("fieldNameText_" + city)

    if (nowshowcity != "") {
        nowshowcity.style.display = "none"
    }
    nowshowcity = citydetail
    citydetail.style.display = "block"
}

document.querySelectorAll('.baseballField').forEach(field => {
    field.addEventListener('click', () => {
        baseball_field = field.textContent
        console.log(field.textContent)

        const chooseoutside = document.querySelectorAll('.chooseoutside')
        chooseoutside.forEach(element => {
            element.style.display = 'none'
        })


        region = String(Object.keys(obj[baseball_field]))
        api_city = String(Object.values(obj[baseball_field]))
        api_city_week = (parseInt(api_city) + 2).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })

        fetchWeather(api_city, region)
        weeklyWeather(api_city_week, region)
    })
})


document.querySelectorAll('.select').forEach(field => {
    field.addEventListener('click', () => {
        baseball_field = field.textContent
        console.log(field.textContent)

        region = String(Object.keys(obj[baseball_field]))
        api_city = String(Object.values(obj[baseball_field]))
        api_city_week = (parseInt(api_city) + 2).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })

        fetchWeather(api_city, region)
        weeklyWeather(api_city_week, region)
    })
})