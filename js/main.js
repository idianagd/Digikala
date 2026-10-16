var heroSliderSwiper = new Swiper(".hero_slider_swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var discountedProductsSlider = new Swiper(".discounted_products_swiper", {
  slidesPerView: 6.5,
  spaceBetween: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer = 24 * 60 * 60;

function showRemaining() {
  const now = Date.now();

  const end = new Date();

  end.setHours(24, 0, 0, 0);

  const remaining = end - now;

  const hours = Math.floor(remaining / 1000 / 60 / 60);
  const minutes = Math.floor((remaining % _hour) / _minute);
  const seconds = Math.floor((remaining % _minute) / _second);

  const secondsElement = document.querySelector("#second");
  const minutesElement = document.querySelector("#minutes");
  const hoursElement = document.querySelector("#hours");

  hoursElement.textContent = hours < 10 ? "0" + hours : hours;
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(showRemaining, 1000);

var productsSlider = new Swiper(".products_slider_swiper", {
  slidesPerView: 7.25,
  spaceBetween: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var suggestedProducts = new Swiper(".suggested_products_swiper", {
  slidesPerView: 4,
  spaceBetween: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var popularBrands = new Swiper(".popular_brands_swiper", {
  slidesPerView: 12.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Scroll To Top
const goToTopButton = document.getElementById("goToTop");

function GoToTop() {
  window.scrollTo(0, 0);
}

goToTopButton.addEventListener("click", GoToTop);

// NewsLetter Form Handler
const newsLetterForm = document.getElementById("newsletter_form");
const newsLetterInput = document.getElementById("newsletter_input");
const newsLetterSubmitButton = document.getElementById("newsletter_submit");

newsLetterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("ایمیل شما در خبرنامه ثبت شد با تشکر!");
});

newsLetterInput.addEventListener("input", (e) => {
  if (e.target.value) {
    newsLetterSubmitButton.disabled = false;
  } else {
    newsLetterSubmitButton.disabled = true;
  }
});

// Expandable Component
const expandableElement = document.getElementById("expandable");
const expandableToggleButtonElement = document.querySelector(
  "#expandable > button#show_more",
);

expandableToggleButtonElement.addEventListener("click", () => {
  if (expandableElement.classList.contains("open")) {
    expandableElement.classList.remove("open");
    expandableToggleButtonElement.textContent = "مشاهده بیشتر";
  } else {
    expandableElement.classList.add("open");
    expandableToggleButtonElement.textContent = "بستن";
  }
});
