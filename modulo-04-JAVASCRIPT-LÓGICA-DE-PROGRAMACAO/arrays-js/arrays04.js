//Iteração com Arrays
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller", "Paralelepipedo"]

//forEach - vai percorrer o array, e pra cada elemento percorrido, ele vai retornar os parametros passados na função callback

hitchedSpaceships.forEach(function(current, index){
    console.log("Nave:" + current + "\nIndex: " + index)
})

//MAP - modifica os elementos do  array 1 por 1 sem alterar o array original

//percorre o array, e pra cada elemento percorrido atribui o valor a variavel upcased e retorna 
let upcasedSpaceships = hitchedSpaceships.map(function(current){
  let upcased = current.toUpperCase();
  return upcased
})

console.log(upcasedSpaceships)


//FILTER - filtra os elementos passando uma condição(elemento mais que 7 caracteres) e se retornar true - 
//executa a condição no elemento e retorna em um novo Array

let with7chars = hitchedSpaceships.filter(element => element.length >=7)
console.log("Elementos com mais ou igual a 7 caracteres: " + with7chars)

//FIND - retorna o primeiro elemento que satisfaça a condição passada. 

let finder = hitchedSpaceships.find(element => element.length >=9)
console.log("Primeiro elemento encontrado com mais de 9 caracteres: " + finder)