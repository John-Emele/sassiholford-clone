let user_email =document.getElementById("user-email");
let user_name = document.getElementById("user-name");
let user_password = document.getElementById("user-password");
let sign_email = document.getElementById("sign-email");
let sign_name = document.getElementById("sign-name");
let sign_password = document.getElementById("sign-password");
let log_btn = document.getElementById("log-btn");
let sign_btn = document.getElementById("sign-btn");
let complete = document.getElementById("complete");
let complete_2 = document.getElementById("complete-2");
let sign_check = false;
let user_arr = [];

function signuser(){
if(sign_name.value == ""){
        sign_name.nextElementSibling.innerHTML = "*field must not be empty!"
        sign_check = true;
    }
    else{
        sign_name.nextElementSibling.innerHTML = " ";
        sign_check = false;
    }
    if(sign_email.value == ""){
        sign_email.nextElementSibling.innerHTML = "*field must not be empty!"
        sign_check = true;
    }
    else{
        sign_email.nextElementSibling.innerHTML = " ";
        sign_check = false;
    }
     if(sign_password.value == ""){
        sign_password.nextElementSibling.innerHTML = "*field must not be empty!"
        sign_check = true;
    }
    else{
        sign_password.nextElementSibling.innerHTML = " ";
        sign_check = false;
    }

    if(sign_check == false){
        user_info = {
        name: sign_name.value,
        email: sign_email.value,
        password: sign_password.value,
     };

     let users = localStorage.getItem("API-USERS");
     if(users != null){
        user_arr = JSON.parse(users);
     }
    
    user_arr.push(user_info);
    localStorage.setItem("API-USERS", JSON.stringify(user_arr));
    complete.nextElementSibling.innerHTML = " Sign up complete✅"
    sign_name.value = ""
    sign_email.value = ""
    sign_password.value = ""
    }
 
}
sign_btn.addEventListener("click", signuser);

function loginuser(){
    let log_user = localStorage.getItem("API-USERS");
    if(log_user == null){
        user_password.nextElementSibling.innerHTML = "user does not exist";
    }
    let logged = JSON.parse(log_user);
    log_obj= {};

    for(i = 0; i < logged.length; i++){
        if(logged[i].email == user_email.value && logged[i].password == user_password.value){
            log_obj = logged[i];
        }
        else{
            log_obj = {};
        }
    }
    if(log_obj.password){
        complete_2.innerHTML = "login complete";
        localStorage.setItem("log-api", JSON.stringify(log_obj));
        setTimeout(() => {
            window.location.href = './loading.html';
        }, 2000);
        setTimeout(() => {
            window.location.href = './profile.html';
        }, 2000);
    }
    else{
        user_password.nextElementSibling.innerHTML = "incorrect email or password"
    }
}
log_btn.addEventListener("click", loginuser);