(()=>{"use strict";function e(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Blitz Donuts",e.appendChild(t);const n=document.createElement("img");n.classList.add("mainImg"),n.src="/src/assets/dounuts.jpg",n.alt="donut",e.appendChild(n);const c=document.createElement("p");c.classList.add("des"),c.textContent="Best Donuts in the city",e.appendChild(c);const s=document.createElement("p");s.classList.add("des"),s.textContent="Order now",e.appendChild(s)}function t(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Blitz Donuts",t.classList.add("title"),e.appendChild(t);const n=document.createElement("img");n.classList.add("image"),n.src="/src/assets/item1.jpg",n.alt="item1",e.appendChild(n);const c=document.createElement("img");c.classList.add("image"),c.src="/src/assets/item2.jpg",c.alt="item2",e.appendChild(c);const s=document.createElement("img");s.classList.add("image"),s.src="/src/assets/item3.jpg",s.alt="item3",e.appendChild(s);const d=document.createElement("img");d.classList.add("image"),d.src="/src/assets/item4.jpg",d.alt="item4",e.appendChild(d)}function n(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Blitz Donuts",t.classList.add("title"),e.appendChild(t);const n=document.createElement("p");n.classList.add("phoneNumber"),n.textContent="📞 123 456 789",e.appendChild(n);const c=document.createElement("p");c.classList.add("email"),c.textContent="✉️ @blitzrestaurant.com",e.appendChild(c);const s=document.createElement("p");s.classList.add("adress"),s.textContent="📍 Unknown, Unknow Street",e.appendChild(s)}e(),document.querySelector(".home").addEventListener("click",e),document.querySelector(".menu").addEventListener("click",t),document.querySelector(".contact").addEventListener("click",n)})();