
function login() {
    let userName = $('#login-email').val();
    let password = $('#login-password').val();
    let user = {
        username: userName,
        password: password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(user),
        url: "http://localhost:8080/login",
        success: function (data) {
            localStorage.setItem("currentUser", JSON.stringify(data));
            window.location.href="../product/product.html"
        }
    }).fail(function (){
        alert("Sai TK OR MK");
    });
    event.preventDefault();
}