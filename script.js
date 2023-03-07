//1.  Ejercicios destructuring
//Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

//Extrae la empleada Ana con todos sus datos personales:
const [empleado1, empleado2] = empleados
console.log(empleado2);

//Extrae el email del empleado Luis --> Luis@gmail.com
console.log(empleado1.email);

//Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

//Cambia el nombre de la propiedad “name” por “nombre
const {name:nombre} = pokemon


//Extrae el nombre del Pokemon
console.log(nombre);

//Extrae el tipo de Pokemon que es
const {type} = pokemon
console.log(type);

//Extrae el movimiento “Tackle”
const {moves} = pokemon
console.log(moves[1]);

//2. Ejercicios spread/rest

//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergearObjetos = {...pokemon, ...pikachu}

console.log(mergearObjetos)

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
let sumatoria = 0
  function sumEveryOther(...num) {
    for (let i = 0; i < num.length; i++) {
        sumatoria += num[i]
    }
    return sumatoria
  }

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //46

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
let resultado = 0;
function addOnlyNums(...arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (typeof arr[i] == 'number') {
            resultado += arr[i]
        }
    }
    return resultado
}
console.log(addOnlyNums(1, 'perro', 2, 4)); //7

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
let elementos = 0
function countTheArgs(...arr) {
    return arr.length
}

console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays(arr1, arr2) {
    let arrCombinated = [...arr1,...arr2];
    return arrCombinated
}
console.log(combineTwoArrays([1,2,3], [4,5,6]))


//3. Extras


//Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

//Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

// const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;
const {today:maximaHoy} = HIGH_TEMPERATURES
const {tomorrow:maximaManana} = HIGH_TEMPERATURES

console.log(maximaHoy)
console.log(maximaManana)

//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...arr) {
    let arrNoRepeat = []
    for (let contador of arr) {
        if (!arrNoRepeat.includes(contador)) {
            arrNoRepeat.push(contador)
        }
    }
    return arrNoRepeat
}
console.log(onlyUniques('caballo', 'perro','gato', 'perro'));

//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
function combineAllArrays(...arr) {
    let newArrCombinated = []
    let concat = newArrCombinated.concat(...arr)
    return concat;
}
console.log(combineAllArrays([1, 2, 3],[4, 5, 6],[7, 8, 9],[10, 11, 12]));

//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare(...num) {
    let array = [...num]

    let arrayCuadrado = [];
    for (const num of array) {
        let numCuadrado = num ** 2;
        arrayCuadrado.push(numCuadrado)
    }
    
    let total = 0;
    for (const num of arrayCuadrado) {
        total += num;
    }

    return total
}


console.log(sumAndSquare(2,4,7,9,11));

