gsap.registerPlugin(ScrollTrigger);

/* UNIVERSAL SCROLL REVEAL - PLAY ONCE */
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true       // 🔥 runs only once
      }
    }
  );
});



/* BUBBLE ANIMATION */
document.querySelectorAll(".bubble").forEach((bubble) => {
  let size = gsap.utils.random(10, 40);
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  gsap.set(bubble, {
    x: gsap.utils.random(0, window.innerWidth),
    y: gsap.utils.random(0, window.innerHeight)
  });

  gsap.to(bubble, {
    y: "-=150",
    x: "+=50",
    duration: gsap.utils.random(10, 20),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

//TOPBAR MARQUEE EFFECTS
  const marquee = document.querySelector('.marquee span');

  marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
  });

  marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
  });


//hero section

const headingText =
  "Build a Profitable Business with <span>Profenaa Groups</span>";

const subText =
  "India’s Fastest Growing Education & Skill Development Franchise";

const headingEl = document.getElementById("typeHeading");
const subEl = document.getElementById("typeSub");

let hWords = headingText.split(" ");
let sWords = subText.split(" ");

let hIndex = 0;
let sIndex = 0;

function typeHeading() {
  if (hIndex < hWords.length) {
    headingEl.innerHTML += hWords[hIndex] + " ";
    hIndex++;
    setTimeout(typeHeading, 160);
  } else {
    headingEl.innerHTML += `<span class="cursor"></span>`;
    setTimeout(typeSub, 600);
  }
}

function typeSub() {
  if (sIndex < sWords.length) {
    subEl.innerHTML += sWords[sIndex] + " ";
    sIndex++;
    setTimeout(typeSub, 120);
  }
}

typeHeading();



//profenaa network

const slides = document.querySelectorAll('.franchise-slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4500);


//testimonals

const track = document.querySelector(".tc-track");
const cards = document.querySelectorAll(".tc-card");

let index1 = 0;
let visibleCards = window.innerWidth <= 900 ? 1 : 2;

function updateVisible() {
  visibleCards = window.innerWidth <= 900 ? 1 : 2;
}
window.addEventListener("resize", updateVisible);

setInterval(() => {
  index1 += visibleCards;
  if (index1 >= cards.length) index1 = 0;

  const cardWidth = cards[0].offsetWidth + 50;
  track.style.transform = `translateX(-${index1 * cardWidth}px)`;
}, 4000);



//faq

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('active');
  });
});


//profenaa partner


 const partnerSlides = document.querySelectorAll('.partner-slide');
const partnerContents = document.querySelectorAll('.partner-content');
const partnerDots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showPartnerSlide(i) {
  partnerSlides.forEach(slide => slide.classList.remove('active'));
  partnerContents.forEach(content => content.classList.remove('active'));
  partnerDots.forEach(dot => dot.classList.remove('active'));

  partnerSlides[i].classList.add('active');
  partnerContents[i].classList.add('active');
  partnerDots[i].classList.add('active');
}

/* NEXT */
document.querySelector('.next').onclick = () => {
  currentIndex = (currentIndex + 1) % partnerSlides.length;
  showPartnerSlide(currentIndex);
};

/* PREVIOUS */
document.querySelector('.prev').onclick = () => {
  currentIndex = (currentIndex - 1 + partnerSlides.length) % partnerSlides.length;
  showPartnerSlide(currentIndex);
};

/* DOT CLICK */
partnerDots.forEach((dot, i) => {
  dot.onclick = () => {
    currentIndex = i;
    showPartnerSlide(currentIndex);
  };
});

/* AUTO SLIDE */
setInterval(() => {
  currentIndex = (currentIndex + 1) % partnerSlides.length;
  showPartnerSlide(currentIndex);
}, 3000);


//loader

  window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
  });

//rocket 

  const rocketBtn = document.querySelector('.rocket-top');

  rocketBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  //icons
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelector(".social-float-icons");
  if (icons) {
    icons.style.animationDelay = "0.3s";
  }
});

//office - infra
const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});
