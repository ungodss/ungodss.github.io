document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('open')
  })
})

// const cards = document.querySelectorAll('.services__card');

// cards.forEach(card => {
//   card.style.cursor = 'pointer';
//   card.addEventListener('click', () => {
//     const url = card.getAttribute('data-url')
//     window.location.href = url;
//   });
// })



var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Кнопка "вперед"
    prevEl: ".swiper-button-prev", // Кнопка "назад"
  },
});


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY * 0.5;
  document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
});


// const details = document.querySelectorAll('.ask__details');
// details.forEach(item => {
//   item.addEventListener('click', (e) => {
//     e.preventDefault();
//     const openItem = document.querySelector('.ask__details[open]');
//     if (openItem) openItem.open = false;
//     if (openItem !== item) item.open = true
//   })
// })

const details = document.querySelectorAll('.ask__details');

details.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      details.forEach(otherItem => {
        if (otherItem !== item && otherItem.open) {
          otherItem.open = false;
        }
      });
    }
  });
});


const detailsServices = document.querySelectorAll('.page-services__details');

detailsServices.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      detailsServices.forEach(otherItem => {
        if (otherItem !== item && otherItem.open) {
          otherItem.open = false;
        }
      });
    }
  });
});