import { add } from './tasks/task1.js';
import { isAnagram } from './tasks/task2.js';
import { deepClone } from './tasks/task3.js';
import { wrapper, calc } from './tasks/task4.js';

console.log(`First task:\n${add(2)(5)(7)(1)(6)(5)(11)()}\n`);

console.log("Second task:");
console.log(isAnagram('Vlad', 'dalv'));
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
console.log(clonedObj === obj);

const cachedCalc = wrapper(calc);

console.log("\nFourth task:");
console.log(cachedCalc(2, 2, 3));
console.log(cachedCalc(5, 8, 1));
console.log(cachedCalc(2, 2, 3));
