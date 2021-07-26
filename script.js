const cityName = document.querySelectorAll(".city-name");

for (let i = 0; i < cityName.length; i++) {
    cityName[i].onclick = function() {
        alert("Loading weather report...");
    }
}


document.querySelector(".cookie-accept-btn").onclick = function() {
    let element = document.getElementById("cookie");
    element.remove();
}


function convertToC(num) {
    return Math.round((num-32) * 5 / 9);
}

function convertToF(num) {
    return Math.round(num * 9 / 5 + 32);
}

console.log(document.querySelector("#temp-unit").value);



let temp = document.querySelectorAll(".temp");

document.querySelector("#temp-unit").onchange = function() {
    let currentUnit = document.querySelector("#temp-unit").value;
    if (currentUnit === "F") {
        for (let i = 0; i < temp.length; i++) {
            let holder = parseInt(temp[i].innerText, 10);
            holder = convertToF(holder);
            temp[i].innerText = holder;
            
        }
    }
    if (currentUnit === "C") {
        for (let i = 0; i < temp.length; i++) {
            let holder = parseInt(temp[i].innerText, 10);
            holder = convertToC(holder);
            temp[i].innerText = holder;
            
        }
    }
}