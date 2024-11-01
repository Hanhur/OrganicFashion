import { getPageCategories } from "../components/categories/pageCategories.js";
import { getPageCollection } from "../components/collection/pageCollection.js";
import { getPageAbout } from "../components/about/pageAbout.js";

export function getPageMain()
{
    const main = document.createElement("main");
    main.classList.add("main");

    // main.append(getPageCategories());
    // main.append(getPageCollection());
    main.append(getPageAbout());

    return main;
}