
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

// This event listener will make the GENERATE BUTTON work
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passChar = "";

    //Dialog Boxes 
   var lengthBox = prompt("Please confirm the length of the password, it should be between 8 to 128 characters.");
    
  //Check if the entered length is within the specified range
    if (lengthBox < 8 || lengthBox > 128) {
      alert("Password length should be between 8 to 128 characters.");
      return "";
    }

 

  // This section will make the user select which type of characters will be included in the code
  let lowerCaseArray = confirm("Do you want to include lowercase letters?");
  let upperCaseArray = confirm("Do you want to include uppercase letters?")
  let numericArray = confirm("Do you want to include numeric values?");
  let symbolsArray = confirm("Do you want to inlclude symbols?");


// This IF statement section will make the user select at least 1 option
  if (!lowerCaseArray && !upperCaseArray && !numericArray && !symbolsArray) {
    alert("Please select at least one type of character to include in your password.");
    return "";
  }

  newFunction();
  
  // This section will make the characters selected appear in random order
  let password = "";
  for (let i = 0; i < lengthBox; i++) {
  password += passChar[Math.floor(Math.random() * passChar.length )]
   }
  return password

//Conditional statements for the password combinations
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
