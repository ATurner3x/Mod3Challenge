
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // either true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {  
      var newPassword = generatePassword();
      passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays
var passlength = 8 < 128;
var choiceArr = [];
var UppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArr = ['!' , '@' , '#' , '%' , '^' , '&' , '*' , '<' , '>' , '?' , '/'] ;
var numberArr = ['1','2','3','4','5','6','8','9','0'];


function generatePassword() {
  console.log ("Button Clicked !")

  var password = "";
  for(var i = 0; i < passlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = (password + choiceArr[randomIndex]);
  }
return password;
}

// Prompts
function getPrompts() {
  choiceArr = [];
  
  passlength = parseInt(prompt ("How many characters would you like ? ( 8 - 128 chars)"));

  if(isNaN(passlength) || passlength < 8 || passlength > 128) {
    alert("Password length must be between 8 - 128 characters");
    return false;
  }
  
  if(confirm("With lowercase letters?")) {
    choiceArr = choiceArr.concat(LowercaseArr);
  }

  if(confirm("With Uppercase letters?")) {
    choiceArr = choiceArr.concat(UppercaseArr);
  }

  if(confirm("With numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }

  if(confirm("With Special Characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}