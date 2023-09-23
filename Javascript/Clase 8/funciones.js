//Funciones
function sumar(numeroUno,numeroDos) { //Normalmente los nombres de las funciones deben empezar con verbo infinitivo
      return numeroUno+numeroDos;
}


let sumarVersionDos = function (numeroUno,numeroDos) {
    return numeroUno + numeroDos;
};// a través de funcion anonima

sumarVersionTres = (numeroUno,numeroDos) => numeroUno + numeroDos;
// arrow fuction (tambien es funcion anonima)

let funcionUno = function (numeroUno,numeroDos,funcionDos){
    console.log("estoy dentro de la funcion uno")
    return funcionDos(numeroUno,numeroDos);
};

let funcionTres = (numeroUno,numeroDos) => {
    console.log("Voy a restar");
    return numeroUno - numeroDos;
};

//console.log(sumar(5,8));
//console.log(sumar("Hola",  " mundo"));
//console.log(sumarVersionDos(10,20));
//console.log(sumarVersionTres(40,58.2));
console.log(funcionTres(10,20));