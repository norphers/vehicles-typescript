"use strict";
var car;
function createCar() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    car = new Car(plate.value, color.value, brand.value);
    generateCarDisplay();
}
function createWheels() {
    var wheel1Brand = document.getElementById("inputWheel1Brand");
    var wheel1Diameter = document.getElementById("inputWheel1Diameter");
    var wheel2Brand = document.getElementById("inputWheel2Brand");
    var wheel2Diameter = document.getElementById("inputWheel2Diameter");
    var wheel3Brand = document.getElementById("inputWheel3Brand");
    var wheel3Diameter = document.getElementById("inputWheel3Diameter");
    var wheel4Brand = document.getElementById("inputWheel4Brand");
    var wheel4Diameter = document.getElementById("inputWheel4Diameter");
    var wheel1 = new Wheel(wheel1Diameter.valueAsNumber, wheel1Brand.value);
    var wheel2 = new Wheel(wheel2Diameter.valueAsNumber, wheel2Brand.value);
    var wheel3 = new Wheel(wheel3Diameter.valueAsNumber, wheel3Brand.value);
    var wheel4 = new Wheel(wheel4Diameter.valueAsNumber, wheel4Brand.value);
    car.addWheel(wheel1);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);
    generateWheelsDisplay();
}
function generateCarDisplay() {
    deleteCarContainerFromView();
    generateWheelsContainerForView();
    generateCarTable();
}
function generateWheelsDisplay() {
    generateWheelsTable();
}
function deleteCarContainerFromView() {
    var carContainer = document.getElementById("car-container");
    carContainer.style.display = "none";
}
function generateWheelsContainerForView() {
    var wheelsContainer = document.getElementById("form-wheels-creation");
    wheelsContainer.style.display = "block";
}
function generateCarTable() {
    var carDisplayContent = document.getElementById("car-table");
    var rowTitle = carDisplayContent.insertRow();
    var rowContent = carDisplayContent.insertRow();
    var cellTitle = rowTitle.insertCell();
    var cellPlate = rowContent.insertCell();
    var cellBrand = rowContent.insertCell();
    var cellColor = rowContent.insertCell();
    var title = document.createTextNode('Car: ');
    var plate = document.createTextNode("Plate: " + car.plate);
    var brand = document.createTextNode("Brand: " + car.brand);
    var color = document.createTextNode("Color: " + car.color);
    cellTitle.appendChild(title);
    cellPlate.appendChild(plate);
    cellBrand.appendChild(brand);
    cellColor.appendChild(color);
}
function generateWheelsTable() {
    var wheelsTable = document.getElementById("wheels-table");
    var row1 = wheelsTable.insertRow();
    var row2 = wheelsTable.insertRow();
    var row3 = wheelsTable.insertRow();
    var cell11 = row1.insertCell();
    var wheelNumber = 1;
    var text11 = document.createTextNode('Wheels: ');
    cell11.appendChild(text11);
    for (var _i = 0, _a = car.wheels; _i < _a.length; _i++) {
        var wheel = _a[_i];
        var cell2j = row2.insertCell();
        var text2j = document.createTextNode("Wheel " + wheelNumber + ":");
        cell2j.appendChild(text2j);
        var cell3j = row3.insertCell();
        var text3j = document.createTextNode("Brand: " + wheel.brand + " Diameter: " + wheel.diameter.toString());
        cell3j.appendChild(text3j);
        wheelNumber++;
    }
}
