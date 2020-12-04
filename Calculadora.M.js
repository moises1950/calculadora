var numero1 = 0
var numero2 = 0
var operador1




function calcular(numero1, numero2, operador) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "%": return numero1 % numero2
        case "/": return numero1 / numero2
    }
}

function setarNumeros(numero) {
    var valor = document.getElementById("btnVisor").innerText
    if (!operador1) {
        numero1 = valor + numero
    }
    else {
        numero2 = numero2 + "" + numero
    }
    document.getElementById("btnVisor").innerHTML += numero
}

function setarOperador(op) {
    if (!operador1) {
        operador1 = op
    }
    else {
        setarResultado()
        operador1 = op
    }
    document.getElementById("btnVisor").innerHTML += op
}

function setarResultado() {
    var resultado = 0
    if (operador1) {
        resultado = calcular(parseFloat(numero1),parseFloat(numero2), operador1)
    }
    document.getElementById("btnVisor").innerHTML = resultado
    operador1 = ""
    numero2 = 0
    numero1 = resultado
}

function Apagar() {
    numero1 = 0
    numero2 = 0
    operador1 = ""
    document.getElementById("btnVisor").innerHTML = ""

}







