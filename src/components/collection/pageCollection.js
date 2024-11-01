import images01Img from "../../img/collection/image-1.png";
import images02Img from "../../img/collection/image-2.png";
import images03Img from "../../img/collection/image-3.png";
import "./collection.css";

const collectionArray = [images01Img, images02Img, images03Img];

export function getPageCollection()
{
    const section = document.createElement("section");
    section.classList.add("section-collection");

    const container = document.createElement("div");
    container.classList.add("container");

    const title = document.createElement("h2");
    title.classList.add("collection-title", "titles");
    title.textContent = "NEW COLLECTION";

    const collectionNew = document.createElement("div")
    collectionNew.classList.add("collection_new");

    collectionArray.forEach(function(item)
    {
        const img = document.createElement("img");
        img.classList.add("collection_new-img");
        img.src = item;
        img.alt = "Example image";
        
        collectionNew.appendChild(img);
    });

    const text = document.createElement("p");
    text.classList.add("collection_text");
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";


    section.append(container);
    container.append(title, collectionNew, text);

    return section;
}