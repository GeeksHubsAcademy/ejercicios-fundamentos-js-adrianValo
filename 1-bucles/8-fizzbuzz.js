// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (let a = 0; a <= 100; a++){
    if((a % 3) == 0){
        console.log("GEEKS");
    }
    if((a % 5) == 0){
        console.log("HUBS");
    }
    if((a % 5) != 0 && (a % 3) != 0){
        console.log(a);
    }


}