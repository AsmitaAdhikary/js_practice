/*
//we are creating an object of Number

const score=400
console.log(score)

const balance = new Number(70)
console.log(balance)
console.log((balance.toString()))
console.log(typeof(balance.toString()))
console.log((balance.toString().length))

//toFixed()
console.log(balance.toFixed(2))

//toPrecision()
//const val=23.89776
//const val=123.89776
const val=1123.89677
console.log(val.toPrecision(3))


//toLocaleString()
//it shows the large number with commas to show it in a proper way
const val1=10000000
//console.log(val1.toLocaleString()); //by default it will follow USA Standards
console.log(val1.toLocaleString('en-IN'));

*/

//////////MATHS

console.log(Math)

console.log(Math.abs(-10)) //positive value o/p-> 4

console.log(Math.round(4.6)) //o/p-> 5

console.log(Math.ceil(4.2)) //take the highest value while round off

console.log(Math.floor(4.9)) //take the lowest value while round off

//Math.min()
console.log(Math.min(4,6,8,3,1,2))
//Math.max()
console.log(Math.max(4,6,8,3,1,2))

//Math.random()
console.log(Math.random()) //value between 0 to 1
console.log((Math.random()*10)+1)//*10 left shift,may be the value comes 0,for avoiding this we are adding +1
console.log(Math.floor(Math.random()*10)+1) //round figure

const max=20
const min=10
console.log(Math.floor(Math.random()*((max-min+1))+min))
