// Assignment code here


// Upon button getting clicked a window appears with prompts
function generatePassword() {
 var passwordLength = prompt("Please enter a password length. It must be more than 8 characters but less than 128 characters.")
 // If the user does not enter a valid response 8-128
 if (passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength) 
 }else{
  window.alert("Invalid. Please enter a number between 8-128.")
  return generatePassword();
 }

 var numbers = confirm("Would you like numbers in your password?");
 console.log(numbers);

 var upperCases = confirm("Would you like uppercase letters in your password?");
 console.log(upperCases);

 var lowerCases = confirm("Would you like lowercase letters in your password?");
  console.log(lowerCases);

 var specialChars = confirm("Would you like special characters in your password?")
  console.log(specialChars);
};

// Using String.Charcode to obtain the correct characters
var functionArray = {
 getNumbers: function() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
 },
  
 getUpperCases: function() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
 },

 getLowerCases: function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
 },

 getSpecialChars: function () {
  return String.fromCharCode(Math.floor(Math.random() * 15 + 33 && 6 + 58));
 }
};


// Apply functionArray to window prompts

if (generatePassword.numbers === true) {
 functionArray.getNumbers();
}

if (generatePassword.upperCases === true) {
 functionArray.getUpperCases()
}

if (generatePassword.lowerCases === true) {
 functionArray.getLowerCases()
}

if (generatePassword.specialChars === true) {
 functionArray.getSpecialChars()
}


for (var i = 0; i < generatePassword.passwordLength; i++) {
 console.log(this)
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


generatePassword();
writePassword();
functionArray.getNumbers();
functionArray.getLowerCases();
functionArray.getUpperCases();
functionArray.getSpecialChars();