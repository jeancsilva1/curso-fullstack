let distancia = prompt('Qual a distancia em Anos luz(l.y)?')
let opcaoEscolhida = prompt('Selecione uma das opções abaixo para realizar a conversão \n'
 + '01 - Parsec(pc) \n'
 + '02 - Unidade Astronônima(AU) \n'
 + '03 - Quilômetros(km)');

let unidadeEscolhida;
let conversao;

switch(opcaoEscolhida){
    case '1':
    unidadeEscolhida = 'pc'
    conversao = distancia * 0.306601
    alert('Distancia em ANOS LUZ: ' + distancia + '\n' + 'Distância percorrida em pc foi de: ' + conversao)
    break;
    
    case '2':
    unidadeEscolhida = 'AU'
    conversao = distancia * 63241.1
    alert('Distancia em ANOS LUZ: ' + distancia + '\n' + 'Distância percorrida em AU foi de: ' + conversao)
    break;

    case '3':
    unidadeEscolhida = 'KM'
    conversao = distancia * 9.5 * Math.pow(10,12)
    alert('Distancia em ANOS LUZ: ' + distancia + '\n' + 'Distância percorrida em KM foi de: ' + conversao)
    break;

    default:
        alert('Distancia em ANOS LUZ:' + distancia + '\n' + 'Unidade não identificada: Conversão fora de escopo')
}