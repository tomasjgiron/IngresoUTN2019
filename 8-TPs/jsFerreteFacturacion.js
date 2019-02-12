/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precio1;
var precio2;
var precio3;
var suma;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);

suma = precio1 + precio2 + precio3;

alert(suma.toFixed(2));
}
function Promedio () 
{
var precio1;
var precio2;
var precio3;
var promedio;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);

promedio = (precio1 + precio2 + precio3) / 3;

alert(promedio.toFixed(2));
}
function PrecioFinal () 
{
var precio1;
var precio2;
var precio3;
var final1;
var final2;
var final3;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);

final1 = precio1 + (precio1*21) / 100;
final2 = precio2 + (precio2*21) / 100;
final3 = precio3 + (precio3*21) / 100;

alert(final1.toFixed(2) +" "+final2.toFixed(2) +" "+final3.toFixed(2));
}