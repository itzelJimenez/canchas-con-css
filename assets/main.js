var futbol = document.getElementById('botonFut');
var basquet = document.getElementById('botonBasq');
var tenis = document.getElementById('botonTen');

var canchaFut = document.getElementById('futbolCancha');
ocultarCanchas();
function ocultarCanchas(){
	canchaFut.style.display = "none"
}
function aparecerFut(){
	canchaFut.style.display = "block";
}
function mostrar(seccion){
	seccion.display = "block";
}
function ocultar(seccion){
	seccion.display = "none";
}
//Eventos

futbol.addEventListener("click", aparecerFut);
