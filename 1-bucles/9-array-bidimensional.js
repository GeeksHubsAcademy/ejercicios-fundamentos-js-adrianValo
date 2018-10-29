
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

for (var a = 0; a < 3; a++){
    for (let b = 0; b < 3; b++){
        matriz[a][b] = a+b.toString();
    }
}
console.log(matriz);