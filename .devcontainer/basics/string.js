
/*
const name="asmita"
const repocount=80
//console.log(name+ " " +repocount+" value")

//instead of use + or , use ` backtick
console.log(`My name is ${name} and my repocount is ${80}`)

//another way to declare a String
const gameName=new String ('ruby')
//console.log(gameName)
console.log(gameName[0])
//console.log(gameName.__proto__);

//console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName[0]) //original value remains same.

const str1=new String('asmita-aa')
//const newStr1=str1.substring(0,4)
console.log(newStr1)

const str2=new String('Adhikary')
//const newStr2=str2.slice(-6,2) //WRONG
//const newStr2=str2.slice(-6,3) //o/p-> h
const newStr2=str2.slice(-6,5) //o/p-> hik
console.log(newStr2)

//in slicing negative indexing is allowed 
//in substring its not allowded
*/

//trim
const name1="   Rini   ";
console.log(name1);
console.log(name1.trim());

//replace
const url="https://asmita.com/asmita%20choudhury"
console.log(url.replace('%20','-'));

//include() // split
const v="asmita-adhrini-uiui"
console.log(v.includes('adh'))
console.log(v.split(('-')))
