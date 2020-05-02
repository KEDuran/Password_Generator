//FOR ALL CRITERIA VARIABLES - I chose to not apply an array in order to use the charAt() method later.
// Here I declared the lowercase variable.
var lowercase = "abcdefghijklmnopqrstuvwxyz";

// Here I declared the uppercase variable.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Here I declared the numeric variable.
var numeric = "0123456789";

// Here I declared the special character variable.
var specialcharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

/*Here I declared the password length variable that restricts the allowable number of characters that will generate to be anywhere between 8 - 128 characters.
The logic applied to restrict character length can be found after the prompt() function. I placed a placehold interger of 8, but the full assignment logic for 
this variable is after the passwordlengthPrompt variable.*/
var passwordLength = 8;

/*Here I declared a master password variable with an empty string that will be used to append selected password criteria options based on user selection.
The generatePassword() function below shows why I created this empty string variable.*/
var master = "";

/*The generatePassword() function will generate a secure password that follows the criteria selected by the user from the confirm/prompt questions listed in 
the prompt() function. This function includes a for loop and establishes a new local password variable that will be use to return the generated secure password 
that will define the securePassword variable listed at the end of the prompt() function.*/
function generatePassword() {
	// Declaring a local variable to apply to the for loop below. This is an empty string variable that will allow us to append selected criteria generated from the for loop.
	var password = "";

	// For loop starts here. Index is set to 0 and will incrememnt by one until the password length parameter is met.
	for (var i = 0; i < this.passwordLength; i++) {
		/*This statement will be used to generate the random password. Inititally, this statement will use Math.ramdom() to generate a random number 0-1 then multiply that 
		generated random number by the the numerical length of the character length determined by the user's selection criteria. This calculated value will then be applied
		 to the chartAt() method, which will generate the character that falls on the index value of the generated number from the Math.floor() and Math.random method. 
		 This will continue until the for password length variable in the for loop is met.*/
		password =
			password +
			this.master.charAt(Math.floor(Math.random() * this.master.length));
	}
	console.log(password);
	return password;
}

/*The prompts() function groups all password criteria promptvariables into a single function, which will be triggered once the user clicks the "Generate Password" button 
in the index.html file.*/
function prompts() {
	/*All PROMPT VARIABLES - The variables listed below will prompt the user to select which password criteria they would like to include in their password. 
	Based on the user's selection, each prompt variable has an if-statement that will determine whether each criteria is appended into the master variable defined
	in the above variable section.*/

	//Here is the lowercasePrompt variable.
	var lowercasePrompt = confirm(
		"Do you want to include LOWERCASE letters in your password?"
	);
	//If-statement that adds lowercase criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (lowercasePrompt) {
		this.master = this.master + this.lowercase;
		console.log(this.master);
	}

	//Here is the uppercasePrompt variable.
	var uppercasePrompt = confirm(
		"Do you want to include UPPERCASE letters in your password?"
	);

	//If-statement that adds uppercase criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (uppercasePrompt) {
		this.master = this.master + this.uppercase;
		console.log(this.master);
	}
	//Here is the numericPrompt variable.
	var numericPrompt = confirm(
		"Do you want to include NUMBERS in your password?"
	);

	//If-statement that adds numeric criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (numericPrompt) {
		this.master = this.master + this.numeric;
		console.log(this.master);
	}

	//Here is the specialcharacterPrompt variable.
	var specialcharacterPrompt = confirm(
		"Do you want to include SPECIAL CHARACTERS in your password?"
	);

	//If-statement that adds special character criteria to master variable if selected. Using the this.notation to call global variables within a function.
	if (specialcharacterPrompt) {
		this.master = this.master + this.specialcharacter;
		console.log(this.master);
	}

	//Here is the passwordlengthPrompt variable.
	var passwordlengthPrompt = prompt(
		"How many characters do you want in you password? Min characters allowed= 8 ; Max characters allowed 128."
	);

	/*If-statement that controls for the edge case that no password criteria is selected but the user still wants to generate a secure password. If the user does not 
	select any password criteria, this if-statement will apply all password criteria when the generatePassword() function is invoked.*/

	/*NOTE - If a password length is also not selected, the password length prompt variable listed below ensures a secure random password of at least 8 characters is generated*/

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
	/*The password length variable is dependent on the entry from the passwordlengthPrompt. The method below ensure that character length of the generated password remains
	between the required 8 - 128 characters specified in this assignment.*/
	this.passwordLength = Math.min(
		Math.max(parseInt(passwordlengthPrompt), 8),
		128
	);

	console.log(this.passwordLength);

	// Here I declared the secure password variable that will be assigned the secure password value that will generate when the generatePassword() function is triggered.
	var securePassword = generatePassword();

	//This is the statement that will output the generated password into the app's user interface.
	document.getElementById("securepass").innerHTML = securePassword;
}
