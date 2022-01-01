//document.write('Welcome to DOM session')
//if id is present it returns element else null

const element=document.getElementById('demo')
console.log(element);
element.innerText='DOM'


//it returns single element

const pElement = document.querySelector('.test')
console.log(pElement);

const tagElement=document.querySelector('h1')
console.log(tagElement);

const idElement=document.querySelector('#demo')
console.log(idElement);

// it returns array of elements if classname is present
const personElements=
document.getElementsByClassName('person')
console.log(personElements);
personElements[2].innerText='Mumbai'

for(let i=0;i<personElements.length;i++){
    if(i===0){
        personElements[i].innerText='Vijay'
    }
    else if(i===1)
    {
        personElements[i].innerText='S'
    }
    else
    {
        personElements[i].innerText='Chennai'
    }
}

console.log('----------------------------------------------------');
//it returns array of elements
//getElementsByTagName

const pElements=document.getElementsByTagName('p')
console.log(pElements);
for(let i=0;i<pElements.length;i++)
{
    console.log(pElements[i]);
    pElements[i].style.color='green'
}

console.log('-------------------------------------------------');
//
const pElements2=document.getElementsByTagName('p')
console.log(pElements2);
for(let j=0;j<pElements2.length;j++ )
{
    console.log(pElements2[j]);
    pElements2[j].style.color='blue'
    pElements2[j] 
    
}
console.log('--------------------------------------------');
const pElements3=document.querySelector('h1')
console.log(pElements3);
pElements3.style.color='red'
console.log('--------------------------------------------');
//createElement
const h2Element=document.createElement('h2')
h2Element.innerText='This is h2 element'
console.log(h2Element);
h2Element.style.color='green'
document.body.appendChild(h2Element)
console.log('-------------------------------');
const labelElements=
document.getElementsByTagName('label')
//adding style based on css file classes
//adding single class
labelElements[0].className='labelTag'
//adding multiple classes
labelElements[1].classList='labelTag labelBg'

console.log('------------------------------------------------');

const userElement=document.getElementById('user')
//inner HTML will parse the string as HTML code
userElement.innerHTML='<h1> My name is Ajith </h1>'

const userElement2=document.getElementById('user1')
//innerText will parse the string as plain text or 
//string itself
userElement2.innerText='<h1>My name is Ajith kapalappa</h1>'


//to hide the element
const hobbiesListElement=
document.getElementById('hobbieslist')
hobbiesListElement.style.display='none'

//to show the element
/* 
const hobbiesListElement=
document.getElementById('hobbieslist)
hobbiesListElement.style.display='block'
*/
