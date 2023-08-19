//====>HOME

//--->Menù
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('.menu li'); // Ottieni tutti gli elementi della lista
    const menuIconOpen = document.getElementById('open-menu');
    const menuIconClose = document.getElementById('close-menu');

    // Mostra o nascondi il menu quando l'icona dell'hamburger viene cliccata
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuIconOpen.style.display = menu.classList.contains('active') ? 'none' : 'block';
        menuIconClose.style.display = menu.classList.contains('active') ? 'block' : 'none';
    });

    // Chiudi il menu quando un elemento del menu viene cliccato
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            menuIconOpen.style.display = 'block';
            menuIconClose.style.display = 'none';
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
