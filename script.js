const productsCarousel = new Swiper('#products', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#nextProduct',
    prevEl: '#prevProduct',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000, // Tempo em milissegundos entre cada slide
    disableOnInteraction: false
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },

})

const customersCarousel = new Swiper('#customers', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#nextCustomer',
    prevEl: '#prevCustomer',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000, // Tempo em milissegundos entre cada slide
    disableOnInteraction: true
  },
  // slidesPerView: 2,
  // spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },

})


const clientsCarousel = new Swiper('#clients', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#nextClient',
    prevEl: '#prevClient',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000, // Tempo em milissegundos entre cada slide
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
  
});

const partnersCarousel = new Swiper('#partners', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#nextPartner',
    prevEl: '#prevPartner',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000, // Tempo em milissegundos entre cada slide
    disableOnInteraction: false
  }, 
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

});

function mostrarDepoimento() {
  console.log('mostrarDepoimento');
  var card = document.querySelector('#teste');
  var depoimento = document.querySelector('.customerCardText');
  var cardFooter = document.querySelector('.customerCardFooter');

  if (depoimento.style.maxHeight === 'none' || depoimento.style.maxHeight === '') {
    // Calcula a altura real do conteúdo
    var alturaReal = depoimento.scrollHeight + cardFooter.scrollHeight;

    // Define a altura máxima para a altura real
    depoimento.style.maxHeight = '100%';
    cardFooter.style.maxHeight = cardFooter.scrollHeight + 'px'; // Adiciona isso

    // Ajusta a altura do card
    card.style.height = '100%';
  } else {
    // Se a altura máxima já foi atingida, redefine para ocultar parte do conteúdo
    depoimento.style.maxHeight = null;
    cardFooter.style.maxHeight = null; // Adiciona isso

    // Redefine a altura do card
    card.style.height = null;
  }
}






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
