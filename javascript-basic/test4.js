function fizzBuzz(num) {
  let answer =
    num % 3 == 0 && num % 5 == 0
      ? "FizzBuzz"
      : num % 3 == 0
      ? "Fizz"
      : num % 5 == 0
      ? "Buzz"
      : "None";
  console.log(answer);
}

fizzBuzz(21);
fizzBuzz(25);
fizzBuzz(45);
