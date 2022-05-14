let nomeDaNave = prompt('Qual o nome da Nave?')
let resposta = prompt('Deseja entrar na dobra espacial(S/N)?')
let dobraEspacial = 0

while(resposta == 'S'){
    dobraEspacial++
    resposta = prompt('Deseja realizar a próxima dobra (S/N)?')
}
alert('Nome da Nave: ' + nomeDaNave + '\nDobras Espaciais:' + dobraEspacial)