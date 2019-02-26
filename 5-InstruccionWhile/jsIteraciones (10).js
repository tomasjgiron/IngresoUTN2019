function Mostrar()
{

	var num;
	var respuesta='si';
	var flag = true;
	//var positivo;
	//var negativo;
	//var sumaPositivos;
	//var sumaNegativo;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	

do {
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)){
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		
		if (num > 0){
			acumuladorPositivos += num;
			contadorPositivos++;
			flag = false;
		}
		else if (num == 0){
			contadorCeros++;
			flag = false;
		}
		else {
			acumuladorNegativos += num;
			contadorNegativos++;
			flag = false;
		}
		if (num % 2 == 0){
			contadorPares++;
			flag = false;
		}

		promedioPositivos = acumuladorPositivos / contadorPositivos;
		promedioNegativos = acumuladorNegativos / contadorNegativos;

		diferencia = acumuladorPositivos - acumuladorNegativos;
		
		respuesta = confirm("Desea continuar?: ");
} while (respuesta);

if(flag){
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
}

document.write("La suma de + es: " + acumuladorPositivos + "<br>La suma de - es: " + acumuladorNegativos + "<br>La cantidad de + es: " + contadorPositivos + "<br>La cantidad de - es: " + contadorNegativos + "<br>La cantidad de ceros es: " + contadorCeros + "<br>La cantidad de pares es: " + contadorPares + "<br>El promedio de + es: " + promedioPositivos + "<br>El promedio de - es: " + promedioNegativos + "<br>La diferencia entre + y - es: " + diferencia);


}//FIN DE LA FUNCIÓN