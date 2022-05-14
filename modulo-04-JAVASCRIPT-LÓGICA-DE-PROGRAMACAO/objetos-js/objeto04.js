let spaceship = {
    name: "",
    type: "",
    velocity: 0,
    maxVelocity: 120,
}
let resp;


spaceship.name = prompt('Informe o nome da Nave:')
spaceship.type = prompt('Informe o tipo da Nave:')

showMenu();

while (resp === '1' || resp === '2') {
    switch (resp) {
        case '1':
            acelerar();
            imprimir();
            showMenu();
            break;

        case '2':
            imprimir();
            break;
    }

}


function showMenu() {
    resp = prompt('Deseja acelerar ou parar a nave? \n 1 - Acelerar \n 2 - Parar')
    while (!(resp === '1' || resp === '2')) {
        alert('Opção Incorreta!')
        showMenu();
    }
    return resp;
}

function acelerar() {
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert('Você atingiu a velocidade máxima. Não pode mais acelerar')
               
    }
    else {
        let aceleracao = prompt('A que velocidade deseja acelerar?');
        spaceship.velocity += Number(aceleracao);
    }

}

function imprimir() {
    let message = 'Nome da nave: ' + spaceship.name + '\nTipo: ' + spaceship.type + '\nVelocidade Atual: ' + spaceship.velocity + 'ms'
    alert(message);
}