<<<<<<< HEAD
$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('.menu').slideToggle("slow"); // Usa slideToggle per aprire/chiudere il menu
    });

    // Chiudi il menu quando si fa clic su un elemento del menu
    $('.menu li').click(function() {
        $('.menu').slideUp("slow");
    });
});

=======
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

    $('.menu li a').click(function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito del collegamento
        const targetId = $(this).attr('href'); // Ottieni l'ID del target dall'attributo href
    
        // Chiudi il menu se è aperto
        if (menu.hasClass('active')) {
            menu.slideUp(500, function() {
                menu.removeClass('active');
                menuIconOpen.show();
                menuIconClose.hide();
                
                // Ora, scorrere verso l'elemento di destinazione
                const targetOffset = $(targetId).offset().top;
                $('html, body').animate({ scrollTop: targetOffset }, 'slow');
            });
        } else {
            // Se il menu è già chiuso, scorrere direttamente verso l'elemento di destinazione
            const targetOffset = $(targetId).offset().top;
            $('html, body').animate({ scrollTop: targetOffset }, 'slow');
        }
    });
});





//_________________



document.addEventListener("DOMContentLoaded", function () {
    const changeableElement = document.querySelector('.changeable');
    const phrases = [
        'a Front End Developer',
        'a Web Designer',
        'an App Developer '
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



//====>ABOUT PROJECT CONTACT ANIMATE
// Aggiungi questo script JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const aboutTitle = document.querySelector('.aboutTitle');
    const projAnimat = document.querySelector('.proj-animat');
    const titCont = document.querySelector('.tit-cont');

    const observerOptions = {
        root: null,
        threshold: 0.3
    };

    const animateElement = (element, animationClass) => {
        element.classList.add('animate__animated', animationClass);
        element.style.visibility = 'visible';
    };
    

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === aboutTitle) {
                    animateElement(aboutTitle, 'animate__flip');
                } else if (entry.target === projAnimat) {
                    animateElement(projAnimat, 'animate__flip');
                } else if (entry.target === titCont) {
                    animateElement(titCont, 'animate__flip');
                    
                }else {
                    
                    entry.target.classList.remove('animate__animated', 'animate__flip');
                    entry.target.style.visibility = 'hidden';
                }
    
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(aboutTitle);
    observer.observe(projAnimat);
    observer.observe(titCont);
});


//====>HARD SKILL
document.addEventListener("DOMContentLoaded", function () {
    const hardSkill = document.querySelector('.hard-skill');

    const observerOptions = {
        root: null,
        threshold: 0.3
    };

    const animateElement = (element, animationClass) => {
        element.classList.add('animate__animated', animationClass);
        element.style.visibility = 'visible';
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(hardSkill, 'animate__zoomInDown');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(hardSkill);
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
>>>>>>> mainb
