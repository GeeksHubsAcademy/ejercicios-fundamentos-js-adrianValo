// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// y muéstralo por consola.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]/*
for (let a = 0; a < gente.length; a++){
    if(gente[a].nombre.charAt(0) == "J"){
        console.log(gente[a].nombre);
    }
}*/
for(var pro of gente){
    if(pro.nombre[0] === "J"){
        console.log(pro);
    }
}