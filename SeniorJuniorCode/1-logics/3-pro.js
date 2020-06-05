function numberToAccountingString(number){
	if(number == null) return 
	if(number < 0) return `(${Math.abs(number)})`;
	return number.toString()
}

console.log(numberToAccountingString(4))
console.log(numberToAccountingString(5))
console.log(numberToAccountingString(-4))
console.log(numberToAccountingString(undefined))