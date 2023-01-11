//Arreglos en JS

// const arreglo = new Array( 100 ); //Array con un lenght de 100
// arreglo.push(1) //puedo expandir este arreglo


const arreglo = [1, 2, 3, 4];
// No es recomendable utiliza este metodo en react por que modificac el arreglo original
// arreglo.push(1) 

//Esta forma modifica el arreglo original
// let arreglo2 = arreglo;
// arreglo2.push(5);

// console.log(arreglo);
// console.log(arreglo2);

//? Arreglo2 con referencia al arreglo original
// let arreglo2 = [ arreglo, 5];

// console.log(arreglo);
// console.log(arreglo2); //(2) [Array(4), 5]

//Como romper la referencia al arreglo original
//Usqando Spread operator
let arreglo2 = [ ...arreglo, 5];

console.log(arreglo);
console.log(arreglo2); //(2) [Array(4), 5]

const arreglo3 = arreglo2.map((numero) => {
    return numero*2;
});

console.log(arreglo3);
console.log(arreglo2); //Aca podemos comprobar que el arreglo original no ha sido modificado.