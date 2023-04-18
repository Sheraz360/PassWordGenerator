// Array of special characters to be included in password

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt (prompt ("How long would you like the password, choose between 8 - 128"));

  // var pswrd = generatePassword;

  // if (pswrd.length < 8 || pswrd.length > 128) {
  //   alert("The password must be between 8 - 128 characters long. Please try again.")
  //   return null;
  // };

  var containgLowerCase = confirm ("Would you like lowercase characters?");

  var containgUpperCase = confirm ("Would you like uppercase characters?");

  var containgSpecialCharacters = confirm ("Would you like special characters?");

  var containgNumericCase = confirm ("Would you like numbers?");

  if (
    containgLowerCase === false && containgUpperCase === false && containgSpecialCharacters === false && containgNumericCase === false
  ) {
    alert ("You must select at least one character type")
    return null;
  };

  var selectedOptions = {
    length:length,
    containgLowerCase:containgLowerCase,
    containgUpperCase:containgUpperCase,
    containgSpecialCharacters:containgSpecialCharacters,
    containgNumericCase:containgNumericCase,
  }

  return selectedOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomX = Math.floor((Math.random() * arr.length));
  var randomNum = arr[randomX];
  return randomNum;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChar = [];
  var finalChar = [];

  if (options.containgLowerCase) {
    possibleChar = possibleChar.concat (lowerCasedCharacters);
    finalChar.push (getRandom(lowerCasedCharacters))
  };

  if (options.containgUpperCase) {
    possibleChar = possibleChar.concat (upperCasedCharacters);
    finalChar.push (getRandom(upperCasedCharacters))
  };

  if (options.containgNumericCase) {
    possibleChar = possibleChar.concat (numericCharacters);
    finalChar.push (getRandom(numericCharacters))
  };

  if (options.containgSpecialCharacters) {
    possibleChar = possibleChar.concat (specialCharacters);
    finalChar.push (getRandom(specialCharacters))
  };

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom (possibleChar)
    result.push (possibleCharacters)
  };

  return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);