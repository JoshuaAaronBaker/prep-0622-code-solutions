var person = {
  firstName: 'LeBron',
  lastName: 'James',
  hobby: 'Basketball'
};
var fullName = person.firstName + ' ' + person.lastName;
console.log(person);
console.log("The person's full name is:" + ' ' + fullName + '.');
person.job = 'Starting forward for the Lakers';
console.log("The person's current job is" + ' ' + person.job + '.');
person.previousJob = 'Starting forward for the Cavs';
console.log("The person's previous job was" + ' ' + person.previousJob + '.');
console.log('The complete person object:', person);
