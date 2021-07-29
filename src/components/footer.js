

export const Footer=(props)=>{
    let markUp=document.createElement("div")
    markUp.classList.add("footerdiv");
    let heading=document.createElement("h5");
    heading.textContent=props.tagline;
    let btn=document.createElement("button");
    btn.textContent=props.buttons;
    let paras=document.createElement("para");
    paras.textContent=props.para1;
    paras.classList.add("parafoot");
    let imgdiv=document.createElement("div");
    imgdiv.classList.add("imgdiv");
    let imgs=document.createElement("img");
    imgs.src=props.logo.imgSrc;

    let icons = document.createElement("div");
    icons.classList.add("icons");
    props.navLinks.forEach((link) => {
        let lists = document.createElement("li");
        lists.classList.add("list");
        let anchor = document.createElement("a");
        anchor.classList.add("anchor");
        let icon = document.createElement("i");
        icon.classList.add("fab",`${link.className}`,"fa-5x");
        anchor.href =link.href;

        anchor.appendChild(icon);
        lists.appendChild(anchor);
        icons.appendChild(lists);
    })
    imgdiv.appendChild(imgs);
    markUp.appendChild(heading);
    markUp.appendChild(btn);
    markUp.appendChild(icons);
    markUp.appendChild(paras);
    markUp.appendChild(imgdiv);
    markUp.appendChild(imgs);
    return markUp
}
