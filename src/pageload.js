export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Blitz Donuts";
  contentDiv.appendChild(heading);

  const mainImg = document.createElement("img");
  mainImg.classList.add("mainImg");
  mainImg.src = "/src/assets/dounuts.jpg";
  mainImg.alt = "donut";
  contentDiv.appendChild(mainImg);

  const p1 = document.createElement("p");
  p1.classList.add("des");
  p1.textContent = "Best Donuts in the city";
  contentDiv.appendChild(p1);

  const p2 = document.createElement("p");
  p2.classList.add("des");
  p2.textContent = "Order now";
  contentDiv.appendChild(p2);
}
