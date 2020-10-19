"use strict";

let car:Car;

function createCar()
{ 
    let plate:HTMLInputElement = <HTMLInputElement>document.getElementById("inputPlate");
    let brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputBrand");
    let color:HTMLInputElement = <HTMLInputElement>document.getElementById("inputColor");
    car = new Car(plate.value, color.value, brand.value);  
    generateCarDisplay();
}

function createWheels()
{
    //wheels
}

function generateCarDisplay()
{
    deleteCarContainerFromView();
    generateWheelsContainerForView();
    generateTableDisplay();
}

function deleteCarContainerFromView()
{
    let carContainer:HTMLElement = <HTMLElement>document.getElementById("car-container");
    carContainer.style.display = "none";
}

function generateWheelsContainerForView()
{
    let wheelsContainer:HTMLElement = <HTMLElement>document.getElementById("form-wheels-creation");
    wheelsContainer.style.display = "block";
}

function generateTableDisplay()
{
    let carDisplayContent:HTMLTableElement = <HTMLTableElement>document.getElementById("car-table");
    let rowTitle:HTMLTableRowElement = carDisplayContent.insertRow();
    let rowContent:HTMLTableRowElement = carDisplayContent.insertRow();
    let cellTitle:HTMLTableDataCellElement = rowTitle.insertCell();
    let cellPlate:HTMLTableDataCellElement = rowContent.insertCell();
    let cellBrand:HTMLTableDataCellElement = rowContent.insertCell();
    let cellColor:HTMLTableDataCellElement = rowContent.insertCell();
    let title:Text = document.createTextNode('Car: ');
    let plate:Text = document.createTextNode(`Plate: ${car.plate}`);
    let brand:Text = document.createTextNode(`Brand: ${car.brand}`);
    let color:Text = document.createTextNode(`Color: ${car.color}`);
    cellTitle.appendChild(title);
    cellPlate.appendChild(plate);
    cellBrand.appendChild(brand);
    cellColor.appendChild(color);
}