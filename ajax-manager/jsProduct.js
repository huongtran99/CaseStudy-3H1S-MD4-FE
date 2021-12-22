let urlProduct = "http://localhost:8080/products";

$(document).ready(function () {
    showList();
})

function showList() {
    $.ajax({
        type: "GET",
        url: urlProduct,
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.content.length; i++) {
                content += getProduct(data.content[i]);
            }
            $("#showAll").html(content);
        }
    });
}

function getProduct(product) {
    return `<tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                        <td>${product.code}</td>
                        <td>${product.category.name}</td>
                        <td>${product.brand.name}</td>
                        <td><button onclick="showDelete(${product.id})">Delete</button></td>
                        <td><button onclick="showCreateOrEdit(${product.id})">Update</button></td>
                    </tr>`;
}

function showCreateOrEdit(id) {
    if (id === -1) {
        let myModal = new bootstrap.Modal(document.getElementById('modalCreate'));
        showCategories();
        showBrands();
        myModal.show();
    } else {
        $.ajax({
            type: "GET",
            url: `http://localhost:8080/products/getProduct/${id}`,
            success: function (data) {
                let myModal = new bootstrap.Modal(document.getElementById('modalCreate'));
                $('#id').val(data.id);
                $('#name').val(data.name);
                $('#price').val(data.price);
                $('#code').val(data.code);
                $('#description').val(data.description);
                showCategories();
                showBrands();
                myModal.show();
            }
        });
        event.preventDefault();
    }
}

function showBrand(brand) {
    return `<option value="${brand.id}">${brand.name}</option>`
}

function showBrands() {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/brands`,
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += showBrand(data[i]);
            }
            $("#brand").html(content);
        }
    });
}

function showCategory(category) {
    return `<option value="${category.id}">${category.name}</option>`
}

function showCategories() {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/categories`,
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += showCategory(data[i]);
            }
            $("#category").html(content);
        }
    });
}

function createOrEditProduct(id) {
    let form = $('#createImage')[0];
    if (id === "") {
        let name = $('#name').val();
        let price = $('#price').val();
        let description = $('#description').val();
        let code = $('#code').val();
        let category = $('#category').val()
        let brand = $('#brand').val()
        let product = {
            name: name,
            price: price,
            description: description,
            code: code,
            category: {
                id: category
            },
            brand: {
                id: brand
            }
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: `http://localhost:8080/products`,
            type: "POST",
            data: JSON.stringify(product),
            success: function (result) {
                let data = new FormData(form);
                $.ajax({
                    url: `http://localhost:8080/images`,
                    type: "POST",
                    enctype: 'multipart/form-data',
                    data: data,
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function () {
                        alert("create success!");
                    }
                });
            }
        });

    } else {
        let name = $('#name').val();
        let price = $('#price').val();
        let description = $('#description').val();
        let code = $('#code').val();
        let category = $('#category').val()
        let brand = $('#brand').val()
        let product = {
            id: id,
            name: name,
            price: price,
            description: description,
            code: code,
            category: {
                id: category
            },
            brand: {
                id: brand
            }
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: `http://localhost:8080/products/${id}`,
            type: "PUT",
            data: JSON.stringify(product),
            success: function (result) {
                let data = new FormData(form);
                data.set("id", data.id);
                $.ajax({
                    url: `http://localhost:8080/images/${data.id}`,
                    type: "PUT",
                    enctype: 'multipart/form-data',
                    data: data,
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function () {
                        alert("update success!");
                    }
                });
            }
        });
    }
}

function showDelete(id) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/products/${id}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            let myModal = new bootstrap.Modal(document.getElementById('modalDelete'));
            $('#idDelete').val(data.id);
            $('#nameDelete').val(data.name);
            $('#priceDelete').val(data.price);
            $('#descriptionDelete').val(data.description);
            myModal.show();
        }
    });
    event.preventDefault();
}

function deleteProduct(id) {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/products/${id}`,
        success: function () {
            showList();
            alert("Delete Success")
        }
    });
}
