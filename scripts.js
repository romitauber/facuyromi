let btnVer = document.querySelector(".ver");
let div = document.querySelector(".datosBancarios");
let btnCerrar = document.querySelector(".cerrar");
let dress = document.querySelector(".dressCode");
let asistencia = document.querySelector(".asistencia");
let body = document.querySelector("body");

console.log(div);

eventListeners();

function eventListeners(){

    btnVer.addEventListener('click', verMas);
    btnCerrar.addEventListener('click', salirDelCuadro);
}

function verMas() {
    div.removeAttribute("style","display: none;");
    dress.setAttribute("style", "opacity: 25%;")
    asistencia.setAttribute("style", "opacity: 25%;")
    body.setAttribute("style", "overflow: hidden;")


}

function salirDelCuadro() {
    div.setAttribute("style", "display: none;");
    dress.removeAttribute("style", "opacity: 25%;")
    asistencia.removeAttribute("style", "opacity: 25%;")
    body.removeAttribute("style", "overflow: hidden;")
}