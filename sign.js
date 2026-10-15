$(document).ready(()=> {
let admin_firstname = document.getElementById("admin-first");
let admin_last = document.getElementById("admin-last");
let admin_email = document.getElementById("admin-email");
let store_name = document.getElementById("store-name");
let admin_des = document.getElementById("admin-description");
let admin_icon = document.getElementById("admin-icon");
let admin_banner = document.getElementById("admin-banner");
let admin_number = document.getElementById("admin-phone");
let admin_password = document.getElementById("admin-password");
let sign_btn = document.getElementById("sign-btn");
let form_check = false;


async function create_merchant(){
    if(admin_firstname.value == ""){
        admin_firstname.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        admin_firstname.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
    if(admin_last.value == ""){
    admin_last.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        admin_last.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }

    if(admin_email.value == ""){
        admin_email.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        admin_email.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
    if(store_name.value == ""){
        store_name.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        store_name.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
     if(admin_des.value == ""){
        admin_des.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        admin_des.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
     if(admin_icon.value == ""){
        admin_icon.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        admin_icon.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
     if(admin_banner.value == ""){
        admin_banner.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
       admin_banner.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
     if(admin_number.value == ""){
        admin_number.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        admin_number.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
     if(admin_password.value == ""){
        admin_password.parentElement.querySelector("span").innerHTML = "Field must not be empty"
        form_check= true
    }
    else{
        admin_password.parentElement.querySelector("span").innerHTML = "";
        form_check = false;
    }
  if(form_check == false){
      let admin_obj = {
        first_name: admin_firstname.value.trim().charAt(0).toUpperCase() + admin_firstname.value.trim().slice(1).toLowerCase() ,
        last_name: admin_last.value.trim().charAt(0).toUpperCase() + admin_last.value.trim().slice(1).toLowerCase(),
        email: admin_email.value.trim(),
        phone: admin_number.value.trim(),
        store_name: store_name.value.trim(),
        descp: admin_des.value.trim(),
        icon: admin_icon.value.trim(),
        banner: admin_banner.value.trim(),
        password: admin_password.value.trim(), 
    }
    // console.log(admin_obj);

    $.ajax({
            method: "POST",
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants",
            dataType: "json",
            data: admin_obj,
            success: (data) => {
                alert("user created successfully");
                console.log(data);
                localStorage.setItem("merchant-id", data.id);
                // window.location.href = "Admin/login.html";
            },
            error(err){
                alert("Error: could not create user");
                console.log(err);
            },
        });
   
//    try{
//     let resp = await fetch('',
//         {method:"POST", body: JSON.stringify(admin_obj)});

//     let data = await resp.json();
//     console.log(data);
//    }

//    catch (err){
//     console.log(err);
//    }
  }
}
sign_btn.addEventListener("click", create_merchant);

})