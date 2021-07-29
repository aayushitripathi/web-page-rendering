// import { navData } from "../data/data.js";
// import { navData } from "../data/data.js";
import { Logo } from "./logo.js";
import { NavLinks } from "./navLinks.js";

export const NavigationBar = (data) => {
    const markUp = document.createElement("div");
    markUp.classList.add("navigation");
    markUp.appendChild(Logo(data.logo));
    markUp.appendChild(NavLinks(data.navLinks));

    return markUp;
};