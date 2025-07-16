const errorDialog = document.querySelector("#errorDialog");
const resultImc = document.querySelector("#resultImc");
const faixaImc = document.querySelector("#faixaImc");
const btncalc = document.querySelector("#btn-calc");
const imcResult = document.querySelector("#block-result");
const weightInput = document.forms["myForm"]["input-weight"];
const heightInput = document.forms["myForm"]["input-height"];
function calculateImc(weight, height) {
  return weight / (height * height);
}

/*Ativa a div block-result ao clicar*/
function showResult() {
  imcResult.classList.add("ativo");
}
function showError() {
  errorDialog.classList.add("ativo");
}
btncalc.addEventListener("click", handleButtonClick);

/*calculo IMC*/
function handleButtonClick() {
  event.preventDefault();
  var weight = Number(weightInput.value);
  var height = Number(heightInput.value);
  // height.toFixed(2).replace(".", ",");
  var imc = calculateImc(weight, height).toFixed(2);
  if (weight && height) {
    if (imc >= 17 && imc <= 16.9) {
      faixaImc.textContent = "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
      faixaImc.textContent = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      faixaImc.textContent = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      faixaImc.textContent = "Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
      faixaImc.textContent = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {
      faixaImc.textContent = "Obesidade grau II";
    } else if (imc >= 40) {
      faixaImc.textContent = "Obesidade grau III";
    } else {
      faixaImc.textContent = "Muito abaixo do peso";
    }
    var formattedImc = imc.replace(".", ",");
    resultImc.textContent = formattedImc;
    console.log("Peso:", weight);
    console.log("Altura:", height);
    showResult();
  } else {
    errorDialog.textContent = "Preencha todos os campos";
    console.log("Peso:", weight);
    console.log("Altura:", height);
    console.log("Erro ao tentar calcular");
    showError();
  }
}
