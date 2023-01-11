//Variables y constantes
//Ya no se debe usar var

//Constantes (const) valores que nunca van a cambiar o nunca van a ser reasignados.
const nombre = "Giselle";
const apellido = "Bernal";

//Let variables que si puden reasignarse
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if(true) {
    //Esta variable solo va a existir dentro de este scope
    let valorDado = 6;
    console.log(valorDado);
}

//Ctrl + espacio para que al hace el console, me muestre la ayuda
console.log(valorDado);