//HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const services = document.querySelector(".services");
const serviceItems = document.querySelectorAll(".service-item");

/* Hamburger toggle */
hamburger.onclick = () => navMenu.classList.toggle("show");

/* Toggle main Services dropdown */
services.querySelector(".service-trigger").onclick = e => {
  e.stopPropagation();
  services.classList.toggle("open");
};

/* Toggle main category sub-dropdown */
serviceItems.forEach(item=>{
  const title = item.querySelector(".service-title");
  title.addEventListener("click", e=>{
    e.stopPropagation();
    const isOpen = item.classList.contains("open");
    serviceItems.forEach(i=>i.classList.remove("open"));
    if(!isOpen) item.classList.add("open");
  });
});

/* Close dropdown if click outside */
document.addEventListener("click", ()=>{
  services.classList.remove("open");
  serviceItems.forEach(i=>i.classList.remove("open"));
});



