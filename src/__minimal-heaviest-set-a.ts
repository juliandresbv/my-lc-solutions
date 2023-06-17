function arraySum(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function isArrayOfOneRepeatedItem(arr: number[]) {
  return (new Set(arr)).size <= 1;
}

function minimalHeaviestSetA(arr: number[]) {
  const totalWeigth = arraySum(arr);
  const target = Math.floor(totalWeigth / 2);

  arr.sort((a, b) => a - b);

  const a: number[] = [];
  
  while (
    arr.length > 0
    && a.length < arr.length
    && arraySum(a) < target
  ) {
    const popped = arr.pop();
    
    if (popped) {
      a.unshift(popped);
    }
  }

  return a;
}
