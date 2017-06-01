var contadorCaracteres = 0;

var cargarPagina = function () {
    var areaTexto = $("#areaTexto");
    var areaAutor = $("#areaAutor");
    var botonEnviar = $("#botonEnviar");
    areaTexto.keyup(contadoraDeCaracteres);
    botonEnviar.click(publicarTwit);

    function contadoraDeCaracteres() {
        contadorCaracteres = 140 - (areaTexto.val().length);
        var cantidadCaracteres = $("#cantidadCaracteres");
        cantidadCaracteres.text(contadorCaracteres + "/140");
    };


};

var publicarTwit = function () {
    if (areaTexto.value !== "") {
        var seccionPublicaciones = $("#publicaciones");
       
        var tarjetaPublicacion = document.createElement("article");
        tarjetaPublicacion.classList = "card";
        var twitNuevo = document.createElement("p");
        var autorTwit = document.createElement("h5");

        twitNuevo.innerText = areaTexto.value;
        autorTwit.innerText = areaAutor.value;

        tarjetaPublicacion.appendChild(autorTwit);
        tarjetaPublicacion.appendChild(twitNuevo);
        console.log(tarjetaPublicacion)

        seccionPublicaciones.prepend(tarjetaPublicacion);

        areaTexto.value = "";
        areaAutor.value = "";
        
    }
}




$(document).ready(cargarPagina);
