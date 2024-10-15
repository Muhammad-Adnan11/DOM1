//Task 4
function formSubmit(){
    let userName = document.getElementById('name').value;
let userAge = document.getElementById('age').value;
let age = Number(userAge);
    if(userName === ''){
        alert('Please Enter Name');
        return false
    }
    
    else if(!isNaN(userName)){
        alert('Please Enter Valid Name');
        return false
    }

    if(age === 0){
        alert('Please Enter Age');
        return false
    }
    else if(isNaN(age)){
        alert('Please Enter Valid Age');
        return false
    }
        alert('Form Submitted Successfully');
        return true
    
}