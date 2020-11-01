window.onload = function(){

var form = document.getElementById('form');
var fullName = document.getElementById('full-name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var passwordCheck = document.getElementById('password-check');
var ageCheck = document.getElementById('age-check');
var phoneNumber = document.getElementById('phone-number');
var address = document.getElementById('address');
var city = document.getElementById('city');
var zipCode = document.getElementById('zip-code');
var dni = document.getElementById('dni');

/////////////////////// Blur Events ////////////////////////////////

fullName.addEventListener('blur', e => {
	checkName();
}
);

function checkName() {
	var fullNameValue = fullName.value.trim();	
	if(fullNameValue === '') {
        setErrorFor(fullName, 'Name cannot be blank');
    } else if(fullNameValue.indexOf(' ') < 0) {
        setErrorFor(fullName, 'Must contain first name and surename');
    } else if(fullNameValue.length < 6) {
        setErrorFor(fullName, 'Name cannot be under 6 characters');
    } else {
		setSuccessFor(fullName);
	}
}

email.addEventListener('blur', e => {
	checkEmail();
}
);

function checkEmail() {
    var emailValue = email.value.trim();
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;	
	if(emailValue.match(mailFormat)) {
        setSuccessFor(email);
    } else {
		setErrorFor(email, 'Not a valid email format');
	}
}

password.addEventListener('blur', e => {
	checkPassword();
}
);

function checkPassword() {
    var passwordValue = password.value.trim();
    var passwordFormat = /^(?=.*[a-zA-Z])(?=.*[0-9])/;	
	if(passwordValue.match(passwordFormat) == null) {
        setErrorFor(password, 'Password must contain both letters and numbers');
    } else if(passwordValue.length < 8) {
        setErrorFor(password, 'Password must be at least eight characters long');
    } else {
		setSuccessFor(password);
	}
}

passwordCheck.addEventListener('blur', e => {
	checkPasswordTwo();
}
);

function checkPasswordTwo() {
    var passwordCheckValue = passwordCheck.value.trim();
    var passwordValue = password.value.trim();
    var passwordCheckFormat = /^(?=.*[a-zA-Z])(?=.*[0-9])/;	
	if(passwordCheckValue.match(passwordCheckFormat) == null) {
        setErrorFor(passwordCheck, 'Password must contain both letters and numbers');
    } else if(passwordCheckValue.length < 8) {
        setErrorFor(passwordCheck, 'Password must be at least eight characters long');
    } else if(passwordCheckValue != passwordValue){
		setErrorFor(passwordCheck, 'Passwords do not match');
    } else {
        setSuccessFor(passwordCheck);
    }
}

ageCheck.addEventListener('blur', e => {
	checkAge();
}
);

function checkAge() {
    var ageValue = Number(ageCheck.value.trim());	
	if(Number.isInteger(ageValue) == false) {
        setErrorFor(ageCheck, 'Age must be an integer');
    } else if(ageValue < 18){
		setErrorFor(ageCheck, 'Must be over 18');
	} else {
        setSuccessFor(ageCheck);
    }
}

phoneNumber.addEventListener('blur', e => {
	checkPhoneNumber();
}
);

function checkPhoneNumber() {
    var phoneNumberValue = phoneNumber.value.trim();	
	if(phoneNumberValue.includes(' ') || phoneNumberValue.includes('-') || phoneNumberValue.includes('(') || phoneNumberValue.includes(')')) {
        setErrorFor(phoneNumber, 'Number can not contain " ", "-", "()"');
    } else if(phoneNumberValue.length < 7){
		setErrorFor(phoneNumber, 'Must be at least 7 digits');
	} else {
        setSuccessFor(phoneNumber);
    }
}

address.addEventListener('blur', e => {
	checkAddress();
}
);

function checkAddress() {
    var addressValue = address.value.trim();
    var addressFormat = /^(?=.*[a-zA-Z])(?=.*[0-9])/;	
	if(addressValue.match(addressFormat) == null || addressValue.indexOf(' ') < 0) {
        setErrorFor(address, 'Address must contain both letters and numbers');
    } else if(addressValue.length < 5) {
        setErrorFor(address, 'Address must be at least five characters long');
    } else {
		setSuccessFor(address);
	}
}

city.addEventListener('blur', e => {
	checkCity();
}
);

function checkCity() {
    var cityValue = city.value.trim();
	if(cityValue.length >= 3) {
        setSuccessFor(city);
    } else {
		setErrorFor(city, 'City name must be over 3 characters');
	}
}

zipCode.addEventListener('blur', e => {
	checkZipCode();
}
);

function checkZipCode() {
    var zipCodeValue = zipCode.value.trim();
	if(zipCodeValue.length >= 3) {
        setSuccessFor(zipCode);
    } else {
		setErrorFor(zipCode, 'Zip Code must be over 3 characters');
	}
}

dni.addEventListener('blur', e => {
	checkDni();
}
);

function checkDni() {
    var dniValue = Number(dni.value.trim());
	if(dniValue > 999999 && dniValue < 100000000 && Number.isInteger(dniValue)) {
        setSuccessFor(dni);
    } else {
		setErrorFor(dni, 'ID is invalid');
	}
}

function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}

/////////////////////// Blur Events ////////////////////////////////


/////////////////////// Focus Event ////////////////////////////////


var inputArray = Array.from(document.getElementsByTagName('input'));

for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener('focus', e => {
        setDefaultFor(inputArray[i]);
    }
    );}

function setDefaultFor(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control';
}

/////////////////////// Focus Event ////////////////////////////////


/////////////////////// Submit Event ////////////////////////////////


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
}
);

function checkInputs() {
	var fullNameValue = fullName.value.trim();
	var emailValue = email.value.trim();
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var passwordValue = password.value.trim();
    var passwordFormat = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
	var passwordCheckValue = passwordCheck.value.trim();
    var passwordValue = password.value.trim();
    var passwordCheckFormat = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    var ageValue = Number(ageCheck.value.trim());
    var phoneNumberValue = phoneNumber.value.trim();
    var addressValue = address.value.trim();
    var addressFormat = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    var cityValue = city.value.trim();
    var zipCodeValue = zipCode.value.trim();
    var dniValue = Number(dni.value.trim());
    var errorMsg = '';
    var successMsg = '';
	
	if(fullNameValue === '') {
        errorMsg += 'Name cannot be blank';
    } else if(fullNameValue.indexOf(' ') < 0) {
        errorMsg += 'Name must contain first name and surename';
    } else if(fullNameValue.length < 6) {
        errorMsg += 'Name cannot be under 6 characters';
    } else {
		successMsg += 'Name: '+fullNameValue;
    }

    if(emailValue.match(mailFormat)) {
        successMsg += '\nEmail: '+emailValue;
    } else {
		errorMsg += '\nNot a valid email format';
    }
    
    if(passwordValue.match(passwordFormat) == null) {
        errorMsg += '\nPassword must contain both letters and numbers';
    } else if(passwordValue.length < 8) {
        errorMsg += '\nPassword must be at least eight characters long';
    } else {
		successMsg += '\nPassword: '+passwordValue;
    }
    
    if(passwordCheckValue.match(passwordCheckFormat) == null) {
        errorMsg += '\nPassword must contain both letters and numbers';
    } else if(passwordCheckValue.length < 8) {
        errorMsg += '\nPassword must be at least eight characters long';
    } else if(passwordCheckValue != passwordValue){
		errorMsg += '\nPasswords do not match';
    } else {
        successMsg += '\nPassword validation: '+passwordCheckValue;
    }

    if(Number.isInteger(ageValue) == false) {
        errorMsg += '\nAge must be an integer';
    } else if(ageValue < 18){
		errorMsg += '\nAge must be over 18';
	} else {
        successMsg += '\nAge: '+ageValue;
    }

    if(phoneNumberValue.includes(' ') || phoneNumberValue.includes('-') || phoneNumberValue.includes('(') || phoneNumberValue.includes(')')) {
        errorMsg += '\nPhone number can not contain " ", "-", "()"';
    } else if(phoneNumberValue.length < 7){
		errorMsg += '\nPhone number must be at least 7 digits';
	} else {
        successMsg += '\nPhone number: '+phoneNumberValue;
    }

    if(addressValue.match(addressFormat) == null || addressValue.indexOf(' ') < 0) {
        errorMsg += '\nAddress must contain both letters and numbers';
    } else if(addressValue.length < 5) {
        errorMsg += '\nAddress must be at least five characters long';
    } else {
		successMsg += '\nAddress: '+addressValue;
    }
    
    if(cityValue.length >= 3) {
        successMsg += '\nCity: '+cityValue;
    } else {
		errorMsg += '\nCity name must be over 3 characters';
    }
    
    if(zipCodeValue.length >= 3) {
        successMsg += '\nZip code: '+zipCodeValue;
    } else {
		errorMsg += '\nZip Code must be over 3 characters';
    }
    
    var dniValue = Number(dni.value.trim());
	if(dniValue > 999999 && dniValue < 100000000 && Number.isInteger(dniValue)) {
        successMsg += '\nDNI: '+dniValue;
    } else {
		errorMsg += '\nID is invalid';
	}
    
    if (errorMsg != "") {
        alert(errorMsg);
    } else alert(successMsg)
}

}