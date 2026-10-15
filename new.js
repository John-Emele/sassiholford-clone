// $(document).ready(() => {
// let basse_Url = "http://ecommerce.reworkstaging.name.ng/v2";
// document.getElementById("sign-btn").addEventListener("click", (e) => {
//         e.preventDefault();

//         let admin_obj = {
//         first_name: $('#admin-first').val(),
//         last_name: $('#admin-last').val(),
//         email: $('#admin-email').val(),
//         phone: $('#admin-phone').val(),
//         store_name: $('#store-name').val(),
//         descp: $('#admin-description').val(),
//         icon: $('#admin-icon').val(),
//         banner: $('#admin-banner').val(),
//         password: $('#admin-password').val(), 
//     };
//         $.ajax({
//             method: "POST",
//             url: `${basse_Url}/merchants`,
//             dataType: "json",
//             data: admin_obj,
//             success: (data) => {
//                 alert("user created successfully");
//                 console.log(data);
//                 localStorage.setItem("merchant-id", JSON.stringify(data.id));
//                 window.location.href = "login.html";
//             },
//             error:(err) => {
//                 alert("Error: could not create user");
//                 console.log(err);
//             },
//         });
// });
     
// })

$(document).ready(() => {
  const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

  let merchantbtn = document.getElementById("sign-btn");

  merchantbtn.addEventListener("click", function (e) {
    e.preventDefault();

    let first_name = document.getElementById("admin-first").value.trim();
    let last_name = document.getElementById("admin-last").value.trim();
    let email = document.getElementById("admin-email").value.trim();
    let phone = document.getElementById("admin-phone").value.trim();
    let store_name = document.getElementById("store-name").value.trim();
    let descp = document.getElementById("admin-description").value.trim();
    let icon = document.getElementById("admin-icon").value.trim();
    let banner = document.getElementById("admin-banner").value.trim();
    let password = document.getElementById("admin-password").value.trim();

    let regcheck = false;

    // Form validation
    if (!first_name) {
      document.getElementById("first-error").innerText = "First name is required";
      regcheck = true;
    }
    if (!last_name) {
      document.getElementById("last-error").innerText = "Last name is required";
      regcheck = true;
    }
    if (!email.includes("@")) {
      document.getElementById("email-error").innerText = "Invalid email address";
      regcheck = true;
    }
    if (!phone) {
      document.getElementById("phone-error").innerText = "Phone number is required";
      regcheck = true;
    }
    if (!store_name) {
      document.getElementById("store-error").innerText = "Store name is required";
      regcheck = true;
    }
    if (!descp) {
      document.getElementById("descp-error").innerText = "Description is required";
      regcheck = true;
    }
    if (password.length < 6) {
      document.getElementById("password-error").innerText = "Password must be at least 6 characters";
      regcheck = true;
    }

    if (regcheck) return;

    let form_content = {
      first_name,
      last_name,
      email,
      phone,
      store_name,
      descp,
      icon,
      banner,
      password,
    };

    $.ajax({
      method: "POST",
      url: `${BASE_URL}/merchants`,
      dataType: "json",
      data: form_content,
      success: (data) => {
        alert("Merchant created successfully");
        console.log(data);
        localStorage.setItem("merchant_id", data.id);
        if (data.name) localStorage.setItem("merchant_name", data.name);
        window.location.href = "../login.html";
      },
      error: (err) => {
        alert("Error: Could not create merchant");
        console.log(err);
      },
    });
  });

});