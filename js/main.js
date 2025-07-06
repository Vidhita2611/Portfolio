document.addEventListener('DOMContentLoaded', () => {

  // Typed.js
  if (document.querySelector("#typed")) {
    new Typed("#typed", {
      strings: ["Web Developer.", "Designer.", "Problem Solver."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  // AOS
  AOS.init();

  // Animate skill bars
  document.querySelectorAll(".fill").forEach(bar => {
    setTimeout(() => {
      console.log("Filling bar to:", bar.dataset.width);
      bar.style.width = bar.dataset.width;
    }, 100);
  });

  // Swiper
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 3000,
      }
    });
  }

  // Sidebar toggle
  const menuBtn = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("open");
    });
  }

  if (closeSidebar && sidebar) {
    closeSidebar.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.remove("open");
    });
  }

  document.addEventListener("click", (e) => {
    if (sidebar) {
      const isClickInsideSidebar = sidebar.contains(e.target);
      const isClickOnMenuBtn = menuBtn?.contains(e.target);

      if (!isClickInsideSidebar && !isClickOnMenuBtn) {
        sidebar.classList.remove("open");
      }
    }
  });

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");
    });
  }

  // Color palette
  const paletteBtn = document.getElementById('palette-btn');
  const colorOptions = document.querySelector('.color-options');
  const colorCircles = document.querySelectorAll('.color-circle');

  if (paletteBtn && colorOptions) {
    paletteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      colorOptions.classList.toggle('show');
    });
  }

  colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
      const selectedColor = circle.getAttribute('data-color');
      document.documentElement.style.setProperty('--highlight-color', selectedColor);
      if (colorOptions) {
        colorOptions.classList.remove('show');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (
      colorOptions &&
      !colorOptions.contains(e.target) &&
      !paletteBtn?.contains(e.target)
    ) {
      colorOptions.classList.remove('show');
    }
  });

});
