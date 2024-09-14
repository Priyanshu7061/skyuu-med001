let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    // Add item to cart
    cart.push({ item, price });
    // Update total price
    totalPrice += price;
    // Update cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear current cart items
    cartItems.innerHTML = '';

    // Add updated items to cart display
    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.item} - ₹${product.price}`;
        cartItems.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice;
}

// Add event listener for checkout button
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Checkout functionality is not implemented in this demo.');
});
