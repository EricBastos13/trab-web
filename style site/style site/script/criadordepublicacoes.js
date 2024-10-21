// Função para criar os blocos de publicações
function createPublicationBlock(publication) {
    const block = document.createElement('div');
    block.classList.add('publication-block');

    const img = document.createElement('img');
    img.src = publication.image;
    img.alt = `Imagem de ${publication.title}`;
    img.classList.add('publication-image');

    const info = document.createElement('div');
    info.classList.add('publication-info');

    const title = document.createElement('h3');
    title.textContent = publication.title;

    const description = document.createElement('p');
    description.textContent = publication.description;

    info.appendChild(title);
    info.appendChild(description);
    block.appendChild(img);
    block.appendChild(info);

    return block;
}

// Dados de exemplo (podem ser substituídos por dados de API no futuro)
const publications = [
    {
        title: "Publicação 1",
        description: "Descrição da publicação 1.",
        image: "style/imagens/ph.jpg"
    },
    {
        title: "Publicação 2",
        description: "Descrição da publicação 2.",
        image: "style/imagens/ph.jpg"
    },
    {
        title: "Publicação 3",
        description: "Descrição da publicação 3.",
        image: "style/imagens/ph.jpg"
    }
];
