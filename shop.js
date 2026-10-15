// let img = document.getElementById("img")


// img.addEventListener("mouseover", () => {
//     img.src = "images/dress-1-hover";
// } )



// function move(){
//     // box.style.animation= "cart 2s 1 linear"
//     if(box.className == "hide"){

//         box.className = "big-box";
//         box_con.className = "acrt";
//         // box.style.justifySelf = "flex-end";
//     }
// }
// bag.addEventListener("click", move);

$(document).ready(() => {
    const user_id = localStorage.getItem("merchant-id");
    console.log(user_id);
    let cat_id = "";
    $.ajax({
        method: "GET",
        url: `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${user_id}`,
        success(data) {
            console.log(data);
            $.each(data, (index, cat) => {
                if (cat.name.toLowerCase() == "mother-of-the-bride") {
                    cat_id = cat.id;
                    console.log(cat_id);
                    get_p_duct(cat_id);
                }
            })
        },
        error(err) {
            console.log(err);
        },

    })

    async function get_p_duct(cat_id) {
        $.ajax({
            method: "GET",
            url: `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${user_id}`,
            success(data) {
                console.log(data);
                let products = data.data;
                console.log(products);
                console.log(cat_id);

                let pdct_details = "";
                products.forEach((pdct) => {
                    if (pdct.category.id == cat_id) {
                        console.log(pdct)
                        pdct_details = `
            <div data-id="${pdct.id}" class="pdct-img h-100">
                <div class="h-100">
                    <img id="img" src="${pdct.images}" alt="" class="transition-all duration-500 p-5 w-full h-full object-center object-cover">
                </div>
                <div class="flex  justify-between mt-7">
                <div>
                    <h1 class="font-bold uppercase text-sm">${pdct.title}</h1>
                    <p class="text-lg text-gray-400">${pdct.currency}${pdct.price}</p>
                </div>
                </div>
            </div>`;
                        $("#p-dis").append(pdct_details);

                    }
                })

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
                },
        })
    }
})