// Useful tidbit for checking if date is valid
/*
if (Object.prototype.toString.call(date) === '[object Date]') {

	if (isNaN(date.getTime())) {
		// not a date
	}
	else {
		// is a date
	}
}
else {
	// not a date	
}
*/

console.log("hello!");

var enteredTimestamp = document.getElementById('enteredTimestamp');
var resultContainer = document.getElementById('resultContainer');

var result = {
	unix: "",
	natural: ""
};

var path = location.pathname.substr(1);
console.log(path);

// enteredTimestamp.innerHTML = path;

var date = new Date(parseInt(path * 1000));
console.log(date);


if (isDate(date)) {
	result.unix = date.valueOf() / 1000;
	result.natural = date.toDateString();
} else {

	path = decodeURIComponent(path);
	date = new Date(path);
	console.log("path: " + path);
	console.log("string parsed:");
	console.log(date);
	if (isDate(date)) {
		result.unix = date.valueOf() / 1000;
		result.natural = date.toDateString();
	} else {
		result.unix = null;
		result.natural = null;
	}

}

resultContainer.innerHTML = JSON.stringify(result);

function isDate(date) {

	if (Object.prototype.toString.call(date) === '[object Date]') {
		if (isNaN(date.getTime())) {
			return false;
		}
		else {
			return true;
		}
	} else {
		return false;
	}
}





