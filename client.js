console.log('Yo waddup');
//Possible Global Variabls?

let monthlyCost = 20000

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
        <button onClick="deleteEmployee(event)" class="salary-form" data-delete=${event.target.dataset.submitForm}>Delete</button>
    </tr>

`;
let monthlyCostSpan = document.querySelector('#monthly-cost')

monthlyCostSpan.innerHTML += Number(annualSalary) / 12

if (Number(annualSalary) / 12 > monthlyCost) {
    monthlyCostSpan.style.backgroundColor = 'red'
 }
}

function deleteEmployee(event) { 
    let parent = event.target.parentElement
    parent.remove()
}