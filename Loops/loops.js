var numbers = [10, 20, 30, 40]
//for of loop
for (var num of numbers) {
    //debugger
    console.log(num);
}

console.log('---------------------------------');

var fruits = ['Apple', 'PineApple', 'Green Apple', 'Mango']

for (var fruit of fruits) {
    console.log(fruit);
}

console.log('<<<<<<<<<<<<<<< for in Loop >>>>>>>>>>>');
var person = {
    firstName: 'Ajith',
    lastName: 'Kumar',
    age: 56,
    gender: 'Male'
}

for (var key in person) {
    //debugger
    console.log(`${key} - ${person[key]}`);
}
//
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
var numbers = [50, 60, 70, 80]
// for(var index in numbers)
// {
//     console.log(index);
//     console.log(numbers[index]);
// }

console.log('----------for in loop with array----------------');
for (var index in numbers) {
    //debugger
    console.log(`value at index ${index}-${numbers[index]}`);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
for (var i in fruits) {
    console.log(fruits[i]);
}

console.log('-----------------------------------------------');
function test()
{
    console.log('test func started');
if (3 < 3) {
    console.log(i);
}
else {
    /*illegal break statement
    break statement can be used in loops or
    switch cases. It cannot be used in functios or 
    if else statements withour loops*/

    //break;

    console.log('break');
}
console.log('test func ended');
}
test();
console.log('---------Difference between for loops-------------------------');
var arr=[10,20,30,40,50,,,,,,,,100]
console.log(arr);
for(var i=0;i<arr.length;i++)
{
    console.log(`${i}-${arr[i]}`);
}
console.log('---------------------------------------------');
for(var index in arr){
    console.log(`${index}-${arr[index]}`);
}
console.log('----------------------------');
var arrData=[10,20,30]
arrData[3]=80
arrData['price']=700
console.log(arrData);
//ignores the elements which does not have index
for(var i=0;i<arrData.length;i++)
{
    console.log(`${i}-${arrData[i]}`);
}

console.log('-------------------------------------');
//considers the elements which does not have index
for(var i in arrData)
{
    console.log(`${i}-${arrData[i]}`);
}

console.log('-----------class Assignment----------------');
var pens=[
    {
        brand:'parker',
        color:'black',
        price:125,
        type:'ball point pen'
    },
    {
        brand:'Reynolds',
        color:'blue',
        price:10,
        type:'ball point pen'
    },
    {
        brand:'Elkos',
        color:'red',
        price:5,
        type:'gel pen'
    }
]
console.log('-----------------for loop-------------------');
//for loop if price > 5
for(var i=0;i<pens.length;i++)
{
    if(pens[i].price>5)
    {
        console.log(pens[i]);
    }
}
console.log('----------------for of loop--------------------');

//for of loop if type==='ball point pen && price>5'
for(var pen of pens){
    if(pen.price>5 && pen.type==='ball point pen')
    {
        console.log(pen);
    }
}
console.log('----------------for in loop--------------------');

//for in loop if brand length>5 && price>10
for(var index in pens){
    //debugger
    if(pens[index].brand.length>5 && pens[index].price>10)
    {
        console.log(pens[index]);
    }
}
