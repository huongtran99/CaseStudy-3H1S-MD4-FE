let pageTotal = 1;
let page = 0;
let result = "";
let categoryId;
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

$(document).ready(function () {
    showAll();
})

function getProduct(product, arrImage) {
    return `<div class="product-o product-o--hover-on product-o--radius col-xl-3 col-lg-4 col-md-6 col-sm-6">
                 <div class="product-o__wrap">
                     <a class="aspect aspect--bg-grey aspect--square u-d-block" href="#">
                         <img class="aspect__img" src="http://localhost:8080/${arrImage[0].fileImage}" alt="">
                     </a>
                          <div class="product-o__action-wrap">
                               <ul class="product-o__action-list">
                                    <li>
                                        <a data-modal="modal" data-modal-id="#quick-look"
                                           data-tooltip="tooltip" data-placement="top"
                                           title="Quick View" onclick="changeProductDetail(${product.id})"><i class="fas fa-search-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                         <a data-modal="modal" data-modal-id="#add-to-cart"
                                            data-tooltip="tooltip" data-placement="top"
                                            title="Add to Cart">
                                            <i class="fas fa-plus-circle"></i>
                                         </a>
                                    </li>
                               </ul>
                          </div>
                 </div>
                       <span class="product-o__category">
                            <a href="shop-side-version-2.html">${product.category.name}</a>
                       </span>
                       <span class="product-o__name">
                             <a href="product-detail.html">${product.name}</a>
                       </span>
                             <div class="product-o__rating gl-rating-style">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star-half-alt"></i>
                                  <span class="product-o__review">(23)</span>
                             </div>
                                   <span class="product-o__price">$125.00
                                         <span class="product-o__discount">${product.price}</span>
                                   </span>
            </div>`;
}

function drawUser(currentUser) {
    return `<li>
                <a href="../user/dash-my-profile.html"><i class="fas fa-user-circle u-s-m-r-6"></i>
                   <span>${currentUser.name}</span>
                </a>
            </li>
            <li>
                 <a href=""><i class="fas fa-lock-open u-s-m-r-6"></i>
                 <button onclick="logout()">
                     <span>logout</span>
                 </button>
                 </a>
            </li>`;
}

function logout() {
    localStorage.removeItem("currentUser");
}

function showAll() {
    document.getElementById('account').innerHTML = drawUser(currentUser);
    page = 0;
    categoryId = "";
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/products`,
        success: function (products) {
            $.ajax({
                type: "GET",
                url: `http://localhost:8080/images`,
                success: function (images) {
                    let content = "";
                    content = getContentProduct(products, images, content);
                    $("#showAll").html(content);
                    result = "";
                    document.getElementById('loadMore').innerHTML = "";
                }
            });
        }
    });
}

function getContentProduct(products, images, content) {
    for (let i = 0; i < products.content.length; i++) {
        let arrImage = [];
        for (let j = 0; j < images.length; j++) {
            if (images[j].product.id === products.content[i].id) {
                arrImage.push(images[j]);
            }
        }
        content += getProduct(products.content[i], arrImage);
    }
    return content;
}

function loadMore() {
    let url = `http://localhost:8080/products?page=${page}`;
    if (page < pageTotal) {
        page++;
        url = `http://localhost:8080/products?page=${page}`
    } else {
        pageTotal = 1;
        return alert("Het roi");
    }
    let search = $('#main-search').val();
    if (search !== "") {
        url = `http://localhost:8080/products?main-search=${search}&page=${page}`
    } else if (categoryId === 1 || categoryId === 2 || categoryId === 3 || categoryId === 4 || categoryId === 5) {
        url = `http://localhost:8080/products/${categoryId}?page=${page}`
    }

    $.ajax({
        type: "GET",
        url: url,
        success: function (products) {
            pageTotal = products.totalPages - 1;
            $.ajax({
                type: "GET",
                url: `http://localhost:8080/images`,
                success: function (images) {
                    let content = "";
                    content = getContentProduct(products, images, content);
                    result += content;
                    for (let i = 0; i < page; i++) {
                        document.getElementById('loadMore').innerHTML = result;
                    }
                }
            });
        }
    });
    event.preventDefault();
}

function searchProduct() {
    let search = $('#main-search').val();
    page = 0;
    $.ajax({
        type: "Get",
        url: `http://localhost:8080/products?main-search=${search}`,
        success: function (products) {
            $.ajax({
                type: "GET",
                url: `http://localhost:8080/images`,
                success: function (images) {
                    let content = "";
                    content = getContentProduct(products, images, content);
                    $("#showAll").html(content);
                }
            });
        }
    });
    event.preventDefault();
}

function showProductByCategory(idCategory) {
    categoryId = idCategory;
    page = 0;
    $.ajax({
        type: "Get",
        url: `http://localhost:8080/products/${idCategory}`,
        success: function (products) {
            $.ajax({
                type: "GET",
                url: `http://localhost:8080/images`,
                success: function (images) {
                    let content = "";
                    content = getContentProduct(products, images, content);
                    $("#showAll").html(content);
                    result = "";
                    document.getElementById('loadMore').innerHTML = "";
                }
            });
        }
    });
    event.preventDefault();
}

function changeProductDetail(id) {
    $.ajax({
        type: "Get",
        url: `http://localhost:8080/products/detail/${id}`,
        success: function (product) {
            event.preventDefault();
            localStorage.setItem("currentProduct", JSON.stringify(product));
            location.href = "product-detail-variable.html";
        }
    });
}


