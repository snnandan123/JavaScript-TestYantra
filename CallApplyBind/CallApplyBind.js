const person={
    firstName:'Ajay',
    lastName:'G',
    getFullName:function(middleName){
        console.log(this);
        return `${this.firstName} ${middleName} ${this.lastName}`
    }
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName('Kumar'));

const john={
    firstName:'John',
    lastName:'P'
}

console.log(john.firstName);
console.log(john.lastName);

console.log('----------------------------------------------');

//this will point to the object passes as first 
// parameter to the call method 
//Ex, below - this will point to jhon object instead of person object

const johnFullName=person.getFullName.call(john,'Abraham')
console.log('Full name',johnFullName);

const fullName =
person.getFullName.apply(john,['Abraham'])
console.log(fullName);
console.log('------------------------------------------------');

console.log('----------------------< bind function >-----------------------');
const teacher={
    firstName:'Ajith',
    lastName:'K',
    getFullName:function(age,subjects){
        console.log(this);
        console.log('age',age);
        console.log('subjects',subjects);
        return `${this.firstName} ${this.lastName}`
    }
}
const guru={
    firstName:'Guru',
    lastName:'L'
}
/*create a copy of the getFullName and  it returns that
     function and this will be pointing 
    to the object passed as first parameter */
    const getFullNameFunc=teacher.getFullName.bind(guru,10)
    getFullNameFunc(['English'])
    getFullNameFunc(['English','Kannada'])
    getFullNameFunc(['English','Kannada'])

    console.log('---------------------------------------------------');
    