const ConvertButton = document.querySelector(".convert-button")

function convertValues(){

const inputCurrencyValue = document.querySelector(".input-currency").value
const dolarToday = 5.20
const convertedValue = inputCurrencyValue / dolarToday

console.log(convertedValue)

}



ConvertButton.addEventListener("click",convertValues);