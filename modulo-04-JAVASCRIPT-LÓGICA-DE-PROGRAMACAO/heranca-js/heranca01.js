class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0;
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration;
        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("Velocidade maxima ultrapassada!\n Diminua ou poderá causar danos a nave.")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0;
        alert("Recolhendo armas e parando nave de batalha!")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0;
        alert("Recolhendo equipamentos de amostra e parando nave de descoberta!")
    }
}

let fenix = new BattleSpaceship("Fenix", 8, 240)
let darwin = new DiscoverySpaceship("Darwin", 10, 200)


console.log(darwin)
console.log(fenix)

darwin.speedUp(210);
fenix.speedUp(230)
darwin.stop()
fenix.stop()