var hobbies=['Sleeping','Coding','Trekking','Bird Watchng']
console.log('------------------- Push ----------------------');
var hobbiesLength=hobbies.push('Reading')
console.log('Hobbies afer push ', hobbies);
console.log('hobbies lenght',hobbiesLength);

console.log('hobbies ', hobbies.push('Cooking'));

console.log(hobbies);
console.log('-------------POP--------------------------------');
var deletedElement=hobbies.pop();
console.log('hobbies after pop ',hobbies);
console.log('deletedElement ',deletedElement);

//Function / Method

// 1. Parameters
// 2. What it returns
// 3. Functionality of the function/method

//push
// 1. any primitive or reference type 
// 2. length of the array
// 3. adds the element after the last index

console.log('----------------------for Each---------------------');
hobbies.forEach(function(value,index,arr)
{
    console.log(`${index}-${value}`);
}
)

console.log('----------------------------------------------------');
//Add element at start of the array
const lenOfHobbies=hobbies.unshift('Gaming')
console.log('hobbies after unshift',hobbies);
console.log('hobbies length after unshift',lenOfHobbies);

console.log('-----------------------------------------------------');
//remove the element at start of the array
const deletedHobby=hobbies.shift()
console.log('hobbies after shift',hobbies);
console.log('deleted hobby after shift',deletedHobby);

//Function / method

console.log(`-----------------------------------------------------`);
console.log('type of hobbies',typeof(hobbies));

//isArray returns true is its array else returns false

const isHobbiesArray=Array.isArray(hobbies)
console.log('isHobbiesArray',isHobbiesArray);

console.log(`-------------------------------------------------------`);
console.log(hobbies);
//checks whether element is present or not ,
//if present returns true else returns false

const isCodingPresent=hobbies.includes('Coding')
console.log('isCodingPresent',isCodingPresent);

//checks whether element is present or not,
//if present returns the index of element else returns -1

const indexOfReading=hobbies.indexOf('Reading')
console.log('Index of Reading',indexOfReading);

console.log('<><><><><>Splice Method<><><><><>');
//splice method
const numbers =[10,20,30,40,50]
const deletedElements=numbers.splice(2,2,60,70,80)
console.log('deleted Elements ',deletedElements);//30,40
console.log('numbers ',numbers);//10,20,60,70,80,50
console.log('--------------------------------------------');
//if we want to only add elements without deleting
//pass delete count as 0(second parameter)
const deletedElements1=numbers.splice(1,0,100,110)
console.log('deletdElements1',deletedElements1);
console.log('numbers ',numbers);

console.log('<><><><><><><<><>Slice Method<><><><><><><>><><');
const nums=[10,20,30,40,50]
const deletedNums=nums.slice(1,3)
console.log('deletedNums ',deletedNums);    //20,30
console.log('nums',nums);   //10,20,30,40,50

//Shallowcopy of array
const numsCopy=nums.slice(0)
console.log('numsCopy',numsCopy);//10,20,30,40,50
console.log('nums',nums);//10,20,30,40,50
nums[0]=1000
console.log(nums[0]);   //1000
console.log(numsCopy[0]);   //10

//copy (address is copied)
const n=[10,20]
//copy (address is copied)
//changing n will also change n1
const n1=n
n[0]=90

console.log(n[0]);  //90
console.log(n1[0]); //90

console.log('----------------------------------');
const movies=['Spiderman','Batman','Atman','IronMan']
//shallow copy using spread operator for array
const moviesCopy=[...movies]
movies[0]='Shaktiman'
console.log(movies[0]); //Shaktiman
console.log(moviesCopy[0]);//Spiderman


console.log('---------< Map method() >---------');
const numsArr =[100,200,300,400,500]
//const numsArrCopy=[]
//for(let i=0;i<numArr.length;i++){
//     numsArray.push(numsArray[i]+10)
// }
// console.log(numsArrCopy);

const newNumsArr = numsArr.map((value,index,arr)=>{
    return value+10
})
console.log(numsArr);   //100,200,300,400,500
console.log(newNumsArr);    //110,210,310,410,510

console.log('-----------< filter() >---------');

const ageArr=[45,56,9,89,10,5]

const filteredAges=ageArr.filter((value)=>{
    if(value>=18)
    {
        return true
    }
    else
    {
        return false
    }
})
console.log(ageArr);
console.log(filteredAges);

console.log('-------<< filter () also can be written as >>-----');
const filteredAges2=ageArr.filter(value => value >=18)
console.log(filteredAges2);

console.log('---------------< Pro >-------------------');

const books=[
    {
        title:'How to win Friends',
        price:170,
        author:'Dale Carnegie'
    },
    {
        title:'Indian Constitution',
        price:790,
        author:'Laxmikanth'
    },
    {
        title:'WIngs of fire',
        price:270,
        author:'APJ Abdul Khalam'
    }
]
const booksWithGst=books.map(book=>{
    book.price=book.price*0.18+book.price
    return book
})
console.log(booksWithGst);
console.log(books);

console.log('---------------------------------------');

console.log('--------deep copy using spread operator-----------');
const booksWithGstDeepCopy=books.map(book=>{
    const b={...book}
    b.price=b.price*0.18+b.price
    return b
})

console.log(booksWithGstDeepCopy);
console.log(books);

console.log('------------------------------------------');

const products=[
    {
        productName:'Lipstick',
        price:999,
        brand:'Maybeline'
    },
    {
        productName:'eyeLiner',
        price:500,
        brand:'Lakme'
    },
    {
        productName:'Trimmer',
        price:1000,
        brand:'Philips'
    },
    {
        productName:'Beardo Oil',
        price:250,
        brand:'Beardo'
    }
]
const productsWithGst=products.map(product => {
    const productCopy={...product}
    productCopy.price=productCopy.price*0.03+productCopy.price
    return productCopy
})

console.log(productsWithGst);
console.log(products);

const filteredprice=products.filter(product=>{
    return product.price>500
})
console.log(filteredprice);

//reference copy
// const booksCopy = books
// console.log(books===booksCopy);

// const booksCopy=[...books]
// console.log(books===booksCopy); false
// console.log(books[0]===booksCopy[0]); true

// books[0].price=100
// console.log(books[0].price);     //100
//console.log(booksCopy[0].price);    //100

// const booksCopy=books.map(book=>{
//     return{...book}
// })

// console.log(booksCopy);
// console.log(books[0]===booksCopy[0]);   //false

//books[0].price=100
// console.log(books[0].price);        //100
// console.log(booksCopy[0].price);    //90

console.log('----------------------------------------------------------');
const myArr=[100,200,300,400,500]
const str=myArr.join('-')
console.log('str',str);

const fruits=['Apple','PineApple','Custard Apple','Green Apple']
//Apple,PineApple,Custard APple,Green Apple
const fruitstr1=fruits.join(',')
const fruitstr2=fruits.join()   //Prints the default value as ,(comma)
console.log('FruitStr ',fruitstr1);
console.log('FruitStr ',fruitstr2);

