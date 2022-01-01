const person={
    firstName:'Ajith',
    lastaName:'K',
    age:10,
    hobbies:['Cricket','Singing'],
    address:{
        state:'Karnataka',
        pincode:'560068',
        city:'Banglore'
    }
}
//const firstName =person.firstName
//const lastName=person.lastName
//const age=person.age

//Object Destructing (ES6 feature)

const {firstName,lastName}=person
console.log('First Name',firstName);
console.log('Last Name',lastName);

//multi level destructure

const {hobbies,address:{state,city}}=person
console.log('hobbies',hobbies);
console.log('state',state);
console.log('city',city);

//alias names
const {firstName:fname,lastName:lname}=person
console.log(fname);
console.log(lname);

function calculateTotalPrice({gst,price}){
    console.log('gst',gst);
    console.log('price',price);
    return price+(price*(gst/100))
}
const product={
    price:100,
    gst:3,
    productName:'Bag',
    mfgYear:2021,
    moreDetails:{
        brand:'Wildcraft',
        color:'blue'
    }
}
calculateTotalPrice(product)

//Array destructring

console.log('---------------< Array destructuring >--------------');
const fruits=['Apple','PineApple','Orange','Banana']

//const fruit1=fruits[0]
//const fruit2=fruits[1]

//Array destructing
const [fruit1,fruit2]=fruits
console.log(fruit1);
console.log(fruit2);

//Here you can skip the in Between elements
const [fruits1,fruit2,,fruits3]
console.log('-----------------------------------------------------');
