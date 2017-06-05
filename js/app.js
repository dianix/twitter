(function () {
    var contadorCaracteres = 0;
})();

var cargarPagina = function () {
    var areaTexto = $("#areaTexto");
    var areaAutor = $("#areaAutor");
    var botonEnviar = $("#botonEnviar");
    areaTexto.keyup(contadoraDeCaracteres);
    areaTexto.keyup(validarMensaje);
    botonEnviar.click(publicarTwit);
    // Para agregar función borrar a twit de muestra
    $("#publicaciones article.card a").click(borrarTwit);
};

var contadoraDeCaracteres = function () {
    var cantidadCaracteres = $("#cantidadCaracteres");
    //contador que indica en forma regresiva los caracteres tecleados
    contadorCaracteres = 140 - ($(areaTexto).val().length);
    // condicionales para el color de texto del contador
    if (contadorCaracteres >= 21 && contadorCaracteres <= 30) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "orange");
    }
    if (contadorCaracteres >= 0 && contadorCaracteres <= 20) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "red");
    }
    if (contadorCaracteres < 0) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "silver");
    } else if (contadorCaracteres >= 31 && contadorCaracteres <= 140) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "black");
    }
};

var publicarTwit = function () {
    //llamando sección
    var seccionPublicaciones = $("#publicaciones");
    //creando elementos y guardando valores
    var tarjetaPublicacion = $("<article/>").addClass("card");
    var twitBorrar = $("<a/>").append("<i/>").addClass("fa fa-times");
    twitBorrar.click(borrarTwit);
    var twitNuevo = $("<p/>").text($(areaTexto).val());
    var autorTwit = $(document.createElement("h5")).text($(areaAutor).val());
    var horaTwit = $("<h6/>").text(fechaPublicación());
    // Publicando 
    tarjetaPublicacion.append($(twitBorrar)).append($(autorTwit)).append($(twitNuevo)).append($(horaTwit));
    seccionPublicaciones.prepend($(tarjetaPublicacion));
    // Reinicializar valores
    limpiarAreas();
    $(cantidadCaracteres).text("140/140").css("color", "black");
};

var limpiarAreas = function () {
    $(areaTexto).val("");
    $(areaAutor).val("");
};

var validarMensaje = function () {
    var $botonEnviar = $("#botonEnviar");
    if ($(this).val().trim().length > 0 && $(this).val().trim().length <= 140) {
        $botonEnviar.removeAttr("disabled");
    } else {
        $botonEnviar.attr("disabled", true);
    }
};

var fechaPublicación = function () {
    var tiempoActual = new Date();
    var fecha = tiempoActual.getDate() + "/" +
        (tiempoActual.getMonth() + 1) + "/" +
        tiempoActual.getFullYear();
    var hora = tiempoActual.getHours();
    var minutos = tiempoActual.getMinutes();
    minutos = minutos <= 9 ? "0"+minutos : minutos;
    var fechaHora = fecha + " " + hora + ":" + minutos;
    return (fechaHora);
};

var borrarTwit = function () {
    $(this).parent().remove();
};

$(document).ready(cargarPagina);