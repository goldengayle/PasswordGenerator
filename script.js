// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = Math.round(prompt("How long would you like your password? (Choose a number between 8 and 128)"));

  if (length < 8 || length >= 128) {
    alert("Please choose a number between 8 and 128");

  } else {
    //Records whether user wants lowercase letters
    var lowerCase = prompt("Do you wish to include lowercase letters? (Yes or No)")
    if (lowerCase !== "Yes" && lowerCase !== "No" && lowerCase !== "Y" && lowerCase !== "N" && lowerCase !== "n" && lowerCase !== "y") {
      alert("Please type Yes or No");
       writePassword();
    } else if (lowerCase === "Yes" || lowerCase === "Y" || lowerCase === "y") {
      lowerCase = true;
    } else {
      lowerCase = false;
    }
  }
  console.log(typeof lowerCase)

  //Records whether user wants UpperCase letters
  var upperCase = prompt("Do you wish to include uppercase letters? (Yes or No)")
  if (upperCase !== "Yes" && upperCase !== "No" && upperCase !== "Y" && upperCase !== "N" && upperCase !== "n" && upperCase !== "y") {
    alert("Please type Yes or No");
    writePassword();
  } else if (upperCase === "Yes" || upperCase === "Y" || upperCase === "y") {
    upperCase = true;
  } else {
    upperCase = false;
  }
  console.log(typeof upperCase)

//Records whether user wants numbers?
  var numeric = prompt("Do you wish to include numbers? (Yes or No)")
  if (numeric !== "Yes" && numeric !== "No" && numeric !== "Y" && numeric !== "N" && numeric !== "n" && numeric !== "y") {
    alert("Please type Yes or No");
    writePassword();
  } else if (numeric === "Yes" || numeric === "Y" || numeric === "y") {
    numeric = true;
  } else {
    numeric = false;
  }

  console.log(typeof numeric)

  //Records whether user wants special characters?
  var specialCharacters = prompt("Do you wish to include special characters (Yes or No)")
  if (specialCharacters !== "Yes" && specialCharacters !== "No" && specialCharacters !== "Y" && specialCharacters !== "N" && specialCharacters !== "n" && specialCharacters !== "y") {
    alert("Please type Yes or No");
    writePassword();
  } else if (specialCharacters === "Yes" || specialCharacters === "Y" || specialCharacters === "y") {
    specialCharacters = true;
  } else {
    specialCharacters = false;
  }

}
  


//Write Password function should create array for possible characters. is Yes lower case push these values into array. For each option push more values into array. In a for loop equal to the number input for length -  choose random index value of your character array. 

//generate password should create a random password from the array made in write password. This should be a for loop.



/*var password = generatePassword();
var passwordText = document.querySelector("#password");
 

passwordText.value = password;

*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
