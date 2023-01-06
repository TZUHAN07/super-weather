let nowshowcity = ""

function getfeildData(city) {
    let citydetail = document.getElementById("fieldNameText_" + city)

    if (nowshowcity != "") {
        nowshowcity.style.display = "none"
    }
    nowshowcity = citydetail
    citydetail.style.display = "block"
}

