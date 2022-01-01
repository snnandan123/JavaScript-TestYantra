//Named functions
function add(num1,num2)
{
    var sum=num1+num2
    console.log('Sum ==',sum);
}
add(10,20)
add(30,40)
console.log('------------------------------------');

function findIsEligibleForVoting(age){
    if(age>=18)
    {
        return true
    }
    else{
        return false
    }
}

function printEligibleOrNot(result){
    if(result===true)
    {
        console.log('Eligible for Voting');
    }
    else{
        console.log('Not Eligible for Voting');
    }
    
}
var result1=findIsEligibleForVoting(12)
printEligibleOrNot(result1)


var result2=findIsEligibleForVoting(34)
printEligibleOrNot(result2)


console.log("<<<<<<<<<<<<<<<Anonymous Function>>>>>>>>>>>>>>>>");
var findProduct=function(a,b){
    return a*b
}
console.log(findProduct);
var productVal=findProduct(12,3)
console.log('Product - ',productVal);

var person={
    testFunc:function(){
        console.log('test func executed');
    }
}
person.testFunc()

console.log('<<<<<<<<<<<<Self Invoked Function >>>>>>>>>>>>>>>>>>>');

(function(a,b){
    var diff=b-a
    console.log('Difference -',diff);
})(10,20)

console.log("<<<<<<<<<<<<<<<<< Arrow Function >>>>>>>>>>>>>>>>>>>");

var greet=() => {
    console.log('Greet function');
    console.log('Welcome');
}
greet()

var squareOfNumber= num =>num*num//if there is a one line automatically it will return
var result=squareOfNumber(2)
console.log('Result',result);
console.log(squareOfNumber(3));

console.log('---------------------------------------');
var calculateTotalPrice=(price,gstPer)=>{
    var totalPrice=(price*gstPer/100)+price
    return totalPrice
}
var priceVal=calculateTotalPrice(100,18)
console.log(priceVal);
