// Date: 21/12/2021

console.log('App file');

var person={
    firstName: 'Allu Arjun',
    lastName: 'Arvind',
    age: 39,
    gender: 'Male',
    isMarried: true,
    getFullName: function(){
        return this.firstName+' '+this.lastName
    }
}
console.log('Person ',person);

var fName = person.firstName
console.log('First Name -',fName);

var lName=person.lastName;
console.log('Last Name -',lName);

var pAge=person.age
console.log('Age is -',pAge);

var pGender=person.gender;
console.log('Gender -',pGender);

var pIsMarried=person.isMarried;
console.log('Is Married -',pIsMarried);

var fullName = person.getFullName();
console.log('Full Name -',fullName);

console.log('---------------------------------------------');

var marker ={
    color: 'black',
    height: '10cm',
    'pri ce':25
}

//Another way of accessing the properties of objects

console.log(marker['pri ce']);

console.log(person['getFullName']());

console.log('-----------------------------------------------');