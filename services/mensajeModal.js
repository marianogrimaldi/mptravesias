const myModal = new bootstrap.Modal(document.getElementById("myModal"));
let nombreCliente = localStorage.getItem("cliente");

if (!nombreCliente) {
  myModal.show();
} else {
  escribirNombre(nombreCliente);
}
//registramos en el local para que no vuleva a preguntar la proxima vez que entramos al sitio.
function registrarNombre() {
  let nombre = document.getElementById("nombreCliente");
  localStorage.setItem("cliente", nombre.value);
  escribirNombre(nombre.value);
  myModal.hide();
}
function escribirNombre(nombre) {
  document.getElementById("saludoCliente").append(`${nombre}`);
}
