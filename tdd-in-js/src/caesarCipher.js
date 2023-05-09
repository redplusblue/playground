// This function takes a string and a shift value and returns a new string with each letter shifted by the shift value.
function caesarCipher(str, shift) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    char = characterShifter(char, shift);
    chars[i] = char;
  }
  return chars.join("");
}

function characterShifter(char, shift) {
  // If the character is uppercase
  // A = 65, Z = 90
  if (char >= "A" && char <= "Z") {
    char = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
  }
  // If the character is lowercase
  // a = 97, z = 122
  else if (char >= "a" && char <= "z") {
    char = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
  }
  return char;
}

module.exports = caesarCipher;
