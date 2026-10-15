$(document).ready(() => {

    let login_email = document.getElementById("login-email");
    let login_password = document.getElementById("login-password");
    let login_btn = document.getElementById("login-btn");
    let form_check = true;


    async function login_user() {
        if (login_email.value == "") {
            $("#email-error").html("field must not be empty");
            form_check = false;
        }
        else {
            form_check = true;
        }
        if (login_password.value == "") {
            $("#password-error").html("field must not be empty");
            form_check = false;
        }
        else {
            form_check = true;
        }

        if (form_check == true) {
            let login_data = {
                email: $("#login-email").val().trim(),
                password: $("#login-password").val().trim(),
            }
            $.ajax({
                method: "POST",
                url: "http://ecommerce.reworkstaging.name.ng/v2/users/login",
                dataType: "json",
                data: login_data,
                success: (data) => {
                    console.log(data);
                    console.log(data.id)
                    if (data.id) {
                        let login_data = {
                            id:data.id,
                            email: $("#login-email").val().trim(),
                            password: $("#login-password").val().trim(),
                        }
                        window.location.href = "index.html";
                        localStorage.setItem("current-user", JSON.stringify(login_data));
                    }
                    else {
                        alert("invalid credentials");
                    }

                },
                error: (err) => {
                    console.log(err);
                }

            })
        }
        else {
            alert("Error: could not login user");
            // console.log(err);  
        }
    }
    login_btn.addEventListener("click", login_user);

});