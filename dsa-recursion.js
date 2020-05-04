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
