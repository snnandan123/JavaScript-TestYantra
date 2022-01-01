const person={
    firstName:'NANDAN',
    lastName:'S N'
}
/*
    spread operator uses (Es6 features)
    1. we can take shallow copy or deep copy
    2. copy properties of one object /array to another object/array
    3. combine/merge two or more objects or two or more arrays
    4.Add new properties and take copy
    5.Change any property and take copy
*/ 
const personCopy={...person}
const address={
    pincode:560068,
    state:'Karnataka',
    city:'banglore'
}
const personDetails={...person,...address}
console.log(personDetails);
const personC={...person,age:14}
console.log(personC);
const personD={...person,lastName:'I'}
console.log(personD);

