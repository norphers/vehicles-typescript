"use strict";
var car;
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var carPlate = document.getElementById("plate").innerText;
    carPlate = car.plate;
    //document.body.innerText = "CAR: PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + car.brand + " WHEELS: " + JSON.stringify(car.wheels);
}
