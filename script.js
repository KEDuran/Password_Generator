//FOR ALL CRITERIA VARIABLES - I chose to not apply an array in order to use the charAt() method later.
// Here I have declared the lowercase variable.
let lowercase = "abcdefghijklmnopqrstuvwxyz";
// Here I have declared the uppercase variable.
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Here I have declared the numeric variable.
let numeric = "0123456789";
// Here I have declared the special character variable.
let specialcharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Here I have declared the password length variable that restricts character entry to anywhere between 8 - 128 characters.
let passwordLength = Math.min(Math.max(parseInt(passwordLength), 8), 128);
// Here I have declared the secure password variable that will populate a secure password when the generatePassword() function is triggered.
let securePassword = generatePassword();

// The prompts() function applied below groups all password criteria prompt variables into a single function, which will be triggered once the user clicks the "Generate Password button" in the index.html file.
function prompts() {
	//All PROMPT VARIABLES - The variables listed below will prompt the user to select which password criteria they would lik to include in their password.
	//Here is the uppercase prompt variable.
	let lowercasePrompt = confirm(
		"Do you want to include lowercase letters in your password?"
	);
	//Here is the uppercase prompt variable.
	let uppercasePrompt = confirm(
		"Do you want to include uppercase letters in your password?"
	);
	//Here is the numeric prompt variable.
	let numericPrompt = confirm(
		"Do you want to include numbers in your password?"
	);
	//Here is the special character prompt variable.
	let specialcharacterPrompt = confirm(
		"Do you want to include special characters in your password?"
	);
	//Here is the password length prompt variable.
	let passwordlengthPrompt = prompt(
		"Please enter how many characters long would you like your password to be. Min characters allowed= 8 ; Max characters allowed 128."
	);
}
