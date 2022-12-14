
// Assignment code here

//Password variables
const selectedCharacters = {
  lowerCaseArray: 'abcdefghijklmnopqrstuvwxyz',
  upperCaseArray: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numericArray: '0123456789',
  symbolsArray: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

};


alert("Welcome to Fabrizio's Random password generator");
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var passChar = "";

    //Dialog Boxes 
 
  var lengthBox = prompt("Please confirm the length of the password, it should be between 8 to 128 characters.");

  var lowerCaseArray = confirm("Do you want to include lowercase letters?");

  var upperCaseArray = confirm("Do you want to include uppercase letters?")


  var numericArray = confirm("Do you want to include numeric values?");

  
  var symbolsArray = confirm("Do you want to inlclude symbols?");



  newFunction();
  
  // Formula for the password generator
  var password = "";
  for (let i = 0; i < lengthBox; i++) {
  password += passChar[Math.floor(Math.random() * passChar.length )]
   }
  return password

//Conditional statements
  function newFunction() {
    if (lowerCaseArray) {
      passChar += selectedCharacters.lowerCaseArray;
    };

    if (upperCaseArray) {
      passChar += selectedCharacters.upperCaseArray;
    };

    if (numericArray) {
      passChar += selectedCharacters.numericArray;
    };

    if (symbolsArray) {
      passChar += selectedCharacters.symbolsArray;
    };
  }
}
