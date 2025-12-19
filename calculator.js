function readNumber(id) {
  const value = document.getElementById(id).value.trim();
  const n = Number(value);

  if (value === "" || Number.isNaN(n)) {
    throw new Error("Veuillez entrer deux nombres valides.");
  }
  return n;
}

function setResult(text) {
  document.getElementById("result").textContent = text;
}

function addition(a, b) {
  return a + b;
}


function substraction(a, b) {
  return a - b;
}


function multiplication(a, b) {
  throw new Error("multiplication non implementee");
}

function run(op) {
  try {
    const a = readNumber("a");
    const b = readNumber("b");
    const res = op(a, b);
    setResult(String(res));
  } catch (e) {
    setResult(e.message);
  }
}

document.getElementById("btnAdd").addEventListener("click", () => run(addition));
document.getElementById("btnSub").addEventListener("click", () => run(substraction));
document.getElementById("btnMul").addEventListener("click", () => run(multiplication));
