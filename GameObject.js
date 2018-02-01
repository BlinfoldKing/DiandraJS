const { vector } = require('./Physics')

class GameObject{

    let model
    let WorldPos

    constructor(x, y){
        console.log("hello world")
        WorldPos = new vector(x, y)
    }

    onColide(){
        
    }

    OnInit(){

    }

    OnUpdate(){

    }

}

module.exports = GameObject
