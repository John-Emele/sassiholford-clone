$(document).ready(() => {

    const user_id = localStorage.getItem("merchant-id");
    console.log(user_id);

    const params = new URLSearchParams(window.location.search);

    const productId = params.get("id");


    let box = document.getElementById("box");
    let cart_btn = document.getElementById("btn");
    let bodyy = document.getElementById("bodyy");
    let box_con = document.getElementById("box-container");
    let bag = document.getElementById("bag");

    function move() {
        // box.style.animation= "cart 2s 1 linear"
        box.classList.remove("big-box-2")
        box.classList.add("big-box");
        setTimeout(() => {
            box.classList.remove("hide");
        }, 450);

    }
    // cart_btn.addEventListener("click", move);
    // bag.addEventListener("click", move);

    function returns() {
        box.classList.remove("big-box");
        box.classList.add("big-box-2");
        setTimeout(() => {
            box.classList.add("hide");
        }, 450);

        // else{
        //     return;
        // }
    }
    bodyy.addEventListener("click", returns);

    function cart() {
        const current_user = localStorage.getItem("current-user");
        const c_u = JSON.parse(current_user);
        console.log(current_user);
        console.log(c_u);

        let my_cart = JSON.parse(localStorage.getItem("user_cart")) || [];
        console.log(my_cart);

        const pro = my_cart.find(pdt =>
            productId == pdt.product_id

        )

        if (pro) {
            alert("e don dey");
        }
        else {
            console.log("e no dey");

            let cart_data = {
                'quantity': 1,
                'user_id': c_u.id,
                'product_id': productId,
                'has_variation': 'false'
            }
            console.log(cart_data);

            let cart = JSON.parse(localStorage.getItem("user_cart")) || [];
            console.log(cart);

            cart.push(cart_data);
            //  console.log(user_cart)
            localStorage.setItem("user_cart", JSON.stringify(cart));
            console.log(cart);

            move();
            show_cart_p();
        }


        // let user_cart = [];
        // user_cart.push(cart_data);
        // $.ajax({
        //     method: "POST",
        //     url: `http://ecommerce.reworkstaging.name.ng/v2/carts`,
        //     dataType: "json",
        //     data: cart_data,
        //     success(data) {
        //         console.log(data);
        //     },
        //     error(err) {
        //         console.log(err);
        //     },
        // })


        // if(cart == null){
        //    cart = user_cart;
        // }


        // $.ajax({
        //     method: "GET",
        //     url: `http://ecommerce.reworkstaging.name.ng/v2/products/${productId}`,
        //     // dataType: "json",
        //     // data: cart_data,
        //     success(data) {
        //         let dtes = "";
        //         console.log(data);
        //         dtes += `
        //         <div class="w-[60%] h-[80%] mt-3"><img src="${data.images}" alt=""
        //                     class="w-full h-full object-cover object-center m-auto">
        //             </div>
        //             <div class="w-[40%] mt-3">
        //                 <h3 class="font-bold text-sm uppercase">${data.title}</h3>
        //                  <p class="text-gray-400 text-xs ">Size 14</p>
        //                 <p class="text-gray-400 text-sm"><span id="number">1</span> × ${data.currency}${data.price}</p>
        //                 <div class="flex gap-4">
        //                     <p data-id="${data.id}"  class="increase text-gray-600 text-xl">+</p>
        //                     <p data-id="${data.id}"  class="decrease text-gray-600 text-xl">-</p>
        //                 </div>
        //                 <p data-id="${data.id}" class="delete text-[10px] mt-8 text-gray-500">[remove]</p>
        //             </div>
        //         `
        //         $("#c-dis").html(dtes);
        //         $("#currency").html(data.currency);
        //         $("#total").html(data.price)
        //         let add = document.querySelectorAll(".increase");
        //         let sub = document.querySelectorAll(".decrease");

        //         add.forEach(btn => {
        //             btn.addEventListener("click",() => {
        //                const id = btn.dataset.id;
        //                console.log(id);
        //                cart_operation(id);
        //             })       
        //         })

        //         // cart_operation(id)
        //     },
        //     error(err) {
        //         console.log(err);
        //     },
        // })

    }
    //   let cart_btn = document.getElementById("cart-btn");
    cart_btn.addEventListener("click", cart)

    function show_cart_p() {
        let my_cart = JSON.parse(localStorage.getItem("user_cart"));
        console.log(my_cart);

        $.ajax({
            method: "GET",
            url: `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${user_id}`,

            success(data) {
                console.log(data);
                const ds = data.data;
                let dtes = "";
                ds.forEach(pct => {
                    my_cart.forEach(data => {
                        if (pct.id == data.product_id) {
                            console.log(pct);
                            console.log(data);
                            dtes += `
                <div class="item-con border-b border-b-1 border-solid border-b-gray-200 flex gap-3 items-center w-[full] px-20 ">
                <div class=" ">
                            <img src="${pct.images}" alt=""
                            class="w-40 h-40 p-5 object-cover object-center m-auto mt-5">
                    </div>
                    <div class="w-full mt-3">
                        <h3 class="font-bold text-sm uppercase">${pct.title}</h3>
                         <p class="text-gray-400 text-xs ">Size 14</p>
                        <div class="flex gap-1 items-center">
                        <p class="number text-gray-400 text-sm">1 </p>
                        <p class="text-gray-400 text-sm">X</p>
                        <p class="p-price text-gray-400 text-sm">${pct.currency}${pct.price}</p>
                        </div>
                        <div class="flex gap-4">
                            <p data-id="${data.product_id}"  class="increase cursor-pointer text-gray-600 text-xl">+</p>
                            <p data-id="${data.product_id}"  class="decrease cursor-pointer text-gray-600 text-xl">-</p>
                        </div>
                        <p data-id="${data.product_id}" class="delete text-[10px] mt-8 text-gray-500">[remove]</p>
                    </div>
                </div>`;
                            $("#item-counter").html(my_cart.length);
                            $("#c-dis").html(dtes);
                        }
                    })
                })
                cart_operation();
                update_total();
            }, error(err) {
                console.log(err);
            }
        })

        // let dtes = "";
        // my_cart.forEach(data => {
        //     console.log(data);
        //     dtes += `
        //         <div class="w-[60%] h-[80%] mt-3"><img src="${data.images}" alt=""
        //                     class="w-full h-full object-cover object-center m-auto">
        //             </div>
        //             <div class="w-[40%] mt-3">
        //                 <h3 class="font-bold text-sm uppercase">${data.title}</h3>
        //                  <p class="text-gray-400 text-xs ">Size 14</p>
        //                 <p class="text-gray-400 text-sm"><span id="number">1</span> × ${data.currency}${data.price}</p>
        //                 <div class="flex gap-4">
        //                     <p data-id="${data.id}"  class="increase text-gray-600 text-xl">+</p>
        //                     <p data-id="${data.id}"  class="decrease text-gray-600 text-xl">-</p>
        //                 </div>
        //                 <p data-id="${data.id}" class="delete text-[10px] mt-8 text-gray-500">[remove]</p>
        //             </div>`;
        // })
        // console.log(data);
        // dtes += `
        // <div class="w-[60%] h-[80%] mt-3"><img src="${data.images}" alt=""
        //             class="w-full h-full object-cover object-center m-auto">
        //     </div>
        //     <div class="w-[40%] mt-3">
        //         <h3 class="font-bold text-sm uppercase">${data.title}</h3>
        //          <p class="text-gray-400 text-xs ">Size 14</p>
        //         <p class="text-gray-400 text-sm"><span id="number">1</span> × ${data.currency}${data.price}</p>
        //         <div class="flex gap-4">
        //             <p data-id="${data.id}"  class="increase text-gray-600 text-xl">+</p>
        //             <p data-id="${data.id}"  class="decrease text-gray-600 text-xl">-</p>
        //         </div>
        //         <p data-id="${data.id}" class="delete text-[10px] mt-8 text-gray-500">[remove]</p>
        //     </div>`


    }

    function cart_operation() {
        // let cancel = document.getElementById("delete");
        let add = document.querySelectorAll(".increase");
        let sub = document.querySelectorAll(".decrease");
        let amount = document.getElementById("total");

        add.forEach(btn => {
            btn.addEventListener("click", () => {
                const btn_id = btn.dataset.id;
                console.log(btn_id);
                const item = btn.closest('.item-con');
                let qty = item.querySelector(".number");
                let value = Number(qty.innerHTML);
                value++
                qty.innerHTML = value;
                console.log(qty);
                update_total();
                // console.log(value);
                // let value_1 = value++;
                // // let new_value = value_1++;
                // quantity.innerHTML = value_1;
                // let amount_1 = amount.innerHTML;
                // let new_total = (Number(amount_1) * value_1);
                // console.log(new_total)
                // amount.innerHTML = new_total;
            });
        })
        sub.forEach(btn => {
            btn.addEventListener("click", () => {
                const btn_id = btn.dataset.id;
                console.log(btn_id);
                const item = btn.closest('.item-con');
                let qty = item.querySelector(".number");
                let value = Number(qty.innerHTML);
                value--
                qty.innerHTML = value;
                console.log(qty);
                update_total();
                // console.log(value);
                // let value_1 = value++;
                // // let new_value = value_1++;
                // quantity.innerHTML = value_1;
                // let amount_1 = amount.innerHTML;
                // let new_total = (Number(amount_1) * value_1);
                // console.log(new_total)
                // amount.innerHTML = new_total;
            });
        })


        // sub.addEventListener("click", () => {
        //     let value = quantity.innerHTML;
        //     if (value == 0) {
        //         value = 0
        //     }
        //     console.log(value)
        //     let value_1 = (Number(value) - Number(1));
        //     let new_value = value_1--;
        //     quantity.innerHTML = new_value;
        //     let amount_1 = amount.innerHTML;
        //     // let new_total = (Number(amount_1) * Number(new_value));
        //     // let new_tola_2 = (Number(new_value--))
        //     let final = Number(amount_1) - Number(1495);
        //     console.log(final)
        //     amount.innerHTML = final;
        // });




    }
    // cart_operation();
})

function update_total() {
    let total = 0;

    document.querySelectorAll(".item-con").forEach(item => {
        const price = item.querySelector(".p-price").innerText.trim();
        const normalPrice = parseFloat(String(price).replace(/[^0-9.-]+/g, ""));
        console.log(normalPrice);
        const qty = Number(item.querySelector(".number").innerText.trim());
        console.log(qty);

        total += normalPrice * qty;
        console.log(total);
    });

    document.getElementById("total").innerText = `${total}`;
}