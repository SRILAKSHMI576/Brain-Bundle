//Even Fibonacci numbers

function fib(n) {
	if (n == 1) {
	  return 0;
	} else if (n == 2) {
	  return 1;
	}
	return fib(n - 1) + fib(n - 2);
  }

function fibonacci(num){
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		if(i % 2 == 0 ){
			const result = fib(i);
			console.log(result)
			sum += result
		}
	}
	 return sum;
}
console.log(fibonacci(10))