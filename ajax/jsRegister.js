function register() {
    let fullName = $('#reg-fname').val();
    let email = $('#reg-lname').val();
    let username = $('#username').val();
    let password = $('#password').val();
    let passwordRetype = $('#password-retype').val();
    if (password !== passwordRetype) {
        return alert("Nhập lại mật khẩu")
    }
    let user = {
        fullName: fullName,
        email: email,
        username: username,
        password: password
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(user),
        url: "http://localhost:8080/register",
        success: function () {
            alert("Đăng ký thành công")
            location.href = "signin.html";
        }
    }).fail(function () {
        alert("Sai Dau Do");
    });
    event.preventDefault();
}