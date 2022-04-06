function memoize(fn) {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return `Fetching from cache for ${cache[n]}`;
    } else {
      let risultato = fn(n);
      cache[n] = risultato;
      return risultato;
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
