function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;

do {
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)){
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		acumulador = acumulador + num;
		contador++;

		respuesta = confirm("Desea continua?: ");
}

while (respuesta);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN