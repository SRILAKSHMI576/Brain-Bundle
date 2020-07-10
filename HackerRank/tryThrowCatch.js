function isPositive(a) {
	let result = 'YES';

    if (a < 0) {
        throw ({ message: 'Negative Error' });
    } else if (a === 0) {
        throw ({ message: 'Zero Error' });
    }

    return result;
}

console.log(isPositive(2))
console.log(isPositive(-1))
console.log(isPositive(0))
