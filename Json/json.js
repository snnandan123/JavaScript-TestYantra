const jsObject={
    firstName:"Ajay",
    lastName:"K",
    age:17,
    isAdult:false,
    hobbies:["Cricket","Singing"],
    address:{
        pincode:560068,
        state:"Karnataka",
        city:"Banglore",
    }
}

console.log('Javascript to JSON');
const stringifiedJSON=JSON.stringify(jsObject)

console.log(stringifiedJSON);
console.log(typeof stringifiedJSON);

console.log('JSON to Javascript');

const JavascriptObject=JSON.parse(stringifiedJSON)
console.log(JavascriptObject);

fetch()
