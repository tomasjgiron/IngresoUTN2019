function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var flag = true;	
	var respuesta='si';
	var num;

do {
		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)){
			num = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		
		if (num >= 0){
			positivo += num;
		}
		else {
			flag = false;
			negativo *= num;
		}
		
		respuesta = confirm("Desea continua?: ");
} while (respuesta);


document.getElementById('suma').value=positivo;

if(flag){
	negativo = 0;
}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN