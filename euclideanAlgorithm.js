function euclideanAlgorithm(x, y, a = x, b = y) {
  
  //If y is greater than x then switch the numbers around
  if (y>x)
    [x, y] = [y, x];
  
  // r is the remiander of y over x
  let r = x%y;
  
  //recursive approach - keep performing the algorithm until r is 0
  return r == 0
  ? "The gcd(" + a+", "+b+") is " + y
  : euclideanAlgorithm(y, r, a, b);
}

console.log(euclideanAlgorithm(3563, 14441));
