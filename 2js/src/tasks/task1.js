export function add(num) {
  let sum = num || 0;

  function innerAdd(nextNum) {
    if (nextNum === undefined) {
      return sum;
    }
    sum += nextNum;

    return innerAdd;
  }

  return innerAdd;
}
