const errorDialog = document.querySelector("#errorDialog");
const valueImc = document.querySelector("#valueImc");
const faixaImc = document.querySelector("#faixaImc");
const btncalc = document.querySelector("#btn-calc");
const imcResult = document.querySelector("#blockResult");
const weightInput = document.forms["myForm"]["input-weight"];
const heightInput = document.forms["myForm"]["input-height"];
function calculateImc(weight, height) {
  return weight / (height * height);
}

/*Ativa a div block-result ao clicar*/
function toggleResult() {
  imcResult.classList.add("ativo");
}
function toggleError() {
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
      faixaImc.className = "";
      faixaImc.classList.add("thinness");
    } else if (imc >= 17 && imc <= 18.4) {
      faixaImc.className = "";
      faixaImc.textContent = "Abaixo do peso";
      faixaImc.classList.add("thinness");
    } else if (imc >= 18.5 && imc <= 24.9) {
      faixaImc.className = "";
      faixaImc.textContent = "Peso normal";
      faixaImc.classList.add("normal");
    } else if (imc >= 25 && imc <= 29.9) {
      faixaImc.textContent = "Acima do peso";
      faixaImc.className = "";
      faixaImc.classList.add("overweight");
    } else if (imc >= 30 && imc <= 34.9) {
      faixaImc.textContent = "Obesidade grau I";
      faixaImc.className = "";
      faixaImc.classList.add("obesity");
    } else if (imc >= 35 && imc <= 40) {
      faixaImc.textContent = "Obesidade grau II";
      faixaImc.className = "";
      faixaImc.classList.add("obesity");
    } else if (imc >= 40) {
      faixaImc.textContent = "Obesidade grau III";
      faixaImc.className = "";
      faixaImc.classList.add("obesity");
    } else {
      faixaImc.className = "";
      faixaImc.classList.add("thinness");
      faixaImc.textContent = "Muito abaixo do peso";
    }
    var formattedImc = imc.replace(".", ",");
    valueImc.textContent = formattedImc;
    console.log("Peso:", weight);
    console.log("Altura:", height);
    toggleResult();
  } else {
    errorDialog.textContent = "Preencha todos os campos";
    console.log("Peso:", weight);
    console.log("Altura:", height);
    console.log("Erro ao tentar calcular");
    toggleError();
    setTimeout(() => {
      errorDialog.classList.remove("ativo");
    }, 3000);
  }
}
