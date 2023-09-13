function firstNonRepeatedChar(str) {
  const charFrequency = {};
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }
  return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);
if (result !== null) {
  alert(`The first non-repeated character is: ${result}`);
} else {
  alert("There are no non-repeated characters in the string.");
}
