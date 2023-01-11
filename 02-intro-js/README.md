# Notas importantes sobre caracteristicas mas usadas de JS en React

## Variables

* Let
* Const

**Nota:** El uso de var ya no es recomendado debido a conflitos del scope puesto que esta variable es de scope global, mientras let y const son de scope local.

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
