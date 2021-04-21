const employee = {
    name : "Tim", 
    streetAddress : "2878 N Elston"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}