const companies = [
  { name: "Adidas", image: "assets/company1.png", description: "Adidas is a global sportswear brand known for innovative athletic shoes, apparel, and accessories." },
  { name: "Starbucks", image: "assets/company2.png", description: "Starbucks is the world’s largest coffeehouse chain offering specialty coffee drinks, teas, and pastries." },
  { name: "Pepsi", image: "assets/company3.png", description: "PepsiCo is a multinational beverage and snack company best known for its Pepsi soft drinks." },
  { name: "McDonald's", image: "assets/company4.png", description: "McDonald’s is a leading global fast-food chain famous for burgers, fries, and the Big Mac." },
  { name: "KFC", image: "assets/company5.png", description: "KFC specializes in fried chicken and is recognized for its secret blend of 11 herbs and spices." },
  { name: "Burger King", image: "assets/company6.png", description: "Burger King is a fast-food chain famous for flame-grilled burgers and the iconic Whopper." },
  { name: "Polo Ralph Lauren", image: "assets/company7.png", description: "Polo Ralph Lauren is a luxury fashion brand known for its elegant designs and polo shirts." },
  { name: "The North Face", image: "assets/company8.png", description: "The North Face provides outdoor gear and clothing for extreme weather and adventure sports." },
  { name: "Target", image: "assets/company9.png", description: "Target is a U.S. retail giant offering a variety of affordable goods from apparel to electronics." },
  { name: "Airbnb", image: "assets/company10.png", description: "Airbnb connects travelers to unique stays and experiences hosted by locals worldwide." },
  { name: "NASA", image: "assets/company11.png", description: "NASA is the U.S. government agency responsible for space exploration and research." },
  { name: "Netflix", image: "assets/company12.png", description: "Netflix is a leading streaming platform offering movies, series, documentaries, and original productions." },
  { name: "Porsche", image: "assets/company13.png", description: "Porsche manufactures luxury sports cars, SUVs, and sedans with a focus on performance and design." },
  { name: "Red Bull", image: "assets/company14.png", description: "Red Bull is an energy drink company known for its marketing in extreme sports and adventure events." },
  { name: "Amazon", image: "assets/company15.png", description: "Amazon is a global e-commerce and cloud computing company, known for fast delivery and a vast catalog." },
  { name: "Rockstar Games", image: "assets/company16.png", description: "Rockstar Games develops and publishes video games like Grand Theft Auto and Red Dead Redemption." },
  { name: "Coca-Cola", image: "assets/company17.png", description: "Coca-Cola is the world's most recognized soft drink brand, with a range of beverages sold globally." },
  { name: "LEGO", image: "assets/company18.png", description: "LEGO produces interlocking plastic bricks and sets, inspiring creativity in children and adults." },
  { name: "Ford", image: "assets/company19.png", description: "Ford is an American automaker known for its trucks, SUVs, and iconic Mustang sports car." },
  { name: "Shell", image: "assets/company20.png", description: "Shell is a global energy company focused on oil, gas, and renewable energy solutions." }
];

const sliderTrack = document.getElementById("sliderTrack");

// Render company images dynamically
companies.forEach((company, index) => {
  const img = document.createElement("img");
  img.src = company.image;
  img.alt = company.name;
  img.classList.add("slide");
  img.dataset.index = index;
  sliderTrack.appendChild(img);

  // Attach click listener directly to each image
  img.addEventListener("click", () => {
    if (!isDragging) { // Only open popup if not dragging
      showCompanyPopup(companies[index]);
    }
  });
});

// Initialize slider
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const visibleSlides = 5;

let currentIndex = 0;
let autoSlideInterval;
let isDragging = false;
let startX = 0;
let prevTranslate = 0;

function startAutoSlide() {
  autoSlideInterval = setInterval(moveToNextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function moveToNextSlide() {
  currentIndex++;
  if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = 0;
  }
  updateSliderPosition();
}

function updateSliderPosition() {
  const slideWidth = sliderTrack.clientWidth / visibleSlides;
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Drag logic
sliderTrack.addEventListener("mousedown", (e) => {
  isDragging = false;
  startX = e.pageX;
  stopAutoSlide();
  sliderTrack.style.cursor = "grabbing";
});

sliderTrack.addEventListener("mousemove", (e) => {
  if (e.buttons !== 1) return; // Only when mouse button is held
  isDragging = true;
  const dx = e.pageX - startX;
  sliderTrack.style.transform = `translateX(${prevTranslate + dx}px)`;
});

sliderTrack.addEventListener("mouseup", (e) => {
  prevTranslate = getCurrentTranslateX();
  sliderTrack.style.cursor = "grab";
  setTimeout(startAutoSlide, 3000);
  setTimeout(() => { isDragging = false; }, 50); // Reset dragging state
});

// Prevent image dragging
sliderTrack.addEventListener("dragstart", (e) => e.preventDefault());

function getCurrentTranslateX() {
  const matrix = window.getComputedStyle(sliderTrack).transform;
  if (matrix !== "none") {
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(", ");
    return parseFloat(matrixValues[4]);
  }
  return 0;
}

function showCompanyPopup(company) {
  const popupOverlay = document.createElement("div");
  popupOverlay.classList.add("company-popup-overlay");

  popupOverlay.innerHTML = `
    <div class="company-popup">
      <button class="close-btn">&times;</button>
      <h2>${company.name}</h2>
      <img src="${company.image}" alt="${company.name}">
      <p>${company.description}</p>
    </div>
  `;

  document.body.appendChild(popupOverlay);

  popupOverlay.querySelector(".close-btn").addEventListener("click", () => {
    document.body.removeChild(popupOverlay);
  });

  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      document.body.removeChild(popupOverlay);
    }
  });
}

startAutoSlide();
