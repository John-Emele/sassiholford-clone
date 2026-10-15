$(document).ready(() => {
   $.ajax({
    method: "GET",
    url: "http://localhost:5000/products",
    success(data){
        console.log(data);
        let product_data = " "
        $.each(data, (index, product) => {
            if(product.brand == "Sales"){
                    product_data += `
        <div>
            <div class=" h-100">
                <img id="img" src="${product.images}" alt="" class="w-full h-full object-cover">
            </div>
            <div class="flex  justify-between mt-7">
            <div>
                <h1 class="font-bold uppercase text-sm">${product.title}</h1>
                <p class="text-lg text-gray-400">£${product.price}</p>
            </div>
            </div>
        </div>`;

            $("#p-dis").append(product_data);
            }
         
        });
    },
    error (err) {
        console.log(err);
    }
   })
})