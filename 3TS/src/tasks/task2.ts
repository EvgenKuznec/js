export const isAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }
  
  return str1.toLowerCase().trim().split('').reverse().join('') === str2.toLowerCase().trim();
};
