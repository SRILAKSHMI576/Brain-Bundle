function CountOfString(str, word){
	let count = 0;
	const n = str.length-1
	for(let index=0;index<=n;index++){
		if(str[index] === word){
			count++
		}
	}
	return count
}

const str = "SRILAKSHMI"
const countObj = {}
for(let j=0;j<=str.length-1; j++){
	const count = CountOfString(str, str[j])
	countObj[str[j]] = count
}

console.log(countObj)