let nowshowcity = ""
<<<<<<< HEAD
// 取得有棒球場縣市資料
function getfeildData(city){
    let citydetail= document.getElementById("fieldNameText_" + city)
    
    if (nowshowcity!=""){
        nowshowcity.style.display="none"
    }
    nowshowcity=citydetail
    citydetail.style.display="block"
}
// 取得無棒球場縣市資料
function noField(){
    const nofield=document.getElementsByClassName("nofield")
    for (let index = 0; index < nofield.length; index++) {
        nofield[index].addEventListener("click",function(){
            nowshowcity.style.display="none"
        })   
    }
}
=======

function getfeildData(city) {
    let citydetail = document.getElementById("fieldNameText_" + city)

    if (nowshowcity != "") {
        nowshowcity.style.display = "none"
    }
    nowshowcity = citydetail
    citydetail.style.display = "block"
}

>>>>>>> develop

function getfeildData(city){
    let citydetail= document.getElementById("fieldNameText_" + city)
    
    if (nowshowcity!=""){
        nowshowcity.style.display="none"
    }
    nowshowcity = citydetail
    citydetail.style.display = "block"
}

