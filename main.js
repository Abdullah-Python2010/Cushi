const Email = document.getElementById('email');
const Password = document.getElementById('Password');
const Confirm = document.getElementById('Password2');
const SignUp = document.querySelector('#btn1');

let Users = [];

function Register(){
    let newUser= {
        email: Email.value,
        password: Password.value
    }
    if(Password.value === Confirm.value && Password.length >= 8){
        Users.push(newUser)
        alert('Sign Up Succesful')
    }
    else{
        delete newUser;
        alert("Something Wrong with Your Password")
    }
}


SignUp.addEventListener('click', Register)