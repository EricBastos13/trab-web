const toggleButton = document.getElementById('toggleButton');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

let showingSection1 = true;

toggleButton.addEventListener('click', function() {
    if (showingSection1) {
        section1.classList.remove('active'); // Esconde a seção 1
        section2.classList.add('active'); // Mostra a seção 2
        toggleButton.textContent = 'Mostrar Seção 1'; // Altera o texto do botão
    } else {
        section2.classList.remove('active'); // Esconde a seção 2
        section1.classList.add('active'); // Mostra a seção 1
        toggleButton.textContent = 'Mostrar Seção 2'; // Altera o texto do botão
    }
    showingSection1 = !showingSection1; // Alterna a seção atual
});
