let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function loop() {
    nextSlide()
    setTimeout(loop,5000);
}
loop()

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navWrapper = document.querySelector('.nav-wrapper');

    // Функция для открытия и закрытия бургер-меню
    function toggleBurgerMenu() {
        navWrapper.classList.toggle('active');
    }

    // Слушатель события клика на кнопку бургер-меню
    burgerMenu.addEventListener('click', function () {
        toggleBurgerMenu();
    });

    // Слушатель события изменения размера окна для отображения навигации при ширине экрана более 700px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 700) {
            navWrapper.classList.remove('active');
        }
    });

    // Слушатель события клика на пункты бургер-меню для их закрытия
    navWrapper.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            toggleBurgerMenu();
        }
    });

    // Добавим вызов проверки при загрузке страницы
    window.addEventListener('load', function () {
        if (window.innerWidth > 700) {
            navWrapper.classList.remove('active');
        }
    });
});