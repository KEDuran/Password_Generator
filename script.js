//FOR ALL CRITERIA VARIABLES - I chose to not apply an array in order to use the charAt() method later.
// Here I have declared the lowercase variable.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
// Here I have declared the uppercase variable.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Here I have declared the numeric variable.
var numeric = "0123456789";
// Here I have declared the special character variable.
var specialcharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
/*Here I have declared the password length variable that restricts character entry to anywhere between 8 - 128 characters. 
I placed a placehold interger of 8, but the full assignment logic for this variable is after the passwordlengthPrompt variable.*/
var passwordLength = 8;
// Here I have declared a master password variable with an empty string that will be used to append selected password criteria based on user selection.
var master = "";

/*The generatePassword() function will generate a secure password that follows the criteria selected by user from the prompts. 
This function includes a for loop and establishes a new password variable that serves a local variable for this function.*/
function generatePassword() {
	// Declaring a local variable to apply to the below for loop.
	var password = "";

	for (var i = 0; i < this.passwordLength; i++) {
		/*This statement will be used to populate the random password. Inititally, this statement will use Math.ramdom() to generate a random number 0-1 then multiply the 
		generated random number by the the numerical length of the master variable determined by the user's selection criteria. This calculated value will then be applied
		 to the chartAt() method, which will generate the character at the specified index. This will continue until the for password length variable in the for loop is met.*/
		password =
			password +
			this.master.charAt(Math.floor(Math.random() * this.master.length));
	}
	console.log(password);
	return password;
}

/*The prompts() function applied below groups all password criteria prompt variables into a single function, which will be triggered 
once the user clicks the "Generate Password button" in the index.html file.*/
function prompts() {
	//All PROMPT VARIABLES - The variables listed below will prompt the user to select which password criteria they would lik to include in their password.
	//Here is the uppercase prompt variable.
	var lowercasePrompt = confirm(
		"Do you want to include lowercase letters in your password?"
	);
	//If-statement that adds lowercase criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (lowercasePrompt) {
		this.master = this.master + this.lowercase;
		console.log(this.master);
	}

	//Here is the uppercase prompt variable.
	var uppercasePrompt = confirm(
		"Do you want to include uppercase letters in your password?"
	);

	//If-statement that adds uppercase criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (uppercasePrompt) {
		this.master = this.master + this.uppercase;
		console.log(this.master);
	}
	//Here is the numeric prompt variable.
	var numericPrompt = confirm(
		"Do you want to include numbers in your password?"
	);

	//If-statement that adds numeric criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (numericPrompt) {
		this.master = this.master + this.numeric;
		console.log(this.master);
	}

	//Here is the special character prompt variable.
	var specialcharacterPrompt = confirm(
		"Do you want to include special characters in your password?"
	);

	//If-statement that adds special character criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (specialcharacterPrompt) {
		this.master = this.master + this.specialcharacter;
		console.log(this.master);
	}

	//Here is the password length prompt variable.
	var passwordlengthPrompt = prompt(
		"Please enter how many characters long would you like your password to be. Min characters allowed= 8 ; Max characters allowed 128."
	);

	/*If-statement that controls for the edge case that no password criteria is selected. If the user does not select any password criteria, this if-statement will
	apply apply all password criteria when the generatePassword is invoked. The standard password length if a number of characters is not specified will set to 8 characters,
	based on the passwordLength variable assignment that follows this if-statement.*/
	if (
		lowercasePrompt === false &&
		uppercasePrompt === false &&
		numericPrompt === false &&
		specialcharacterPrompt === false
	) {
		this.master =
			this.master +
			this.lowercase +
			this.uppercase +
			this.numeric +
			this.specialcharacter;
		console.log(this.master);
	}

	// Since the password length variable is dependent on the entry from the passwordlengthPrompt, the variable assignment for passwordLength is defined below.
	this.passwordLength = Math.min(
		Math.max(parseInt(passwordlengthPrompt), 8),
		128
	);
	console.log(this.passwordLength);

	// Here I have declared the secure password variable that will populate a secure password when the generatePassword() function is triggered.
	var securePassword = generatePassword();

	//This is the statement that will output the generated password into UI.
	document.getElementById("securepass").innerHTML = securePassword;
}
