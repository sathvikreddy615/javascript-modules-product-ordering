// this file loops through the reviewDB and reviews element creator function to print review data to the DOM

let Reviews = require("./reviewDatabase");
let reviewElCreator = require("./reviews");

const productContainer = document.querySelector("#product-container");
const reviewFragment = document.createDocumentFragment();

const printReviews = ob => { // prints reviews to DOM
    let printReview = reviewElCreator(Reviews[ob]);
    reviewFragment.appendChild(printReview);
    return reviewFragment;
}

module.exports = printReviews;