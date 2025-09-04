var fib = function (n) {
  /*
  fibonacci numbers
  0 1 1 2 3 5 8
  */
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
};
