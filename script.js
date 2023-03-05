var botonEncriptar = document.querySelector(".btn-Encriptar");
var botonDesencriptar = document.querySelector(".btn-DesEncriptar");
var botonCopiar = document.querySelector(".btnCopiar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor_h3");
var parrafo = document.querySelector(".contenedor_Parrafo");
var resultado = document.querySelector(".resultado")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar() {
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);

}

function desencriptar() {
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);

}

function copiar(){
    copiarTexto();
    alert("Texto copiado");
}

function copiarTexto(){
  var copy = document.getElementById("copiado");
  //copy.select();
  //copy.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copy.value);
  return copy.value;
}

function recuperarTexto() {
    var area = document.querySelector(".area");
    return area.value;
}


function ocultarAdelante() {
    munieco.classList.add("cotenedor");
    h3.classList.add("cotenedor");
    parrafo.classList.add("cotenedor");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {

        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }

        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {

        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }

        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }

        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

