class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0;
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("Velocidade máxima ultrapassada!\n Diminua ou poderá provocar danos a nave")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp(){
        alert("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1;
    }
}

let transportSpaceshiop = new TransportSpaceship("Transportadora", 4, 100)