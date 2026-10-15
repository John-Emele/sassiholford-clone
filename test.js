
   
    let obj = JSON.stringify({
        first_name: 'fff',
        last_name: 'ggg',
        email: 'e@gmailc.om',
        store_name: 'vv',
        descp: 'ddd',
        phone: 5645645,
        password: '685getgte'
    })

    
    fetch("http://ecommerce.reworkstaging.name.ng/v2/merchants")
    .then(res=>res.text())
    .then(res=>{
        console.log(res)
    })


//     fetch("http://ecommerce.reworkstaging.name.ng/v2/merchants", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ /* your data */ })
// });

 
    // fetch("http://ecommerce.reworkstaging.name.ng/v2/merchants",{
    //     method: "POST",
    //     mode: "no-cors",
    //          mode: "no-cors",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: obj
    // })
    // fetch("http://ecommerce.reworkstaging.name.ng/v2/merchants", {
    //     method: "POST",
   
    // })
    // .then(res=>res.json())
    // .then(res=>{
    //     console.log(res)
    // })
    // .catch(err=>console.log(err))
 