let currentUser = JSON.parse(localStorage.getItem("currentUser"));

showCart();

function showCart() {
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
                        console.log(image[0]);
                        content += getOrderDetail(cart[i], image);
                        document.getElementById('details').innerHTML = content;
                    }
                });
            }
            document.getElementById('checkout').innerHTML = drawCheckOut(cart);
        }
    });
}

function getOrderDetail(cart, image) {
    return `<tr><td>
                <div class="table-p__box">
                     <div class="table-p__img-wrap">
                          <img class="u-img-fluid" src="http://localhost:8080/${image[0].fileImage}" alt="img">
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
                     <button class="far fa-trash-alt table-p__delete-link" style="background-color: white; border: none" onclick="deleteOrderDetail(${cart.id}, ${cart.order.id})"></button>
                </div>
            </td>
        </tr>`;
}

function drawCheckOut(cart) {
    let totalProduct = 0;
    let totalGrand = 0;
    for (let i = 0; i < cart.length; i++) {
        totalProduct += (cart[i].product.price * cart[i].quantity);
    }
    if(totalProduct > 4) {
        totalGrand = totalProduct + 4;
    }
    return `<tr>
                <td>SHIPPING</td>
                <td>$4.00</td>
            </tr>
            <tr>
                <td>TAX</td>
                <td>$0.00</td>
            </tr>
            <tr>
                 <td>SUBTOTAL</td>
                 <td>$${totalProduct}</td>
            </tr>
            <tr>
                 <td>GRAND TOTAL</td>
                 <td>$${totalGrand}</td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div style="margin-top: 10px">
                        <button class="btn btn--e-brand-b-2" type="submit" onclick="deleteAllOrderDetail()"> PROCEED TO CHECKOUT</button>
                    </div>
                </td>
            </tr>
`;
}

function deleteAllOrderDetail() {
    console.log(currentUser.id);
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/details/all/${currentUser.id}`,
        success: function () {
            $.ajax({
                type: "DELETE",
                url: `http://localhost:8080/orders/all/${currentUser.id}`,
                success: function () {
                    showCart();
                    alert("Thanh toán thành công !!")
                }
            });
        }
    });
    event.preventDefault();
}

function deleteOrderDetail(orderDetailId, orderId) {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/details/${orderDetailId}`,
        success: function () {
            $.ajax({
                type: "DELETE",
                url: `http://localhost:8080/orders/${orderId}`,
                success: function () {
                    showCart();
                }
            });
        }
    });
    event.preventDefault();
}