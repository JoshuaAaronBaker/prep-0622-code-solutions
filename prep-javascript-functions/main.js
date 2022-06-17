function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var product = addAndMultiplyBy5(10, 5);
console.log(product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var quotient = multiplyAndDivideBy5(35, 10);
console.log(quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var answer = subtractTwoNumbers(22, 7);
console.log(answer);

function getCircleCircumference(radius) {
  return (2 * Math.PI * radius);
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubed = cube(5);
console.log(cubed);
