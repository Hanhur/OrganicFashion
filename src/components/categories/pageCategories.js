import images01Img from "../../img/categories/image-1.png";
import images02Img from "../../img/categories/image-2.png";
import images03Img from "../../img/categories/image-3.png";
import images04Img from "../../img/categories/image-4.png";
import images05Img from "../../img/categories/image-5.png";
import "./categories.css";

const categoriesArray = [images01Img, images02Img, images03Img, images04Img];


export function getPageCategories()
{
    const section = document.createElement("section");
    section.classList.add("section-categories");

    const container = document.createElement("div");
    container.classList.add("container");

    const categories_shop = document.createElement("div")
    categories_shop.classList.add("categories_shop");

    const title = document.createElement("h2");
    title.classList.add("categories-title", "titles");
    title.textContent = "SHOP BY CATEGORIES";

    const categories_shop_images = document.createElement("div")
    categories_shop_images.classList.add("categories_shop-images");

    const categories_images = document.createElement("div");
    categories_images.classList.add("categories_images");

    categoriesArray.forEach(function(item)
    {
        const img = document.createElement("img");
        img.classList.add("categories_images-img");
        img.src = item;
        img.alt = "Example image";
        
        categories_images.appendChild(img);
    });

    const img = document.createElement("img");
    img.classList.add("categories_shop-images-img");
    img.src = images05Img;
    img.alt = "Example image";

    section.append(container);
    container.append(categories_shop);
    categories_shop.append(title, categories_shop_images, categories_images);
    categories_shop_images.append(categories_images, img);

    return section;
}