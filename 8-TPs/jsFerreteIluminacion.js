/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var precio = 35;
    var descuento;
    var precioDescuento;
    var precioFinal;
    var iibb;

    if (cantidad >= 6){
        descuento = precio * 50 / 100;

    } else if (cantidad == 5){
        if (marca == "ArgentinaLuz"){
            descuento = precio * 40 / 100;
        }
        else {
            descuento = precio * 30 / 100;
        }
        
    } else if (cantidad == 4){
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = precio * 25 / 100;
        }
        else {
            descuento = precio * 20 / 100;
        }
    } else if (cantidad == 3){
        if (marca == "ArgentinaLuz"){
            descuento = precio * 30 / 100;
        }
        else if (marca == "FelipeLamparas"){
            descuento = precio * 10 / 100;
        }
        else {
            descuento = precio * 5 / 100;
        }
    } else {
        descuento = 0;
    }
        precioDescuento = precio - descuento;
        precioFinal = cantidad * precioDescuento;
        document.getElementById("precioDescuento").value = precioDescuento;

        if(precioFinal > 120){
            iibb = precioFinal * 10 / 100;
            precioFinal = precioFinal + iibb;
            alert ("Importe final $ " + precioFinal + " , IIBB usted pago $ " + iibb);
        }
        else {
            alert ("Importe final $ " + precioFinal);
        }
}
