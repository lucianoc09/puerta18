class Persona {
    private nacimiento: number;
    private nombre: string;

    constructor(añoNacimiento: number, nombre: string){
        this.nacimiento = añoNacimiento;
        this.nombre = nombre;
    };

    public cualEsTuNombre(): string{
        return "Mi nombre es "+ this.nombre.split("-");
    };

    public cualEsTuEdad(): string{
        return "Mi edad es ";
    };
    
    public cualEsTuGeneracion(){
        if (this.nacimiento <=1975){
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento > 1975 && this.nacimiento < 1999){
            return "Soy un Milenial";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010){
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 2010){
            return "Soy un Alpha";
        }
    }

    public calcularEdad(){
        let edad: number = 2022 - this.nacimiento;
        return "mi edad es "+ edad + " años";
    }
};

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