/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares y la cantidad de números impares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/
function Mostrar() {
    var numero;
    var contador = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var promedio;
    var acumulador = 0;
    var maximo;
    var minimo;
    var respuesta;
    var flag = 0;

    do {
        numero = parseInt(prompt("Ingrese un numero: "));
        while (numero < 0 || isNaN(numero)) {
            numero = parseInt(prompt("Error. Ingrese un numero: "));
        }

        if (numero % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;
        }

        if (numero < minimo || flag == 0) {
            minimo = numero;
        }
        if (numero > maximo || flag == 0) {
            maximo = numero;
            flag = 1;
        }

        acumulador += numero;
        contador++;

        respuesta = confirm("Desea continuar?");
    } while (respuesta);

    promedio = acumulador / contador;

    document.write("a) la cantidad de números pares y la cantidad de números impares: " + contadorPares + " " + contadorImpares + "<br>");
    document.write("b) el promedio de todos los números ingresados: " + promedio + "<br>");
    document.write("c) la suma de todos los números: " + acumulador + "<br>");
    document.write("d) El número máximo: " + maximo + " y el minimo: " + minimo);

}

