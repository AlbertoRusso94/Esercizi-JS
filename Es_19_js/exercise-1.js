const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Simon";

// Viene modificato l'oggetto person1 perchè person2 prende la stessa allocazione di memoria di person1

console.log(person1);
console.log(person2);
