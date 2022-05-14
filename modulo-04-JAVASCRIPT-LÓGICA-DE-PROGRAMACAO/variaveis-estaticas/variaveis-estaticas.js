class Spaceship {
    static get decelerationRate(){
        return 0.15
    }
    constructor(name){
        this.name = name;
        this.curentVelocity = 0;
    }

    speedUp(acceleration){
        this.curentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}

let spaceship = new Spaceship("Apollo")

spaceship.speedUp(100)

console.log(spaceship)