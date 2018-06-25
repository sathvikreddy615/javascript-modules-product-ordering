const Reviews = {}; // object that holds review data

const ReviewDB = Object.create({}, { // creates database tempalte for reviews
    title: {
        value: "",
        writable: true,
        enumerable: true
    },
    name: {
        value: "",
        writable: true,
        enumerable: true
    },
    description: {
        value: "",
        writable: true,
        enumerable: true
    }
});

const addReview = (title, name, description) => { // creates new reviews and adds to Reviews array
    let newReview = Object.create(ReviewDB);

    newReview.title = title;
    newReview.name = name;
    newReview.description = description;

    Reviews[title] = newReview
};

// Add Reviews

let reviewGtaV = addReview("GTA V", "Gary Jones", "This is an amazing game");

let reviewMM = addReview("Marcus Mariota Jersey", "Derrick Henry", "This jersey is so comfortable");

let reviewKindle = addReview("Kindle Paperwhite", "Steve Jobs", "This device makes it so easy to carry books on the go");

console.log(Reviews); // log reviews to console

module.exports = Reviews;