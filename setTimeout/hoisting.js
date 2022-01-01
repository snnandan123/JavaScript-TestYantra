console.log('a - ',a);  //undefined
var a=10
var b=30//Global variable

console.log('b outside function - ',b);

function test(){
    //Variable Hoisting inside function
    //local varibles will be given first preference
    //if the variable is not declared locally JS engine
    //will search the variable in global scope
    //if the variable is declared locally JS engine 
    //will not search the variable in global scope
    console.log('b inside function - ',b);
    var b=20;
    console.log('a inside function - ',a);
}
test();