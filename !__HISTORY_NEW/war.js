window.addEventListener("scroll", () => {
    const section1 = document.querySelector(".section__1");
    const scrollY = window.scrollY;

    if (scrollY > 300) {
        section1.style.opacity = "0";
    } else {
        section1.style.opacity = "1";
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showblock');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.22 }); 

document.querySelectorAll('.content').forEach(block => observer.observe(block));

