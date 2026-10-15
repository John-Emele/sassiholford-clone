$(document).ready(() => {

    const user_id = localStorage.getItem("merchant-id");
    console.log(user_id);

    $.ajax({
        method: "GET",
        url: `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${user_id}`,
        success(data) {
            console.log(data);
            let product_data = " "
            $.each(data.data, (index, product) => {
                product_data += `
        <div data-id="${product.id}" class="h-100 pdct-img">
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

                $("#p-dis").html(product_data);
            });

               const p_img = document.querySelectorAll(".pdct-img");

            p_img.forEach(pdt => {
               pdt.addEventListener("click", () => {
                  const p_id = pdt.dataset.id;
                  console.log(p_id);

                  window.location.href = `product.html?id=${p_id}`
            });
        });
        },
        error(err) {
            console.log(err);
        }
    })
})