// console.log('start');
// (10==10?console.log('Equal'):console.log('NotEqual'));

//instead of writing above we can write it as below

//semicolon is mandatory before() if you are 
//writing() next line after executing any function
//or after()

console.log('start');
(10==10?console.log('Equal'):console.log('NotEqual'));
console.log('end');
console.log('----------------------------------------');
function test(){
    function inner()
    {
        console.log('Inner function');
    }
    return inner
}

//const val = test()
// console.log(val);
//val()

// console.log(test());

// Function currying

test()();

(function(){
    console.log('hello');
})()


