//Template String

const nombre = "Giselle";
const apellido = "Bernal";

//Estod dos formas nos muestran lo mismo pero en la segunda hacemos uso de Template strings
// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

//Para hacer saltos de linea 
// Se puede poner expresiones propias de JS o resultados de funciones
// const nombreCompleto = `${nombre} 
// ${apellido}
// ${1+1}
// `;


console.log(nombreCompleto);

function getSaludo(nombre) {
    return "Hola " + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`);