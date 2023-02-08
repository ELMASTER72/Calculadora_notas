const note1 = document.getElementById("number1")
const note2 = document.getElementById("number2")
const note3 = document.getElementById("number3")
const result = document.getElementById("result")
const button = document.getElementById("operate")
const recovery = document.getElementById("recover")
const winner = document.getElementById("win")
const honors = document.getElementById("honor_win")

button.addEventListener("click",calculate);
button.addEventListener("click",qualification_3)

function calculate() {
    let n1 = Number(note1.value)
    let n2 = Number(note2.value)
    let n3 = Number(note3.value)

    let sum = ((n1*0.30)+(n2*0.30)+(n3*0.40)).toFixed(2)
    result.textContent = sum
}


function qualification_3(){
    if(note3.value.length === 0){
        recovery.textContent = "La tercera nota debe ser: " + ((2.1 - result.textContent)/0.40).toFixed(3) + " para tener la psibilidad de recuperar"
        winner.textContent = "Para ganar necesita: " + ((3.5 - result.textContent)/0.40).toFixed(2)
        honors.textContent = "Para aprobar con honores necesita: " + ((4.6 - result.textContent)/0.40).toFixed(2) 
    }else{
        verify()
    }
}



function verify() {
    if(result.textContent <= 2){
        recovery.textContent = "PERDIO"
    }else if(result.textContent >2 && result.textContent <3.5){
        recovery.textContent = "PUEDE RECUPERAR"
        winner.textContent = "Para ganar necesita: " + (3.5 - result.textContent).toFixed(2) 
        honors.textContent = "Para aprobar con honores necesita: " + (4.6 - result.textContent).toFixed(2) 
    }else if(result.textContent > 3.5 && result.textContent <= 4.5){
        recovery.textContent = "NO NECESITA RECUPERAR"
        winner.textContent = "FELICIDADES APROBO"
        honors.textContent = "Para aprobar con honores necesita: " + (4.6 - result.textContent).toFixed(2) 
    }else if(result.textContent >4.5){
        recovery.textContent = "NO NECESITA RECUPERAR"
        winner.textContent = "FELICIDADES APROBO"
        honors.textContent = "FELICIDADES APROBO CON HONORES"
    }
}

