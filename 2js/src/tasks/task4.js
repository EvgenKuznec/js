export function wrapper(func) {
  const cache = new Map();

  return (...args) => {
    const key = args.toString();
    if (cache.has(key)) {
      console.log(`Result from cache: ${cache.get(key)}`);
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    console.log(`Result calculated: ${result}`);
    return result;
  };
}

export function calc(a, b, c) {
  return a + b + c;
}
