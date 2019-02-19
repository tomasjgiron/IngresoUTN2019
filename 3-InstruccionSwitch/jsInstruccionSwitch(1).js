function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
    case "Enero":
        alert ("que comiences bien las clase!!");
        break;
    case "Marzo":
        alert ("a clases!!");
        break;
    case "Julio":
        alert ("se acercan las vacaciones");
        break;
    case "Diciembre":
        alert ("felices fiestas!!");
        break;
    default:
    alert ("Ingrese otro mes");
}




}//FIN DE LA FUNCIÓN