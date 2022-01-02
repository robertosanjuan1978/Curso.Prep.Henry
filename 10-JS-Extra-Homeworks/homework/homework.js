// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var matriz = []

    for (var prop in objeto){
      var arr = []
      arr.push(prop)
      arr.push(objeto[prop])
      matriz.push(arr)
    }
      return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {}

  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]]===undefined) 
      obj[string[i]] = 1
      else obj[string[i]]++
      
      // else obj[string[i]] = obj[string[i]] + 1;
  }  
   return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string = "";
  var string2 = "";

  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      string = string + s[i]    
    } else string2 = string2 + s[i] 
  } return string + string2
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseSeparada = str.split(' ')

  for (var i = 0; i < fraseSeparada.length; i++) {
    var palabraActual = fraseSeparada[i]
    var palabraInvertida = palabraActual.split('').reverse().join('')
    fraseSeparada[i] = palabraInvertida
    
  } return fraseSeparada.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numStr = numero.toString()
  var strInvertido = numStr.split('').reverse().join('')

  if (numStr === strInvertido) {
    return "Es capicua"
  } return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaSeparada = cadena.split('')
  
  for (var i = 0; i < cadenaSeparada.length; i++) {
    if (cadenaSeparada[i] === "a") {
      delete cadenaSeparada[i];
    } else if (cadenaSeparada[i] === "b") {
      delete cadenaSeparada[i];
    } else if (cadenaSeparada[i] === "c") {
      delete cadenaSeparada[i];
      }       
} return cadenaSeparada.join('')
}

// const abc = ['a', 'b', 'c']
// var arr = cadena.split('')
// arr = arr.filter (function(letra) {
//    return !abc.includes(letra)
// })
// return arr.join('')


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrOrdenado = []

  arrOrdenado = arr.sort(function(a, b) {
    if(a.length === b.length) return 0;
    if(a.length < b.length) return -1;
    if(a.length > b.length) return 1;   
  })
  return arrOrdenado
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newArr = []
  for (var i=0; i<arreglo1.length; i++){
    for (var k=0; k<arreglo2.length; k++){
      if (arreglo1[i] === arreglo2[k]){ 
    newArr.push(arreglo1[i])
  } 
}
} return newArr
}

/* var newArr = []
    arreglo1.forEach(function (number) {
      if (arreglo2.includes(number)) {
        newArr.push(number)
      }
    }) return newArr
  }
*/


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

