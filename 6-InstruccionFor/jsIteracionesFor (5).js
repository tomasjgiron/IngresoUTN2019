function Mostrar()
{

    var numero;

    for( ; ; ){
        numero = parseInt(prompt("Ingrese un numero"));
        while (isNaN(numero)){
            numero = parseInt(prompt("Eso no es correcto. Ingrese un numero"));
        }

        if (numero == 9){
            break;
        }
        console.log(numero);
    }


}//FIN DE LA FUNCIÓN