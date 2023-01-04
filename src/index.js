import { initialPageLoad } from "./pageload";
import { menu } from "./menu";
import { contact } from "./contact";

initialPageLoad();

let tabSwitch = (() => {
  const homeTab = document.querySelector(".home");
  homeTab.addEventListener("click", initialPageLoad);

  const menuTab = document.querySelector(".menu");
  menuTab.addEventListener("click", menu);

  const contactTab = document.querySelector(".contact");
  contactTab.addEventListener("click", contact);
})();
