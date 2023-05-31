type Calculator = (num?: number) => number | Calculator;
type AddFunction = (initialValue: number) => Function;

export const add: AddFunction = (initialValue) => {
  let sum = initialValue;

  const calculate: Calculator = (nextNum) => {
    if (nextNum === undefined) {
      return sum;
    }
    sum += nextNum;

    return calculate;
  };

  return calculate;
};
