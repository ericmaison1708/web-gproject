document.addEventListener("DOMContentLoaded", function () {
  // Xử lý Trang chủ
  const scrollBtn = document.getElementById("scrollToTop");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Xử lý Giới thiệu
  const aboutBtn = document.getElementById("goToAbout");
  const aboutSection = document.getElementById("about");
  if (aboutBtn && aboutSection) {
    aboutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});

// Xử lý Hướng dẫn
const guideBtn = document.getElementById("goToGuide");
const guideSection = document.getElementById("guide");

if (guideBtn && guideSection) {
  guideBtn.addEventListener("click", function (e) {
    e.preventDefault();
    guideSection.scrollIntoView({
      behavior: "smooth",
    });
  });
}
