let greet = require ('./greet');
greet();

let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

// EJEMPLO 2 //

let persona2 = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona2.getName());


//EJEMPLO 3 //

let persona3 = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getAddress: function(){
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        }
    }
}

console.log(persona3.domicilio.getAddress());
