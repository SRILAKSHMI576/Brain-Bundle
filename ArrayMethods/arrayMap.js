//Mapp method
function arrayMap(array){
	let arrayLength = array.length -1
	for(let index = 0; index<=arrayLength; index++){
		// console.log(array[index].name)
		console.log(array[index].price)
	}
}

// console.log(arrayMap([
// 	{ name: 'Bike', price: 100},
// 	{ name: 'Car', price: 200},
// 	{ name: 'Scooty', price: 10},
// 	{ name: 'Bus', price: 5},
// 	{ name: 'Van', price: 500},
// 	{ name: 'Metro', price: 900},
// 	{ name: 'Truck', price: 1000},
// 	{ name: 'Keyboard', price: 300},
// 	{ name: 'Lorry', price: 900},
// ]))

//Filter method
function arrayFilter(array, number){
	let arrayLength = array.length  - 1
	for(let index=0; index<= arrayLength; index++){
		if(array[index].price <= number){
			console.log(array[index].price)
		}
	}
}

// console.log(arrayFilter([
// 	{ name: 'Bike', price: 100},
// 	{ name: 'Car', price: 200},
// 	{ name: 'Scooty', price: 10},
// 	{ name: 'Bus', price: 5},
// 	{ name: 'Van', price: 500},
// 	{ name: 'Metro', price: 900},
// 	{ name: 'Truck', price: 1000},
// 	{ name: 'Keyboard', price: 300},
// 	{ name: 'Lorry', price: 900},
// ], 100))

//Find method
function arrayFind(array, target){
	arrayLength = array.length - 1
	for(let index=0; index<= arrayLength; index++){
		if(target == null) return("Please enter target value")
		if (typeof target === 'string'){
			if(array[index].name === target)	return array[index] 
		}else if(typeof target === 'number'){
			if(array[index].price === target) 	return array[index]
		}
	}		
}

console.log(arrayFind([
	{ name: 'Bike', price: 100},
	{ name: 'Car', price: 200},
	{ name: 'Scooty', price: 10},
	{ name: 'Bus', price: 5},
	{ name: 'Van', price: 500},
	{ name: 'Metro', price: 900},
	{ name: 'Truck', price: 1000},
	{ name: 'Keyboard', price: 300},
	{ name: 'Lorry', price: 900},
], ))