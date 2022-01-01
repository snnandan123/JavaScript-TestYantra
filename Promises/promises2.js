console.log('program started');

let age=19
const validAgePromise= new Promise((resolve,reject)=>
{
    console.log(age);
    if(age >=18){
        resolve('Eligible for Voting')
    }else{
        reject('Not eligible for voting')
    }
})
validAgePromise.then((success)=>
{
    console.log(success);

}).catch(err=>
    {
        console.log(err);
    });
    console.log('program ended');