"use strict";

let car:Car;

function createCar ()
{
    let carContainer: HTMLElement = <HTMLElement>document.getElementById("create-car-container");
    let plate:HTMLInputElement = <HTMLInputElement>document.getElementById("inputPlate");
    let brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputBrand");
    let color:HTMLInputElement = <HTMLInputElement>document.getElementById("inputColor");
    let tableContainer: HTMLAreaElement = <HTMLAreaElement>document.getElementById("table-container");
    let carTable: HTMLTableElement = <HTMLTableElement>document.getElementById("car-table");

    car = new Car(plate.value, color.value, brand.value);
    
    //carContainer.style.display = "none";
    
    let p:HTMLElement = document.createElement("P");
    let text:Text = document.createTextNode("Car"); //`car: ${car.plate}, ${car.brand}, ${car.color}.`
    p.appendChild(text);
    tableContainer.appendChild(p);

    let tHead:HTMLTableSectionElement = carTable.createTHead();
    let row:HTMLTableRowElement = tHead.insertRow();
    let th1:HTMLTableHeaderCellElement = document.createElement("th");
    let thText1: Text = document.createTextNode("Plate");
    th1.appendChild(thText1);
    row.appendChild(th1);
    let th2:HTMLTableHeaderCellElement = document.createElement("th");
    let thText2: Text = document.createTextNode("Brand");
    th2.appendChild(thText2);
    row.appendChild(th2);
    let th3:HTMLTableHeaderCellElement = document.createElement("th");
    let thText3: Text = document.createTextNode("Color");
    th3.appendChild(thText3);
    row.appendChild(th3);

    let row2:HTMLTableRowElement = carTable.insertRow();
    let cell1:HTMLTableDataCellElement = row.insertCell();
    let plateText:Text = document.createTextNode(car.plate);
    cell1.appendChild(plateText);
    row2.appendChild(cell1);
    let cell2:HTMLTableDataCellElement = row.insertCell();
    let brandText:Text = document.createTextNode(car.brand);
    cell2.appendChild(brandText);
    row2.appendChild(cell2);
    let cell3:HTMLTableDataCellElement = row.insertCell();
    let colorText:Text = document.createTextNode(car.color);
    cell3.appendChild(colorText);
    row2.appendChild(cell3);

}
