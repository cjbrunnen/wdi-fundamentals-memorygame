
/*console.log(result);
var x;
var result;
/* YOUR CODE HERE 
if (x % 3 === 0) {
  result = "fizz"
}
else if (x % 5 === 0) {
	result = "buzz"
}
else if (x % 3 === 0 && 5 === 0) {
	result = "fizzbuzz"
}
else {
	result = "x"
}
why would we not use !% or || here? could we? 

var result;
var max;
for (var x = 1; i = max; x += 1;) { */


var result;
var max;
for (var x = 1; i <= max; x += 1) {
  if (x%3 === 0 && x%5 === 0) {
    result = "fizzbuzz";
  } else if (i%3 === 0) {
    result = "fizz";
  } else if (i%5 === 0) {
    result = "buzz";
  } else {
    result = i
  }
  console.log(result);
}
