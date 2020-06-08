const items = [
	{ name: 'Bike', price: 100},
	{ name: 'Car', price: 200},
	{ name: 'Scooty', price: 10},
	{ name: 'Bus', price: 5},
	{ name: 'Van', price: 500},
	{ name: 'Metro', price: 900},
	{ name: 'Truck', price: 1000},
	{ name: 'Keyboard', price: 300},
	{ name: 'Lorry', price: 900},
]

//Filter Method
const filteredItems = items.filter(item => {
	return item.price <= 100
})

// console.log(filteredItems)

//Map method
const itemNames = items.map(item => {
	return item.name
})

// console.log(itemNames)

//Find method
const foundItems = items.find(item => {
	return item.name === 'Lorry'
})

// cosnsole.log(foundItems)

//forEach method
items.forEach(item => {
	// console.log(item.price)
})

//Some method
const hasInexpensiveItems = items.some((item) => {
	return item.price <= 100
})

// console.log(hasInexpensiveItems)

//every Method
const hasMaximumItems = items.every((item) => {
	return item.price <= 1000
})

// console.log(hasMaximumItems)

//reduce Method
const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal
}, 0)

// console.log(total)

//includes Method
const array = [1, 34, 6, 88]
const matchPrice = array.includes(344)

console.log(matchPrice)