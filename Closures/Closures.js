console.log('----------------------< Closures >-----------------------');

function outer() {
    let count = 0
    function inner() {
        console.log('inner func');
        count += 1
        console.log('count ', count);
    }
    return inner
}
const innerFunc = outer()
innerFunc()
innerFunc()
// innerFunc()
// innerFunc()
// innerFunc()
// innerFunc()
// innerFunc()
// innerFunc()
// innerFunc()

console.log('-----------------------------------------------------------------');

//WHat is the use of closure? why we use closure?
//1. to preserve the values
//2. for data privacy

function increaseCounter() {
    let counter = 0
    function counterUpdate() {
        counter += 1
        console.log(counter);
        return counter
    }
    return counterUpdate

}
const counterIncrease = increaseCounter()
counterIncrease()
counterIncrease()
counterIncrease()
counterIncrease()

//self invoked function will be executed only once
//hence counter cannot be reinitialized to 0 again
//only counterUpdate function will be able to change the 
//counter variable value
console.log('------------------------------------------------------------');

const counterInc = (function () {
    let counter = 0
    function counterUpdate() {
        counter += 1
        console.log(counter);
        return counter
    }
    return counterUpdate
})()
counterInc()
counterInc()
counterInc()
counterInc()
counterInc()
counterInc()
counterInc()
counterInc()


