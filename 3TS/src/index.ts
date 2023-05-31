import { add } from './tasks/task1';
import { isAnagram } from './tasks/task2';
import { deepClone } from './tasks/task3';
import { wrapper, calc } from './tasks/task4';

console.log(`First task:\n${add(1)(2)(3)(4)()}\n`);

console.log("Second task:");
console.log(isAnagram('Vlad', 'lvad'));
console.log(isAnagram('MaDaM', 'madAM'));
console.log(isAnagram('whatsup', 'what'));
console.log(`${isAnagram('hi', 'in')}\n`);

const obj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    street: 'Main Street',
    city: 'New York',
  },
};
const clonedObj = deepClone(obj);

console.log("Third task:");
console.log(clonedObj);
console.log(clonedObj !== obj);

const cachedCalc = wrapper(calc);

console.log("\nFourth task:");
console.log(cachedCalc(2, 2, 3));
console.log(cachedCalc(5, 8, 1));
console.log(cachedCalc(2, 2, 3));
