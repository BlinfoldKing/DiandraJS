class vector{

    let x = 0;
    let y = 0;

    constructor = (x, y) => {
        this.x = x
        this.y = y
    }

    add = (x, y) => {
        this.x += x
        this.y += y
    }

    add = (v) => {
        this.x += v.x
        this.y += v.y
    }

    rotate = (rad) => {
        

    }

    multiply = (n) => {
        this.x *= n;
        this.y *= n;
    }  

}

Raycast = (origin, target, cb) => {
    /*
    
    
    */
    if(/*raycast succeed*/)
        cb(target)

}

module.exports = {
    vector,
    Raycast
}