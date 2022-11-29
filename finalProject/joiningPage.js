let jsonData = localStorage.getItem("https://jordankraude.github.io/wdd230/finalProject/fpjoin.html")

data = JSON.parse(jsonData)
document.getElementById("joinName").textContent = data.firstname

function createMembershipCode(){
    // If this was real I could check to make sure the calculated code does not already exist. If it does recur to get a new number.
    var number1 = Math.floor(Math.random() * 10) * 100000000
    var number2 = Math.floor(Math.random() * 10) * 10000000
    var number3 = Math.floor(Math.random() * 10) * 1000000
    var number4 = Math.floor(Math.random() * 10) * 100000
    var number5 = Math.floor(Math.random() * 10) * 10000
    var number6 = Math.floor(Math.random() * 10) * 1000
    var number7 = Math.floor(Math.random() * 10) * 100
    var number8 = Math.floor(Math.random() * 10) * 10
    var number9 = Math.floor(Math.random() * 10) * 1

    var membershipCode = number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9

    if (!localStorage.getItem('code')){
    localStorage.setItem("code", membershipCode)
    document.getElementById('memberNumber').textContent = localStorage.getItem('code')
    }
    else{
        document.getElementById('memberNumber').textContent = localStorage.getItem('code')
    }
}


