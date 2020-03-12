function largestPrimeFactor(num){
	for(let i =0; i<=num; i++){
		if(num % i === 0){
			console.log(i)
		}
	}
}

// const result = largestPrimeFactor(15)
// console.log(result)

function primeNumber(num){
	for(let i=0; i<=num; i++){
		if(num % i !== 0){
			console.log(i)
		}
	}
}

console.log(primeNumber(9))