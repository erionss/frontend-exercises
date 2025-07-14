const companies = [
  { name: "Company 1", image: "assets/company1.png" },
  { name: "Company 2", image: "assets/company2.png" },
  { name: "Company 3", image: "assets/company3.png" },
  { name: "Company 4", image: "assets/company4.png" },
  { name: "Company 5", image: "assets/company5.png" },
  { name: "Company 6", image: "assets/company6.png" },
  { name: "Company 7", image: "assets/company7.png" },
  { name: "Company 8", image: "assets/company8.png" },
  { name: "Company 9", image: "assets/company9.png" },
  { name: "Company 10", image: "assets/company10.png" },
  { name: "Company 11", image: "assets/company11.png" },
  { name: "Company 12", image: "assets/company12.png" },
  { name: "Company 13", image: "assets/company13.png" },
  { name: "Company 14", image: "assets/company14.png" },
  { name: "Company 15", image: "assets/company15.png" },
  { name: "Company 16", image: "assets/company16.png" },
  { name: "Company 17", image: "assets/company17.png" },
  { name: "Company 18", image: "assets/company18.png" },
  { name: "Company 19", image: "assets/company19.png" },
  { name: "Company 20", image: "assets/company20.png" }
];

const sliderTrack = document.getElementById("sliderTrack");

companies.forEach(company => {
  const img = document.createElement("img");
  img.src = company.image;
  img.alt = company.name;
  img.classList.add("slide");
  sliderTrack.appendChild(img);
});

window.addEventListener("load", () => {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const visibleSlides = 5;

  let currentIndex = 0;
  let autoSlideInterval;
  let isDragging = false;
  let startX = 0;
  let prevTranslate = 0;

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      moveToNextSlide();
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function moveToNextSlide() {
    currentIndex++;
    if (currentIndex > totalSlides - visibleSlides) {
      currentIndex = 0; // Loop back to start
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    const slideWidth = sliderTrack.clientWidth / visibleSlides;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  sliderTrack.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    stopAutoSlide();
    sliderTrack.style.cursor = "grabbing";
  });

  sliderTrack.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.pageX - startX;
    sliderTrack.style.transform = `translateX(${prevTranslate + dx}px)`;
  });

  sliderTrack.addEventListener("mouseup", () => {
    isDragging = false;
    prevTranslate = getCurrentTranslateX();
    sliderTrack.style.cursor = "grab";
    setTimeout(startAutoSlide, 3000); // Restart auto-slide after 3s
  });

  function getCurrentTranslateX() {
    const matrix = window.getComputedStyle(sliderTrack).transform;
    if (matrix !== "none") {
      const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(", ");
      return parseFloat(matrixValues[4]);
    }
    return 0;
  }

  sliderTrack.addEventListener("dragstart", (e) => e.preventDefault());

  startAutoSlide();
});
