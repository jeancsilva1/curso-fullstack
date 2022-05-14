let velocidadeInicial = 150



function desacelerar(velocidade) {
    alert('Desacelerando a Nave em ' + velocidade + 'KM/s')
    while (velocidadeInicial >= 0) {
        velocidadeInicial -= velocidade;
        if (velocidadeInicial <= 0) {
            alert('A nave está parada. As comportas podem ser abertas!')
            break;
        }
        alert('Velocidade Atual: ' + (velocidadeInicial))

    }


}

desacelerar(20)




