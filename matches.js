// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule"))

var favArr = JSON.parse(localStorage.getItem("favourites")) || []

displayData(matchArr)

function displayData(data){
  data.forEach(function (elem){
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = elem.matchNo

    var td2 = document.createElement("td")
    td2.innerText = elem.teamA

    var td3 = document.createElement("td")
    td3.innerText = elem.teamB

    var td4 = document.createElement("td")
    td4.innerText = elem.tarik

    var td5 = document.createElement("td")
    td5.innerText = elem.ven

    var td6 = document.createElement("td")
    td6.innerText = "Favourite"
    td6.style.cursor = "pointer"
    td6.addEventListener("click",function(){
      favBtn(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr)
  })
}

function favBtn(elem){
  favArr.push(elem)
  console.log(favArr)
  localStorage.setItem("favourites",JSON.stringify(favArr))
}

function sort(){
  var select = document.querySelector("#filterVenue").value

  var state = favArr.filter
}