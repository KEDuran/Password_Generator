//FOR ALL CRITERIA VARIABLES - I chose to not apply an array in order to use the charAt() method later.
// Here I declared the lowercase variable.
var lowercase = "abcdefghijklmnopqrstuvwxyz";

// Here I declared the uppercase variable.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Here I declared the numeric variable.
var numeric = "0123456789";

// Here I declared the special character variable.
var specialcharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

/*Here I declared the password length variable. The logic applied to restrict character length to be between 8 - 128 can be found 
in a while loop within the prompt() function. I placed a placehold interger of 0, but the full assignment logic for this variable 
is located with the while loop.*/
var passwordLength = 0;

/*Here I declared a master password variable with an empty string that will be used to append selected password criteria options 
based on user selection. The generatePassword() and buildCriteria() below shows why I created this empty string variable.*/
var master = "";

/*This logic outlined in this buildCriteria function is used to append the password criteria variables into the master password 
variable based on the users answers to the prompting questions listed in the prompts() function. The new variables listed in 
this function will allow the prompting questions and user selection answers to pass through the logic of this function.
*question variable is for passing the prompting question.
*criteria variable is for passing the above password criteria.
*choice variable if for passing the true/false value for the response.*/
function buildCriteria(question, criteria) {
	let choice = confirm(question);
	if (choice) {
		return criteria;
	} else {
		return "";
	}
}

/*The generatePassword() function will generate a secure password that follows the criteria selected by the user. This function includes 
a for loop and establishes a new local password variable that will be used to return the generated secure password that will define the 
securePassword variable listed at the end of the prompt() function.*/
function generatePassword() {
	/*Declaring a local variable to apply to the for loop below. This is an empty string variable that will allow us to append selected 
	criteria generated from the for loop.*/
	let password = "";

	// For loop starts here. Index is set to 0 and will incrememnt by one until the password length parameter is met.
	for (var i = 0; i < passwordLength; i++) {
		/*This statement will be used to generate the random password. Inititally, this statement will use Math.ramdom()
		to generate a random number 0-1 then multiply that generated random number by the the numerical length of the character 
		length determined by the user's selection criteria. This calculated value will then be applied to the chartAt() method, 
		which will generate the character that falls on the index value of the generated number from the Math.floor() and 
		Math.random method. This will continue until the for password length variable in the for loop is met.*/
		password =
			password + master.charAt(Math.floor(Math.random() * master.length));
	}
	console.log(password);
	return password;
}

/*The prompts() function groups all password criteria questionts into a single function, which will be triggered once the user clicks 
the "Generate Password" button in the index.html file. The buildCriteria() function is invoked within the prompts() function to append 
any user selected criteria to the empty master variable intialized in at the beginning of this script.*/
function prompts() {
	//Applying the buildCriteria() to prompting question for lowercase variable.
	master += buildCriteria(
		"Do you want to include LOWERCASE letters in your password?",
		lowercase
	);
	console.log(master);
	//Applying the buildCriteria() to prompting question for uppercase variable.
	master += buildCriteria(
		"Do you want to include UPPERCASE letters in your password?",
		uppercase
	);
	console.log(master);
	//Applying the buildCriteria() to prompting question for numeric variable.
	master += buildCriteria(
		"Do you want to include NUMBERS in your password?",
		numeric
	);
	console.log(master);
	//Applying the buildCriteria() to prompting question for specialcharacter variable.
	master += buildCriteria(
		"Do you want to include SPECIAL CHARACTERS in your password?",
		specialcharacter
	);
	console.log(master);

	/**This while loop with require the user to enter how long they would like for their secure password to be. Since the passwordLength 
	variable was intialized with a value of 0, the isNan() will ensure users  recieve an initial prompt to enter a password length after 
	the special character question. If the user does not enter a number of characters within the range of allowed number of characters, 
	they will continue to recieve the prompt below.*/
	while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
		passwordLength = parseInt(
			prompt(
				"Please select how many characters you want in your password. Min = 8 characters; Max = 128 characters"
			)
		);
		if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
			alert(
				"Not within the range of allowable password length. Please try again."
			);
		}
	}
	console.log(passwordLength);

	/* This if-statement controls for the edge case that no password criteria is selected, but the user still wants to generate a 
	secure password. If the user does not select any password criteria, this if-statement will apply all password criteria when the 
	generatePassword() function is invoked.*/

	/*NOTE - The while loop for the passwordLength variable above ensures the user is prompted to specify how long they would like 
	their secure password to be, so a numerical value of total desired characters will be defined when this prompts() function is invoked.*/

	if (master === "") {
		master = master + lowercase + uppercase + numeric + specialcharacter;
		console.log(master);
	}

	/*Here I declared the secure password variable that will be assigned the secure password value that will generate when the generatePassword() 
	function is triggered.*/
	var securePassword = generatePassword();

	//This is the statement that will output the generated password into the app's user interface.
	document.getElementById("securepass").innerHTML = securePassword;

	/*Resetting the passwordLength variable to 0 to ensure that the password length resets after the prompts() function finished running and/or 
	the user want to generate a new password and re-clicks the "Generate Password" button. I did this because I noticed some edge cases where the 
	password length would not reset unless the web page was completely refreshed.*/
	passwordLength = 0;
	//Resetting the master variable to an empty string to control for the above edge case describe for passwordLength variable.
	master = "";
}
