let spaceship = {
name: "Supernova",
type: "Batalha",
crew: ["Cap. Silva", "Ana", "Thiago"]
}

spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)

let spaceships = [
    {name: 'Elemental', crewQuantity: 10},
    {name: 'Colossus', crewQuantity: 8},
    {name: 'Helmet', crewQuantity: 15},

]

spaceships.forEach(spaceship => {
    console.log('A nave ' + spaceship.name + ' tem ' + spaceship.crewQuantity + ' tripulantes')
})

let nave = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent", 
        age: 37
    }
}

console.log(nave)