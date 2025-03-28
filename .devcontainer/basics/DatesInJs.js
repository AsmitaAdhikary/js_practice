//let num=new Number()
//console.log(num)

//date -> object

/*
let myDate=new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
*/

//type
//console.log(typeof myDate) //OBJECT

//let myCreatedDate=new Date(2025,0,7);//months start from 0
//console.log(myCreatedDate.toDateString())

/*
let myCreatedDate=new Date(2025,11,7,5,4);
console.log(myCreatedDate.toLocaleString())
*/

/*
let newDate=new Date("09-14-2025") //(MM-DD-YY) or(YY-MM-DD)
//console.log(newDate)

let myTimeStamp=Date.now()
console.log(myTimeStamp); //millisecond value

console.log(newDate.getTime()); //millisecond value

//convert millisecond value to second
console.log(Date.now()) //millisecond
console.log(Math.floor(Date.now()/1000)); //to avoid the decimal value we added Math.floor

*/

let date1=new Date();
console.log(date1);
console.log(date1.getMonth()); //months start from=0
console.log(date1.getMonth()+1);
console.log(date1.getDay()); //start from monday

console.log(`the day no is ${date1.getDay()}:monday`)

date1.toLocaleString('default',{
    weekday:"long",
    timezone:""
})
console.log(date1.weekday)

