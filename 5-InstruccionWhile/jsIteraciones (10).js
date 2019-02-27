function Mostrar() {

	var num;
	var respuesta = 'si';
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia;


	do {
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		if (num > 0) {
			acumuladorPositivos += num;
			contadorPositivos++;
			
		}
		else if (num == 0) {
			contadorCeros++;
			
		}
		else {
			acumuladorNegativos += num;
			contadorNegativos++;
			
		}
		if (num % 2 == 0) {
			contadorPares++;
			
		}

		
		respuesta = confirm("Desea continuar?: ");
	} while (respuesta);

	if (contadorPositivos != 0){
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	
	if (contadorNegativos != 0){
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}		
		

		diferencia = acumuladorPositivos - acumuladorNegativos;

	document.write("La suma de + es: " + acumuladorPositivos + "<br>La suma de - es: " + acumuladorNegativos + "<br>La cantidad de + es: " + contadorPositivos + "<br>La cantidad de - es: " + contadorNegativos + "<br>La cantidad de ceros es: " + contadorCeros + "<br>La cantidad de pares es: " + contadorPares + "<br>El promedio de + es: " + promedioPositivos + "<br>El promedio de - es: " + promedioNegativos + "<br>La diferencia entre + y - es: " + diferencia);


}//FIN DE LA FUNCIÓN