const GameObject = require('./GameObject')

class Engine{

    let canvas

    const obj = []
    let update


    constructor(id) {
        getCanvas(id)
        isRunning = true
    }

    start() {
        obj.forEach(element => {
          element.OnInit() 
        })array

        this.update = setInterval(obj.forEach(element => {
            element.OnUpdate()
        }),200)
    }

    stop() {
        clearInterval(this.update)
    }

    getCanvas(id) {
        this.canvas = document.getElementById(id);
    }

    render() {
        
    }

    draw(GameObject) {

    }


}

module.exports = Engine