// function fib(num) {
// 	if(num == 1){
// 		return 0;
// 	}else if(num == 2){
// 		return 1;
// 	}else{
// 		return fib(num-1) + fib(num-2)
// 	}
//  }

// console.log(fib(7))

function fib(n) {
	if (n == 1) {
	  return 0;
	} else if (n == 2) {
	  return 1;
	}
	return fib(n - 1) + fib(n - 2);
  }
// console.log(fib(7))
function fibonacci(num){
	for (let i = 1; i <= num; i++) {
		const result = fib(i);
		console.log(result);
	  }
}
console.log(fibonacci(7))