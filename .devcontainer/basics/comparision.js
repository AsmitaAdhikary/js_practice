/*
console.log(2>1)
console.log(5<=1)
console.log(3!=1)
*/

/*
console.log("2"> 1); //o/p-> true
//TypeScript not allow this
//two differrent data type can not be compared
//But here the string will be converted to a number 
console.log("02">1);
*/

/*
console.log(null==0);//o/p=false ;because null is not 0

console.log(null<0) //false
console.log(null<=0) //true
console.log(null>0)  //false

//the reason is that an equality check (==) and comparisions > , < , >= ,<= work differently
//comparisions convert null to a number treating it as 0
//that's why null<=0  true and null<0 false
*/

/*
//for undefined in all cases value is false
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined<=0);
*/

// === is called strictly checked, checked the value plus datatypes
console.log("2"===2) //false ,checked the datatype
console.log("2"==2) //true, beacuse conversion is happenning

console.log("2" > true) //string+boolean true=1
console.log(true == "1") 