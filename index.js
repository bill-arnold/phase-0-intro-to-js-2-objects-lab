// Initialize the employee object
const employee = {
  name: 'John Doe',
  streetAddress: '123 Main St',
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete property non-destructively
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete property destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
// Updating employee non-destructively
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Manager');

// Updating employee destructively
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Manager');

// Deleting property non-destructively
const employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');

// Deleting property destructively
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
