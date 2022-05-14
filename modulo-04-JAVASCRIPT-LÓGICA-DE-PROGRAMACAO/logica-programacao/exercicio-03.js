let nomePiloto = prompt('Qual o nome do piloto?')
let velocidadeInicial = 0
let velocidadeAcelerada = prompt('A que velocidade voce gostaria de acelerar?')
alert('Você está agora a uma velocidade de: ' + velocidadeAcelerada + ' km/h')

if(velocidadeAcelerada <=0){
    alert('A Nave está parada. Considere partir e aumentar a velocidade')
}

else if (velocidadeAcelerada <40){
    alert('Você está devagar. Podemos aumentar mais')
}
else if(velocidadeAcelerada >= 40 && velocidadeAcelerada <80){
    alert('Parece uma boa velocidade para manter')

}
else if(velocidadeAcelerada >= 80 && velocidadeAcelerada <100){

alert('Velocidade alta. Considere diminuir')
}

else if(velocidadeAcelerada >= 100){
    alert('Velocidade perigosa. Controle automático forçado')
}

alert('Nome do Piloto:' + nomePiloto + '\n'
     +'Velocidade: ' + velocidadeAcelerada + ' km/h')