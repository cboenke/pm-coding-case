function getPrimeNumbersTo(number) {
  let output = "";

  for (let i = 0; i <= number; i++) {
    if (isPrimeNumber(i)) {
      i == 2 ? (output = output + i) : (output = output + "," + i);
    }
  }
  return output;
}

function isPrimeNumber(number) {
  let rem = null;
  let i = 2;
  let result;

  while (rem != 0 && i < number) {
    rem = number % i;
    i = i + 1;
  }

  i == number ? (result = true) : (result = false);

  return result;
}
