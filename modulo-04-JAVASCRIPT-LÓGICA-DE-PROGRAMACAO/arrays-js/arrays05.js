const hitchedSpaceships = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]];

//Filtrar o nome das naves que tem mais de 9 tripulantes
let com9tripulantes = hitchedSpaceships.filter(function(current, index){
if(current[1] >=9){
    return hitchedSpaceships[index][0][0];
}


})

console.log(com9tripulantes)

