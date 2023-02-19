console.log('Yo waddup');
//Possible Global Variabls?

function submitForm(event) {
    console.log(submitForm);
    event.preventDefault();

let firstName = document.querySelector('#firstName-input').value;

let lastName = document.querySelector('#lastName-input').value;

let idNumber = document.querySelector('#idNumber-input').value;

let jobTitle = document.querySelector('#jobTitle-input').value;

let annualSalary = document.querySelector('#salary-input').value;

let employeeInfoTable = document.querySelector('#employee-information-output')
employeeInfoTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
    </tr>

`;

}