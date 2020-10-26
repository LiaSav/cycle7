let n = prompt("Hi, friend! \nEnter a number N, greater than 1.");
if (n) {
  alert(
    "The function returns the square of this number, so you get a string of squares of all numbers from 1 to N\n\n" +
      cycle(n)
  );
} else {
  alert("You didn`t enter number N");
}
function cycle(n) {
  let x = "";
  let sum = 0;
  for (let i = 1; i <= 2 * n - 1; i += 2) {
    sum += i;
    x += sum + " ";
  }
  return x;
}
