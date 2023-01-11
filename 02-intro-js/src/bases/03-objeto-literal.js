//Objetos literales

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 14.3232,
        lng: 34.9233321
    }
};

// console.log(persona.nombre); //Tony

//imprime en consola en forma de tabla
// console.table( persona );

// console.log(persona);


//Crear una copia del objeto
//Asi estamos copiando la referencia al espacio en memoria del primer objeto persona
//! const persona2 = persona;
//Esto a primera vista podemos crear que esto esta bien, pero es un falso positivo
//! persona2.nombre = "Peter";
//Pero si yo muevo el console =.log a despues de la reasignacion de nombre, hay si podemos ver que nos ha cambiado el objeto original
//! console.log(persona);
//Asi que esta asignacion de la forma anterior no hay que hacerla nunca porque modifica el objeto original
//Lo anterior en react nos puede afectar porque cuando estamos intentando hacer una mutacion del estado, no lo va ha aceptar por que esta mutando el estado directamente.
//! console.log(persona2);


//Es recomendable hacerlo de la siguiente forma, envolver entre {} por que al crear un objeto nuevo se esta creando un espacio en memoria nuevo
// const persona2 = {nombre: "Peter"};

//? Podemos tambien usar el spread operator
const persona2 = {...persona};
persona2.nombre = "peter";

console.log(persona);
console.log(persona2);
