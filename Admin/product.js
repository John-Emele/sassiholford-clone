$(document).ready(() => {
    let merch_id = localStorage.getItem("merchant-id");
    console.log(merch_id);
    $.ajax({
        method: "GET",
        url: `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merch_id}`,
        success(data) {
            console.log(data);
            const p_length = data.data.length;
            const new_data = data.data
            console.log(data.data)
            $('#t-product').html(p_length);
            let product_data = ""
            $.each(new_data, (index, pdct) => {
                product_data += `
        <div class="">
            <div class="mt-3 h-80 shadow-lg">
                <img id="img" src="${pdct.images}" alt="" class="w-full h-full">
            </div>
            <div class="flex justify-between items-center mt-7">
            <div>
                <h1 class="font-bold uppercase text-sm">${pdct.title}</h1>
                <p class="text-lg text-gray-400">${pdct.currency}${pdct.price}</p>
            </div>
            </div>
        </div>`;

                $("#t-bod").html(product_data);
                // $("#t-con").append($("#t-bod"));
            });
        },
        error(err) {
            alert("Error: could not load product");
            console.log(err);
        },
    });

})
