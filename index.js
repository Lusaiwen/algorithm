

//f(n) = f(n-1) + f(n-2) + f(n-3) + ... f(2) + f(1) + f(0)
function jump (n) {
  if(n <= 0) return -1;
  if(n == 1) return 1;
  if(n == 2) return 2;
  var result = 0;
  for(var i = 1; i < n; i ++){
    result += jump(n - i);
  }
  return result + 1; //加1代表从0级台阶直接跳上去
}

console.log(jump(4));