// window object (BOM) (global object)
console.log(window);
//details about history of the application \
//(back() & forward())
console.log(window.history)
//details about the url
//to get the url details or modify the url details
console.log(window.location);
//document represents the web page
console.log(window.document);
//geolocation of the system

console.log(window.navigator);
console.log('--------------------------------------------');
console.log(history);
console.log(location);
console.log(document);

console.log('--------------------------------------------');

// window.alert('Hi')
// alert('Welcome')

// const isAdult = confirm('Are you adult ?')
// console.log('isAdult',isAdult);

// const age=prompt('What is your age ?')
// console.log('Age',age);

window.console.log('I belong to window object')
console.log('-----------------------------------------------');

//global level this is equal to window object

console.log('-----------------------------------------------------------');

//this will always point to the current object 
console.log(this);
console.log(window);
console.log(this===window);
console.log('--------------------------------------->>>>>>>>>>>>>>>');
const person ={
    firstName:'Ajith',
    lastName:'K',
    getFullName:function(){
        //this is person object

    }
}
person.getFullName()
function greet(){
    //this is equal to window object
    //all the global properties functions
    //belong to window object
    // (greet will be invoked using window reference)

    console.log('this inside greet - ',this);
    console.log('greet function ');

}
window.greet()
greet()
console.log('------------------------------------------------');
const myObj={
    getData:function(){
        function test(){
            //this is equal to window object
            //because test() is not invoked by
            //any object reference

            console.log('this inside test func',this);
            console.log('test func');
        }
        test()
        return 100
    }
}
myObj.getData()
console.log('------------------------------------------------------------');
const myObj1={
    firstName:'Vijay',
    lastName:'S',
    getName:function(){
        const test = ()=>{
            //Arrow function will not have its own
            //this. this will refer to its parent
            //execution context 
            console.log('This inside test',this);
            console.log('test func');
        }
        test()
        return `${this.firstName} ${this.lastName}`
    }

}
myObj1.getName()
console.log('----------------------------------------------------------');
const myObj1={
getResult :()=>{
    //this inside getResult - window
    //refers to its parent context
    console.log('getResult',this);
},
getName: function()
    {
    const test=() =>{
        //Arrow 

        console.log('this inside test',this);
        console.log('test func');
    }
    test()
    return `${this.firstName} ${this.lastName}`

    }

}


/*
    1. this in global -window
    2. this in named function which is declared in global level - window
    3. this in named function which is invoked using object refernece - current object
    4. this in arrow function which is invoked using object reference - parent context object
    5. A named function decalred inside function which is invoked using object reference -
        window object
    6. An arrow function declared inside a function which is invoked using object reference
        - parent context object
*/