const person = {
  get firstName() {
    return this._firstName;
  },
  set firstName(nome) {
    this._firstName = nome;
  },
  get lastName() {
    return this._lastName;
  },
  set lastName(cognome) {
    this._lastName = cognome;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const simon = Object.create(person);
simon.firstName = "Simon";
simon.lastName = "Collins";
const john = Object.create(person);
john.firstName = "john";
john.lastName = "Doe";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
