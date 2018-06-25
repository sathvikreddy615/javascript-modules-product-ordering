const Products = {}; // object that holds product data

const ProductDB = Object.create({}, { // creates database template for products
    title: {
        value: "",
        writable: true,
        enumerable: true
    },
    description: {
        value: "",
        writable: true,
        enumerable: true
    },
    price: {
        value: 0,
        writable: true,
        enumerable: true
    },
    quantity: {
        value: 0,
        writable: true,
        enumerable: true
    },
    // img: {
    //     value: 0,
    //     writable: true,
    //     enumerable: true
    // }
});

const addProduct = (title, description, price, quantity, img) => { // creates new products and adds to Products array
    let newProduct = Object.create(ProductDB);

    newProduct.title = title;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.quantity = quantity;
    newProduct.img = img;

    Products[title] = newProduct;
}

// Add Products

let gtaV = addProduct("GTA V", "The biggest, most dynamic and most diverse open world ever created and now packed with layers of new detail.", 60, 5, "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V.jpg");

let MM = addProduct("Marcus Mariota Jersey", "Men's Tennessee Titans Marcus Mariota Nike Navy New 2018 Game Jersey", 100, 8, "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_2942000/ff_2942573_full.jpg&w=600");

let kindle = addProduct("Kindle Paperwhite", "Kindle Paperwhite offers Bookerly, an exclusive font crafted from the ground up for reading on digital screens", 120, 11, "https://images-na.ssl-images-amazon.com/images/G/35/kindle/dp/2015/KM/feature-goesbeyondabook4._CB513221090_.jpg");

console.log(Products); // log products to console

module.exports = Products;