// Upon button getting clicked a window appears with prompts
function generatePassword() {
  var passwordLength = prompt("Please enter a password length. It must be more than 8 characters but less than 128 characters.")
  
  // If the user does not enter a valid response 8-128
  if (passwordLength >= 8 && passwordLength <= 128) {
   console.log(passwordLength) 
  }else{
   window.alert("Invalid. Please enter a number between 8-128.")
   return generatePassword()
  }
 
  // Confirming parameters the user would like to include in their password
  var numbersConfirm = confirm("Would you like numbers in your password?");
  console.log(numbersConfirm);
  
  var upperCasesConfirm = confirm("Would you like uppercase letters in your password?");
  console.log(upperCasesConfirm);
  
  var lowerCasesConfirm = confirm("Would you like lowercase letters in your password?");
   console.log(lowerCasesConfirm);
  
 
  var specialCharactersConfirm = confirm("Would you like special characters in your password?")
   console.log(specialCharactersConfirm);
   
 
 // Arrays to define the characters in the password
 
 let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
 
 let lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 
 let upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 
 let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
 
 
 // Creating an empty mainBucket array to hold the random characters
 var mainBucket = [];
 

 // Conditional statements to push the selected characters into the empty mainBucket array
 if (numbersConfirm === true) {
  mainBucket.push(...numbers)
  }
  
 if (upperCasesConfirm === true) {
  mainBucket.push(...upperCases)
  }
  
 
 if (lowerCasesConfirm === true) {
  mainBucket.push(...lowerCases)
  }
  
 
 if (specialCharactersConfirm === true) {
  mainBucket.push(...specialCharacters)
  }
  
// The user must choose at least one type of character to include in their password 
 if (numbersConfirm === false && upperCasesConfirm === false && lowerCasesConfirm === false && specialCharactersConfirm === false) {
  window.alert("You must choose at least one type of character from the list to generate a password.");
  // Bring the user back to the beginning of the password generator
  return generatePassword();
 }

// Storing the chosen passwordLength and the characters pushed into the mainBucket into a function called runGenerator
return runGenerator(mainBucket, passwordLength);
};



// Using the runGenerator function and defining new parameters; bucket = mainBucket and length = passwordLength;
function runGenerator(bucket, length) {
// Creating an empty variable to store the characters the for loop chooses from the character arrays
var password = "";
// Running a for loop with the length equal to passwordLength
for (i = 0; i <= length; i++) {
// Creating a randomIndex variable to choose random characters from the mainBucket array which is characters pushed from the character arrays based on user selection
var randomIndex = Math.floor(Math.random() * bucket.length)
// Setting empty password variable equal to the random characters chosen from the mainBucket array
password += bucket[randomIndex]
}

// returning the password generated from this for loop
return password;
};
 
 
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   // Displaying the generated password into the text area
   passwordText.value = password;
 };
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 
 