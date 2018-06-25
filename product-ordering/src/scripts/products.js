// this file contains a function that dynamically creates HTML elements for the product data to be looped through

const productElCreator = ob => {
    let productEl = document.createElement("h5")
    productEl.textContent = `Title: ${ob.title} | Description: ${ob.description} | Price: $${ob.price} | Quantity: ${ob.quantity}`;
    return productEl;
}

module.exports = productElCreator;

// const productElCreator = (title, description, price, qty, img) => {

//     // creates <img> element and sets the src attribute to the img parameter
//     // let imgEl = document.createElement("img");
//     // imgEl.setAttribute("src", img)

//     // creates <h2> element and sets the text to the title parameter
//     let titleEl = document.createElement("h2");
//     titleEl.textContent = title;

//     // creates <p> element and sets the text to the description parameter
//     let descriptionEL = document.createElement("p");
//     descriptionEL.textContent = description;

//     // creates <h4> element and sets the text to the price parameter
//     let priceEl = document.createElement("h4");
//     priceEl.textContent = `$${price}`;

//     // creates <h4> element and sets the text to the qty parameter
//     let qtyEl = document.createElement("h4");
//     qtyEl.textContent = `Quantity: ${qty}`;

//     productFragment.appendChild(imgEl);
//     productFragment.appendChild(titleEl);
//     productFragment.appendChild(descriptionEL);
//     productFragment.appendChild(priceEl);
//     productFragment.appendChild(qtyEl);
//     productContainer.appendChild(productFragment);

// }