module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }
  let str = String(n);
  let arr = str.split('');
  let arr2 = arr.reverse();
  str = arr2.join('');
  n = +str
  return n;
}
