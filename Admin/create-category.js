$(document).ready(() => {
    let form_check = true;
      $("#create-cat-btn").click(() => {
    if($("#category-name").val() == ""){
        $("#category-name").closest("span").val().html("field must not be empty");
        form_check = false
    }
    else{
        form_check = true;
    }
    if($("#category-image").val() == ""){
        $("#category-image").closest("span").val().html("field must not be empty");
        form_check= false;
    }
    else{
        form_check = true;
    }
    if(form_check == true){
        let user_id = localStorage.getItem("merchant-id");
    console.log(user_id);
        let category_obj = {
            merchant_id: user_id,
            name: $("#category-name").val(),
            image: $("#category-image").val(),
        };
       console.log(category_obj);
        $.ajax({
           method:"POST",
           url: "http://ecommerce.reworkstaging.name.ng/v2/categories",
           dataType: "json",
           data: category_obj,
           success:(data) => {
            console.log(data);
            alert("category created");

            let cat_obj = {
                    Name : data.name,
                    Id: data.id,
                };
            let cat = localStorage.getItem("merchant-cat")
            let products_cat = []
                if(cat != null){
                  products_cat = JSON.parse(cat);
                  console.log(products_cat)
                }
    
                products_cat.push(cat_obj);
                

                // localStorage.setItem("cat-id", JSON.stringify( data.id));
                localStorage.setItem("merchant-cat", JSON.stringify( products_cat));
           },
           error:(err)=> {
            console.log(err)
           }
        })
    }
    })
})

// let me = []
// me.push({user:"me"});

// console.log(me);


// party = 68da659b5511e2913e98c1d8;