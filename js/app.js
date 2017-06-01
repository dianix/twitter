var contadorCaracteres = 0;

var cargarPagina = function () {
    var areaTexto = $("#areaTexto");
    var areaAutor = $("#areaAutor");
    var botonEnviar = $("#botonEnviar");
    areaTexto.keyup(contadoraDeCaracteres);
    botonEnviar.click(publicarTwit);
};

var contadoraDeCaracteres = function () {
    var cantidadCaracteres = $("#cantidadCaracteres");
    contadorCaracteres = 140 - ($(areaTexto).val().length);
    cantidadCaracteres.text(contadorCaracteres + "/140");
};

var publicarTwit = function () {
    if ($(areaTexto).val() !== "" && $(areaAutor).val() !== "") {
        var seccionPublicaciones = $("#publicaciones");
        var tarjetaPublicacion = $(document.createElement("article")).addClass("card");
        var twitNuevo = $(document.createElement("p")).text($(areaTexto).val());
        var autorTwit = $(document.createElement("h5")).text($(areaAutor).val());

        tarjetaPublicacion.append($(autorTwit));
        tarjetaPublicacion.append($(twitNuevo));
        seccionPublicaciones.prepend($(tarjetaPublicacion));

        $(areaTexto).val("");
        $(areaAutor).val("");
        $(cantidadCaracteres).text("140/140");
    }
}

$(document).ready(cargarPagina);
