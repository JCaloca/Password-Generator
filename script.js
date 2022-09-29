// Assignment Code

// Create var's for: length (min 8 max 128), lowercase, uppercase, numeric, and/or special characters 
var charLength = ;
var lowerChar
var upperChar
var numerChar
var specialChar

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn = prompt("How many characters would you like in your password? 8-128")
