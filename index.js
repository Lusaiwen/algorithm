

//0, 1, 1, 2, 3, 5, 8,

function jump (n) {
  if(n <= 0) return -1;
  if(n == 1) return 1;
  if(n == 2) return 2;
  return jump(n - 1) + jump(n - 2);
}

console.log(jump(5));