export function isAnagram(str1, str2) {
  const firstStr = str1.toLowerCase();
  const secondStr = str2.toLowerCase();

  if (firstStr.length !== secondStr.length) {
    return false;
  }

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== secondStr[secondStr.length - 1 - i]) return false;
  }

  return true;
}
