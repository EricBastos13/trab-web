/*document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');

    // Função para adicionar publicações ao slider
    function loadPublications() {
        publications.forEach(publication => {
            const block = createPublicationBlock(publication);
            slider.appendChild(block);
        });
    }

    loadPublications();

    // Implementação do slider
    let currentSlide = 0;
    const totalSlides = publications.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Funções para navegar entre os slides
    window.nextSlide = function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    };

    window.prevSlide = function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    };
});
*/