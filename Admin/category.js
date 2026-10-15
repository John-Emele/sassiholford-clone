$(document).ready(() => {
    let user_id = localStorage.getItem("merchant-id");
    console.log(user_id);
   $.ajax({
    method: "GET",
    url: `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${user_id}`,
    success(data){
        console.log(data);
        let cat_data = "";
        $.each(data, (index, cat) => {
             cat_data += `
             <div class="w-[100%] mx-auto">
                    <div class="w-full h-50  mx-auto ">
                        <img src="${cat.image}" alt=""
                            class="h-full w-full object-cover object-center rounded-[10px] shadow-lg shadow-gray-300">
                    </div>
                
                    <p class="text-center text-black font-bold text-xs uppercase mt-2">${cat.name}</p>
                  
                </div>
             `;
            $("#cat-section").html(cat_data);
        });
    },
    error(err){
        console.log(err);
    }
   });
    
//    function delete_cat{}

})