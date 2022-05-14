let spaceship = {
    name: "Deméter",
    type: "Extração",
    velocity: 0,
    maxCrew: 20,
    turnOn: function(){
        console.log("Preparando propulsão")
        console.log("Ligando computador de bordo")
    }
}

//spaceship.turnOn()



spaceship.speedUp = function(acceleration){
    this.velocity += acceleration
}

spaceship.addCrew = function(qtdCrew){
    this.maxCrew += qtdCrew
}

console.log(spaceship)

spaceship.speedUp(10)
spaceship.addCrew(10)

console.log(spaceship)