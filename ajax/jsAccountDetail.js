$(document).ready(function (){
    drawProfile();
})

function drawProfile() {
    let currentUsers = JSON.parse(localStorage.getItem("currentUser"));
    $.ajax({
        type: "Get",
        url: `http://localhost:8080/users/${currentUsers.id}`,
        success: function (user) {
            document.getElementById('profile').innerHTML = getProfile(user);
        }
    });

}

function getProfile(user) {

    return `<h1 class="dash__h1 u-s-m-b-14">My Profile</h1>
               <span class="dash__text u-s-m-b-30"></span>
                     <div class="row">
                          <div class="col-lg-4 u-s-m-b-30">
                                <h2 class="dash__h2 u-s-m-b-8">Full Name</h2>
                                       <span class="dash__text">${user.fullName}</span>
                                             </div>
                                                   <div class="col-lg-4 u-s-m-b-30">
                                                        <h2 class="dash__h2 u-s-m-b-8">E-mail</h2>
                                                            <span class="dash__text">${user.email}</span>
                                                   <div class="dash__link dash__link--secondary">
                                                        <a href="#">Change</a></div>
                                                   </div>
                                                <div class="col-lg-4 u-s-m-b-30">
                                                    <h2 class="dash__h2 u-s-m-b-8">Phone</h2>

                                                    <span class="dash__text">${user.phone}</span>
                                                    <div class="dash__link dash__link--secondary">

                                                        <a href="#">Add</a></div>
                                                </div>
                                                <div class="col-lg-4 u-s-m-b-30">
                                                    <h2 class="dash__h2 u-s-m-b-8">Birthday</h2>

                                                    <span class="dash__text">1991-02-02</span>
                                                </div>
                                                <div class="col-lg-4 u-s-m-b-30">
                                                    <h2 class="dash__h2 u-s-m-b-8">Gender</h2>

                                                    <span class="dash__text">Male</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="dash__link dash__link--secondary u-s-m-b-30">

                                                        <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a></div>
                                                    <div class="u-s-m-b-16">

                                                        <a class="dash__custom-link btn--e-transparent-brand-b-2" onclick="showFormEditProfile(${user.id})">Edit Profile</a></div>
                                                    <div>

                                                        <a class="dash__custom-link btn--e-brand-b-2" href="#">Change Password</a></div>
                                                </div>
                                            </div>`;
}

function showFormEditProfile(id) {
    let myModal = new bootstrap.Modal(document.getElementById('modalCreate'));
    $('#id').val(id);
    $.ajax({
        type: "Get",
        url: `http://localhost:8080/users/${id}`,
        success: function (user) {
            $('#fullName').val(user.fullName);
            $('#username').val(user.username);
            $('#phone').val(user.phone);
            $('#email').val(user.email);
            $('#about').val(user.about);
        }
    });
    myModal.show();
}

function editProfile(id) {
    let fullName = $('#fullName').val();
    let username = $('#username').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    let about = $('#about').val();
    let user = {
        id: id,
        fullName: fullName,
        username: username,
        phone: phone,
        email: email,
        about: about
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: `http://localhost:8080/users/${id}`,
        data: JSON.stringify(user),
        success: function () {
            alert("Update Success");
        }
    });
}
