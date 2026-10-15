$(document).ready(() => {
    // $('#btn').click((e) => {
    // e.preventDefault();
    // let obj = JSON.stringify({
    //     first_name: $('#f_name').val(),
    //     last_name: $('#l_name').val(),
    //     email: $('#email').val(),
    //     store_name: $('#store_name').val(),
    //     descp: $('#descp').val(),
    //     phone: $('#phone').val(),
    //     password: $('#password').val(),
    // })
    let obj = JSON.stringify({
        first_name: 'fff',
        last_name: 'ggg',
        email: 'e@gmailc.om',
        store_name: 'vv',
        descp: 'ddd',
        phone: 5645645,
        password: '685getgte',
    })
 

    fetch("http://ecommerce.reworkstaging.name.ng/v2/merchants", 
        {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: obj
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
    .catch(err=>console.log(err))
  

});