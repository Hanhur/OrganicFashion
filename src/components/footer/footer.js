import followImg from "../../img/follow.png";
import "./footer.css";

export function getFooter()
{
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const container = document.createElement("div");
    container.classList.add("container");

    const follow_inner = document.createElement("div");
    follow_inner.classList.add("follow-inner");

    const follow_content = document.createElement("div");
    follow_content.classList.add("follow-content");

    const title = document.createElement("h2");
    title.classList.add("follow-title", "titles");
    title.textContent = "FOLLOW US";

    const form = document.createElement("form");
    form.classList.add("follow-form");

    const nameInput = document.createElement("input");
    nameInput.classList.add("name-input");
    nameInput.placeholder = "Enter your name";

    const emailAddressInput = document.createElement("input");
    emailAddressInput.classList.add("email_address-input");
    emailAddressInput.placeholder = "Enter a valid email address";

    const textareaMessage = document.createElement("textarea");
    textareaMessage.classList.add("message-input");
    textareaMessage.placeholder = "Enter your message";

    const button = document.createElement("button");
    button.classList.add("follow-btn");
    button.type = "submit";
    button.textContent = "SUBMIT";

    const img = document.createElement("img");
    img.classList.add("follow-img");
    img.src = followImg;
    img.alt = "Example image";

    footer.append(container);
    container.append(follow_inner);
    follow_inner.append(follow_content, img);
    follow_content.append(title, form, button);
    form.append(nameInput, emailAddressInput, textareaMessage);

    return footer;
}