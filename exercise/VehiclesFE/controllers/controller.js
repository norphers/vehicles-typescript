"use strict";
var car;
function createCar() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    var carDataValidation = carRegisterValidation(plate, brand, color);
    if (carDataValidation) {
        car = new Car(plate.value, color.value, brand.value);
        generateCarDisplay();
    }
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
    var wheelsDataValidation = wheelsRegisterValidation(wheel1Brand, wheel1Diameter, wheel2Brand, wheel2Diameter, wheel3Brand, wheel3Diameter, wheel4Brand, wheel4Diameter);
    if (wheelsDataValidation) {
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
}
// DISPLAYS //
function generateCarDisplay() {
    deleteCarContainerFromView();
    generateWheelsContainerForView();
    generateCarTable();
}
function generateWheelsDisplay() {
    generateWheelsTable();
}
//
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
// FORM VALIDATION //
function carRegisterValidation(plate, brand, color) {
    var form = document.getElementById('car-register');
    var errorPlate = document.getElementById('errorPlate');
    var errorBrand = document.getElementById('errorBrand');
    var errorColor = document.getElementById('errorColor');
    var errorAccount = 0;
    form.classList.remove('is-invalid'); // ¿por qué se sigue viendo el error cuando vuleve a aplicar el método? 
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "Plate is a required field";
        errorAccount++;
    }
    else if (!validatePlate(plate.value)) {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "Plate format error";
        errorAccount++;
    }
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        errorBrand.textContent = "Brand is a required field";
        errorAccount++;
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        errorColor.textContent = "Color is a required field";
        errorAccount++;
    }
    if (errorAccount > 0) {
        return false;
    }
    else {
        return true;
    }
}
function validatePlate(plate) {
    var regex = /^[0-9]{4}[a-zA-Z]{3}$/;
    return regex.test(plate) ? true : false;
}
function wheelsRegisterValidation(wheel1Brand, wheel1Diameter, wheel2Brand, wheel2Diameter, wheel3Brand, wheel3Diameter, wheel4Brand, wheel4Diameter) {
    var form = document.getElementById('wheels-register');
    var errorWheel1Brand = document.getElementById('errorWheel1Brand');
    var errorWheel1Diameter = document.getElementById('errorWheel1Diameter');
    var errorWheel2Brand = document.getElementById('errorWheel2Brand');
    var errorWheel2Diameter = document.getElementById('errorWheel2Diameter');
    var errorWheel3Brand = document.getElementById('errorWheel3Brand');
    var errorWheel3Diameter = document.getElementById('errorWheel3Diameter');
    var errorWheel4Brand = document.getElementById('errorWheel4Brand');
    var errorWheel4Diameter = document.getElementById('errorWheel4Diameter');
    var errorAccount = 0;
    form.classList.remove("is-invalid");
    if (wheel1Brand.value == "") {
        wheel1Brand.classList.add("is-invalid");
        errorWheel1Brand.textContent = "Brand is a required field";
        errorAccount++;
    }
    if (!validateDiameter(Number(wheel1Diameter.value))) {
        wheel1Diameter.classList.add("is-invalid");
        errorWheel1Diameter.textContent = "Diameter must be between 0.4 and 2";
        errorAccount++;
    }
    if (wheel2Brand.value == "") {
        wheel2Brand.classList.add("is-invalid");
        errorWheel2Brand.textContent = "Brand is a required field";
        errorAccount++;
    }
    if (!validateDiameter(Number(wheel2Diameter.value))) {
        wheel2Diameter.classList.add("is-invalid");
        errorWheel2Diameter.textContent = "Diameter must be between 0.4 and 2";
        errorAccount++;
    }
    if (wheel3Brand.value == "") {
        wheel3Brand.classList.add("is-invalid");
        errorWheel3Brand.textContent = "Brand is a required field";
        errorAccount++;
    }
    if (!validateDiameter(Number(wheel3Diameter.value))) {
        wheel3Diameter.classList.add("is-invalid");
        errorWheel3Diameter.textContent = "Diameter must be between 0.4 and 2";
        errorAccount++;
    }
    if (wheel4Brand.value == "") {
        wheel4Brand.classList.add("is-invalid");
        errorWheel4Brand.textContent = "Brand is a required field";
        errorAccount++;
    }
    if (!validateDiameter(Number(wheel4Diameter.value))) {
        wheel4Diameter.classList.add("is-invalid");
        errorWheel4Diameter.textContent = "Diameter must be between 0.4 and 2";
        errorAccount++;
    }
    if (errorAccount > 0) {
        return false;
    }
    else {
        return true;
    }
}
function validateDiameter(diameter) {
    return diameter > 0.4 && diameter < 2 ? true : false;
}
// event listeners
var carForm = document.getElementById('car-register');
if (carForm) {
    carForm.addEventListener('blur', function (event) {
        console.log(event);
        if (event.target.value != "")
            event.target.classList.remove('is-invalid');
    }, true);
}
var wheelsForm = document.getElementById('wheels-register');
if (wheelsForm) {
    wheelsForm.addEventListener('blur', function (event) {
        console.log(event);
        if (event.target.value != "")
            event.target.classList.remove('is-invalid');
    }, true);
}
