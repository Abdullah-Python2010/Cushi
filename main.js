const UserName = document.getElementById('Username');
const Email = document.getElementById('email');
const Password = document.getElementById('Password');
const LogIn = document.querySelector('#btn2');
const SignUp = document.querySelector('#btn1');

let Users = [];

function Register(){
    let newUser= {
        Name: UserName.value,
        email: Email.value,
        password: Password.value
    }
    Users.push()
    alert('SignUp Successful')
}

function Enter(){
    for(var i in Users){ 
        if (Users[i].Name == UserName.value){
            if(Users[i].email == Email.value){
                if(Users[i].password == Password.value){
                    alert("Welcome " + Users[i].name);
                }
            }
        }
        else{alert("Wrong Username or Password")}
    }
}

LogIn.addEventListener('click', Enter);
SignUp.addEventListener('click', Register)