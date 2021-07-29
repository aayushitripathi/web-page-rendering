export const Banner=(props)=>
{
    let markUp=document.createElement("div");
    markUp.classList.add("banner");
    markUp.style.backgroundImage=`url(${props.bannerImage})`;

    let heading=document.createElement("h1");
    heading.classList.add("banner-heading");
    heading.textContent=props.companyName;

    let para=document.createElement("p");
    para.classList.add("banner-tagline")
    para.textContent=props.tagline;

    let cta=document.createElement("a");
    cta.href = props.href;
    cta.textContent = props.cta;
    cta.classList.add("btn");
    
    markUp.appendChild(para);
    markUp.appendChild(heading)
    markUp.appendChild(cta);


    return markUp;
}


