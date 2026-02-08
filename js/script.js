function validarInputs(input1, input2) {
  if (input1.value === "" || input2.value === "") {
    alert("Preencha todos os campos.");
    return false;
  }
  return true;
}

const inputSomar1 = document.getElementById("inputSomar1");
const inputSomar2 = document.getElementById("inputSomar2");
const resultadoSomar = document.getElementById("resultadoSomar");
const btnSomar = document.getElementById("btnSomar");

btnSomar.addEventListener("click", () => {
  if (!validarInputs(inputSomar1, inputSomar2)) return;

  const valor1 = Number(inputSomar1.value);
  const valor2 = Number(inputSomar2.value);

  resultadoSomar.textContent = valor1 + valor2;

  inputSomar1.value = "";
  inputSomar2.value = "";
});

[inputSomar1, inputSomar2].forEach((input) =>
  input.addEventListener("input", () => {
    resultadoSomar.textContent = "0";
  }),
);

const inputSubtrair1 = document.getElementById("inputSubtrair1");
const inputSubtrair2 = document.getElementById("inputSubtrair2");
const resultadoSubtrair = document.getElementById("resultadoSubtrair");
const btnSubtrair = document.getElementById("btnSubtrair");

btnSubtrair.addEventListener("click", () => {
  if (!validarInputs(inputSubtrair1, inputSubtrair2)) return;

  const valor1 = Number(inputSubtrair1.value);
  const valor2 = Number(inputSubtrair2.value);

  resultadoSubtrair.textContent = valor1 - valor2;

  inputSubtrair1.value = "";
  inputSubtrair2.value = "";
});

[inputSubtrair1, inputSubtrair2].forEach((input) =>
  input.addEventListener("input", () => {
    resultadoSubtrair.textContent = "0";
  }),
);

const inputMultiplicacao1 = document.getElementById("inputMultiplicacao1");
const inputMultiplicacao2 = document.getElementById("inputMultiplicacao2");
const resultadoMultiplicacao = document.getElementById(
  "resultadoMultiplicacao",
);
const btnMultiplicacao = document.getElementById("btnMultiplicacao");

btnMultiplicacao.addEventListener("click", () => {
  if (!validarInputs(inputMultiplicacao1, inputMultiplicacao2)) return;

  const valor1 = Number(inputMultiplicacao1.value);
  const valor2 = Number(inputMultiplicacao2.value);

  resultadoMultiplicacao.textContent = valor1 * valor2;

  inputMultiplicacao1.value = "";
  inputMultiplicacao2.value = "";
});

[inputMultiplicacao1, inputMultiplicacao2].forEach((input) =>
  input.addEventListener("input", () => {
    resultadoMultiplicacao.textContent = "0";
  }),
);

const inputDivisao1 = document.getElementById("inputDivisao1");
const inputDivisao2 = document.getElementById("inputDivisao2");
const resultadoDivisao = document.getElementById("resultadoDivisao");
const btnDivisao = document.getElementById("btnDivisao");

btnDivisao.addEventListener("click", () => {
  if (!validarInputs(inputDivisao1, inputDivisao2)) return;

  const valor1 = Number(inputDivisao1.value);
  const valor2 = Number(inputDivisao2.value);

  resultadoDivisao.textContent = valor1 / valor2;

  inputDivisao1.value = "";
  inputDivisao2.value = "";
});

[inputDivisao1, inputDivisao2].forEach((input) =>
  input.addEventListener("input", () => {
    resultadoDivisao.textContent = "0";
  }),
);
