//1. Counting Sheep

function sheepCounting(num) {
  //base case
  if (num === 0) {
    console.log("All sheep have jumped.");
    return; //to exit function
  }
  //general case
  console.log(`${num}: Another sheep jumps over the fence`);
  sheepCounting(num - 1);
}
sheepCounting(3);

//11

function binaryRep(num) {
  //base case
  if (num <= 0) {
    return "";
  }
  const binary = num % 2;
  return binaryRep(Math.floor(num / 2)) + binary;
}
console.log(binaryRep(5));
