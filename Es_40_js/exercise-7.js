class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(nome) {
    this._firstName = nome;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(cognome) {
    this._lastName = cognome;
  }
  get age() {
    return this._age;
  }
  set age(anni) {
    this._age = anni;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName} `;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
