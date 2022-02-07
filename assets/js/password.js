// Assignment code here


// Upon button getting clicked a window appears with prompts
function generatePassword(passwordLength) {
 var passwordLength = prompt("Please enter a password length. It must be more than 8 characters but less than 128 characters.")
 // If the user does not enter a valid response 8-128
 if (passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength) 
 }else{
  window.alert("Invalid. Please enter a number between 8-128.")
  return generatePassword()
 }

 var numbers = confirm("Would you like numbers in your password?");
 console.log(numbers);
 

 var upperCases = confirm("Would you like uppercase letters in your password?");
 console.log(upperCases);
 
 var lowerCases = confirm("Would you like lowercase letters in your password?");
  console.log(lowerCases);
 

 var specialCharacters = confirm("Would you like special characters in your password?")
  console.log(specialCharacters);
  


// Using String.fromCharcode to obtain the correct characters for the password
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

 getSpecialCharacters: function () {
  return String.fromCharCode(Math.floor(Math.random() * 15 + 33 && 6 + 58));
 }
};





// Empty minimums for letters, numbers, and characters
var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

// Apply functionArray to window prompts

if (numbers === true) {
 minimumNumbers = functionArray.getNumbers();
}
 

if (upperCases === true) {
 minimumUpperCases = functionArray.getUpperCases();
 
}

if (lowerCases === true) {
 minimumLowerCases = functionArray.getLowerCases();
 
}

if (specialCharacters === true) {
 minimumSpecialCharacters = functionArray.getSpecialCharacters();
 
}

if (numbers === false && upperCases === false && lowerCases === false && specialCharacters === false) {
 window.alert("You must choose at least one type of character from the list to generate a password.");
 return generatePassword();
}

// Empty string for "for" loop
var randomPasswordGenerated = "";
var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?><.,"

for (var i = 0; i < (parseInt(passwordLength)); i++) {
 randomPasswordGenerated += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
 
}

// To add characters to generated password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;

return randomPasswordGenerated;
};



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


