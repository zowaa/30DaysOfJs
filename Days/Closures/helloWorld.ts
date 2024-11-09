const createHelloWorld = (): ((...rest: any[]) => string) => {
  const f = (...rest: any[]): string => {
    return "Hello World";
  };

  return f;
};

const ret_f = createHelloWorld();
const ret_s = ret_f();
console.log(ret_s);

// Time Complexity: O(1)
// Space Complexity: O(1)
