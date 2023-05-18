/** @format */

// Get DOM elements
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const passwordEl = document.getElementById("password");

// Generate password function
function generatePassword() {
  // Define character sets
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbersChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Initialize password variable
  let password = "";

  // Build character set based on user selections
  let charset = "";

  if (uppercaseEl.checked) {
    charset += uppercaseChars;
  }
  if (lowercaseEl.checked) {
    charset += lowercaseChars;
  }
  if (numbersEl.checked) {
    charset += numbersChars;
  }
  if (symbolsEl.checked) {
    charset += symbolsChars;
  }

  // Generate password
  for (let i = 0; i < lengthEl.value; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Set password value
  passwordEl.value = password;
}

// Add event listener to generate button
generateEl.addEventListener("click", generatePassword);
