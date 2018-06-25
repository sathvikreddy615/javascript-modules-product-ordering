// this file contains a function that dynamically creates HTML elements for the review data to be looped through

const reviewElCreator = ob => {
    let reviewEl = document.createElement("h6");
    reviewEl.textContent = `Title: ${ob.title} | Customer: ${ob.name} | Description: ${ob.description}`
    return reviewEl;
}

module.exports = reviewElCreator;

// const Review = Object.create({}, { // creates an object containing the review creator function/method
//     reviews: {
//         value: [],
//         writable: true,
//         enumerable: true
//     },
//     reviewCreator: {
//         value: (custName, custStars, custDescription) => {

//             // creates <h3> element and sets the text to the custName parameter
//             let custNameEl = document.createElement("h3");
//             custNameEl.textContent = custName;

//             // creates <h5> element and sets the text to the custStars parameter
//             let custStarsEl = document.createElement("h5");
//             custStarsEl.textContent = custStars;

//             // creates <p> element and sets the text to the custDecription parameter
//             let custDescriptionEl = document.createElement("p");
//             custDescriptionEl.textContent = custDescription;
//         },
//         writable: true,
//         enumerable: true
//     }
// });
