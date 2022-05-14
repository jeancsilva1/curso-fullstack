//CLASSE COM CONSTRUTOR
 
class SpacialStation {
    constructor(name, platformQuantity){
        this.name = name
        this.platformQuantity = platformQuantity
    }
}

let observatory = new SpacialStation('Observatório', 40)

console.log(observatory)