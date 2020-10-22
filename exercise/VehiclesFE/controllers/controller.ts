"use strict";

let car:Car;

function createCar()
{
    let plate:HTMLInputElement = <HTMLInputElement>document.getElementById("inputPlate");
    let brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputBrand");
    let color:HTMLInputElement = <HTMLInputElement>document.getElementById("inputColor");
    let carDataValidation = carRegisterValidation(plate, brand, color);
    if(carDataValidation){
        car = new Car(plate.value, color.value, brand.value);
        generateCarDisplay(); 
    }
}

function createWheels()
{
    var wheelsValidated = 0;
    for (var i=1; i<=4; i++) 
    {
        var brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheelBrand" + i);
        var diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheelDiameter" + i);
        var key = i;
        var wheelDataValid = wheelsRegisterValidation(brand, diameter, key);
        if(wheelDataValid) wheelsValidated++;
    }   
    if(wheelsValidated==4) 
    {
        for (var i=1; i<=4; i++) 
        {
        var brandValidated:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheelBrand" + i);
        var diameterValidated:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheelDiameter" + i); 
        var wheel:Wheel = new Wheel(diameterValidated.valueAsNumber, brandValidated.value);
        car.addWheel(wheel);
        }
        generateWheelsDisplay();
    }  
}

// DISPLAYS //


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

//

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

// FORM VALIDATION //


function carRegisterValidation(plate:HTMLInputElement, brand:HTMLInputElement, color:HTMLInputElement)
{
    const form:HTMLInputElement = <HTMLInputElement>document.getElementById('car-register');
    let errorPlate:HTMLInputElement = <HTMLInputElement>document.getElementById('errorPlate');
    let errorBrand:HTMLInputElement = <HTMLInputElement>document.getElementById('errorBrand');
    let errorColor:HTMLInputElement = <HTMLInputElement>document.getElementById('errorColor');
	let errorAccount = 0;

	form.classList.remove('is-invalid'); // ¿por qué se sigue viendo el error cuando vuleve a aplicar el método? 

	if (plate.value == "") 
	{
		plate.classList.add("is-invalid");
        errorPlate.textContent = "Plate is a required field";
		errorAccount ++;
	}
	else if (!validatePlate(plate.value))
	{
		plate.classList.add("is-invalid");
		errorPlate.textContent = "Plate format error";
		errorAccount ++;
    }
    if (brand.value == "") 
	{
		brand.classList.add("is-invalid");
        errorBrand.textContent = "Brand is a required field";
		errorAccount ++;
    }
    if (color.value == "") 
	{
		color.classList.add("is-invalid");
        errorColor.textContent = "Color is a required field";
		errorAccount ++;
	}
	
	if (errorAccount > 0) {
        return false;
	} else {
		return true;
    } 
}

function validatePlate(plate:string) 
{
    var regex = /^[0-9]{4}[a-zA-Z]{3}$/;
	return regex.test(plate) ? true : false;
}

function wheelsRegisterValidation(brand:HTMLInputElement, diameter:HTMLInputElement, key:any) 
{
    const form:HTMLInputElement = <HTMLInputElement>document.getElementById('wheels-register');
    let errorWheelBrand:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheelBrand'+key);
    let errorWheelDiameter:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheelDiameter'+key);

    let errorAccount = 0;

    form.classList.remove("is-invalid");

	if (brand.value == "") 
	{
		brand.classList.add("is-invalid");
        errorWheelBrand.textContent = "Brand is a required field";
		errorAccount ++;
    }
    if (!validateDiameter(Number(diameter.value)))
	{
		diameter.classList.add("is-invalid");
		errorWheelDiameter.textContent = "Diameter must be between 0.4 and 2";
		errorAccount ++;
    }
    
	if (errorAccount > 0) {
        return false;
	} else {
		return true;
    }
}

function validateDiameter(diameter:number) {
    return diameter>0.4 && diameter<2 ? true : false;
}

// event listeners
const carForm:HTMLInputElement = <HTMLInputElement>document.getElementById('car-register');
if(carForm) {
    carForm.addEventListener('blur', (event:FocusEvent) => {
        //console.log(event);
        if ((<HTMLInputElement>event.target).value != "") (<HTMLInputElement>event.target).classList.remove('is-invalid');
    }, true); 
}

const wheelsForm:HTMLInputElement = <HTMLInputElement>document.getElementById('wheels-register');
if(wheelsForm){
    wheelsForm.addEventListener('blur', (event:FocusEvent) => {
        //console.log(event);
        if ((<HTMLInputElement>event.target).value != "") (<HTMLInputElement>event.target).classList.remove('is-invalid');
    }, true);
}

