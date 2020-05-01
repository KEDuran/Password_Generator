//FOR ALL CRITERIA VARIABLES - I chose to not apply an array in order to use the charAt() method later.
// Here I have declared the lowercase variable.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
// Here I have declared the uppercase variable.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Here I have declared the numeric variable.
var numeric = "0123456789";
// Here I have declared the special character variable.
var specialcharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Here I have declared the password length variable that restricts character entry to anywhere between 8 - 128 characters.
var passwordLength = Math.min(Math.max(parseInt(passwordLength), 8), 128);

// The prompts() function applied below groups all password criteria prompt variables into a single function, which will be triggered once the user clicks the "Generate Password button" in the index.html file.
function prompts() {
	//All PROMPT VARIABLES - The variables listed below will prompt the user to select which password criteria they would lik to include in their password.
	//Here is the uppercase prompt variable.
	var lowercasePrompt = confirm(
		"Do you want to include lowercase letters in your password?"
	);
	//Here is the uppercase prompt variable.
	var uppercasePrompt = confirm(
		"Do you want to include uppercase letters in your password?"
	);
	//Here is the numeric prompt variable.
	var numericPrompt = confirm(
		"Do you want to include numbers in your password?"
	);
	//Here is the special character prompt variable.
	var specialcharacterPrompt = confirm(
		"Do you want to include special characters in your password?"
	);
	//Here is the password length prompt variable.
	var passwordlengthPrompt = prompt(
		"Please enter how many characters long would you like your password to be. Min characters allowed= 8 ; Max characters allowed 128."
	);
}
