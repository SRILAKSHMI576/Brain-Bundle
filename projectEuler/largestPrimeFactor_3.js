//largest prime factor

function factors(num){
	for(let i=0; i<=num; i++){
		if(num % i == 0){
			console.log(i)
		}
	}
}

// function isPrime(num) {
// 	for(var i = 2; i <= num -1; i++)
// 	  if(num % i === 0){

// 	  }
// 	return num > 1;
// }

// console.log(isPrime(13195))

function isPrime(n) {
	for(let j=0; j<=num; j++){
		for (let i = 2; i <= n - 1; i++) {
			const reminder = n % i;
			if (reminder == 0) {
			  return reminder;
			}
		  }
		return true;
	}
  }
  console.log(isPrime(10))