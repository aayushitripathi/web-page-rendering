import { NavigationBar } from "./components/navigationBar.js";
import {Banner} from "./components/banner.js";
// import { bannerData, footerData, hamburger } from "./data/data.js";
import { Footer } from "./components/footer.js";
// import {Hamburger} from "./components/hamburger.js";
let rootDiv = document.getElementById("root");
let url="https://aayushitripathi.github.io/jsonfile/data.json";
fetch(url)
.then((response)=>{
    return response.json();
})
.then((myarray)=>{
var da=myarray.navData;
rootDiv.appendChild(NavigationBar(da));
rootDiv.appendChild(Banner(myarray.bannerData));
rootDiv.appendChild(Footer(myarray.footer));
    
})


