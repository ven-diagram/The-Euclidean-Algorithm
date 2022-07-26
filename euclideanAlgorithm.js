function euclideanAlgorithm(x, y, a = x, b = y) {
  if (y>x)
    [x, y] = [y, x];
  let r = x%y;
  return r == 0
  ? "The gcd(" + a+", "+b+") is " + y
  : euclideanAlgorithm(y, r, a, b);
}

console.log(euclideanAlgorithm(3563, 14441));
