import img1 from "./assets/item1.jpg";
import img2 from "./assets/item2.jpg";
import img3 from "./assets/item3.jpg";
import img4 from "./assets/item4.jpg";

export function menu() {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Blitz Donuts";
  heading.classList.add("title");
  contentDiv.appendChild(heading);

  const item1 = document.createElement("img");
  item1.classList.add("image");
  item1.src = img1;
  item1.alt = "item1";
  contentDiv.appendChild(item1);

  const item2 = document.createElement("img");
  item2.classList.add("image");
  item2.src = img2;
  item2.alt = "item2";
  contentDiv.appendChild(item2);

  const item3 = document.createElement("img");
  item3.classList.add("image");
  item3.src = img3;
  item3.alt = "item3";
  contentDiv.appendChild(item3);

  const item4 = document.createElement("img");
  item4.classList.add("image");
  item4.src = img4;
  item4.alt = "item4";
  contentDiv.appendChild(item4);
}
