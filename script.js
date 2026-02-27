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



//TOPBAR MARQUEE EFFECTS
  const marquee = document.querySelector('.marquee span');

  marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
  });

  marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
  });


//HERO SECTION


  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slider-dots');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let index = 0;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function updateSlider() {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function goToSlide(i) {
    index = i;
    updateSlider();
  }

  next.onclick = () => {
    index = (index + 1) % slides.length;
    updateSlider();
  };

  prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  };

  updateSlider();

  // Auto slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 6000);



// TITLE REVEAL
const header = document.querySelector(".section-header");
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.3 });

observer1.observe(header);

// CARD TOGGLE
document.querySelectorAll(".service-card").forEach(card => {
  card.querySelector(".arrow-btn").addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

//core problem
const animated = document.querySelectorAll(".animate");

const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, { threshold: 0.3 });

animated.forEach(el => observers.observe(el));

//why profenaa franchise

  const slides1 = document.querySelectorAll(".journey-slide");
  let currentSlide = 0;

  function showNextSlide() {
    // Remove active from current
    slides1[currentSlide].classList.remove("active");
    slides1[currentSlide].classList.add("exit");

    // Move index
    currentSlide = (currentSlide + 1) % slides1.length;

    // Activate next
    slides1[currentSlide].classList.remove("exit");
    slides1[currentSlide].classList.add("active");
  }

  // Auto slide every 3.5 seconds
  setInterval(showNextSlide, 3500);


//franchise overview


  const tabs = document.querySelectorAll(".fo-tab");
  const panels = document.querySelectorAll(".fo-panel");

  function activatePanel(target) {
    tabs.forEach(tab => tab.classList.remove("active"));
    panels.forEach(panel => panel.classList.remove("active"));

    document
      .querySelector(`.fo-tab[data-target="${target}"]`)
      .classList.add("active");

    document
      .querySelector(`.${target}`)
      .classList.add("active");
  }

  tabs.forEach(tab => {
    tab.addEventListener("mouseenter", () => {
      activatePanel(tab.dataset.target);
    });

    tab.addEventListener("click", () => {
      activatePanel(tab.dataset.target);
    });
  });

//RIGHT SIDE VIDEO


const video = document.getElementById("franchiseVideo");
const playBtn = document.getElementById("playPauseBtn");
const progress = document.getElementById("videoProgress");

playBtn.onclick = () => {
  if(video.paused){
    video.play();
    playBtn.textContent = "❚❚";
  } else {
    video.pause();
    playBtn.textContent = "▶";
  }
};

video.ontimeupdate = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
};

progress.oninput = () => {
  video.currentTime = (progress.value / 100) * video.duration;
};

//SUCCESS STORIES


  const track = document.querySelector('.success-track');
  const cards = document.querySelectorAll('.success-card');
  let index1 = 0;

  function slideCards() {
    const cardWidth = cards[0].offsetWidth + 30;
    index1 += 2;
    if (index1 >= cards.length) index1 = 0;
    track.style.transform = `translateX(-${index1 * cardWidth}px)`;
  }

  setInterval(slideCards, 4000);



window.addEventListener("load", () => {

  setTimeout(() => {
    const popup = document.getElementById("franchisePopup");
    if (popup) {
      popup.style.display = "flex";
    }
  }, 3000); // 3 seconds (change if needed)

});

function closePopup() {
  document.getElementById("franchisePopup").style.display = "none";
}



const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      showResult("success");
      form.reset();
      document.getElementById("franchisePopup").style.display = "none";
    } else {
      showResult("error", result.message);
    }

  } catch (error) {
    showResult("error", "Network error. Please try again.");
  }
});


function showResult(type, message = "") {

  const overlay = document.getElementById("resultOverlay");
  const title = document.getElementById("resultTitle");
  const msg = document.getElementById("resultMessage");

  if (type === "success") {
    title.innerHTML = "✅ Registered Successfully!";
    title.style.color = "#00ffcc";
    msg.innerHTML = "Our team will contact you soon.";
  } else {
    title.innerHTML = "❌ Something Went Wrong!";
    title.style.color = "#ff4d4d";
    msg.innerHTML = message || "Please try again later.";
  }

  overlay.style.display = "flex"; // show center
}


function closeResult() {
  document.getElementById("resultOverlay").style.display = "none";
}



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
