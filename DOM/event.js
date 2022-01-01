function testClick(){
    console.log('Test click executted');
}
function changeName(username){
    const element=document.getElementById('username')
    element.innerText=username
}
// function applyBGColor(){
//     const element=
//     document.getElementById('changeColor')
//     element.style.backgroundColor='red'
// }

// function removeBGColor(){
//     const element=
//     document.getElementById('changeColor')
//     element.style.backgroundColor='white'
// }
function removeApplyBGColor(color){
    const element=
    document.getElementById('changeColor')
    element.style.backgroundColor=color
}
function getData(){
    console.log('onkeyup');
}
function showData(){
    console.log('keydown');
}
function getData(){
    const element2 =document.getElementById('randomData')
    console.log('onkeyup',element2.value);
    document.getElementById('show').innerText=
    element.value.toUpperCase()
}
function checkBoxClick(){
    const element=document.getElementById('hobbies')
    console.log(element.checked);
}
function showData(){
    console.log('onkeydown');
}
