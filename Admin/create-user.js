$(document).ready(()=> {
async function create_user(){
     if($('#user-f-name').val() == ""){
         $("#user-f-name").closest("span").html("Field must not be empty");
        form_check= true
    }
    else{
           $("#user-f-name").closest("span").html("");
        form_check = false;
    }
         if($('#user-l-name').val() == ""){
         $("#user-l-name").closest("span").html("Field must not be empty");
        form_check= true
    }
    else{
           $("#user-l-name").closest("span").html("");
        form_check = false;
    }
     if($('#user-email').val() == ""){
         $("#user-email").closest("span").html("Field must not be empty");
        form_check= true
    }
    else{
           $("user-email").closest("span").html("");
        form_check = false;
    }
    if($('#user-phone').val() == ""){
         $("#user-phone").closest("span").html("Field must not be empty");
        form_check= true
    }
    else{
           $("#user-phone").closest("span").html("");
        form_check = false;
    }
    if($('#user-password').val() == ""){
      $("#user-password").closest("span").html("Field must not be empty");
        form_check= true
    }
    else{
           $("#user-password").closest("span").html("");
        form_check = false;
    }
  if(form_check == false){

      let user_obj = {
       first_name: $("#user-f-name").val().charAt(0).toUpperCase() + $("#user-f-name").val().slice(1).toLowerCase(),
        last_name: $("#user-l-name").val().charAt(0).toUpperCase() + $("#user-l-name").val().slice(1).toLowerCase(),
        email:  $("#user-email").val(),
        phone:  $("#user-phone").val(),
        password: $("#user-password").val(),
    }
    console.log(user_obj);

    $.ajax({
            method: "POST",
            url: "http://ecommerce.reworkstaging.name.ng/v2/users",
            dataType: "json",
            data: user_obj,
            success: (data) => {
                alert("user created successfully");
                console.log(data);
                let user_arr =[];
                let users = localStorage.getItem("my_users");
                if(users != null){
                    user_arr = JSON.parse(users);
                }
                user_arr.push(data);
                localStorage.setItem("my_users", JSON.stringify(user_arr));
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
$("#user-btn").click(create_user);

})