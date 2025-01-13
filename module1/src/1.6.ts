// Function : Normal function & Arrow function

// normal function
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
sum(1, 2);

// Arrow function
const multiply = (num1: number, num2: number): number => num1 * num2;
multiply(2, 3);

// default value
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}
greet();

//object method
const poorUser = {
  name: "pritom",
  balance: 500,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};

// callback function array map
const newArray: number[] = [1, 2, 3, 4, 5];
const squareArray: number[] = newArray.map((ele: number): number => ele * ele);
