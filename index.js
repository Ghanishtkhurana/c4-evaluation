// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchdata)

var matchArr = JSON.parse(localStorage.getItem("schedule")) || []

function matchdata(){
  event.preventDefault()

  var preObj = {
    matchNo : masaiForm.matchNum.value,
    teamA : masaiForm.teamA.value,
    teamB : masaiForm.teamB.value,
    tarik : masaiForm.date.value,
    ven : masaiForm.venue.value,
  }

  matchArr.push(preObj)
  console.log(matchArr)
  localStorage.setItem("schedule",JSON.stringify(matchArr))
  window.location.href = "matches.html"
}