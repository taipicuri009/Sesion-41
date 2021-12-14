//Método indexOf
//Localizar valores en un array
var array = [36 , 327 , 1194, 1194];
console.log(array.indexOf(327)) //Se busca el elemento 327 en el arreglo, por lo tanto el elemento se encontrará en el índice 0
console.log(array.indexOf(37))//Se busca el elemento 37, por lo tanto el elemento no se encontrará, por lo que el resultado será -1
console.log(array.indexOf(1194, 2)) //Se busca el elemento 9 en el índice 2, por lo tanto el elemento se encontrará en ese índice
console.log(array.indexOf(36, -1))//Se busca el elemento 36 en el índice -1, por lo tanto el elemento no se encontrará, por ende el resultado es -1
console.log(array.indexOf(36, -3))//Se busca el elemento 36 en el índice -3, por lo tanto el elemento se encontrará en el índice 0
//Método LastindexOf
var array2 = ["pared", "ventana" , "cortina" , "mueble", "ventana" , "mesa" , "escritorio" , "escritorio"];
console.log("LastIndexOf");
console.log(array2.lastIndexOf("ventana")) //Se busca el elemento "ventana" en el arreglo, por lo tanto el elemento se encontró en el índice 4
console.log(array2.lastIndexOf("silla")) //Se busca el elemento "silla" en el arreglo, por lo tanto el elemento no se encontró en el arreglo, muestra -1
console.log(array2.lastIndexOf("ventana", 2)) //1
console.log(array.lastIndexOf("escritorio", -1)) //-1

//metodo includes()
var array3 = [1, 2, 3]
console.log(array3.includes(2));//true - false
console.log(array3.includes(4));
console.log(array3.includes(3, 3));
console.log(array3.includes(3, -999));
console.log(array3.includes(2, -3));

//metodo find-FindIndex
const array4 = [4, 8, 15, 35, 55];
const found = array4.find(element => element > 15);
console.log(found);//12
const isLargeNumber = (element) => element > 30;
console.log(array4.findIndex(isLargeNumber));
//encontrar el indice de un elemento en el array que sea un numero primo(si no hay -1)
function esPrimo(element, index, array){
    var start = 2;
    while(start <= Math.sqrt(element)){
        if(element % start < 1){
            return false;
        } else {
            start++;
        }
    }
    return element > 1;
}
console.log([4, 6, 8, 12].findIndex(esPrimo));
console.log([4, 6, 7, 12].findIndex(esPrimo));