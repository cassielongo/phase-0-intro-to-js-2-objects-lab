// Write your solution in this file!
const employee = {
    name: 'Tori',
    streetAddress: '16 Happy Street'
}

function updateEmployeeWithKeyAndValue(employee, key, value)  {
       return Object.assign({},employee,{[key]: value })
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee,{[key]: value })
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name; 
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}