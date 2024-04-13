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

    // ������� ��� �������� � �������� ������-����
    function toggleBurgerMenu() {
        navWrapper.classList.toggle('active');
    }

    // ��������� ������� ����� �� ������ ������-����
    burgerMenu.addEventListener('click', function () {
        toggleBurgerMenu();
    });

    // ��������� ������� ��������� ������� ���� ��� ����������� ��������� ��� ������ ������ ����� 700px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 700) {
            navWrapper.classList.remove('active');
        }
    });

    // ��������� ������� ����� �� ������ ������-���� ��� �� ��������
    navWrapper.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            toggleBurgerMenu();
        }
    });

    // ������� ����� �������� ��� �������� ��������
    window.addEventListener('load', function () {
        if (window.innerWidth > 700) {
            navWrapper.classList.remove('active');
        }
    });
});