// Assignment code here

alert("Welcome to Fabrizio's Random password generator");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
}

function generatePassword(){
  var passwordLenght = 15;
  var miniumLenght = 0;
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = [" ", "!", "”", "#", "$", "%", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">","," , "]", "?", "@", "[", "^", " - ", "`", "{", "|", "}", "~","\\",]; 
}
passwordText.value = password;




// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

var randomPassword = "",

var charactersArray = [
 //Lowercase 
  function getLowerCase() {
    return lowerCase(math.floor(math.random * upperCase.lenght))
    },

// Uppercase
    function getUpperCase() {
    return upperCase(math.floor(math.random * upperCase.lenght))
    },

// Numeric
    function getNumeric() {
    return numeric(math.floor(math.random * numeric.lenght))
      },
// Symbols    
     function  getSymbols(){
     return symbols(math.floor(math.random * symbols.lenght))
      },
    ];

    
    // if cases

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

for (let index = 0; index < array.length; index++) {
	const element = array[index];
	
	
}