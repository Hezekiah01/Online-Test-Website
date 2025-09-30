// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Typing effect for hero text
const heroText = document.querySelector(".hero h1");
if (heroText) {
  const text = heroText.textContent;
  heroText.textContent = "";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      heroText.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 80);
    }
  }
  typeEffect();
}

// Fade-in sections on scroll
const sections = document.querySelectorAll("section, main");
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ==========================
// Mobile Menu Toggle
// ==========================
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ==========================
// Rotating Hero Text
// ==========================
const rotateText = document.querySelector(".rotate-text");
if (rotateText) {
  const phrases = [
    "Learn. Grow. Transform.",
    "Scholarship for All.",
    "Your Tech Future Starts Here!"
  ];
  let i = 0;
  setInterval(() => {
    rotateText.textContent = phrases[i];
    i = (i + 1) % phrases.length;
  }, 3000);
}

// ==========================
// Scroll-to-Top Button
// ==========================
// const scrollBtn = document.querySelector("#scrollTop");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 200) {
//     scrollBtn.style.display = "block";
//   } else {
//     scrollBtn.style.display = "none";
//   }
// });
// if (scrollBtn) {
//   scrollBtn.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });
// }

// ==========================
// Stats Counter Animation
// ==========================
const counters = document.querySelectorAll(".counter");
if (counters.length > 0) {
  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// ==========================
// Reveal on Scroll Animation
// ==========================
const revealEls = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

// const revealEls = document.querySelectorAll(".reveal");
// window.addEventListener("scroll"() => {
//   revealEls.forEach(el => {
//     const top = el.getBoundingClientRect(). top;
//     if (top <window.innerHeight - 50) {
//       el.classList.add("active");
//     }
//   })
// })
