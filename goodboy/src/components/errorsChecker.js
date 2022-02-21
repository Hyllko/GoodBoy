export const validate = (formData) => {
	let formErrors = {};

	if (!formData.value) {
		formErrors.value = "* Prosím zvolte aku čiastku chcete darovať";
	} else if (formData.value <= 0 || formData.value.charAt(0) === "0") {
		formErrors.value = "* minimálna hodnota prispevku je 1 €";
	}
	if (!formData) {
		formErrors.check = "* potvrďte súhlas";
	}

	if (!formData.firstName) {
		formErrors.firstName = "* Prosím zadajte svoje meno";
	} else if (formData.firstName.length < 2 || formData.firstName.length > 20) {
		formErrors.firstName = "* Meno musi mat minimalne 2 znaky";
	}
	// error for surname
	if (!formData.lastName) {
		formErrors.lastName = "* Prosím zadajte svoje priezvysko";
	} else if (formData.lastName.length < 2 || formData.lastName.length > 20) {
		formErrors.lastName = "* Priezvisko musi mat minimalne 2 znaky";
	}

	// error for email
	const emailRegex = new RegExp(
		/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	);
	if (!formData.email || !emailRegex.test(formData.email)) {
		formErrors.email =
			"* Prosím zadajte email alebo skontrolujte format emailu";
	}

	//error for phone number
	const phoneRegex = new RegExp(
		/(^[0-9]\d{3}[ ]\d{3}[ ]\d{3}$)|(^[0-9]\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2}$)|(^[+][0-9]\d{11}$)|(^[+][0-9]\d{2}[ ]\d{3}[ ]\d{3}[ ]\d{3}$)|(^[+][0-9]\d{1}[ ]\d{3}[ ]\d{3}[ ]\d{3}$)|(^[0-9]\d{3}[ ]\d{3}[ ]\d{3}$)|(^[0-9]\d{9}$)|(^[0-9]\d{14}$)|(^([(]([0-9]\d{1})[)][ ])([0-9]\d{3})[ ]\d{4}$)/m
	);

	if (!formData.phone) {
		return formErrors;
	} else if (formData.phone && !phoneRegex.test(formData.phone)) {
		formErrors.phone = "* Prosím zadajte číslo v spravnom tvare";
	}

	return formErrors;
};

export const checkType = (conType) => {
	let type = "";
	if (conType === "whole") {
		type = "Chcem finančne prispieť konkrétnemu útulku";
	} else if (conType === "single") {
		type = "Chcem finančne prispieť celej nadácii";
	}
	return type;
};
