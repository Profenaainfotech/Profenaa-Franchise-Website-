//TOPBAR MARQUEE EFFECTS
  const marquee = document.querySelector('.marquee span');

  marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
  });

  marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
  });

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



//HERO SECTION

const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prevSlide');
const next = document.getElementById('nextSlide');
const dotsContainer = document.getElementById('sliderDots');

let currentSlide = 0;
const totalSlides = slides.length;

/* Create dots */
for(let i=0;i<totalSlides;i++){
  const dot = document.createElement('span');
  if(i===0) dot.classList.add('active');
  dot.addEventListener('click', ()=>goToSlide(i));
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll('.slider-dots span');

/* Show slide */
function goToSlide(n){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  currentSlide=n;
}

/* Next / Prev */
next.addEventListener('click', ()=>{ goToSlide((currentSlide+1)%totalSlides); });
prev.addEventListener('click', ()=>{ goToSlide((currentSlide-1+totalSlides)%totalSlides); });

/* Auto slide every 6s */
setInterval(()=>{ goToSlide((currentSlide+1)%totalSlides); },6000);


//WHO SECTION

/* TYPEWRITER WORD-BY-WORD */
const words = ["WHO", "WHO WE", "WHO WE ARE"];
let index = 0;
const typeTarget = document.getElementById("typeText");

function typeWords() {
  typeTarget.textContent = words[index];
  index = (index + 1) % words.length;
}

typeWords();
setInterval(typeWords, 1200);

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

//GRAPH SECTION
function gradient(ctx, area, start, end) {
  const g = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  g.addColorStop(0, start);
  g.addColorStop(1, end);
  return g;
}

/* ===== Chart 1: Colleges ===== */
const ctx1 = document.getElementById("collegesChart").getContext("2d");

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Central", "East", "North", "NorthEast", "South", "West"],
    datasets: [{
      data: [368, 331, 745, 48, 2100, 637],
      borderRadius: 16,
      borderSkipped: false,
      backgroundColor: (c) => {
        const { ctx, chartArea } = c.chart;
        if (!chartArea) return "#3b82f6";
        return gradient(ctx, chartArea, "#60a5fa", "#2563eb");
      }
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1800, easing: "easeOutQuart" },
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#e5e7eb" }, grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { color: "#e5e7eb" },
        grid: { color: "rgba(255,255,255,.08)" }
      }
    }
  }
});

/* ===== Chart 2: Students ===== */
const ctx2 = document.getElementById("studentsChart").getContext("2d");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Central", "East", "North", "NorthEast", "South", "West"],
    datasets: [{
      data: [135054, 95275, 305986, 4805, 798346, 279028],
      borderRadius: 16,
      borderSkipped: false,
      backgroundColor: (c) => {
        const { ctx, chartArea } = c.chart;
        if (!chartArea) return "#0f3d91";
        return gradient(ctx, chartArea, "#38bdf8", "#0f3d91");
      }
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 2000, easing: "easeOutCubic" },
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#e5e7eb" }, grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { color: "#e5e7eb" },
        grid: { color: "rgba(255,255,255,.08)" }
      }
    }
  }
});

// core prloblem 
const reveals1 = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));

// freanchise overview

  const vpCards = document.querySelectorAll('.vp-card');

  const revealVP = () => {
    const triggerBottom = window.innerHeight * 0.85;
    vpCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  };

  window.addEventListener('scroll', revealVP);
  window.addEventListener('load', revealVP);

//why prof franchise


const slides1 = document.querySelectorAll(".journey-slide");
let current = 0;

function showSlide(i) {
  slides1.forEach(s => s.classList.remove("active"));
  slides1[i].classList.add("active");
}

setInterval(() => {
  current = (current + 1) % slides1.length;
  showSlide(current);
}, 4000);



//SUCCESS STORIES


const track = document.querySelector('.success-track');
const cards = document.querySelectorAll('.success-card');
let index1 = 0;
const cardWidth = cards[0].offsetWidth + 24;

setInterval(() => {
  index1 += 2;
  if (index1 >= cards.length) index1 = 0;
  track.style.transform = `translateX(-${index1 * cardWidth}px)`;
}, 4000);



//APPLY

document.querySelector(".apply-btn").addEventListener("click", e => {
  e.preventDefault();
  alert("Thank you! Our team will contact you shortly.");
});


//about hero
const heroImg = document.querySelector('.hero-image img');

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    heroImg.style.animation = 'none';
    heroImg.offsetHeight; // reflow
    heroImg.style.animation = '';
  }
});

