// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let stipendio;
  switch (role) {
    case "ceo":
      stipendio = "2200€";
      break;
    case "manager":
      stipendio = "1800€";
      break;
    case "cto":
      stipendio = "1800€";
      break;
    case "developer":
      stipendio = "1500€";
      break;
    default:
      stipendio = "1000€";
  }
  return stipendio;
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
