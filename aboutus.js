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


//who we are section
const texts = [
  "Who We Are",
  "Driven by Innovation",
  "Building Future-Ready Businesses",
  "Empowering Education & Growth"
];

const typingSpeed = 80;
const erasingSpeed = 40;
const delayBetween = 1500;

let textIndex = 0;
let charIndex = 0;
const typeElement = document.getElementById("whoTypeText");

function typeLoop() {
  if (charIndex < texts[textIndex].length) {
    typeElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeLoop, typingSpeed);
  } else {
    setTimeout(eraseLoop, delayBetween);
  }
}

function eraseLoop() {
  if (charIndex > 0) {
    typeElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseLoop, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeLoop, typingSpeed);
  }
}

/* START TYPING IMMEDIATELY */
typeLoop();


//vision and mission  section


  const buttons = document.querySelectorAll(".vmv-btn");
  const contents = document.querySelectorAll(".contents");
  const indicator = document.querySelector(".line-indicator");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // Remove active states
      buttons.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Activate clicked
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");

      // Move indicator
      indicator.className = "line-indicator " + btn.dataset.line;
    });
  });



  //why profenaa 
  
  
  /*const slides = document.querySelectorAll('.slide');
  const nums = document.querySelectorAll('.num');
  let active = 0;

  nums.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.dataset.slide;
      if (index == active) return;

      slides[active].classList.remove('active');
      slides[index].classList.add('active');

      nums[active].classList.remove('active');
      btn.classList.add('active');

      active = index;
    });
  });*/

  const slides = document.querySelectorAll(".slide");
const buttons1 = document.querySelectorAll(".num");

buttons1.forEach(btn => {
  btn.addEventListener("click", () => {
    const index = btn.dataset.slide;

    slides.forEach(s => s.classList.remove("active"));
    buttons1.forEach(b => b.classList.remove("active"));

    slides[index].classList.add("active");
    btn.classList.add("active");

    // reset animation cleanly
    slides[index].style.transform = "translateY(-120px)";
    setTimeout(() => {
      slides[index].style.transform = "translateY(0)";
    }, 20);
  });
});


  //profenaa journey

 
const images = document.querySelectorAll('.slider-image');
const contents1 = document.querySelectorAll('.content-box');
const bars = document.querySelectorAll('.slider-bar');

let current = 0;
const total = images.length;

// FUNCTION TO ACTIVATE STEP
const images2 = document.querySelectorAll('.slider-left .slider-image');
const contents2 = document.querySelectorAll('.slider-right .content-box');
const bars2 = document.querySelectorAll('.slider-bar');

let current2 = 0;
const total2 = images2.length;

function activateStep2(index) {
  images2.forEach(img => img.classList.remove('active'));
  contents2.forEach(c => c.classList.remove('active'));
  bars2.forEach(b => b.classList.remove('active'));

  images2[index].classList.add('active');
  contents2[index].classList.add('active');
  bars2[index].classList.add('active');
}

// AUTO SLIDER
setInterval(() => {
  current2 = (current2 + 1) % total2;
  activateStep2(current2);
}, 4000);

// CLICK BAR
bars2.forEach((bar, i) => {
  bar.addEventListener('click', () => {
    current2 = i;
    activateStep2(current2);
  });
});


//count section


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  let started = false;

  const runCounter = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 120;

      const update = () => {
        count += speed;
        if (count < target) {
          counter.textContent = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      update();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        runCounter();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(document.querySelector(".impact-section"));
});

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
