//conversion datatype
let score="33";
console.log(typeof score);
let valInNumber=Number(score);
console.log(typeof valInNumber);
let valInString=String(valInNumber);
console.log(typeof valInString);
console.log(valInString);
let age="143abc"
let convertInNumber=Number(age);
console.log(typeof convertInNumber);
console.log(convertInNumber);//NaN not a number bcz we can't convert abc as a number
//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0;
let isLoggedIn=true;
let isconvertLoggedIn=Boolean(isLoggedIn);
console.log(isconvertLoggedIn);
// 1=> true;
//0=> false ;
// ""=>false;
// "anuj"=true