document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      direction: "horizontal",
      loop: false, // Alterado para false para evitar loops e simplificar a navegação
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      mousewheel: {
          invert: false, // Inverte a direção da rolagem do mouse
      }
  });

  // Função para atualizar a barra lateral
  function updateSidebar(index) {
      document.querySelectorAll(".Links li").forEach((li, idx) => {
          li.classList.toggle("activeLink", idx === index);
      });
  }

  // Função de navegação
  function Navigate(index) {
      swiper.slideTo(index, 1000, true);
      updateSidebar(index);
  }

  // Adiciona os eventos de clique aos itens do menu
  document.querySelectorAll(".Links li").forEach((li, index) => {
      li.addEventListener("click", () => Navigate(index));
  });

  // Atualiza a barra lateral quando o slide muda
  swiper.on('slideChange', function () {
      updateSidebar(swiper.activeIndex);
  });

  // Inicializa a barra lateral para o slide atual
  updateSidebar(swiper.activeIndex);
});
