export const wrapper = (func: (...args: unknown[]) => unknown) => {
  const cache = new Map<string, unknown>();

  return (...args: unknown[]): unknown => {
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
};

export const calc = (a: number, b: number, c: number): number => a + b + c;
