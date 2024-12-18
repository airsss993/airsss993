document.addEventListener("DOMContentLoaded", () => {
    const hiddenmain = document.querySelector(".hiddenmain");
    const hello = document.querySelector(".hello");
    const header = document.querySelector("header");

    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
        hello.classList.add("show");

        setTimeout(() => {
            hello.classList.add("hide");

            setTimeout(() => {
                hiddenmain.classList.add("show");
                header.classList.add("show");
                sessionStorage.setItem("hasVisited", "true");
            }, 1700);
        }, 3000);
    } else {
        hello.style.display = "none";
        hiddenmain.classList.add("show");
        header.classList.add("show");
    }
});

// window.addEventListener("scroll", function () {
//     const header = document.querySelector("header");
//
//     if (window.scrollY > 50) {
//         header.style.borderBottom = "1px solid #6d6d6d11";
//         header.style.backdropFilter = "blur(2px)";
//         header.style.WebkitBackdropFilter = "blur(2px)";
//     } else {
//         header.style.borderBottom = "1px solid #33333300";
//         header.style.backdropFilter = "blur(0px)";
//         header.style.WebkitBackdropFilter = "blur(0px)";
//     }
// });

const popupLink = document.querySelectorAll(".popup__link");

popupLink.forEach(function (link) {
    link.addEventListener('click', function () {
        let popupId = link.getAttribute('data-img');
        const popup = document.querySelector(popupId);

        if (popup) {
            popup.classList.add('show');
        }
    });
});

document.addEventListener('click', (event) => {
    const openPopup = document.querySelector('.popup.show');

    if (openPopup && !event.target.closest('.popup__content') && !event.target.closest('.popup__link')) {
        openPopup.classList.remove('show');
    }
})