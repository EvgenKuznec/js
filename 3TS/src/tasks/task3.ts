export function deepClone(obj: object): object {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const clone: Array<unknown> | object = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}
