const person = {
  name: 'Hena', age: 25,
  friends:["alin", "sara", "jim"]
};
const newPerson=JSON.stringify(person);
const newperson2 = JSON.parse(newPerson);
