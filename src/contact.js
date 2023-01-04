export function contact() {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Blitz Donuts";
  heading.classList.add("title");
  contentDiv.appendChild(heading);

  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("phoneNumber");
  phoneNumber.textContent = "📞 123 456 789";
  contentDiv.appendChild(phoneNumber);

  const email = document.createElement("p");
  email.classList.add("email");
  email.textContent = "✉️ @blitzrestaurant.com";
  contentDiv.appendChild(email);

  const address = document.createElement("p");
  address.classList.add("adress");
  address.textContent = "📍 Unknown, Unknow Street";
  contentDiv.appendChild(address);
}
