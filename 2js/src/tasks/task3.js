export function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone;

  if (Array.isArray(obj)) {
    clone = [];
  } else {
    clone = {};
  }

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}
