let car:Car;

function createCar (plate:string, brand:string, color:string)
{
    car = new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));

    let carPlate = document.getElementById("plate").innerText;
    carPlate = car.plate;


    //document.body.innerText = "CAR: PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + car.brand + " WHEELS: " + JSON.stringify(car.wheels);
}