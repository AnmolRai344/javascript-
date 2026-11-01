const cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    console.log(`${name} added to cart`);
}

function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

addToCart("Laptop", 50000);
addToCart("Mouse", 1000);
addToCart("Keyboard", 2000);

console.log("Cart:", cart);

removeFromCart("Mouse");

console.log("Updated cart:", cart);
console.log("Total:", calculateTotal());