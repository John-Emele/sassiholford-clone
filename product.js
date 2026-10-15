
$(document).ready(() => {
    const params = new URLSearchParams(window.location.search);

    const productId = params.get("id");

    const user_id = localStorage.getItem("merchant-id");
    console.log(user_id);
    console.log(productId);
    $.ajax({
        method: 'GET',
        url: `http://ecommerce.reworkstaging.name.ng/v2/products/${productId}`,
        success(data) {
            console.log(data);
            let current_pdct = data;
            let cat_id = current_pdct.category.id;
            $("#pdct-name").html(current_pdct.title);
            $("#pdct-price").html(current_pdct.currency + current_pdct.price);
            $("#pdct-descp").html(current_pdct.descp);
            // $("#pdct-name").html(current_pdct.title);
            slider(current_pdct.images)
            others(cat_id);
        },
        error(err) {
            console.log(err);
        }
    })

    function slider(image) {
        let next_btn = document.getElementById("next-btn");
        let back_btn = document.getElementById("back-btn");
        // let images = ["images/dress-11.jpg", "images/dress-12-back-view.jpg", "images/dress-12-close-up-view.jpg", "images/dress-11-hover.jpg", "images/dress-11-back-hover.jpg"];
        let index = 0
        let slide_img = document.getElementById("slider-img");
        slide_img.src = image[index];
        next_btn.addEventListener("click", () => {
            if (index == image.length - 1) {
                index = 0;
                next_btn.src = "images/upload.png";
                back_btn.src = "images/chevron (1).png";
                return;
                // slide_img.src = images[index];
            }
            else {
                index += 1;
                slide_img.src = image[index];
            }
            console.log(image[index]);
        });
        back_btn.addEventListener("click", () => {
            if (index == 0) {
                index = image.length - 1
                next_btn.src = "images/chevron.png";
            }
            if (index == image.length - 1) {
                back_btn.src = "images/upload (1).png";
            }
            index--;
            slide_img.src = image[index];
        });

    }

    async function others(cat_id) {
        $.ajax({
            method: "GET",
            url: `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${user_id}`,
            success(data) {
                console.log(data);
                let dets = "";
                $.each(data.data, (index, pdt) => {
                    if (pdt.category.id == cat_id && pdt.id != productId) {
                        dets += `
                <a href="product.html?id=${pdt.id}">
                   <div>
                    <div class="reserve">
                        <img src="${pdt.images}" alt=""
                            class="w-full h-full object-cover transition-all duration-500">
                    </div>
                    <div class="flex  justify-between">
                        <div class="reserve">
                            <h1 class="font-bold uppercase text-sm">${pdt.title}</h1>
                            <p class="text-lg text-gray-400">${pdt.currency}${pdt.price}</p>
                        </div>
                    </div>
                </div>
                </a>
                `;
                        $("#other-dis").html(dets);
                    }

                })
            },
            error(err) {
                console.log(err);
            }
        })

    }
    // slider();
})

