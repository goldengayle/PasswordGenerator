// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = Math.round(prompt("How long would you like your password? (Choose a number between 8 and 128)"));

  if (length < 8 || length >= 128 ){
    alert("Please choose a number between 8 and 128");
  
  } else {
    var lowerCase = prompt("Do you wish to include lowercase letters? (Yes or No)")

    if (lowerCase !== Yes || lowerCase !== No || lowerCase !== Y || lowerCase !== N){
      alert("Please type Yes or No")
    } else {
      var upperCase = prompt("Do you wish to include uppercase letters? (Yes or No)")

      if (upperCase !== Yes || upperCase !== No || upperCase !== Y || upperCase !== N){
        alert("Please type Yes or No")
      } else {
        var boo = alert ("It's working")
        console.log(boo)
    }
  }
}

  }
  
  /*var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
