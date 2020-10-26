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
    var wheelsValidated = 0;
    for (var i = 1; i <= 4; i++) {
        var brand = document.getElementById("inputWheelBrand" + i);
        var diameter = document.getElementById("inputWheelDiameter" + i);
        var key = i;
        var wheelDataValid = wheelsRegisterValidation(brand, diameter, key);
        if (wheelDataValid)
            wheelsValidated++;
    }
    if (wheelsValidated == 4) {
        for (var i = 1; i <= 4; i++) {
            var brandValidated = document.getElementById("inputWheelBrand" + i);
            var diameterValidated = document.getElementById("inputWheelDiameter" + i);
            var wheel = new Wheel(diameterValidated.valueAsNumber, brandValidated.value);
            car.addWheel(wheel);
        }
    }
    generateWheelsDisplay();
}
// DISPLAYS //
function generateCarDisplay() {
    deleteCarContainerFromView();
    generateWheelsContainerForView();
    generateCarTable();
}
function generateWheelsDisplay() {
    generateWheelsTable(car.wheels);
    disableWheelsButton();
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
function disableWheelsButton() {
    var button = document.getElementById("wheelsButton");
    button.disabled = true;
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
function generateWheelsTable(wheels) {
    var wheelsTable = document.getElementById("wheels-table");
    var row1 = wheelsTable.insertRow();
    var row2 = wheelsTable.insertRow();
    var row3 = wheelsTable.insertRow();
    var cell11 = row1.insertCell();
    var wheelNumber = 1;
    var text11 = document.createTextNode('Wheels: ');
    cell11.appendChild(text11);
    for (var i = 0; i < 4; i++) {
        var cell2j = row2.insertCell();
        var text2j = document.createTextNode("Wheel " + wheelNumber + ":");
        cell2j.appendChild(text2j);
        var cell3j = row3.insertCell();
        var text3j = document.createTextNode("Brand: " + wheels[i].brand + " Diameter: " + wheels[i].diameter.toString());
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
function wheelsRegisterValidation(brand, diameter, key) {
    var form = document.getElementById('wheels-register');
    var errorWheelBrand = document.getElementById('errorWheelBrand' + key);
    var errorWheelDiameter = document.getElementById('errorWheelDiameter' + key);
    var errorAccount = 0;
    form.classList.remove("is-invalid");
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        errorWheelBrand.textContent = "Brand is a required field";
        errorAccount++;
    }
    if (!validateDiameter(Number(diameter.value))) {
        diameter.classList.add("is-invalid");
        errorWheelDiameter.textContent = "Diameter must be between 0.4 and 2";
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
        //console.log(event);
        if (event.target.value != "")
            event.target.classList.remove('is-invalid');
    }, true);
}
var wheelsForm = document.getElementById('wheels-register');
if (wheelsForm) {
    wheelsForm.addEventListener('blur', function (event) {
        //console.log(event);
        if (event.target.value != "")
            event.target.classList.remove('is-invalid');
    }, true);
}
