// Class Car
// -> gearbox, wheels, seats, windows, sidemirrors, engine:toyotaOyata, glutch, brake
// -> startGlutch -> "clutch Started"
// -> startEngine -> return "Toyota Engine has started"
// -> startCar -> 1. startGluch -> "clutch Started" -> "Toyota Engine has started"
// Class Porsche extends Car
// -> Porsche engine has started.
// Class Toyota
//Class Volkaswagen

class Car {
    constructor( gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake) {
        this.gearbox = gearbox
        this.wheels = wheels
        this.seats = seats
        this.windows = windows
        this.sidemirrors = sidemirrors
        this.engine = engine
        this.clutch = clutch
        this.brake = brake
        this.car = []
    }


    get getCar() {
        return this.car
    }

    getcarInfo() {
        let car = this.car.length > 0 && this.car.slice(0, this.car.length - 1).join(', ')+
        ` and ${this.car[this.car.length - 1]}`
        let formattedCar = car ? ` the car ${car}` : ''

        let info = `with ${this.gearbox}, and it has ${this.wheels} holding a ${this.seats} capacity.
        Not only does it has ${this.sidemirrors}, it has a powerful ${this.engine} and ${this.clutch} and
        ${this.brake} too. ${formattedCar}`
        return info
    }
}

const car1 = new Car('gear 1', '4 wheels', '2 seater', '2 windows', '2 sidemirrors', '1 engine', '2 clutchs', 'breaks')

car1.car = 'Toyota'

console.log(car1)