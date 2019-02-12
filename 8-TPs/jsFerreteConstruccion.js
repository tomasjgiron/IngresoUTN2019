/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
    var largo;
    var perimetro;
    var AlambreTotal;

    ancho = parseFloat(document.getElementById("Ancho").value);
    largo = parseFloat(document.getElementById("Largo").value);

    perimetro = (ancho + largo) * 2;

    AlambreTotal = perimetro * 3;

    alert("La cantidad de alambre es de " + AlambreTotal.toFixed(2) + "metros");
}
function Circulo () 
{
	var radio;
    var diametro;
    var AlambreTotal;

    radio = parseFloat(document.getElementById("Radio").value);
    
    diametro = 2 * Math.PI * radio

    AlambreTotal = diametro * 3;

    alert("La cantidad de alambre es de " + AlambreTotal.toFixed(2) + "metros");
}
function Materiales () 
{
	var ancho;
    var largo;
    var superficie;
    var cal;
    var cemento;

    ancho = parseFloat(document.getElementById("Ancho").value);
    largo = parseFloat(document.getElementById("Largo").value);

    superficie = ancho * largo;

    cemento = superficie * 2;

    cal = superficie * 3;

    alert("Para una superficie de " + superficie + " m2, se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");


    




}