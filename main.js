function saludo() {
  return "Hola Usuario!";
}

alert(saludo());

// USANDO PARÁMETROS

function saludo2(callback) {
  callback();
}

saludo2(function () {
  alert("Hola!");
});

// Anónimo

setTimeout(function () {
  alert("Hola Mundo!");
}, 5000);

// Con nombre

const myCallback = () => alert("Adiós mundo!");
setTimeout(myCallback, 5000);
