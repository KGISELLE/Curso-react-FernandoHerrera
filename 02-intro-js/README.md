# Notas importantes sobre caracteristicas mas usadas de JS en React

## Variables

* Let
* Const

**Nota:** El uso de var ya no es recomendado debido a conflictos del scope puesto que esta variable es de scope global, mientras let y const son de scope local.

## Template string

Es una funcionalidad para: 
* Concatenar strings
* Poner variables o resultados de operaciones dentro de strings.
* Para caracteres multilinea o strings multilinea.

Se usan los backticks `` para escribir como si fuera un string pero la funcionalidad se extiende cuando queremos agregar variables o resultados de funciones, usando ${}, dentro de los backticks, para concatenar o agregar dentro del string un valor de una variable.

```js
const nombre = "Giselle";
const saludo = `hola ${nombre}`; //hola Giselle
```

## Objetos Literales (Diccionarios)
* Cuando se observen las {}, esto quiere decir que es un objeto.
* Cuando se crea cualquier objeto, variable, etc en JS, este tiene un "prototype", es el ADN de ese elemento, son sus funciones y metodos, get y set, todo esto son una serie de propiedades que tienen implicitos todos los objetos.
* En general los Objetos trabajan con pares de valores, llave (key) y valor (value).

```js
const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
};

console.log(persona.nombre); //Tony
```

Importante: Al crear una copia de un objeto hay que tener en cuenta que no podemos hacer una reasignacion directa, porque esta realmente esta apuntando a la referencia al espacio en memoria del objeto original.
```js
const persona2 = persona;
persona2.nombre = "Peter";

console.log(persona.nombre); //Peter
console.log(persona2.nombre); //Peter
```
Lo anterior no se debe hacer porque se esta reasignando el valor del primer objeto

* Lo recomendado es envolver entre {} el objeto y actualmente podemos hacer uso del Spread Operatos ... porque al crear un objeto nuevo se esta creando un espacio en memoria nuevo.

```js
const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona.nombre); //Tony
console.log(persona2.nombre); //Peter
```
## Arreglos
* Es una coleccion de info que se encuentra dentro de una misma variable.
* [] se representa con llaves cuadradas.
* No es recomendable utilizar el push para arreglos porque este modifica el arreglo original, cuando queremos agregar algo a un arreglo en React utilizamos el Spread Operator.
* Este Spread Operator lo que hace es extraer los elementos de la referencia, y manda individualmente cada uno de los elementos del arreglo original.
* Usando map que es un metodo muy usado en React, map es una funcion implicita en el prototype de los arreglos, por esto en mozilla MDN lo podemos ver como "Array.prototype.map()". Este metodo nos crea un nuevo arreglo, de esta forma rompiendo la referencia al arreglo original.
```js
const arreglo = [1, 2, 3, 4]; //(4) [1, 2, 3, 4]

let arreglo2 = [ ...arreglo, 5]; //(5) [1, 2, 3, 4, 5]

const arreglo3 = arreglo2.map((numero) => {
    return numero*2;
});

console.log(arreglo3); //(5) [2, 4, 6, 8, 10]
console.log(arreglo2); //(5) [1, 2, 3, 4, 5]

//Aca podemos comprobar que el arreglo original no ha sido modificado.
```



