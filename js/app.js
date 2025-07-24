let addToCartBtn = document.querySelectorAll('.add-to-cart-btn')

addToCartBtn.forEach(singleCartBtn => {
    singleCartBtn.addEventListener('click', e => {
        alert("Flower Added to Cart");
        e.preventDefault();
    });
});