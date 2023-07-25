// ! Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const { log } = require("console");

const generateRandomPassword = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  const getRandomIndex = (max) => Math.floor(Math.random() * max);
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = allChars[getRandomIndex(allChars.length)];
    password += randomChar;
  }
  return password;
};

const passwordLength = 12;
const password = generateRandomPassword(passwordLength);
console.log(password);
