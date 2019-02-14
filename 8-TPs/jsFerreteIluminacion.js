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
    var precio;
    var cantidad;
    var preciofinal;
    var marca;
    var unidad;

    cantidad = parseInt(document.getElementById("Cantidad").value);

    precio = 35;

    unidad = cantidad * precio;

    document.getElementById("precioDescuento").value = unidad;

    marca = document.getElementById("Marca").value;


    if (cantidad >= 6) 
    {

        preciofinal = unidad / 2;

        document.getElementById("precioDescuento").value = preciofinal.toFixed(2);

    }
    else if (cantidad == 5) 
    {
        if (marca == "ArgentinaLuz") 
        {
            preciofinal = unidad * 40 / 100;
        }else 
        {
            preciofinal = unidad * 30 / 100; 
        }
    }
    else if (cantidad == 4) 
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
        {
            preciofinal = unidad * 25 / 100;
        }else 
        {
            preciofinal = unidad * 20 / 100; 
        }
    }
    else if (cantidad == 5) 
    {
        if (marca == "ArgentinaLuz") 
        {
            preciofinal = unidad * 40 / 100;
        }else 
        {
            preciofinal = unidad * 30 / 100; 
        }
    }
}
