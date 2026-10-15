$(document).ready(() => {
   $.ajax({
    method: "GET",
    url: "http://ecommerce.reworkstaging.name.ng/v2/users",
    success(data){
        console.log(data);
        let user_data = " "
        $('#t-user').html(data.length);
        $.each(data, (index, user) => {
             user_data += `
             <tr class="border-b-gray-200 border-b-solid border-b-1 text-center text-gray-500 font-medium uppercase text-xs bg-transparent">
                        <td class="py-1 text-gray-700">${index + 1}</td>
                        <td class="py-1">${user.first_name}</td>
                        <td class="py-1">${user.last_name}</td>
                        <td class="py-1">${user.email}</td>
                        <td class="py-1">${user.phone}</td>
                        <td class="py-1">${user.password}</td>
                    </tr>
            `;
            $("#t-bod").html(user_data);
        });
    },
    error(err){
        console.log(err);
    }
   })
})