//barra lateral de menu
document.getElementById("atvmenu").addEventListener("click", function() {
    const sidebar = document.getElementById("barraltr");
    sidebar.classList.toggle("atv");
});

//transicao na pagina
const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Esconde todas as páginas
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Mostra a página correspondente ao link clicado
        const targetPage = document.getElementById(this.dataset.target);
        targetPage.classList.add('active');
    });
});
