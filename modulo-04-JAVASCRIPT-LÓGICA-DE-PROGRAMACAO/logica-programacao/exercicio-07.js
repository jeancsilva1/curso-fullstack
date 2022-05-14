let nomeNave = prompt('Informe o nome da nave:')
let novoNome = "";


for(let i = nomeNave.length -1; i >=0; i--){

  novoNome += nomeNave[i]
 
}
alert('Nome original da Nave:' + nomeNave + "\nNome da nave invertido:" + novoNome)