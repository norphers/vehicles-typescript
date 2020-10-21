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
    let wheel1Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel1Brand");
    let wheel1Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel1Diameter");
    let wheel2Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel2Brand");
    let wheel2Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel2Diameter");
    let wheel3Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel3Brand");
    let wheel3Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel3Diameter");
    let wheel4Brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel4Brand");
    let wheel4Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputWheel4Diameter");
    let wheelsDataValidation = wheelsRegisterValidation(wheel1Brand, wheel1Diameter, wheel2Brand, wheel2Diameter, 
                                                        wheel3Brand, wheel3Diameter, wheel4Brand, wheel4Diameter);
    if(wheelsDataValidation) 
    {
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

function wheelsRegisterValidation( wheel1Brand:HTMLInputElement, wheel1Diameter:HTMLInputElement, 
    wheel2Brand:HTMLInputElement, wheel2Diameter:HTMLInputElement, 
    wheel3Brand:HTMLInputElement, wheel3Diameter:HTMLInputElement, 
    wheel4Brand:HTMLInputElement, wheel4Diameter:HTMLInputElement) 
{
    const form:HTMLInputElement = <HTMLInputElement>document.getElementById('wheels-register');
    let errorWheel1Brand:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel1Brand');
    let errorWheel1Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel1Diameter');
    let errorWheel2Brand:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel2Brand');
    let errorWheel2Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel2Diameter');
    let errorWheel3Brand:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel3Brand');
    let errorWheel3Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel3Diameter');
    let errorWheel4Brand:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel4Brand');
    let errorWheel4Diameter:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheel4Diameter');
   
    let errorAccount = 0;

    form.classList.remove("is-invalid");

	if (wheel1Brand.value == "") 
	{
		wheel1Brand.classList.add("is-invalid");
        errorWheel1Brand.textContent = "Brand is a required field";
		errorAccount ++;
    }
    if (!validateDiameter(Number(wheel1Diameter.value)))
	{
		wheel1Diameter.classList.add("is-invalid");
		errorWheel1Diameter.textContent = "Diameter must be between 0.4 and 2";
		errorAccount ++;
    }
    if (wheel2Brand.value == "") 
	{
		wheel2Brand.classList.add("is-invalid");
        errorWheel2Brand.textContent = "Brand is a required field";
		errorAccount ++;
    }
    if (!validateDiameter(Number(wheel2Diameter.value)))
	{
		wheel2Diameter.classList.add("is-invalid");
		errorWheel2Diameter.textContent = "Diameter must be between 0.4 and 2";
		errorAccount ++;
    }
    if (wheel3Brand.value == "") 
	{
		wheel3Brand.classList.add("is-invalid");
        errorWheel3Brand.textContent = "Brand is a required field";
		errorAccount ++;
    }
    if (!validateDiameter(Number(wheel3Diameter.value)))
	{
		wheel3Diameter.classList.add("is-invalid");
		errorWheel3Diameter.textContent = "Diameter must be between 0.4 and 2";
		errorAccount ++;
    }
    if (wheel4Brand.value == "") 
	{
		wheel4Brand.classList.add("is-invalid");
        errorWheel4Brand.textContent = "Brand is a required field";
		errorAccount ++;
    }
    if (!validateDiameter(Number(wheel4Diameter.value)))
	{
		wheel4Diameter.classList.add("is-invalid");
		errorWheel4Diameter.textContent = "Diameter must be between 0.4 and 2";
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
        console.log(event);
        if ((<HTMLInputElement>event.target).value != "") (<HTMLInputElement>event.target).classList.remove('is-invalid');
    }, true); 
}

const wheelsForm:HTMLInputElement = <HTMLInputElement>document.getElementById('wheels-register');
if(wheelsForm){
    wheelsForm.addEventListener('blur', (event:FocusEvent) => {
        console.log(event);
        if ((<HTMLInputElement>event.target).value != "") (<HTMLInputElement>event.target).classList.remove('is-invalid');
    }, true);
}

