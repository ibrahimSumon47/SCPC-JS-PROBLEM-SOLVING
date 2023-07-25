// ! Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const readline = require('readline');

// Function to perform the calculation
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
};

// Function to validate the operator
const isValidOperator = (operator) => {
  return ['+', '-', '*', '/'].includes(operator);
};

// Function to get user input and display the result
const performCalculation = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
      rl.question('Enter the second number: ', (num2) => {
        rl.close();

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (isNaN(num1) || isNaN(num2) || !isValidOperator(operator)) {
          console.log('Invalid input. Please enter valid numbers and operator.');
          return;
        }

        const result = calculate(num1, operator, num2);
        console.log(`Result: ${result}`);
      });
    });
  });
};

// Run the calculator
performCalculation();

