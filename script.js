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
var newPassword = "";

//Make function to prompt user on length, lowercase, uppercase, numeric, and/or special characters
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // Prompt to choose length of password and define its minimum and maximum
  length = parseInt(window.prompt("Give password length between 8 and 128"));
  if (length < 8 || length > 128) {
    window.alert("Password length must be between 8 and 128. Please repeat");
    return "Password not generated.";
  }

  //Prompt to choose different character types to be included
  confirmLowerChar = window.confirm(
    "Press ok to add lowercase characters to password. Otherwise press cancel."
  );
  if (confirmLowerChar) {
    possibleChars = possibleChars + lowerchars;
  }

  confirmUpperChar = window.confirm(
    "Press ok to add uppercase characters to password. Otherwise press cancel."
  );
  if (confirmUpperChar) {
    possibleChars = possibleChars + upperChars;
  }

  confirmNumericChar = window.confirm(
    "Press ok to add numeric characters to password. Otherwise press cancel."
  );
  if (confirmNumericChar) {
    possibleChars = possibleChars + numberChars;
  }

  confirmSpecialChar = window.confirm(
    "Press ok to add special characters to password. Otherwise press cancel."
  );
  if (confirmSpecialChar) {
    possibleChars = possibleChars + specialChars;
  }
  console.log("Possible characters = ", possibleChars);

  // Check to see if at least one character type is used by user.
  if (
    confirmLowerChar === false &&
    confirmUpperChar === false &&
    confirmNumericChar === false &&
    confirmSpecialChar === false
  ) {
    window.alert(
      "At least one character type must be chosen. Please try again."
    );

    return "Password not generated.";
  }
  //Random selection function
  for (i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * possibleChars.length);
    newPassword += possibleChars[randomIndex];
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
