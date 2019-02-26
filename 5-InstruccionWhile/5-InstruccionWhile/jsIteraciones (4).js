function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while (!(numero >= 0 && numero <= 10)){
	var numero = prompt("Número incorrecto, ingrese uno distinto");
	}
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN