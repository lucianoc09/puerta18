import { Persona } from "./classes/Persona";

//Creo la persona Dante
let dante = new Persona(2022, "Dante");
//Crep la persona Luciano
let luciano = new Persona(2001, "Luciano Corteggiano");
console.log(luciano.cualEsTuNombre());
console.log(luciano.cualEsTuGeneracion());
console.log(luciano.calcularEdad());


/*
// variable de año de nacimiento
const nacimiento = 2001;
// variable de tipo string con mi nombre
let nombre: string = "Luciano";

// salida
console.log("Hola " + nombre + " desde TypeScript");
*/