// Assignment Code

// Define different character types as strings
var lowerchars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()<>[]{}";

var length = 0;
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperChar;
var confirmLowerChar;

var possibleChars = "";
var rPassword = "";

//Make function to prompt user on length, lowercase, uppercase, numeric, and/or special characters
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // Prompt to choose length of password and define its minimum and maximum
  length = parseInt(window.prompt("Give password length between 8 and 128"));
  if (length < 8 || length > 128) {
    window.alert("Password length must be between 8 and 128. Please repeat");
    return "Password not generated.";
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
