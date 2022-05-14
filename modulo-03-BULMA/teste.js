let nomeNave = prompt('Qual o nome da Nave?');
let velocidadeNave = 0;
let resp;
const ACELERACAO = 5;


showMenu();

while (resp === '1' || resp === '2') {
    switch (resp) {
        case '1':
            acelerar(ACELERACAO);
            imprimir();
            break;

        case '2':
            desacelerar(ACELERACAO);
            imprimir();
            break;

    }
    showMenu();

}

function acelerar() {
    velocidadeNave += ACELERACAO;
    return velocidadeNave;
}

function desacelerar() {
    if (velocidadeNave <= 0) {
        alert('A nave está parada. Não é possível desacelerar')
    }
    else {
        velocidadeNave -= ACELERACAO;
        return velocidadeNave;
    }
}

function showMenu() {
    resp = prompt('O que deseja fazer com a nave? \n1 - Acelerar \n2 - Desacelerar \n3 - Sair')
    while(!(resp === '1' || resp === '2' || resp === '3')){
        alert('Opção Inválida! Escolha outra opção')
        resp = prompt('O que deseja fazer com a nave? \n1 - Acelerar \n2 - Desacelerar \n3 - Sair')
    }
}
  

function imprimir() {
    alert('Nome da Nave: ' + nomeNave + '\n' +
        'Velocidade atual: ' + velocidadeNave)

}
