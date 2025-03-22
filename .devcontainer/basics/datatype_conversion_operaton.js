/*
let age="22"
//console.log(typeof age)

let valueInNumber=Number(age)
console.log(typeof valueInNumber)
*/

/*
let id=66
//console.log(typeof id)
//let valueInString=String(id)
//console.log(typeof valueInString)
console.log(typeof(String(id)))
//console.log(typeof id)
*/

/*
let num=7
let valInString=String(num)
console.log(valInString)

let age="33abcd"
let ageInNum=Number(age)
console.log(ageInNum) //o/p-> NaN=>not a number
*/


/*
//let age1=33abcd //its not correct
let ageInString=String(age1)
console.log(ageInString)
*/

/*
let score=null
let valInNum=Number(score)
console.log(valInNum)// o/p=0
*/

/*
let score=undefined
let valInNum=Number(score)
console.log(valInNum) //o/p= NaN

let score2="asmita"
let score3=""
let score4=1
//console.log(typeof score4)
let intScore=Boolean(score4)
console.log(intScore)
*/

/*
"" -> false
"asmita" ->true
*/

/*
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
*/

//******************OPERATIONS********************//

/*
let value=5
let negValue= -value
console.log(negValue)

console.log(2+2)
console.log(2**3) //2^3
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%3)

let str1="hi"
let str2=" asmita"
let str3=str1+str2
console.log(str3)
*/

console.log("1"+"2") 
console.log("1"+2) //op->12 not 3
console.log(1+"2")
console.log("1"+2+2) //o/p=122 not 14
console.log(1+2+"2")//o/p->32 not 122
console.log(1+2+"2"+2+"3") //o/p->3223


console.log( (3+2) *5 + 4)

console.log(+true) //not a good practice o/p->1
console.log(+"") //not a good practice o/p->0

let num1, num2,num3
num1= num2= num3= 2+2  //not a good practice

let gameCounter=100
//gameCounter++;
++gameCounter; //-->o/p=101
console.log(gameCounter);
