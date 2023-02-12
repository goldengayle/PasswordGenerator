// Assignment Code
var generateBtn = document.querySelector("#generate");
// var length
//var baseOptions = [];
//var lowerCase;
//var upperCase;
//var numeric;
//var specialCharacters;
var lowerPasswordCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperPasswordCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericPasswordCharacters = ["1", "2","3", "4", "5", "6", "7", "8", "9"];
var specialPasswordCharacters = [",", "*"];


// Write password to the #password input
function writePassword() {
  var baseOptions=[];
  //parseInt
  var length = Math.round(prompt("How long would you like your password? (Choose a number between 8 and 128)"));

  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    return  " ";

  } else {
    //Records whether user wants lowercase letters
    var lowerCase = confirm("Do you wish to include lowercase letters? Press OK is so");
    if (lowerCase === true) {
      var choiceLc= baseOptions.concat(lowerPasswordCharacters);
    } else{
      choiceLc = baseOptions;
    }
   
 

  //Records whether user wants UpperCase letters
  var upperCase = confirm("Do you wish to include uppercase letters? (Yes or No)");
  if (upperCase === true){
    var choiceUc = choiceLc.concat(upperPasswordCharacters);
  } else{
    choiceUc = choiceLc;
  }

 

//Records whether user wants numbers?
  var numeric = confirm("Do you wish to include numbers? (Yes or No)");
  if (numeric === true) {
    var choiceN = choiceUc.concat(numericPasswordCharacters);
  } else {
    choiceN = choiceUc;
  }
  

  //Records whether user wants special characters?
  var specialCharacters = confirm("Do you wish to include special characters (Yes or No)")
  if (specialCharacters === true) {
    var choiceSc = choiceN.concat(specialPasswordCharacters)
  } else {
    choiceSc = choiceN
  }

  if (lowerCase === false && upperCase === false && numeric === false && specialCharacters === false){
    alert("must choose one type of character");
    return "";
  }

  //Prepare array from options
/*if (lowerCase === true) {
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
*/



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

//Generates Password based on User Choices
function generatePassword (){
  for (i=0; i< length; i++){
    passCode.push(choiceSc[Math.floor(Math.random()*choiceSc.length)]);
  }   


}
generatePassword();
var passwordText = document.querySelector("#password");
console.log(passCode)
passwordText.value = passCode.join('');
}

//passwordText.value = password;

}


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