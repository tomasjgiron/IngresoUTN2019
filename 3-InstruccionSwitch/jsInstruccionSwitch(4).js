function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Febrero":
        alert("Tiene 28 días");
        break;
    case "Abril":
        alert("Tiene 30 días");
        break;
    case "Junio":
        alert("Tiene 30 días");
        break;
    case "Septiembre":
        alert("Tiene 30 días");
        break;
    case "Noviembre":
        alert("Tiene 30 días");
        break;
    default:
        alert("Tiene 31 días");
}
	
	



}//FIN DE LA FUNCIÓN