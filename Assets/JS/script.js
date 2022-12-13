
// Assignment code here

alert
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// Constants

function generatePassword(){

  //Dialog Boxes
  var passwordPopup = prompt("Please confirm the lenght of the password, it should be between 8-128 characters.");
  var lowerCasePopup = confirm("Do you want to include lowercase letters?");
  var upperCasePopup = confirm("Do you want to include uppercase letters?")
  var numericPopup = confirm("Do you want numeric values?");
  var symbolsPopup = confirm("Do you want to inlclude symbols?")

  //Variable arrays
  var miniumLenght = 0;
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsArray = [" ", "!", "”", "#", "$", "%", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">","," , "]", "?", "@", "[", "^", " - ", "`", "{", "|", "}", "~","\\",]; 

};


// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

var randomPassword = " ";

var charactersArray = [
 //Lowercase 
  function getLowerCase() {
    return lowerCaseArray(math.floor(math.random * upperCaseArray.lenght))
    },

// Uppercase
    function getUpperCase() {
    return upperCaseArray(math.floor(math.random * upperCaseArray.lenght))
    },

// Numeric
    function getNumeric() {
    return numericArray(math.floor(math.random * numericArray.lenght))
      },
// Symbols    
     function  getSymbols() {
     return symbolsArray(math.floor(math.random * symbolsArray.lenght))
      },
    ];

    
    // if statements

  // Lowerrcase
if (lowerCase === true) {
  lowerCase = charactersArray.getLowerCase();
  miniumLenght++;
}
  // Uppercase
if (upperCase === true) {
  upperCase = charactersArray.getUpperCase();
  miniumLenght++;
}
  // Numeric
if (upperNumeric === true) {
  numeric = charactersArray.getNumeric();
  miniumLenght++ ;

  // Symbols  
if (symbols === true) {
    symbols = charactersArray.getSymbols();
    miniumLenght++ ;
}

// Random characters loop



};