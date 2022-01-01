console.log('program started');
const myPromise=new Promise((resolve,reject)=>
{
    if(10>1)
    {
        const fetchData=[100,200,300,400,500]
        resolve(fetchData)
    }else{
        reject('Data fetch failed')
    }
})

//solution to callback hell
myPromise.then((data)=>
{
    console.log('first then',data);
    const updateData=data.map(val=>{
        return val+100
    })
return updateData
}).then((result)=>{
    console.log('second then',result);
    const filterData=result.filter(val=>val>300)
    return filterData
}).then((dataWithFilter)=>{
    console.log('third then ',dataWithFilter);
}).catch(err=>{
    console.log(err);
})
console.log('program ended');
