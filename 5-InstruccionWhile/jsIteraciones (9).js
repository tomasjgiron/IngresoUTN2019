function Mostrar() {

	var maximo;
	var minimo;
	var contador = 0;
	var respuesta = 'si';
	var num;

	do {
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		if (contador == 0){
			maximo = num;
			minimo = num;
		}

		if (num > maximo) {
			maximo = num;
		}
		if (num < minimo) {
			minimo = num;
		}

		contador++;
		respuesta = confirm("Desea continuar?: ");
	} while (respuesta);


	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;



}//FIN DE LA FUNCIÓN