let nomeNave = prompt('Informe o nome da Espaço Nave:');
let velocidade = 0;
let opcao;

exibirMenu();

function exibirMenu() {

    opcao = prompt('Escolha o que deseja fazer com a nave:\n'
        + '01 - Acelerar 5Km/s\n'
        + '02 - Desacelerar 5Km/s\n'
        + '03 - Sair');

    while (opcao != 1 && opcao != 2 && opcao != 3) {
        alert('Opção Incorreta. Informe novamente o que deseja fazer com a nave.')
        exibirMenu();
    }

}

function acelerar(aceleracao) {
    velocidade += aceleracao;
}

function desacelerar(desaceleracao) {
    velocidade -= desaceleracao;
}

while (opcao == 1 || opcao == 2 || opcao == 3) {
    calculaAceleracao();
    if(opcao ==3 ){
        break;
    }
    exibirMenu();
}

function calculaAceleracao() {


    switch (opcao) {
        case '1':
            acelerar(5)
            alert('Nome da Nave:' + nomeNave + '\nVelocidade:' + velocidade)
            break;

        case '2':
            if (velocidade < 5) {
                alert('Nave não pode ser desacelerada');
                break;
            }
            else if(velocidade >=5) {
                desacelerar(5)
                alert('Nome da Nave:' + nomeNave + '\nVelocidade:' + velocidade);
                break;
            }
            
           


        case '3':
            alert('Saindo da operação!')
            break;

    }
}


