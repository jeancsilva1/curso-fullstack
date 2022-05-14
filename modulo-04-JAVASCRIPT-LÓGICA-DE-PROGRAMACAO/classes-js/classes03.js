class Spaceship {
    constructor(name, type = 'Descoberta'){
        this.name = name;
        this.type = type;
    }
}

let space = new Spaceship('jean')
console.log(space)

let space01 = new Spaceship("Fenix", "Batalha")
console.log(space01)