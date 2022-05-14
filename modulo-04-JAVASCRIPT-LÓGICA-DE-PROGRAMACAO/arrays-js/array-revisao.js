
let times = [['Sociedade Esportiva Palmeiras', 3], ['Francana', 3], ['Botafogo-SP',0], ['Guarani', 1]]

console.log(times)

let timesComMais = times.filter(function(current){
     return current[1] > 2
}).map(current => current[0])
console.log("Times com mais de 2 libertadores: " + timesComMais)
/*
let filtro = times.filter(function(current){
    return current[0].length > 10
})

console.log(filtro)

let maisuculas = times.map(function (current){
    return current[0].toUpperCase()

})

console.log(maisuculas)
*/