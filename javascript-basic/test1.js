function fic(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  return fic(n - 1) + fic(n - 2);
}

console.log(fic(1));
console.log(fic(2));
console.log(fic(3));
console.log(fic(11));
console.log(fic(12));
