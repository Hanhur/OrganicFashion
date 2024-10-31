// import { router } from "../../index.js";
import images01Img from "../../img/image-1.png";
import "./header.css";

const navigationArray = ["ALTANSCHOOL WEB COURSES", "HOME", "ABOUT", "SHOP", "BLOG", "CONTACT"];

// function navigationArrayItems() 
// {
//     return navigationArray.filter((item) => item.length > 7);
// }

export function getHeader() 
{
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("div");
    container.classList.add("container");

    const nav = document.createElement("nav");
    nav.classList.add("navigator");

    const list = document.createElement("ul");
    list.classList.add("list");


    navigationArray.forEach(function (item) 
    {
        const items = document.createElement("li");
        items.classList.add("items");

        const link = document.createElement("a");
        link.classList.add("link");
        link.href = "/";

        list.appendChild(items);
        items.appendChild(link);

        link.innerHTML = item;
    });
    
    const organicContent = document.createElement("div");
    organicContent.classList.add("organic_content");

    const img = document.createElement("img");
    img.classList.add("organic_content-img");
    img.src = images01Img;
    img.alt = "Example image";

    const organicBox = document.createElement("div");
    organicBox.classList.add("organic_box");

    const title = document.createElement("h1");
    title.classList.add("organic_box-title");
    title.textContent = "ORGANIC FASHION";

    const text = document.createElement("p");
    text.classList.add("organic_box-text");
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    const button = document.createElement("button");
    button.classList.add("organic_box-btn");
    button.textContent = "SHOP NOW";

    header.append(container);
    container.append(nav, organicContent);

    nav.append(list);

    organicContent.append(img, organicBox);
    organicBox.append(title, text, button);

    return header;
}