//Funcion de multiplicacion sin la necesidad de su operador

// const multiple = (a,b) => {
//     let result = 0;
//     const positivo = Math.abs(b) == b;
//     for (let i =0;i < Math.abs(b);i++) {
//         result = positivo ? result + a : result - a;
//     }

//     return result;
// }

// Conseguir el elemento mas grande dentro de un arreglo

// const a = multiple(50,50);
// console.log(a);

// const getBiggest = (array) => array.reduce((acc, el) => acc > el ? acc : el);
// const get = getBiggest([10,45,-1500,200,10000]);
// console.log(get);

//Cambiamos los valore de undefined, null, 0 dentro de un arreglo

// const clean = (array) => array.reduce((acc, el) => {
//     if (el){
//         acc.push(el);
//     }
//     return acc;
// },[])
// const c = clean([1,undefined,null,0,2,3]);
// console.log(c);

//Aplanar un arreglo de valores en uno determinado

// const arr = [[1,2],[[3,4]],[1,[]]];
// const aplanador = (array) => array.reduce((acc, el) => acc.concat(el),[]);
// const d = aplanador(arr);
// console.log(d);

//Calcular el numero de veces que se repite una palabra o valore

// const repetidor = str =>{
//     const lowered = str.toLowerCase();
//     const splitted = lowered.split(' ');
//     const reduced = splitted.reduce((acc,el) =>{
//        if(acc[el]){
//            acc[el]++        
//        } else{
//            acc[el] = 1;
//        }
//        return acc;  
//     },{})
//     return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el);
// }
// const e = repetidor('This is a repeated word test this is a a');
// console.log(e);

// Saber si alguna palabra o frase es palindromo
const isPalindrome = (str) => {
    str = str.replace(/\s/g,'')
    const lowered = str.toLowerCase();
    const splitted = lowered.split('');
    const reverse = splitted.reverse();
    const joined = reverse.join('');
    return lowered == joined;

}

const f = isPalindrome('Do geese see God');
console.log(f);