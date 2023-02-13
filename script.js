// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerPasswordCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperPasswordCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericPasswordCharacters = ["0","1", "2","3", "4", "5", "6", "7", "8", "9"];
var specialPasswordCharacters = [ "#", "$", "%","&", "`", "(", ")", "*", "+", ",", "-",".","/",";",":","<", "=",">","?"];


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
    var lowerCase = confirm("Would you like to include lower case letters? (Choose OK if so, Cancel if no)");
    if (lowerCase === true) {
      var choiceLc= baseOptions.concat(lowerPasswordCharacters);
    } else{
      choiceLc = baseOptions;
    }
   
 

  //Records whether user wants UpperCase letters
  var upperCase = confirm("Would you like to include upper case letters? (Choose OK if so, Cancel if no)");
  if (upperCase === true){
    var choiceUc = choiceLc.concat(upperPasswordCharacters);
  } else{
    choiceUc = choiceLc;
  }

 

//Records whether user wants numbers?
  var numeric = confirm("Would you like to include numbers? (Choose OK if so, Cancel if no)");
  if (numeric === true) {
    var choiceN = choiceUc.concat(numericPasswordCharacters);
  } else {
    choiceN = choiceUc;
  }
  

  //Records whether user wants special characters?
  var specialCharacters = confirm("Would you like to include special characters? (Choose OK if so, Cancel if no)")
  if (specialCharacters === true) {
    var choiceSc = choiceN.concat(specialPasswordCharacters)
  } else {
    choiceSc = choiceN
  }

  //Validates whether user chose at least one option
  if (lowerCase === false && upperCase === false && numeric === false && specialCharacters === false){
    alert("must choose one type of character");
    return "";
  }



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
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);