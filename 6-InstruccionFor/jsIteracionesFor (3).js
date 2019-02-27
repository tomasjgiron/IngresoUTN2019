function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

while (isNaN(repeticiones)){
    repeticiones = parseInt(prompt("Eso no es un número. Ingrese un número"));
}

for (var i = 0; i < repeticiones ; i++){
    console.log("Hola UTNFRA");
}


}//FIN DE LA FUNCIÓN