/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var resultado;
    var descuento;

    importe = parseFloat(document.getElementById("importe").value);

    descuento = (importe*25) / 100;

    resultado = importe - descuento;

    document.getElementById("resultado").value = resultado.toFixed(2);

    alert("El descuento es de $" + descuento.toFixed(2));
}
