function check(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(check(50, 50))
console.log(check(20, 50))
console.log(check(20, 20))
console.log(check(20, 30))
console.log(check(40, 10))
console.log(check(30, 30))
console.log(check(25, 25))
console.log(check(35, 15))