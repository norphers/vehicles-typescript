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
    let wheel1Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel1Brand");
    let wheel1Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel1Diameter");
    let wheel2Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel2Brand");
    let wheel2Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel2Diameter");
    let wheel3Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel3Brand");
    let wheel3Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel3Diameter");
    let wheel4Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel4Brand");
    let wheel4Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel4Diameter");
    let wheel1:Wheel = new Wheel(wheel1Diameter.valueAsNumber, wheel1Brand.value);
    let wheel2:Wheel = new Wheel(wheel2Diameter.valueAsNumber, wheel2Brand.value);
    let wheel3:Wheel = new Wheel(wheel3Diameter.valueAsNumber, wheel3Brand.value);
    let wheel4:Wheel = new Wheel(wheel4Diameter.valueAsNumber, wheel4Brand.value);
    car.addWheel(wheel1);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);
    generateWheelsDisplay()
}

function generateCarDisplay()
{
    deleteCarContainerFromView();
    generateWheelsContainerForView();
    generateCarTable();
}

function generateWheelsDisplay()
{
    generateWheelsTable();
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

function generateCarTable()
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

function generateWheelsTable()
{
    let wheelsTable:HTMLTableElement = <HTMLTableElement>document.getElementById("wheels-table");
    let row1:HTMLTableRowElement = wheelsTable.insertRow();
    let row2:HTMLTableRowElement = wheelsTable.insertRow();
    let row3:HTMLTableRowElement = wheelsTable.insertRow();
    let cell11:HTMLTableDataCellElement = row1.insertCell();
    let wheelNumber:number = 1;

    let text11:Text = document.createTextNode('Wheels: ');
    cell11.appendChild(text11);

    for(let wheel of car.wheels)
    {
        let cell2j:HTMLTableDataCellElement = row2.insertCell();
        let text2j:Text = document.createTextNode(`Wheel ${wheelNumber}:`);
        cell2j.appendChild(text2j);
        let cell3j:HTMLTableDataCellElement = row3.insertCell();
        let text3j:Text = document.createTextNode(`Brand: ${wheel.brand} Diameter: ${wheel.diameter.toString()}`);
        cell3j.appendChild(text3j);
        wheelNumber++;
    }
}

