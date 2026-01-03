const headerBg = document.querySelector(".header-bg");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    headerBg.style.transform = `translateY(${scrollY * 0.4}px)`;
});
