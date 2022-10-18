function start() {
    var btncalc = document.querySelector('#btn-calc')
    btncalc.addEventListener('click', handleButtonClick)
}

function calculateImc(peso, altura) {

    return peso / (altura * altura);
}

/*Ativa a div block-result ao clicar*/
const btn = document.querySelector('#btn-calc')
function toggleMenu() {
    const imcResult = document.querySelector('#block-result')
    imcResult.classList.add('ativo');
}
btn.addEventListener('click', toggleMenu);

/*calculo IMC*/
function handleButtonClick() {
    var inputPeso = document.querySelector('#input-weight')
    var inputAltura = document.querySelector('#input-altura')
    var resultImc = document.querySelector('#resultImc')
    var faixaImc = document.querySelector('#faixaImc')

    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);

    var imc = calculateImc(peso, altura).toFixed(2)

    if ((imc >= 17) && (imc <= 16.9)) {
        faixaImc.textContent = "Muito abaixo do peso";
    }
    else if ((imc >= 17) && (imc <= 18.40)) {
        faixaImc.textContent = "Abaixo do peso";
    }
    else if ((imc >= 18.5) && (imc <= 24.90)) {
        faixaImc.textContent = "Peso normal";

    }
    else if ((imc >= 25) && (imc <= 29.90)) {
        faixaImc.textContent = "Acima do peso";
    }
    else if ((imc >= 30) && (imc <= 34.90)) {
        faixaImc.textContent = "Obesidade grau I";
    }
    else if ((imc >= 35) && (imc <= 40)) {
        faixaImc.textContent = "Obesidade grau II";
    }
    else if (imc >= 40) {
        faixaImc.textContent = "Obesidade grau III";
    }else{
    faixaImc.textContent = "Faixa inválida";

    }


    var formattedImc = imc.replace('.', ',')

    resultImc.textContent = formattedImc;

}
start();