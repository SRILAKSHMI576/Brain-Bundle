// function vowelsAndConsonants(s) {
// 	let vowels = []
// 	let consonants = []
//   for(let index = 0; index <= s.length - 1; index++){
// 	if(s[index] === 'a' || s[index] === 'e' || s[index] === 'i' || s[index] === 'o' || s[index] === 'u' ){
// 		vowels.push(s[index])
// 	}else {
// 		consonants.push(s[index])
// 	}
//   } 
//   const result =  vowels + consonants  
//   console.log(result.replace(/,/g, '\n'))
// }

// console.log(vowelsAndConsonants("javascriptloops"))

function vowelsAndConsonants(s){
	for(let i=0; i< s.length; i++){
		let current_char = s[i]
		if('aeiou'.includes(current_char)) {
			console.log(current_char)
		}
	}

	let j = 0; 
	while (j < s.length) {
		let current_char = s[j]
		if(!'aeiou'.includes(current_char)) {
			console.log(current_char)
		}
		j += 1
	}
}

console.log(vowelsAndConsonants("javascriptloops"))