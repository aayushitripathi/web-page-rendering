// import { navData } from "../data/data.js";


export const NavLinks = (props) => {
    let markUp = document.createElement("ul");
    markUp.classList.add("nav-container");
    props.forEach((link) => {
        let navItem = document.createElement("li");
        navItem.classList.add("nav-item");
        let navLink = document.createElement("a");
        navLink.classList.add("nav-link");

        navLink.href = link.href;
        navLink.innerText = link.title;
        navLink.isCta ? navLink.classList.add("nav-link", "btn") : navLink.classList.add("nav-link");

        navItem.appendChild(navLink);
        markUp.appendChild(navItem);

    });
    return markUp;
};

