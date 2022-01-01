console.log('Program started');
let age=99
function agePromise(){
    return new Promise((resolve,reject)=>
    {
        console.log(age);
        if(age>=18)
        {
            resolve('Eligible for Voting')
        }else{
            reject('Not eligible for Voting')
        }
    })
}
agePromise().then((success)=>{
    console.log(success);
}).catch(err=>
    {
        console.log(err);
    })
    function validateAge() {
        age=document.getElementById('age').value
        agePromise().then((success)=>
        {
            console.log(success);
        })
    }
console.log('Program ended');
