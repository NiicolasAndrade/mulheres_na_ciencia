document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    // Configurações do Swiper
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Navegação da barra lateral
  const links = document.querySelectorAll("aside li");
  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      swiper.slideToLoop(index, 500);
      links.forEach((l) => l.classList.remove("activeLink"));
      link.classList.add("activeLink");
    });
  });

  // Atualiza a classe ativa ao mudar o slide
  swiper.on("slideChange", () => {
    links.forEach((l) => l.classList.remove("activeLink"));
    links[swiper.realIndex].classList.add("activeLink");
  });
});
