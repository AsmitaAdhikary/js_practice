//primitive --->call by value

//1.string 2.Number 3.Boolean 4.Null (empty String)

// 5.undefined (memory space is creeated butnot decided which value will pass)

// 6.Symbol (to make a value unique)
const id="234";
const id2="234";
console.log(id===id2)
//but whwn we use Symbol the value and datatype considered as different
const a=Symbol("234");
const b=Symbol("234");
console.log(a===b)

// 7.BigInt
let BigNum=546456456456456n;

//Reference/Non Primitive Type( call by Reference)
//1.Arrays 
const names=["asmita","gourav","rini","arghya"]

//2.Objects
let myObj={
    name:"asmita",
    age:22
}
//3.Functions
//we can treat function as variable in javascript
const myFunction=function(){
    console.log("hello ,we created a function successfully!");
}


// if we master on Objects and Browser Web Events then it will like master on javascript


//what kind of language is javascript?
// Dynamic type or Static Type?
//---> Dynamic Type Language . in js no need to mention the type of the variable
// variables can hold values of different types during Runtime.
//we do not need to  declare the data type of a variable expilictly

//checking datatypes
const value=null;
console.log(typeof (names)) //object
console.log(typeof (myObj))  //object
console.log(typeof (value)) //datatype of null is object.
console.log(typeof (b))  //Symbol
console.log(typeof (myFunction))
