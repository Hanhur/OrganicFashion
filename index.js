// import Navigo from "navigo";
import { getHeader } from "./src/components/header/header.js";
import { getPageMain } from "./src/page/pageMain.js";
import { getFooter } from "./src/components/footer/footer.js";


const app = document.querySelector("#app");

// export const router = new Navigo('/');

const header = getHeader();
const pageMain = getPageMain();
const footer = getFooter();


app.append(header, pageMain, footer);