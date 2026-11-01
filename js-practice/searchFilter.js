const products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Phone", category: "Electronics", price: 20000 },
    { name: "Shoes", category: "Fashion", price: 3000 },
    { name: "Watch", category: "Fashion", price: 5000 }
];

function searchProducts(query) {
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
}

function filterByCategory(category) {
    return products.filter(product =>
        product.category === category
    );
}

function filterByPrice(maxPrice) {
    return products.filter(product =>
        product.price <= maxPrice
    );
}

console.log(searchProducts("phone"));
console.log(filterByCategory("Fashion"));
console.log(filterByPrice(10000));