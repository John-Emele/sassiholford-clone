

$(document).ready(() => {

    let form_check = false;
    let Cat_id = "";

    async function get_category() {
        let user_id = localStorage.getItem("merchant-id");
        console.log(user_id);

        $.ajax({
            method: "GET",
            url: `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${user_id}`,
            success(data) {
                console.log(data);
                let cat_name = "";
                $.each(data, (index, cat) => {
                    console.log(cat);
                    cat_name += `
                <option value="${cat.id}">${cat.name}</option>
                `;
                    $("#pdct-category").html(cat_name);
                });
            },
            error(err) {
                console.log(err);
            }
        });
    }
    get_category();

    async function create_product() {
        if ($('#pdct-name').val() == "") {
            $("#pdct-name").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-name").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-image').val() == "") {
            $("#pdct-image").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-image").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-price').val() == "") {
            $("#pdct-price").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-price").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-brand').val() == "") {
            $("#pdct-brand").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-brand").closest("span").html("");
            form_check = false;
        }


        if ($('#pdct-has-discount').val() == "") {
            $("#pdct-has-discount").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-has-discount").closest("span").html("");
            form_check = false;
        }

        if ($('#pdct-discount').val() == "") {
            $("#pdct-discount").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-discount").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-min-q').val() == "") {
            $("#pdct-min-q").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-min-q").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-max-q').val() == "") {
            $("#pdct-max-q").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-max-q").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-q').val() == "") {
            $("#pdct-q").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-q").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-descp').val() == "") {
            $("#pdct-descp").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-descp").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-category').val() == "") {
            $("#pdct-category").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-category").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-variation').val() == "") {
            $("#pdct-variation").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-variation").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-color').val() == "") {
            $("#pdct-color").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-color").closest("span").html("");
            form_check = false;
        }
        if ($('#pdct-refund').val() == "") {
            $("#pdct-refund").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#pdct-refund").closest("span").html("");
            form_check = false;
        }
        if ($('#shipment').val() == "") {
            $("#shipment").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#shipment").closest("span").html("");
            form_check = false;
        }
        if ($('#ship-loc').val() == "") {
            $("#ship-loc").closest("span").html("Field must not be empty");
            form_check = true
        }
        else {
            $("#ship-loc").closest("span").html("");
            form_check = false;
        }
        if (form_check == false) {

            // let variation = [
            //     {
            //         "type": "color",
            //         "text": "color",
            //         "content": [
            //             {
            //                 "display": [
            //                     {
            //                         "type": "image",
            //                         "value": $('#pdct-image').val(),
            //                     }
            //                 ],
            //                 "text": $('pdct-color').val(),
            //             },
            //         ]
            //     }
            // ]
            let user_id = localStorage.getItem("merchant-id");
            console.log(user_id);

            let product_obj = {
                title: $("#pdct-name").val(),
                descp: $("#pdct-descp").val(),
                price: $("#pdct-price").val(),
                brand: $("#pdct-brand").val(),
                qantity: $("#pdct-q").val(),
                images: $("#pdct-image").val(),
                currency: $("#pdct-currency").val(),
                max_qty: $("#pdct-max-q").val(),
                min_qty: $("#pdct-min-q").val(),
                discount: $("#pdct-discount").val(),
                discount_expiration: $("#pdct-dis-expr").val(),
                has_refund_policy: $("#pdct-refund").val(),
                has_discount: $("#pdct-has-discount").val(),
                has_shipment: $("#pdct-shipment").val(),
                has_variation: $("#pdct-variation").val(),
                shipping_location: $("#ship-loc").val(),
                // variation: variation,
                merchant_id: user_id,
                category_id: $("#pdct-category").val(),
            };
            console.log(product_obj);

            $.ajax({
                method: "POST",
                url: "http://ecommerce.reworkstaging.name.ng/v2/products",
                dataType: "json",
                data: product_obj,
                success: (data) => {
                    alert("Product created successfully");
                    console.log(data);
                    let my_products = localStorage.getItem("merch-products");
                    let products = []
                    if (my_products != null) {
                        products = JSON.parse(my_products);
                    }
                    products.push(data)
                    localStorage.setItem("merch-products", JSON.stringify(products));
                },
                error(err) {
                    alert("Error: could not create product");
                    console.log(err);
                },
            });

        }
    }
    $("#pdct-btn").click(create_product);

})