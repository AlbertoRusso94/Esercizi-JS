const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student)
}

addStudent('Marco');
console.log(students);
// Il metodo utilizzato per aggiungere un elemento ad un array è ".push"
// Riusciamo ad inserire elementi all'array nonostante sia una variabile readonly
// perchè gli array prevedono infiniti elementi (se non definiti) come valore undefined