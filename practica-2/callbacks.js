function saludar(mensaje, callback) {
    // console.log(callback); //
    console.log("Muchos procesos...");
    let m = callback(mensaje);
    return m;
}

function despedida(mensaje) {
    return `Adios ${mensaje}`;
}

function bienvenida(mensaje) {
    return `Bienvenido ${mensaje}`;
}

let res = saludar("mundo cruel", bienvenida);
let res2 = saludar("mundo cruel", despedida);

let res3 = saludar("mundo nomas", function(mensaje) {
    return `Buenas tardes ${mensaje}`;
});

bienvenida("X");

console.log(res);
console.log(res2);
console.log(res3);