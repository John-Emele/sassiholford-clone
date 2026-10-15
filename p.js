let box = document.getElementById("boxx");
let click_btn = document.getElementById("click-btn");
let del_btn = document.getElementById("del-btn");
let bd = document.getElementById("boddy");


function cartt(){
    bd.style.backgroundColor = "gray"
    box.style.animation = " cart 5s  1 "
    box.style.display = "block";
     setTimeout(() => {
         box.style.display = "flex";
        box.style.justifySelf = "flex-end"
     }, 5000);
    // box.style.position = "relative"

}
click_btn.addEventListener("click", cartt);

function runs(){
    box.style.animation = " cart2 5s 1 ";
    setTimeout(() => {
        box.style.display = "none";
        box.style.justifySelf = "none"
        bd.style.backgroundColor = "white"
    }, 2000);
        
   
    // box.style.display = "none";
    return;
    
}
del_btn.addEventListener("click", runs);