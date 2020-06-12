// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var length = Number(prompt("Enter a number between 8 and 128 for the length of your password."));

while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters."));

var charType = prompt("Enter a character type: symbol, number, uppercase, or lowercase.");

function generatePassword() {
  
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "number" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "symbol" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  
  var retVal = "";
  for (var i = 0; i < length; i++) {
    
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert("Perfect! Now click the 'Generate Password' button to receive your new password!");
