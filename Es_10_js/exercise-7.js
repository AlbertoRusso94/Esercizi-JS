function sumUntil(maxValue) {
  let somma = 0;
  let output = "";
  for (let i = 1; i <= maxValue; i++) {
    somma += i;
    output += `${i}`;
    if (i < maxValue) {
      output += "+";
    } else {
      output += `=${somma}`;
    }
  }
  return output;
}

console.log(sumUntil(5));
