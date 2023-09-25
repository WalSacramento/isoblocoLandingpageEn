function handleClickMenu() {
  let menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('show');
}

let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = 100 + "%";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".arrows span");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

const customersWrapper = document.querySelector(".customersWrapper");
const customersCarousel = document.querySelector(".customersCarousel");
const firstCustomerCardWidth = customersCarousel.querySelector(".customerCard").offsetWidth;
const customerArrowBtns = document.querySelectorAll(".customersArrows span");
const customerCarouselChildrens = [...customersCarousel.children];

let isCustomerDragging = false;
let customerStartX;
let customerStartScrollLeft;

// Get the number of cards that can fit in the carousel at once
let customerCardPerView = Math.round(customersCarousel.offsetWidth / firstCustomerCardWidth );

// Insert copies of the last few customer cards to the beginning of the carousel for infinite scrolling
customerCarouselChildrens.slice(-customerCardPerView).reverse().forEach(card => {
    customersCarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few customer cards to the end of the carousel for infinite scrolling
customerCarouselChildrens.slice(0, customerCardPerView).forEach(card => {
    customersCarousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel to an appropriate position to hide the first few duplicate customer cards on Firefox
customersCarousel.classList.add("no-transition");
customersCarousel.scrollLeft = customersCarousel.offsetWidth;
customersCarousel.classList.remove("no-transition");

// Add event listeners for the customer arrow buttons to scroll the carousel left and right
customerArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        customersCarousel.scrollLeft += btn.id == "customerLeft" ? -firstCustomerCardWidth : firstCustomerCardWidth;
    });
});

const customerDragStart = (e) => {
    isCustomerDragging = true;
    customersCarousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    customerStartX = e.pageX;
    customerStartScrollLeft = customersCarousel.scrollLeft;
}

const customerDragging = (e) => {
    if (!isCustomerDragging) return; // if isCustomerDragging is false, return from here
    // Updates the scroll position of the carousel based on the cursor movement
    customersCarousel.scrollLeft = customerStartScrollLeft - (e.pageX - customerStartX);
}

const customerDragStop = () => {
    isCustomerDragging = false;
    customersCarousel.classList.remove("dragging");
}

const customerInfiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (customersCarousel.scrollLeft === 0) {
        customersCarousel.classList.add("no-transition");
        customersCarousel.scrollLeft = customersCarousel.scrollWidth - (2 * customersCarousel.offsetWidth);
        customersCarousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(customersCarousel.scrollLeft) === customersCarousel.scrollWidth - customersCarousel.offsetWidth) {
        customersCarousel.classList.add("no-transition");
        customersCarousel.scrollLeft = customersCarousel.offsetWidth;
        customersCarousel.classList.remove("no-transition");
    }
}

customersCarousel.addEventListener("mousedown", customerDragStart);
customersCarousel.addEventListener("mousemove", customerDragging);
document.addEventListener("mouseup", customerDragStop);
customersCarousel.addEventListener("scroll", customerInfiniteScroll);

const brandWrapper = document.querySelector(".brandWrapper");
const brandCarousel = document.querySelector(".brandCarousel");
const firstBrandWidth = brandCarousel.querySelector(".brand").offsetWidth;
const brandArrowBtns = document.querySelectorAll(".brandsArrows span");
const brandCarouselChildrens = [...brandCarousel.children];

let brandIsDragging = false,
  brandStartX,
  brandStartScrollLeft;

// Get the number of brand cards that can fit in the carousel at once
let brandCardPerView = Math.round(brandCarousel.offsetWidth / firstBrandWidth);

// Insert copies of the last few brand cards to the beginning of carousel for infinite scrolling
brandCarouselChildrens.slice(-brandCardPerView).reverse().forEach((brandCard) => {
  brandCarousel.insertAdjacentHTML("afterbegin", brandCard.outerHTML);
});

// Insert copies of the first few brand cards to the end of carousel for infinite scrolling
brandCarouselChildrens.slice(0, brandCardPerView).forEach((brandCard) => {
  brandCarousel.insertAdjacentHTML("beforeend", brandCard.outerHTML);
});

// Scroll the brand carousel at the appropriate position to hide the first few duplicate brand cards on Firefox
brandCarousel.classList.add("no-transition");
brandCarousel.scrollLeft = brandCarousel.offsetWidth;
brandCarousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the brand carousel left and right
brandArrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    brandCarousel.scrollLeft +=
      btn.id == "left" ? -firstBrandWidth : firstBrandWidth;
  });
});

const brandDragStart = (e) => {
  brandIsDragging = true;
  brandCarousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the brand carousel
  brandStartX = e.pageX;
  brandStartScrollLeft = brandCarousel.scrollLeft;
};

const brandDragging = (e) => {
  if (!brandIsDragging) return; // if brandIsDragging is false return from here
  // Updates the scroll position of the brand carousel based on the cursor movement
  brandCarousel.scrollLeft = brandStartScrollLeft - (e.pageX - brandStartX);
};

const brandDragStop = () => {
  brandIsDragging = false;
  brandCarousel.classList.remove("dragging");
};

const brandInfiniteScroll = () => {
  // If the brand carousel is at the beginning, scroll to the end
  if (brandCarousel.scrollLeft === 0) {
    brandCarousel.classList.add("no-transition");
    brandCarousel.scrollLeft =
      brandCarousel.scrollWidth - 2 * brandCarousel.offsetWidth;
    brandCarousel.classList.remove("no-transition");
  }
  // If the brand carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(brandCarousel.scrollLeft) ===
    brandCarousel.scrollWidth - brandCarousel.offsetWidth
  ) {
    brandCarousel.classList.add("no-transition");
    brandCarousel.scrollLeft = brandCarousel.offsetWidth;
    brandCarousel.classList.remove("no-transition");
  }
};

// Função para rolar automaticamente os cards das marcas
const autoScrollBrands = () => {
  brandCarousel.scrollLeft += firstBrandWidth;
};

// Configure um intervalo para rolar automaticamente os cards das marcas
const scrollInterval = setInterval(autoScrollBrands, 3000); // Rola a cada 3 segundos

brandCarousel.addEventListener("mousedown", brandDragStart);
brandCarousel.addEventListener("mousemove", brandDragging);
document.addEventListener("mouseup", brandDragStop);
brandCarousel.addEventListener("scroll", brandInfiniteScroll);
