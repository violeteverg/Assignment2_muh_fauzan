// section navbar
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  function toggleMenu() {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    // Add smooth transition
    if (mobileMenu.classList.contains("flex")) {
      setTimeout(() => {
        mobileMenu.style.opacity = "1";
        mobileMenu.style.transform = "translateY(0)";
      }, 10);
    } else {
      mobileMenu.style.opacity = "0";
      mobileMenu.style.transform = "translateY(-100%)";
    }
  }

  mobileMenuButton.addEventListener("click", toggleMenu);

  // Add CSS for smooth transition
  const style = document.createElement("style");
  style.textContent = `
    .mobile-menu {
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: translateX(100%);
    }
    .mobile-menu.flex {
      opacity: 1;
      transform: translateX(0);
    }
  `;
  document.head.appendChild(style);
});
// document.addEventListener("DOMContentLoaded", function () {
//   const mobileMenuButton = document.querySelector(".mobile-menu-button");
//   const mobileMenu = document.querySelector(".mobile-menu");

//   function toggleMenu() {
//     mobileMenu.classList.toggle("hidden");
//     mobileMenu.classList.toggle("flex");
//   }

//   mobileMenuButton.addEventListener("click", toggleMenu);
// });

//  section slideshow
const slidesData = [
  {
    title: "Plant E-Commerce",
    imgSrc: "assets/rockpaperstrategy-1600.jpg",
  },
  {
    title: "Clone Twitter",
    imgSrc: "assets/requirements.png",
  },
  {
    title: "Expense Tracker",
    imgSrc: "assets/rockpaperstrategy-1600.jpg",
  },
  {
    title: "Maen Yuk",
    imgSrc: "assets/rockpaperstrategy-1600.jpg",
  },
];

const slideshowContainer = document.getElementById("slideshow-container");

// Fungsi untuk membuat div secara dinamis berdasarkan data
slidesData.forEach((slide, index) => {
  const slideDiv = document.createElement("div");
  slideDiv.className = "mySlides fade";
  slideDiv.innerHTML = `
    <div class="relative container bg-slate-300 border w-[90%] mx-auto group">
      <img src="${slide.imgSrc}" alt="slide_${
    index + 1
  }" class="block w-full h-full lg:h-[400px]" />
    </div>
  `;

  slideshowContainer.appendChild(slideDiv);
});

// Tambahkan dots di atas gambar
const dotsContainer = document.createElement("div");
dotsContainer.className =
  "dots-container absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-5 lg:space-x-8";
slideshowContainer.appendChild(dotsContainer);

slidesData.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.className =
    "dot w-3 h-3  lg:w-4 lg:h-4 border-2 border-white rounded-full cursor-pointer";
  dot.onclick = () => currentSlide(index + 1);
  dotsContainer.appendChild(dot);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-white", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " bg-white";
}

// section mapping card
document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    {
      image: "./assets/photo.png",
      name: "Evan lathi",
      title: "PC Gamer",
      quote: "One of my gaming highlight of the year",
      date: "June 18, 2021",
    },
    {
      image: "./assets/photo_2.png",
      name: "Jada Griffin",
      title: "Nedrecator",
      quote: "The next big thing in the world of streaming and survival games",
      date: "July 10, 2021",
    },
    {
      image: "./assets/photo_3.png",
      name: "Aaron Williams",
      title: "Uproxx",
      quote: "Snoop Dogg Playing The Wildly Entertaining 'SOS' Is Ridiculous.",
      date: "December 24, 2021",
    },
  ];

  function getCardAlignment(index) {
    switch (index) {
      case 0:
        return "lg:justify-center";
      case 1:
        return "justify-end lg:justify-start";
      case 2:
        return "justify-end lg:justify-center";
      default:
        return "lg:justify-center";
    }
  }

  function createCard(card, index) {
    return `
            <div class="flex ${getCardAlignment(index)}">
                <div class="flex flex-col p-4 gap-4 w-full items-center justify-center bg-[#FFFFFF14] lg:w-[70%]">
                    <div class="flex p-1 justify-between w-full">
                        <div class="relative flex gap-4">
                            <img src="${
                              card.image
                            }" alt="medali" class="z-10" />
                            <span class="w-[65px] h-[65px] rounded-full bg-yellow-500 absolute left-[0.3rem] top-[56%] transform -translate-y-1/2"></span>
                            <div class="flex flex-col justify-center">
                                <h2 class="text-2xl text-yellow-500 font-abel">${
                                  card.name
                                }</h2>
                                <p class="text-[#8C8C8D] font-open-sans">${
                                  card.title
                                }</p>
                            </div>
                        </div>
                        <a href="https://twitter.com" target="_blank" class="text-slate-600 hover:text-blue-400 text-3xl">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="flex flex-col w-full justify-start items-start space-y-4">
                        <h3 class="text-lg font-open-sans lg:w-[80%]">${
                          card.quote
                        }</h3>
                        <p class="text-[#8C8C8D] font-open-sans">${
                          card.date
                        }</p>
                    </div>
                </div>
            </div>
        `;
  }

  const cardsContainer = document.getElementById("cards-container");
  const cardsHTML = cards
    .map((card, index) => createCard(card, index))
    .join("");
  cardsContainer.innerHTML = `
        <div class="p-4 flex flex-col space-y-6">
            ${cardsHTML}
        </div>
    `;
});
