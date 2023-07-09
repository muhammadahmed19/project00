function calculate(operator: string, num1: number, num2: number): number | null {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          console.log("Error: Division by zero");
          return null;
        }
      default:
        console.log("Error: Invalid operator");
        return null;
    }
  }
  
  // Example usage
  const operator = "+";
  const num1 = 5;
  const num2 = 3;
  const result = calculate(operator, num1, num2);
  
  if (result !== null) {
    console.log(`Result: ${result}`);
  }
  