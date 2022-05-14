class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad){
        this.name = name;
        this.monthlyProcessedLoad = monthlyProcessedLoad
       
    }
 get weeklyProcessedLoad() {
     return this.monthlyProcessedLoad / 4
 }

}

let resource = new ResourceProcessStation("Teste", 100)
console.log('Chamando metodo GET: ' + resource.weeklyProcessedLoad)
