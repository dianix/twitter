(function(){
    var contadorCaracteres = 0;
})();

var cargarPagina = function () {
    var areaTexto = $("#areaTexto");
    var areaAutor = $("#areaAutor");
    var botonEnviar = $("#botonEnviar");
    areaTexto.keyup(contadoraDeCaracteres);
    areaTexto.keyup(validarMensaje);
    
    botonEnviar.click(publicarTwit);
};

var contadoraDeCaracteres = function () {
    var cantidadCaracteres = $("#cantidadCaracteres");
    //contador que indica en forma regresiva los caracteres tecleados
    contadorCaracteres = 140 - ($(areaTexto).val().length);
    // condicionales para el color de texto del contador
    if (contadorCaracteres >= 21 && contadorCaracteres <= 30){
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color","orange");        
    }
    if(contadorCaracteres >= 0 && contadorCaracteres <= 20){
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color","red");
    }
    if (contadorCaracteres < 0){
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color","silver");
    }
    else if (contadorCaracteres >= 31 && contadorCaracteres <= 140){
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color","black");
    }
};

var publicarTwit = function () {
    //llamando sección
    var seccionPublicaciones = $("#publicaciones");
    //creando elementos y guardando valores
    var tarjetaPublicacion = $("<article/>").addClass("card");
    var twitNuevo = $("<p/>").text($(areaTexto).val());
    var autorTwit = $(document.createElement("h5")).text($(areaAutor).val());
    // Publicando 
    tarjetaPublicacion.append($(autorTwit)).append($(twitNuevo));
    seccionPublicaciones.prepend($(tarjetaPublicacion));
    // Reinicializar valores
    limpiarAreas();
    $(cantidadCaracteres).text("140/140");

}

var limpiarAreas = function() {
    $(areaTexto).val("");
    $(areaAutor).val("");
}

var validarMensaje = function () {
    var $botonEnviar = $("#botonEnviar");
    if ($(this).val().trim().length > 0 && $(this).val().trim().length <= 140) {
        $botonEnviar.removeAttr("disabled");
    } else {
        $botonEnviar.attr("disabled", true);
    }
};

$(document).ready(cargarPagina);