const baseUrl = "http://127.0.0.1:8000"
const urlRegister = "/chat/auth/register"
$("button").click(function () {
    data = $('form').serialize(),
    alert(data),
    names = $("#name").val(),
        phone = $("#phone").val(),
        password = $("#password").val(),
      
    $post({
        url: baseUrl + urlRegister,
        data:data,


        success: function (datas) {
            // alert("hi" + datas);
            // $('#add').val('data sent sent');
            $('#msg').html(datas);
        }

    })

})
//     $.post(baseUrl+urlRegister, {
//         name: names,
//         phone: phone,
//         password:password
//       },
//        function(data, status){
//       alert("Data: " + data + "\nStatus: " + status);
//     });
//   });
// $('#result').html("<br />$('form').serialize():<br />"+ $('form').serialize()+"<br /><br />$('form').serializeArray():<br />" + JSON.stringify($('form').serializeArray()));





