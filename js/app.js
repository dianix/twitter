var contadorCaracteres = 0;

var cargarPagina = function () {
    var areaTexto = $("#areaTexto");
    var areaAutor = $("#areaAutor");
    var botonEnviar = $("#botonEnviar");
    areaTexto.keyup(contadoraDeCaracteres);

    function contadoraDeCaracteres() {
        contadorCaracteres = 140 - (areaTexto.val().length);
        var cantidadCaracteres = $("#cantidadCaracteres");
        cantidadCaracteres.text(contadorCaracteres +"/140");
    };
};

$(document).ready(cargarPagina);
