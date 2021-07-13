function factorial(num) {
  let result = num;

  for (let i = num - 1; i > 1; i--) {
    result = result * (num - 1);
    num = num - 1;
  }

  return result;
}
