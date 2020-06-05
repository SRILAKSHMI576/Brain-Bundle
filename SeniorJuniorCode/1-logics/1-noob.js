function toAccounting(num){	
	if(num < 0){
		return '(' + Math.abs(num) + ')';
	}else {
		return num.toString()
	}	
}

console.log(toAccounting(4))
console.log(toAccounting(5))
console.log(toAccounting(-4))
console.log(toAccounting(undefined))