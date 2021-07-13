function questionsMarks(str) {
  let countMarks = 0;
  let currentNumber = 0;
  let prevNumber = 0;
  let result = false;
  let error = false;

  for (i = 0; i < str.length; i++) {
    if (str[i] == "?") {
      countMarks++;
    } else if (!isNaN(str[i])) {
      prevNumber = currentNumber;
      currentNumber = parseInt(str[i]);

      if (prevNumber + currentNumber == 10 && error == false) {
        if (countMarks == 3) {
          result = true;
        } else {
          error = true;
          result = false;
        }
      }

      countMarks = 0;
    }
  }

  return result;
}
