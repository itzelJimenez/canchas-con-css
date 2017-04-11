//Botones
var futbol = document.getElementById('botonFut');
var basquet = document.getElementById('botonBasq');
var tenis = document.getElementById('botonTen');
//Secciones
var canchaFut = document.getElementById('futbolCancha');
var canchaBasq = document.getElementById('basquetCancha');
var canchaTenis = document.getElementById('tenisCancha');
//Funciones
ocultarCanchas();
function ocultarCanchas(){
	canchaFut.style.display = "none";
	canchaBasq.style.display = "none";
	canchaTenis.style.display = "none";
}
function aparecerFut(){
	ocultarCanchas()
	canchaFut.style.display = "block";
}
function aparecerBasq(){
	ocultarCanchas()
	canchaBasq.style.display = "block";
}
function aparecerTen(){
	ocultarCanchas()
	canchaTenis.style.display = "block";
}
//Eventos
futbol.addEventListener("click", aparecerFut);
basquet.addEventListener("click", aparecerBasq);
tenis.addEventListener("click", aparecerTen);
