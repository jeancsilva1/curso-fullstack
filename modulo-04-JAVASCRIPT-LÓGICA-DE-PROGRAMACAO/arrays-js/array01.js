//Criando vetor com elementos texto(String)
console.log("====================Criando Array de String preenchido==========================")
let hitchedSpaceships = ['Supernova', 'Elemental', 'Helmet'];
console.log(hitchedSpaceships)
console.log("==================================================================================================================================================")

console.log("====================Imprimindo Array no indice [0]==========================")
console.log(hitchedSpaceships[0])
console.log("==================================================================================================================================================")

console.log("====================Criando Array de vários tipos preenchidos==========================")
let spaceshipInfo = ["Colossus", 7, true]
console.log(spaceshipInfo)
console.log("==================================================================================================================================================")

console.log("====================Tentando imprimir posição inexistente do Array==========================")
console.log(spaceshipInfo[3])
console.log("==================================================================================================================================================")


console.log("====================Utilizando função push do Array para inserir elemento ao final do array==========================")
let spaceships = ["Colossus", "Elemental", "Helmet"]
console.log(spaceships)
spaceships.push("Supernova");
console.log(spaceships)
console.log("==================================================================================================================================================")


console.log("====================Utilizando função pop do Array para excluir elemento ao final do array==========================")
console.log(spaceships)
spaceships.pop()
console.log(spaceships)
console.log("==================================================================================================================================================")

console.log("====================A função POP retorna o elemento que foi removido==========================")
console.log(spaceships)
let elementoRemovido = spaceships.pop()
console.log("Elemento removido: " + elementoRemovido)
console.log(spaceships)
console.log("==================================================================================================================================================")


console.log("====================Utilizando função shift do Array para excluir o primeiro elemento do array==========================")
console.log(spaceships)
elementoRemovido = spaceships.shift()
console.log("Elemento removido: " + elementoRemovido)
console.log(spaceships)
console.log("==================================================================================================================================================")


console.log("====================Utilizando função unshift do Array para inserir na primeira posicao do array==========================")
console.log(spaceships)
spaceships.unshift("Fenix")
console.log(spaceships)
console.log("==================================================================================================================================================")
 

console.log("====================Utilizando função indexOF do Array para retornar a posição de determinado elemento do array==========================")
console.log(spaceships)
let position = spaceships.indexOf("Fenix")
console.log(spaceships)
console.log("Index Of Fenix = " + position)
console.log("==================================================================================================================================================")
console.log("====================OBSERVAÇÃO:função indexOF retorna -1 quando não encontra o elemento.=================================")
console.log(spaceships) 
position = spaceships.indexOf("Jean")
console.log(spaceships)
console.log("Index Of Jean = " + position)
