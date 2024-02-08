function vatCalc (cost){
	var vat = 25;
	return (cost/100)*(vat+100);
}
//insert monetary value as vatCalc parameter because I don't know how to make it prompt for this yet.
console.log("Yo brah. Shits gonna cost you £" + vatCalc(10) + ". Aww yiss. Mutha. Fuckin. Bargain.");