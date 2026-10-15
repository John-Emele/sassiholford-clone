$(document).ready(() => {
    // $.ajax({
    //     method: "GET",
    //     url: "http://localhost:5000/users",

    //     success(data) {
    //         // console.log(data);
    //         $("#t-user").html(data.length);

    //     },
    //     error(err) {
    //         console.log(err);
    //     }
    // })
    let merch_id = localStorage.getItem("merchant-id");
    console.log(merch_id);

    $.ajax({
        method: "GET",
        url: `http://ecommerce.reworkstaging.name.ng/v2/users`,
        success(data) {
            console.log(data);
            console.log(data.length);
            $("#t-user").html(data.length);

            let details = "";
            data.forEach((user, index) => {
                details +=`
                 <tr class="border-b-black border-b-solid border-b-1 text-center font-medium uppercase text-gray-500 text-xs bg-gray-100">
                        <td class="p-1">${index + 1}</td>
                        <td class="p-1">${user.first_name}</td>
                        <td class="p-1">${user.last_name}</td>
                        <td class="p-1">${user.email}</td>
                        <td class="p-1">${user.phone}</td>
                        <td class="p-1">${user.password}</td>
                        
                </tr>
                `;
                $("#t-bod").html(details);
            });
        },
        error(err) {
            console.log(err);
        }


    });

    $.ajax({
        method: "GET",
        url: `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merch_id}`,
        success(data){
        console.log(data);
        $('#t-products').html(data.data.length);
        let p_data = " "
        // $.each(data, (index, products) => {
        //      p_data += `
        //     <tr class="border-b-black border-b-solid border-b-2 text-center font-medium uppercase text-xs bg-white">
        //                 <td>${products.title}</td>
        //                 <td>${products.price}</td>
        //                 <td><img src="${products.images}" alt="" class="w-10 h-10 mx-auto"></td>
        //                 <td>High Quality</td>
        //                 <td>${products.brand}</td>
        //                 <td><button class="py-1 px-1 bg-gray-200 hover:bg-gray-500 rounded-[5px] me-2">✍️</button><button class="py-1 px-1 bg-gray-200 hover:bg-gray-500 rounded-[5px]">❌</button></td>

        //      </tr>
        //     `;
        //     $("#t-bod").append(p_data);
        // });
    },
    error(err){
            console.log(err);
        },
    })

   
})


