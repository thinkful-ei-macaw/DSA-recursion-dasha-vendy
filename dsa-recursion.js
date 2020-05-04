//1. Counting Sheep

// function sheepCounting(num) {
//   //base case
//   if (num === 0) {
//     console.log("All sheep have jumped.");
//     return; //to exit function
//   }
//   //general case
//   console.log(`${num}: Another sheep jumps over the fence`);
//   sheepCounting(num - 1);
// }
// sheepCounting(3);

//2. calculator
// 1. a number to the nth power
// input = two numbers (10, 2)
// output = 100 the answer of 10 to the 2nd power
// 2. console.log(Math.pow(10, 2));
//exponents is just multipuluing a number by iteself a given number of times

function powerCalculator(base, exponent) {
  //basecase
  if (exponent <= 0) {
    return console.log("exponent should be >=0"); //ends the eng good bye
  }
  //general case
  console.log(base ** exponent);
  powerCalculator(base, exponent - 1);
}
powerCalculator(10, 2);

// function powerCalculator(int, exp) {
//   if (exp <= 0) {
//     return "exponent should be >= 0";
//   }
//   console.log(int ** exp);
//   powerCalculator(int - 1, exp);
// }
// powerCalculator(3, 2);
//3. reverse string
function reverseString(str) {
  //base case
  if (str.length < 2) {
    console.log(str);
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
reverseString("hit");
//4.

//7. factorial
function fact(n) {
  //base case
  if (n == 1) {
    return 1;
  }
  //recursive case
  else return n * fact(n - 1);
}

// 11. binary output

// function binaryRep(num) {
//   //base case
//   if (num <= 0) {
//     return "";
//   }
//   const binary = num % 2;
//   return binaryRep(Math.floor(num / 2)) + binary;
// }
// console.log(binaryRep(5));
