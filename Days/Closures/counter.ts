const createCounter = (n: number): (() => number) => {
  function counter(): number {
    return n++;
  }
  return counter;
};

let c = createCounter(1000);
console.log(c());
console.log(c());
console.log(c());

// Time Complexity: O(1)
// Space Complexity: O(1)
