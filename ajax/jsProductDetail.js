let currentProduct = JSON.parse(localStorage.getItem("currentProduct"));

productDetail(currentProduct.id);

function getProductDetail(product, arrImage) {
    return `<div class="col-lg-5">
                <div class="pd-breadcrumb u-s-m-b-30">
                     <ul class="pd-breadcrumb__list">
                         <li class="has-separator">
                             <a href="index.hml">Home</a>
                         </li>
                         <li class="has-separator">

                                    <a href="shop-side-version-2.html">Electronics</a></li>
                                <li class="has-separator">

                                    <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                                <li class="is-marked">

                                    <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                            </ul>
                        </div>
                        <!--====== End - Product Breadcrumb ======-->
                                  <div>
                                       <img width="420px" height="590px" src="http://localhost:8080/${arrImage[0].fileImage}" alt="">
                                  </div>
                                  <div>
                                       <img width="101px" height="100px" src="http://localhost:8080/${arrImage[1].fileImage}" alt="">
                                  </div>
                    </div>
                    <div class="col-lg-7">

                        <!--====== Product Right Side Details ======-->
                        <div class="pd-detail">
                            <div>
                                <span class="pd-detail__name">${product.name}</span></div>
                            <div>
                                <div class="pd-detail__inline">

                                    <span class="pd-detail__price">$6.99</span>

                                    <span class="pd-detail__discount">(76% OFF)</span>
                                    <del class="pd-detail__del">$28.97</del>
                                </div>
                            </div>
                            <div class="u-s-m-b-15">
                                <div class="pd-detail__rating gl-rating-style"><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star-half-alt"></i>

                                    <span class="pd-detail__review u-s-m-l-4">

                                            <a data-click-scroll="#view-review">23 Reviews</a></span></div>
                            </div>
                            <div class="u-s-m-b-15">
                                <div class="pd-detail__inline">

                                    <span class="pd-detail__stock">200 in stock</span>

                                    <span class="pd-detail__left">Only 2 left</span></div>
                            </div>
                            <div class="u-s-m-b-15">

                                <span class="pd-detail__preview-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                            <div class="u-s-m-b-15">
                                <div class="pd-detail__inline">

                                        <span class="pd-detail__click-wrap"><i class="far fa-heart u-s-m-r-6"></i>

                                            <a href="signin.html">Add to Wishlist</a>

                                            <span class="pd-detail__click-count">(222)</span></span></div>
                            </div>
                            <div class="u-s-m-b-15">
                                <div class="pd-detail__inline">

                                        <span class="pd-detail__click-wrap"><i class="far fa-envelope u-s-m-r-6"></i>

                                            <a href="signin.html">Email me When the price drops</a>

                                            <span class="pd-detail__click-count">(20)</span></span></div>
                            </div>
                            <div class="u-s-m-b-15">
                                <ul class="pd-social-list">
                                    <li>

                                        <a class="s-fb--color-hover" href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li>

                                        <a class="s-tw--color-hover" href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li>

                                        <a class="s-insta--color-hover" href="#"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>

                                        <a class="s-wa--color-hover" href="#"><i class="fab fa-whatsapp"></i></a></li>
                                    <li>

                                        <a class="s-gplus--color-hover" href="#"><i
                                                class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                            <div class="u-s-m-b-15">
                                <form class="pd-detail__form">
                                    <div class="u-s-m-b-15">

                                        <span class="pd-detail__label u-s-m-b-8">Color:</span>
                                        <div class="pd-detail__color">
                                            <div class="color__radio">

                                                <input type="radio" id="jet" name="color" checked>

                                                <label class="color__radio-label" for="jet"
                                                       style="background-color: #333333"></label></div>
                                            <div class="color__radio">

                                                <input type="radio" id="folly" name="color">

                                                <label class="color__radio-label" for="folly"
                                                       style="background-color: #FF0055"></label></div>
                                            <div class="color__radio">

                                                <input type="radio" id="yellow" name="color">

                                                <label class="color__radio-label" for="yellow"
                                                       style="background-color: #FFFF00"></label></div>
                                            <div class="color__radio">

                                                <input type="radio" id="granite-gray" name="color">

                                                <label class="color__radio-label" for="granite-gray"
                                                       style="background-color: #605F5E"></label></div>
                                            <div class="color__radio">

                                                <input type="radio" id="space-cadet" name="color">

                                                <label class="color__radio-label" for="space-cadet"
                                                       style="background-color: #1D3461"></label></div>
                                        </div>
                                    </div>
                                    <div class="u-s-m-b-15">

                                        <span class="pd-detail__label u-s-m-b-8">Size:</span>
                                        <div class="pd-detail__size">
                                            <div class="size__radio">

                                                <input type="radio" id="xs" name="size" checked>

                                                <label class="size__radio-label" for="xs">XS</label></div>
                                            <div class="size__radio">

                                                <input type="radio" id="small" name="size">

                                                <label class="size__radio-label" for="xxl">Small</label></div>
                                            <div class="size__radio">

                                                <input type="radio" id="medium" name="size">

                                                <label class="size__radio-label" for="medium">Medium</label></div>
                                            <div class="size__radio">

                                                <input type="radio" id="large" name="size">

                                                <label class="size__radio-label" for="xxl">Large</label></div>
                                            <div class="size__radio">

                                                <input type="radio" id="xl" name="size">

                                                <label class="size__radio-label" for="xl">XL</label></div>
                                            <div class="size__radio">

                                                <input type="radio" id="xxl" name="size">

                                                <label class="size__radio-label" for="xxl">XXL</label></div>
                                        </div>
                                    </div>
                                    <div class="pd-detail-inline-2">
                                        <div class="u-s-m-b-15">

                                            <!--====== Input Counter ======-->
                                            <div class="input-counter">

                                                <span class="input-counter__minus fas fa-minus"></span>

                                                <input id = "quantity" class="input-counter__text input-counter--text-primary-style"
                                                       type="text" value="1" data-min="1" data-max="1000">

                                                <span class="input-counter__plus fas fa-plus"></span></div>
                                            <!--====== End - Input Counter ======-->
                                        </div>
                                        <div class="u-s-m-b-15">
                                            <button class="btn btn--e-brand-b-2" type="submit" onclick="addToCart()">Add to Cart</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="u-s-m-b-15">

                                <span class="pd-detail__label u-s-m-b-8">Product Policy:</span>
                                <ul class="pd-detail__policy-list">
                                    <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                        <span>Buyer Protection.</span></li>
                                    <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                        <span>Full Refund if you don't receive your order.</span></li>
                                    <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                        <span>Returns accepted if product not as described.</span></li>
                                </ul>
                            </div>
                        </div>
                        <!--====== End - Product Right Side Details ======-->
                    </div>`
}

function productDetail(id) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/products/detail/${id}`,
        success: function (product) {
            $.ajax({
                type: "GET",
                url: `http://localhost:8080/images`,
                success: function (images) {
                    let arrImage = [];
                        for (let i = 0; i < images.length; i++) {
                            if (images[i].product.id === product.id) {
                                arrImage.push(images[i]);
                            }
                        }
                    document.getElementById('showProductDetail').innerHTML = getProductDetail(product, arrImage);
                }
            });
        }
    });

}

function addToCart() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let order = {
        user: {
            id :currentUser.id
        }
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: `http://localhost:8080/orders`,
        data: JSON.stringify(order),
        success: function (order) {
            let quantity = $('#quantity').val();
            let orderDetail = {
                quantity: quantity,
                order: order,
                product: {
                    id: currentProduct.id
                }
            };
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                type: "POST",
                url: `http://localhost:8080/details`,
                data: JSON.stringify(orderDetail),
                success: function (orderDetail) {
                    event.preventDefault();
                    localStorage.setItem("currentOrderDetail", JSON.stringify(orderDetail));
                    location.href = "cart.html";
                }
            });
        }
    });
    event.preventDefault();
}
