let nomeNave = prompt('Qual o nome da Nave?')
let escolheCaractere = prompt('Qual o caractere deseja substituir?')
let substituiCaractere = prompt('Por qual caractere deseja substituir?')
let novoNome = '';

for(let i = 0; i< nomeNave.length; i++){
    if(nomeNave[i] == escolheCaractere){
        novoNome += substituiCaractere;
        
    }else {
        novoNome += nomeNave[i]
    }
    
}
alert(novoNome)
