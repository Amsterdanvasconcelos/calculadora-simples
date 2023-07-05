const inputFirst = 
    document.querySelector('[data-calculadora="input-num-first"]')
const inputSecond = 
    document.querySelector('[data-calculadora="input-num-second"]')
kdfdkjfdjk
const btnSomar = document.querySelector('[data-calculadora="btn-somar"]')
const btnSubtrair = document.querySelector('[data-calculadora="btn-subtrair"]')
const btnMultiplicar = document.querySelector('[data-calculadora="btn-multiplicar"]')
const btnDividir = document.querySelector('[data-calculadora="btn-dividir"]')

const btnClear = document.querySelector('[data-calculadora="btn-clear"]')

const result = document.querySelector('[data-calculadora="result"]')

const somar = () => {
    const soma = Number(inputFirst.value) + Number(inputSecond.value)
    result.textContent = soma
}

const subtrair = () => {
    const subtracao = Number(inputFirst.value) - Number(inputSecond.value)
    result.textContent = subtracao
}

const multiplicar = () => {
    const multiplicacao = Number(inputFirst.value) * Number(inputSecond.value)
    result.textContent = multiplicacao
} /* Faça desse jeito */

const dividir = () => {
    const divisao = Number(inputFirst.value) / Number(inputSecond.value)
    result.textContent = divisao
}

const limpar = () => {
    inputFirst.value = ''
    inputSecond.value = ''
    result.innerHTML = '<span style="color: #aaa;">Resultado</span>'
    inputFirst.focus()
}

btnSomar.addEventListener('click', somar)
btnSubtrair.addEventListener('click', subtrair)
btnMultiplicar.addEventListener('click', multiplicar)
btnDividir.addEventListener('click', dividir)

btnClear.addEventListener('click', limpar)