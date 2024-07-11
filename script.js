// script.js
let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

function submitOrder() {
    // For demonstration, we'll just log the order to console
    console.log('Order submitted:', cart);
    alert('Order submitted! Check console for details.');
    cart = []; // Clear cart after order submitted
    updateCart(); // Update UI
}
