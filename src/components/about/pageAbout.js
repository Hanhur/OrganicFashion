import aboutImg from "../../img/about.png";
import "./about.css";

export function getPageAbout()
{
    const section = document.createElement("section");
    section.classList.add("section-about");

    const container = document.createElement("div");
    container.classList.add("container");

    const about_inner = document.createElement("div");
    about_inner.classList.add("about-inner");

    const img = document.createElement("img");
    img.classList.add("about-img");
    img.src = aboutImg;
    img.alt = "Example image";

    const aboutContent = document.createElement("div")
    aboutContent.classList.add("about-content");

    const title = document.createElement("h2");
    title.classList.add("about-title", "titles");
    title.textContent = "ABOUT US";

    const text1 = document.createElement("p");
    text1.classList.add("about-text", "text");
    text1.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const text2 = document.createElement("p");
    text2.classList.add("about-text");
    text2.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    const button = document.createElement("button");
    button.classList.add("about-btn");
    button.textContent = "LEARN MORE";

    section.append(container);
    container.append(about_inner);
    about_inner.append(img, aboutContent);
    aboutContent.append(title, text1, text2, button);

    return section;
}