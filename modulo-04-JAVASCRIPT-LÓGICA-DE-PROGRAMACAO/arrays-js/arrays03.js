//Splice and Slice
console.log("====================Splice==========================")
let hitchedSpaceships = ['Elemental','Helmet','Golias', "Supernova"];
removedSpaceships = hitchedSpaceships.splice(1, 2, "Deméter", "Puller", "Fenix")
console.log('Elementos removidos: ' + removedSpaceships)
console.log('Array após Splice:' + hitchedSpaceships)
//Splice espera parametros: Indice, quantidade de elementos que vai remover e quais elementos serão adicionados
//exemplo: a partir da posição 1, exclua 2 posições e acrescente "Deméter", "Puller", "Fenix"
console.log("==================================================================================================================================================")


console.log("====================Slice==========================")
hitchedSpaceships = ['Elemental','Helmet','Golias', "Supernova"];
//Slice espera parametros Indice inicial e final e retorna o novo array com os elementos extraidos.
//exemplo: pegue os elementos da posição 1 até a posição 3 -1 (vai extrair os elementos da posição 1 até o elemento anterior ao indice 3)"
extratect = hitchedSpaceships.slice(1, 3)
console.log(hitchedSpaceships)
console.log(extratect)
console.log("==================================================================================================================================================")
