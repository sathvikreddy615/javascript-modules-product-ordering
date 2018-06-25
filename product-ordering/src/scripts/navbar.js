const navBarContainer = document.querySelector("#nav-bar-container"); // gets navbar container ID from index.html
const navFragment = document.createDocumentFragment(); // creates a fragment

let navItems = new Array; // create new EMPTY array to hold navbar list items
navItems.push("Betsy", "Categories", "Orders", "Logout"); // adding string values to empty array

const navBarCreator = () => { // dynamically creates a navbar
    const divEl = document.createElement("div"); // creates HTML <div> element
    divEl.id = "navContainer";
    navItems.forEach(item => { // loops through array
        let aEl = document.createElement("a"); // creates HTML <a> element
        aEl.textContent = `${item}`; // iterates through array and sets text for each <a> element to string from array
        aEl.setAttribute("class", "navA"); // assigns each <a> element a class of "navA"
        aEl.href = "#"; // assigns each <a> element an href of "#";
        navFragment.appendChild(aEl);
    });
    divEl.appendChild(navFragment); // append all <li> elements to one <ul>
    navBarContainer.appendChild(divEl);
}

module.exports = navBarCreator;