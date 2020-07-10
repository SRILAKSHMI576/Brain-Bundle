function reverseString(s){
	try{
		console.log(s.split("").reverse().join(''))
	}
	catch{
		if(s === Number(s)){
			console.log("s.split is not a function" + "\n" + s)
		}
	}
}

console.log(reverseString("1234"))
console.log(reverseString(Number("1234")))