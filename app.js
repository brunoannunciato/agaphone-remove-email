
var url_string = window.location.href,
 	url = new URL(url_string),
 	email = url.searchParams.get('email'),
 	remove = document.querySelector('.change'),
 	emailInput = document.querySelector('#email');

emailInput.value = email;

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


if (!validateEmail(emailInput.value)) {
	emailInput.disabled = false;
	emailInput.classList.add('open-box');
	document.querySelector('.message-error').classList.add('show-message');
} else {
	emailInput.disabled = true;
}

emailInput.addEventListener('input', function() {
	console.log('teste')
	if (!validateEmail(emailInput.value)) {
		document.querySelector('.message-error').classList.add('show-message');
		document.querySelector('.enviar').disabled = true;
	} else {
		document.querySelector('.message-error').classList.remove('show-message');
		document.querySelector('.enviar').disabled = false;
	}
})