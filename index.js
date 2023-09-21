// Write your solution in this file!
// Define a sample employee object
const employee = {
    name: 'John',
    age: 30,
    role: 'Engineer',
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };