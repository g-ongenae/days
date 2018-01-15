const validateForm = () => {
	const forms = document.forms[0];

	const pattern1 = new RegExp('^[\w.]+$');
	if (!pattern1.test(forms['username'].value)) {
		alert('Invalid username form.');
		return false;
	}

	const pattern2 = new RegExp('[^@]+@[^.@]+[.][\w]{2,4}');
	if (!pattern2.test(forms['email'].value)) {
		alert('Invalid email form.');
		return false;
	}
	
	if (forms['password'].value.length < 6) {
		alert('Password is too short.');
		return false;
	}
	
	return true;
};

/*
	Notes: The pattern matching doesn't work, at all.
	TODO: FIX IT.
*/