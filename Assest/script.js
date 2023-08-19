//====>HOME

//--->Menù
$(document).ready(function() {
    const menuIcon = $('.menu-icon');
    const menu = $('#menu');
    const menuIconOpen = $('#open-menu');
    const menuIconClose = $('#close-menu');

    menuIcon.click(function() {
        if (menu.hasClass('active')) {
            menu.slideUp(500, function() {
                menu.removeClass('active');
                menuIconOpen.show();
                menuIconClose.hide();
            });
        } else {
            menu.slideDown(500, function() {
                menu.addClass('active');
                menuIconOpen.hide();
                menuIconClose.show();
            });
        }
    });

    // Chiudi il menu quando un elemento del menu viene cliccato
    $('.menu li a').click(function() {
        menu.slideUp('slow', function() {
            menu.removeClass('active');
            menuIconOpen.show();
            menuIconClose.hide();
        });
    });
});





//_________________



document.addEventListener("DOMContentLoaded", function () {
    const changeableElement = document.querySelector('.changeable');
    const phrases = [
        'a Front End Developer',
        'a Web Designer',
        'an Lifelong Learner'
    ];

    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            changeableElement.innerText = currentPhrase.substring(0, charIndex);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
        } else {
            changeableElement.innerText = currentPhrase.substring(0, charIndex);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                isDeleting = true;
            }
        }

        const typingSpeed = isDeleting ? 50 : 150;
        setTimeout(typeWriter, typingSpeed);
    }

    typeWriter();
});



//====>PROGETTI
document.addEventListener("DOMContentLoaded", function () {
    const cardsToAnimate = document.querySelectorAll('.animate__flipInX');

    const observerOptions = {
        root: null,
        threshold: 0.3
    };

    const animateCard = (card) => {
        card.classList.add('animate__animated', 'animate__zoomInDown');
        card.style.visibility = 'visible';
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCard(entry.target);
                observer.unobserve(entry.target); // Interrompi l'osservazione dopo l'animazione iniziale
            }
        });
    }, observerOptions);

    cardsToAnimate.forEach(card => {
        observer.observe(card);
    });

    const handleScroll = () => {
        cardsToAnimate.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                animateCard(card);
            }
        });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});
