class ResourceProcessStation {
    constructor(name, cargaMensal){
        this.name = name;
        this.cargaMensal = cargaMensal;
    }
static calculateProcessInHours(cargaMensal, hours){
    return cargaMensal / 720 * hours;
}

}

let totalProcessing = ResourceProcessStation.calculateProcessInHours(500,6)
console.log(totalProcessing)