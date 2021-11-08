let currentOrderDetail = JSON.parse(localStorage.getItem("currentOrderDetail"));

showCart();

function showCart() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/details/${currentUser.id}`,
        success: function (cart) {
            let content = "";
            for (let i = 0; i < cart.length; i++) {
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8080/images/${cart[i].product.id}`,
                    success: function (image) {

                        content += getOrderDetail(cart[i], image);
                    }
                });
            }
            document.getElementById('details').innerHTML = content;
        }
    });
}

function getOrderDetail(cart, image) {
    return `<tr><td>
                <div class="table-p__box">
                     <div class="table-p__img-wrap">
                          <img class="u-img-fluid" src="http://localhost:8080/${image.fileImage}" alt="img">
                     </div>
                               <div class="table-p__info">
                                    <span class="table-p__name">
                                          <a href="product-detail.html">${cart.product.name}</a></span>
                                              <span class="table-p__category">
                                                   <a href="shop-side-version-2.html">${cart.product.category.name}</a></span>
                                                       <ul class="table-p__variant-list">
                                                           <li>
                                                               <span>${cart.quantity}</span></li>
                                                           <li>
                                                            <span>Color: Red</span></li>
                                                        </ul>
                               </div>
                     </div>
            </td>
            <td>
                <span class="table-p__price">${cart.product.price}</span>
            </td>
            <td>

            </td>
            <td>
                <div class="table-p__del-wrap">
                     <a class="far fa-trash-alt table-p__delete-link" href="#"></a>
                </div>
            </td>
        </tr>`;
}