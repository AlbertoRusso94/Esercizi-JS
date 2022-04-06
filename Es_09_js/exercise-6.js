function getKeys(obj) {
  let lista = [];
  for (let chiave in obj) {
    lista.push(chiave);
  }
  return lista;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
