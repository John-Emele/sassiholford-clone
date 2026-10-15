let user = document.getElementById("user-info");
let user_2 = document.getElementById("user-info-2");
let log_out = document.getElementById("exit");

let pro_user = localStorage.getItem("log-api");
let users = JSON.parse(pro_user);
console.log(users.name)

user.innerHTML =  users.name ;
user_2.innerHTML = users.name;

log_out.addEventListener("click", () => {
    users = " ";
    console.log(users);
    localStorage.setItem("log-api", JSON.stringify(users));
}) 