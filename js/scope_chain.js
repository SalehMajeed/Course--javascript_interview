var dummy = 60;
var temp;
function log(number) {
	console.log(number);

	function print_number() {
		console.log(number, dummy);
	}
	print_number();
	temp = print_number;
}

log(20);
temp();
