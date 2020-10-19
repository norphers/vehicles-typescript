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
    //wheels
}
function generateCarDisplay() {
    deleteCarContainerFromView();
    generateWheelsContainerForView();
    generateTableDisplay();
}
function deleteCarContainerFromView() {
    var carContainer = document.getElementById("car-container");
    carContainer.style.display = "none";
}
function generateWheelsContainerForView() {
    var wheelsContainer = document.getElementById("form-wheels-creation");
    wheelsContainer.style.display = "block";
}
function generateTableDisplay() {
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
