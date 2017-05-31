var target = 0;

var cargarPagina = function () {
	var botones = $(".control");
	var anterior = $(".anterior");
	var siguiente = $(".siguiente");
	
	botones.click(cambiarImagen);
	anterior.click(anteriorImagen);
	siguiente.click(siguienteImagen);
};

var cambiarImagen = function () {
	target = parseInt($(this).data("target"));
    //console.log(target)
	mostrarImagen(target);
};

var mostrarImagen = function (target) {
	var imagenActual = $("div.activo");
	var imagenSiguiente = $("div[data-imagen='" + target + "']");
	imagenActual.removeClass("activo");
	imagenSiguiente.addClass("activo");
};

var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 3 : target;
	mostrarImagen(target);
};

var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);mostrarImagen(target);
};


$(document).ready(cargarPagina);