// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var baseOptions = [];
var lowerCase;
var upperCase;
var numeric;
var specialCharacters;
var lowerPasswordCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperPasswordCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericPasswordCharacters = ["1", "2","3", "4", "5", "6", "7", "8", "9"];
var specialPasswordCharacters = [",", "*"];


// Write password to the #password input
function writePassword() {
  var length = Math.round(prompt("How long would you like your password? (Choose a number between 8 and 128)"));

  if (length < 8 || length >= 128) {
    alert("Please choose a number between 8 and 128");

  } else {
    //Records whether user wants lowercase letters
   lowerCase = prompt("Do you wish to include lowercase letters? (Yes or No)");
    if (lowerCase !== "Yes" && lowerCase !== "No" && lowerCase !== "Y" && lowerCase !== "N" && lowerCase !== "n" && lowerCase !== "y" && lowerCase !=="yes" && lowerCase!== "no") {
      alert("Please type Yes or No");
       writePassword();
    } else if (lowerCase === "Yes" || lowerCase === "Y" || lowerCase === "y" || lowerCase==="yes") {
      lowerCase = true;
    } else {
      lowerCase = false;
    }
  }
  

  //Records whether user wants UpperCase letters
  var upperCase = prompt("Do you wish to include uppercase letters? (Yes or No)");
  if (upperCase !== "Yes" && upperCase !== "No" && upperCase !== "Y" && upperCase !== "N" && upperCase !== "n" && upperCase !== "y" && upperCase !== "yes" && upperCase !== "no") {
    alert("Please type Yes or No");
    writePassword();
  } else if (upperCase === "Yes" || upperCase === "Y" || upperCase === "y" || upperCase ==="yes") {
    upperCase = true;
    
  } else {
    upperCase = false;
  }

  console.log(typeof upperCase)

//Records whether user wants numbers?
  var numeric = prompt("Do you wish to include numbers? (Yes or No)");
  if (numeric !== "Yes" && numeric !== "No" && numeric !== "Y" && numeric !== "N" && numeric !== "n" && numeric !== "y" && numeric!== "yes" && numeric !== "no") {
    alert("Please type Yes or No");
    writePassword();
  } else if (numeric === "Yes" || numeric === "Y" || numeric === "y" || numeric === "yes") {
    numeric = true;
    
  } else {
    numeric = false;
  }
  
  console.log(typeof numeric)

  //Records whether user wants special characters?
  var specialCharacters = prompt("Do you wish to include special characters (Yes or No)")
  if (specialCharacters !== "Yes" && specialCharacters !== "No" && specialCharacters !== "Y" && specialCharacters !== "N" && specialCharacters !== "n" && specialCharacters !== "y" && specialCharacters !== "yes" && specialCharacters !== "no") {
    alert("Please type Yes or No");
    writePassword();
  } else if (specialCharacters === "Yes" || specialCharacters === "Y" || specialCharacters === "y" || specialCharacters === "yes") {
    specialCharacters = true;
    
  } else {
    specialCharacters = false;
  }

  //Prepare array from options
if (lowerCase === true) {
  var oneChoice = baseOptions.concat(lowerPasswordCharacters);
} else {
  var oneChoice = baseOptions
}

if (upperCase === true) {
 var secondChoice = oneChoice.concat(upperPasswordCharacters);
} else {
 var secondChoice = oneChoice
}

if (numeric === true){
 var thirdChoice = secondChoice.concat(numericPasswordCharacters)
} else {
 var thirdChoice = secondChoice
}

if (specialCharacters === true) {
 var lastChoice = thirdChoice.concat(specialPasswordCharacters)
} else {
 var lastChoice = thirdChoice
}



/*
  function isLower(array1, array2) {
         
    // Loop for array1
    for(let i = 0; i < array1.length; i++) {
         
        // Loop for array2
        for(let j = 0; j < array2.length; j++) {
             
            // Compare the element of each and
            // every element from both of the
            // arrays
            if(array1[i] === array2[j]) {
             
                // Return if common element found
                return true;
            }
        }
    }
     
    // Return if no common element exist
    return false;
*/

//Generates Password
var passCode =[];

function generatePassword (){
  for (i=0; i< lastChoice.length; i++){
    passCode.push(lastChoice[Math.floor(Math.random()*lastChoice.length)]);
    passCode.splice(length)
  }

}

generatePassword();
var passwordText = document.querySelector("#password");
console.log(passCode)
passwordText.value = passCode.join('');
}

//passwordText.value = password;




//var password = generatePassword();
//

//Write Password function should create array for possible characters. is Yes lower case push these values into array. For each option push more values into array. In a for loop equal to the number input for length -  choose random index value of your character array. 

//generate password should create a random password from the array made in write password. This should be a for loop.



/*var password = generatePassword();
var passwordText = document.querySelector("#password");
 

passwordText.value = password;


*/

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);