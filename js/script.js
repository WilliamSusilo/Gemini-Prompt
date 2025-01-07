// Menunggu sampai DOM sepenuhnya termuat sebelum menjalankan kode
window.addEventListener("DOMContentLoaded", function () {
  // 1. Untuk membuka sidebar (aside)
  // Fitur ini memungkinkan pengguna membuka atau menutup sidebar dengan mengklik tombol toggle.
  // Cara mengakses: Klik tombol berwarna biru bertuliskan "Our Writer" dengan id "toggle-btn" untuk membuka atau menutup sidebar.
  document.getElementById("toggle-btn").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  });

  // 2. Untuk slider pada menu carousel
  // Fitur ini membuat carousel slider di mana pengguna bisa berpindah slide menggunakan tombol "Previous" dan "Next".
  // Cara mengakses: Klik tombol Previous dengan id "prev-btn" untuk melihat slide sebelumnya, dan tombol Next dengan id "next-btn" untuk melihat slide berikutnya.
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  document.getElementById("prev-btn").addEventListener("click", () => {
    moveSlide(-1);
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    moveSlide(1);
  });

  function moveSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel();
  }

  function updateCarousel() {
    const container = document.querySelector(".pitfalls-desc");
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // 3. Untuk hamburger menu
  // Fitur ini membuka dan menutup menu navigasi pada ukuran layar kecil dengan klik tombol hamburger (tiga garis berlapis).
  // Cara mengakses: Klik tombol berbentuk hamburger (tiga garis berlapis) dengan class "navbar-toggler" untuk membuka atau menutup menu.
  const toggler = document.querySelector(".navbar-toggler");
  const header = document.querySelector("[data-header]");

  toggler.addEventListener("click", function () {
    header.classList.toggle("navbar-active");
  });

  // 4. Untuk kembali ke tampilan paling atas
  // Fitur ini menampilkan tombol "go to top" ketika pengguna melakukan scroll lebih dari 800px ke bawah.
  // Cara mengakses: Saat halaman di-scroll lebih dari 800px, tombol "go to top" akan muncul dan dapat diklik untuk kembali ke atas.
  const goTopBtn = document.querySelector("[data-go-top]");
  window.addEventListener("scroll", function () {
    window.scrollY >= 800 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
  });
});
